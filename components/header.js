import Link from "next/link";

export default function Header({ home }) {
  const title = "Odyssey of Food"
  return (
    <header>
      {home ? (
        <div className="text-center has-bg-img">
          <h1 className="display-4">{title}</h1>
          <h4 className="lead">Join my food exploration across the world</h4>
          <img class="img-fluid" src="https://media.very.co.uk/i/sd/210708-vy-home-d-01/sale.jpg?$960x445$" alt="my image" />
        </div>
      ) : (
        // h2 used here for SEO purposes - could we just show the navbar instead?
        <h2 className="display-4">
          <Link href="/">
            <a>{title}</a>
          </Link>
        </h2>
      )}
    </header>
  );
}
