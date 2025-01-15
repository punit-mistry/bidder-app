// 'use client'
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { usePathname } from 'next/navigation';
// import { userIsLoggedIn } from '@/utils/auth';
// import PageLoading from '@/components/PageLoading'; // Import the Loading component

// const PageWrapper = ({ children }: { children: React.ReactNode }) => {
//   const router = useRouter();
//   const pathname = usePathname(); // Get the current pathname
//   const [loading, setLoading] = useState(false); // State to manage loading

//   useEffect(() => {
//     const checkLoginStatus = () => {
//       if (!userIsLoggedIn() && pathname !== '/login') {
//         router.push('/login');
//         setLoading(false); // Reset loading state on unmount
//       }
//     };
//     setLoading(false); // Reset loading state on unmount

//     checkLoginStatus(); // Call the function on mount and when pathname changes
//   }, [pathname, router]);
//   const handleStart = () => {
//     setLoading(true); // Set loading to true when route change starts
//   };
//   const handleComplete = () => {
//     setLoading(false); // Set loading to false when route change completes
//   };
// router.events.on('routeChangeStart', handleStart);
// router.events.on('routeChangeComplete', handleComplete);
//   // useEffect(() => {
//   //   // Check if the user is logged in when the component mounts
//   //   handleStart(); // Simulate loading when the component mounts

//   //   // Cleanup function to reset loading state
//   //   return () => {
//   //     handleComplete(); // Reset loading state on unmount
//   //   };
//   // }, [pathname]);

//   if (loading) {
//     return <PageLoading />; // Show loading component while loading
//   }

//   return <>{children}</>; // Render children when not loading
// };

// export default PageWrapper;

'use client'
import React from 'react'


 const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>{children}</div>
  )
}
 export default PageWrapper
