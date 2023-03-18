import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import apolloClient from "../lib/graphql/client/apolloClient";
import "../styles/globals.css";
import AuthGuard from "../components/auth/AuthGuard";
import { SessionProvider } from "next-auth/react";
import { NextComponentType } from "next";
import React from "react";

export type CustomAppProps = AppProps & {
  Component: NextComponentType & {
    requireAuth?: boolean;
    layout?: React.ElementType;
  };
};

const App = ({ Component, pageProps }: CustomAppProps) => {
  const Layout = Component.layout || EmptyLayout;

  return (
    <SessionProvider session={pageProps.session}>
      <ApolloProvider client={apolloClient}>
        {Component.requireAuth ? (
          <AuthGuard>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AuthGuard>
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </ApolloProvider>
      <div id="modal-portal"></div>
    </SessionProvider>
  );
};

const EmptyLayout = ({ children }: { children: React.ElementType }) => (
  <>{children}</>
);

export default App;
