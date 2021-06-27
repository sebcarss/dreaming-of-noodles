import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import Navigation from "./navigation";
import PostsList from "./posts-list"

/**
 * 
 * @param {JSXObject} children Default children JSX to be rendered
 * @param {boolean} home Set to true on the homepage
 * @returns The main layout for all pages, including header, middle and footer
 */
export default function Layout({ children, home }) {
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="description" content="Seb Carss' personal recipe diary" />
        <meta name="author" content="Seb Carss" />
        <meta name="keywords" content="Recipes, Recipe, Cooking, Baking" />
      </Head>
      <Header home={home} />
      <main className="row">
        {/* TODO Should Navigation and PostsList exist in the same row? */}
        <Navigation />
        <PostsList children={children} />
      </main>
      <Footer />
    </div>
  );
}
