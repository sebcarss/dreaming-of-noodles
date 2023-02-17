import Head from "next/head";
import Footer from "./footer";
import Navigation from "./navigation";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

type LayoutProps = {
  children: React.ReactNode;
  title: string;
  preview?: boolean;
}

/**
 *
 * @param {JSXObject} children Default children JSX to be rendered
 * @returns The main layout for all pages
 */
export default function Layout({ children, title, preview }: LayoutProps) {
  return (
    <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
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
