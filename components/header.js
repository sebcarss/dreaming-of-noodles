import Link from "next/link";

export default function Header({ home }) {
  const title = "Odyssey of Food"
  const subtitle = "Join my food exploration across the world"
  return (
    <header>
      {/* {home ? (
        <div className="text-center has-bg-img">
          <h1 className="display-4">{title}</h1>
          <h4 className="lead">{subtitle}</h4>
        </div>
      ) : (
        h2 used here for SEO purposes - could we just show the navbar instead?
        <h2 className="display-4">
          <Link href="/">
            <a>{title}</a>
          </Link>
        </h2>
      )} */}
    </header>
  );
}
