import Link from "next/link";

// importing here fails - I think it's because it is generated on the browser and not on the server
// how can I generate the navigation server side efficiently?
// import { getAllTags, kebabCase, titleCase } from "../lib/tags";

export default function Navigation({ tagLinkData }) {
  const tagLinks = tagLinkData.map((tagData, index) => {
    const path = "/tags/" + tagData.slug;

    return (
      <li className="nav-item">
        <Link key={index} href={path}>
          <a className="nav-link">{tagData.title}</a>
        </Link>
      </li>
    );
  });

  return (
      <nav className="navbar navbar-expand navbar-light bg-light flex-column flex-md-row bd-navbar">
        <ul className="navbar-nav">{tagLinks}</ul>
      </nav>
    );
}
