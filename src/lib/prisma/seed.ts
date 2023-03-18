import {
  ExternalServiceAuthType,
  ExternalServiceType,
  PrismaClient,
} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.externalService.createMany({
    data: [
      {
        type: ExternalServiceType.INSTAPAPER,
        authType: ExternalServiceAuthType.USERNAME_AND_PASSWORD,
      },
      {
        type: ExternalServiceType.READWISE,
        authType: ExternalServiceAuthType.API_TOKEN,
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
