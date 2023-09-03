'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

// export const metadata = {
//   title: 'Posts',
// };

export default function RootLayout({ children }) {
  const role = 'guest';
  const router = useRouter();

  // useEffect(() => {
  //   if (role === 'guest') {
  //     router.replace('/');
  //   }
  // }, []);

  // if (role === 'guest') { // don't use this
  //   router.replace('/');
  // }

  return (
    <>
      <h1>Posts layout</h1>
      {children}
    </>
  );
}
