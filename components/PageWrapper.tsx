'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { userIsLoggedIn } from '@/utils/auth';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      if (!userIsLoggedIn()) {
        router.push('/login');
      }
    };

    // (router as any).events.on('routeChangeStart', handleRouteChange);

    // return () => {
    //     (router as any).events.off('routeChangeStart', handleRouteChange);
    // };
  }, [router]);

  return children;
};

export default PageWrapper;