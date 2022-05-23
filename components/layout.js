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
export default function Layout({ children, title, preview }) {
  return (
    <Container>
      <Head>
        {/* TODO Get a proper favicon made and swap this one */}
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Dreaming of Noodles recipes and food exploration" />
        <meta name="author" content="Seb Carss" />
        <meta name="keywords" content="Recipes, Recipe, Cooking, Baking, Noodles, Japan, Ramen" />
        <link 
          rel="preload"
          href="/fonts/Raleway/Raleway-Regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Row>
        <Navigation preview={preview} />
        <main className="mt-5">
          {children}
        </main>
      </Row>
      <Footer />
    </Container>
  );
}
