import ErrorBoundary from '@/components/ErrorBoundary';
import useNgProceess from '@/hooks/useNgProcess';
import UserProvider from '@/contexts/UserProvider';
import Layout from '@/components/Layout';
import '@/styles/globals.less';
// import 'antd/lib/message/style/css'

function MyApp({ Component, pageProps }: AppPropsWithCustomConfig) {
  console.log('app needSign----', Component.needSign);

  useNgProceess();

  return (
    <ErrorBoundary>
      <UserProvider needSign={!!Component.needSign}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </ErrorBoundary>
  );
}

export default MyApp;
