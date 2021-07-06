import Link from "next/link";

// importing here fails - I think it's because it is generated on the browser and not on the server
// how can I generate the navigation server side efficiently?
// import { getAllTags, kebabCase, titleCase } from "../lib/tags";

export default function Navigation({ tagLinkData }) {
  console.log("Navigation tags: ", tagLinkData)

  const tagLinks = tagLinkData.map((tagData, index) => {
    const path = "/tags/" + tagData.slug;

    return (
      <Link key={index} href={path}>
        <a>{tagData.title}</a>
      </Link>
    );
  });

  return <div className="col-md-3">{tagLinks}</div>;
}
