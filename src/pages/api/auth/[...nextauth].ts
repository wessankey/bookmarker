import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { readFileSync } from "fs";
import Handlebars from "handlebars";
import NextAuth, { NextAuthOptions } from "next-auth";
import EmailProvider, {
  SendVerificationRequestParams,
} from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import { createTransport } from "nodemailer";
import path from "path";
import { prisma } from "../../../lib/prisma";

const emailsDir = path.resolve(process.cwd(), "src/static");

const transporter = createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: parseInt(process.env.EMAIL_SERVER_PORT || "2525"),
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
  // secure: true,
});

async function sendVerificationRequest({
  identifier,
  url,
}: SendVerificationRequestParams) {
  const emailFile = readFileSync(path.join(emailsDir, "confirm-email.html"), {
    encoding: "utf8",
  });
  const emailTemplate = Handlebars.compile(emailFile);

  const { host } = new URL(url);

  const result = await transporter.sendMail({
    to: identifier,
    from: process.env.EMAIL_FROM,
    subject: `Sign in to ${host}`,
    html: emailTemplate({ url }),
  });

  const failed = result.rejected.concat(result.pending).filter(Boolean);

  if (failed.length) {
    throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`);
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    EmailProvider({
      maxAge: 10 * 60, // Email links will be valid for 10 minutes
      sendVerificationRequest,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/error",
  },
  session: {
    maxAge: 5 * 24 * 60 * 60, // 5 days
  },
  adapter: PrismaAdapter(prisma),
  // useSecureCookies: true, // Uncomment this to use secure cookies (prod only)
  callbacks: {
    async session(params) {
      if (params.session?.user) params.session.user.id = params.user.id;
      return params.session;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    jwt(params) {
      // this won't get called since we're using sessions
      return params.token;
    },
  },
};

export default NextAuth(authOptions);
