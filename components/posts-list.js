import Link from "next/link";

export default function PostsLists({ allPostsData }) {
  const posts = allPostsData.map(({ id, date, title }, index) => (
    <li key={index}>
      <Link href={`/posts/${id}`}>
        <a>{title}</a>
      </Link>
      <br />
      <span>{date}</span>
    </li>
  ));

  return (
    <div className="col-md-6">
      <div>
        <ul>{posts}</ul>
      </div>
    </div>
  );
}
