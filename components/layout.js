import Head from "next/head";
import Footer from "./footer";
import Navigation from "./navigation";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

/**
 *
 * @param {JSXObject} children Default children JSX to be rendered
 * @param {boolean} home Set to true on the homepage
 * @returns The main layout for all pages
 */
export default function Layout({ children, title }) {
  return (
    <Container>
      <Head>
        {/* TODO Get a proper favicon made and swap this one */}
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Seb Carss' personal recipe diary" />
        <meta name="author" content="Seb Carss" />
        <meta name="keywords" content="Recipes, Recipe, Cooking, Baking" />
        <link 
          rel="preload"
          href="/fonts/Raleway/Raleway-Regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Row>
        <Navigation/>
        <main className="mt-5">
          {children}
        </main>
      </Row>
      <Footer />
    </Container>
  );
}
