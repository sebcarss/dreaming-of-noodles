import Head from "next/head";
import Header from "./header"
import Footer from "./footer"

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
      <Header />
      <main className="row">
          <div className="col-md-3">
              Left Hand Nav
          </div>
          <div className="col-md-6">
            {children}
          </div>
          <div className="col-md-3">
              {/* Leaving empty to create space at the side */}
          </div>
      </main>
      <Footer />
    </div>
  );
}