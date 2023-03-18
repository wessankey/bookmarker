import { GetServerSidePropsContext } from "next";
import { unstable_getServerSession } from "next-auth";
import { CustomNextPage } from "../../types/CustomNextPage";
import { authOptions } from "./api/auth/[...nextauth]";

const Home: CustomNextPage = () => {
  return null;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    redirect: {
      destination: "/bookmarks",
      permanent: false,
    },
  };
}

export default Home;
