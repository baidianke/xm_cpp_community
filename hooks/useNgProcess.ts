import { useEffect } from 'react';
import NProgress from 'nprogress';
import { useRouter } from 'next/router';
import 'nprogress/nprogress.css';

const useNgProceess = () => {
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: string) => {
      console.log(url);
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
};

export default useNgProceess;
