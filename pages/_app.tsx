import React from 'react';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout/Layout';
import { ApolloProvider } from '@apollo/client';
import client from '@/lib/apollo';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
