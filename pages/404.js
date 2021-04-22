import Link from "next/link";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    console.log('Use effect ran...');
    setTimeout(() => {
      // router.go(-1)
      router.push('/');
    }, 3000)
  }, [])

  return (
    <>
      <Head>
        <title>Ninja List | 404</title>
        <meta name="keywords" content="ninjas"></meta>
      </Head>
    <div className="not-found">
      <h1>Ooops...</h1>
      <h2>That Page does not exist.</h2>
      <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
    </div>
    </>
   );
}
 
export default NotFound;