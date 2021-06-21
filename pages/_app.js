import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import Head from 'next/head'

/* 
 Next.js uses this component to initialise the pages. It can be overridden
 to do things like: 
 1. Persisting layout between page changes
 2. Keeping state when navigating pages
 3. Customer error handling using `componentDidCatch`
 4. Inject additional data into pages
 5. Add global CSS (as is done above)
*/

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
