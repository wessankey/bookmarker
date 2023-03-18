import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const Error: NextPage = () => {
  const router = useRouter();
  const errorType = router.query.error;

  if (errorType === "Verification") {
    return (
      <div className="flex justify-center">
        <div className="mt-36 shadow-lg w-[30rem] p-10 rounded-md flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-wide mb-5">
            Verification Error
          </h2>

          <p className="text-center">
            The sign in link is no longer valid. It may have been used already
            or it may have expired
          </p>

          <div className="mt-10">
            <Link
              href="/login"
              className={`rounded-md bg-primary text-white
           py-2 px-2 w-40 hover:bg-primary-alt flex justify-center`}
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <div>Unknown Error</div>;
};

export default Error;
