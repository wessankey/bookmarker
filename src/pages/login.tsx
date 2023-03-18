import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getProviders, signIn } from "next-auth/react";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import { ButtonSpinner } from "../components/common/ButtonSpinner";

const Login: NextPage = ({ providers }: any) => {
  const [email, setEmail] = useState("");
  const [verificationSent, setVerificationSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  /**
   * This is required due a React hydration error. Specifically, the input element
   * causes the following error:
   * - "Expected server HTML to contain a matching <input> in <div>."
   *
   * Source: https://github.com/vercel/next.js/discussions/17443#discussioncomment-637879
   */
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleEmailSignIn = async () => {
    setLoading(true);
    let callbackUrl = "";

    if (typeof router.query.from === "string") {
      callbackUrl = router.query.from;
    }

    const res = await signIn("email", { email, callbackUrl, redirect: false });
    setLoading(false);

    if (res && res.error) {
      console.error("could not send login link", res.error);
    }

    if (res && res.ok) {
      setVerificationSent(true);
    }
  };

  const handleGoogleSignIn = async () => {
    let callbackUrl = "";

    if (typeof router.query.from === "string") {
      callbackUrl = router.query.from;
    }

    const res = await signIn(providers.google.id, {
      callbackUrl: "http://localhost:3000/bookmarks",
    });

    if (res && res.error) {
      console.error("error authenticating with Google", res.error);
    }
  };

  return mounted ? (
    <div className="flex justify-center">
      <div className="mt-36 shadow-lg w-[30rem] p-10 rounded-md">
        <h2 className="text-3xl font-bold tracking-wide mb-5">Login</h2>

        <div className="form-control w-full mb-3">
          <label className="label pb-1" htmlFor="title">
            Email
          </label>
          <input
            id="title"
            type="text"
            placeholder="Enter your email"
            className="input input-bordered w-full input-md bg-[#f9fafb]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mt-3">
          <button
            className={`rounded-md bg-primary text-white
             py-2 px-2 w-full hover:bg-primary-alt flex justify-center`}
            onClick={handleEmailSignIn}
          >
            {loading && <ButtonSpinner />}
            Sign in with Email
          </button>
        </div>

        {verificationSent && (
          <div className="text-center mt-3">
            A magic link has been emailed to you
          </div>
        )}

        <div className="w-full h-3 mt-2 mb-4 border-b border-b-grey-medium" />

        <div className="mt-3 ">
          <button
            className="rounded-md border-2 border-grey-light py-2 px-2 w-full 
            hover:bg-gray-100 flex justify-center items-center"
            onClick={handleGoogleSignIn}
          >
            <Image src="/google.svg" alt="Google logo" width={22} height={22} />

            <div className="ml-3">Sign in with Google</div>
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export async function getServerSideProps(context: any) {
  const providers = await getProviders();

  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (session) {
    return {
      redirect: {
        destination: "/bookmarks",
        permanent: false,
      },
    };
  }

  return {
    props: { providers },
  };
}

export default Login;
