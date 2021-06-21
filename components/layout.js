import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";

const title = "Recipes by Seb";

export default function Layout({ children, home }) {
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8" />
        <meta name="description" content="Seb Carss' personal recipe diary" />
        <meta name="author" content="Seb Carss" />
        <meta name="keywords" content="Recipes, Recipe, Cooking, Baking" />
      </Head>
      <header className="row">
        {home ? (
          <>
            <h1 className="col-12">{title}</h1>
          </>
        ) : (
          <>
            <h2 className="col-12">
              <Link href="/">
                <a>{title}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main className="row">
          <div className="col-3">
              Left Hand Nav
          </div>
          <div className="col-6">
            {children}
          </div>
          <div className="col-3">
              {/* Leaving empty to create space at the side */}
          </div>
      </main>
    </div>
  );
}