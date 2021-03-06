import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';

import { client } from '../graphql/apollo-client';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default MyApp;
