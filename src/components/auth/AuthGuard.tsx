import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { Spinner } from "../common/Spinner";

const AuthGuard = ({ children }: { children: React.ReactNode }): any => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      if (router.pathname !== "/login") {
        router.push("/login");
      }
    }
  }, [router, status]);

  if (status === "loading") {
    return <Spinner />;
  }

  if (status === "authenticated") {
    return children;
  }
};

export default AuthGuard;
