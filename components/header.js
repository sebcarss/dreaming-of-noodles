import Link from "next/link";

export default function Header({ children, home }) {
  const title = "Recipes by Seb";

  return (
    <div>
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
    </div>
  );
}
