import Link from "next/link";

export default function PostsLists({ allPostsData }) {
  const posts = allPostsData.map(({ id, date, title }, index) => (
    <li key={index} className="card bg-dark text-white mb-3 mt-3" style={{maxWidth: "540px"}}>
      <Link href={`/posts/${id}`} className="">
        <a>
          <div>
            <img
              src="https://cookingwithscarss.files.wordpress.com/2017/08/20170825_205153.jpg"
              className="card-img-top"
              alt="Temp..."
            />
          </div>
          <div className="text-center">
            <h5 className="card-title">{title}</h5>
            <p className="text-muted">{date}</p>
          </div>
        </a>
      </Link>
    </li>
  ));

  return (
    <div>
      {/* TODO Continue playing with the card columns to make them responsive */}
      <ul className="card-group">{posts}</ul> 
    </div>
  );
}
