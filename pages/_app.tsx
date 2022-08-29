import type { AppProps } from 'next/app';
import ErrorBoundary from '@/components/ErrorBoundary';
import '@/styles/globals.css';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import CounterProvider from '@/contexts/Counter';
import Nav from '@/components/Nav';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: string) => {
      console.log(`Loading: ${url}`);
      NProgress.start();
    };

    const handleStop = () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return (
    <ErrorBoundary>
      <CounterProvider>
        <Nav />
        <Component {...pageProps} />
      </CounterProvider>
    </ErrorBoundary>
  );
}

export default MyApp;
