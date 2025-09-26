import fs from "fs";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

interface PostData {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  image: string;
  published: boolean;
}

const postsDirectory = path.join(process.cwd(), "posts");

/**
 * This function is used to analyse all the front matter in the `/posts/` folder and
 * returns an array of objects that are sorted by date. An example object is:
 *
 * {
 *   title: "Hello World 2",
 *   id: "2019-01-02-hello-world-2",
 *   date: "2019-01-02",
 *   tags: ["hello", "world"],
 *   published: true,
 *   excerpt: 'Hello excerpt',
 * }
 *
 * @returns {Array}
 */
export async function getSortedPostsFrontMatter(): Promise<PostData[]> {
  const fileNames = await fs.promises.readdir(postsDirectory);

  const allPostsDataPromises = fileNames.map(async (fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = await fs.promises.readFile(fullPath, "utf8");
    const { data } = matter(fileContents) as GrayMatterFile<string>;

    const imagePath = data.image;

    return {
      id,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      tags: data.tags,
      image: imagePath,
      published: data.published,
    };
  });

  const allPostsData = await Promise.all(allPostsDataPromises);

  return allPostsData
    .filter((post) => post.published === true && post.title !== undefined)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}


/**
 * This function analyses the filenames of the `/posts/` folder, remove the `.md` extension 
 * and returns an array of objects. An example object is:
 * 
 * {
 *   params: {
 *     id: "2019-01-01-hello-world-1",
 *   },
 * }
 *
 * @returns {Array}
 */
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

/**
 * This function takes in a post id and returns the front matter and the content of the post, e.g.
 * 
 * {
 *   contentHtml: "<p>Hello World 1</p>\n",
 *   date: "2019-01-01",
 *   excerpt: "Hello excerpt",
 *   id: "2019-01-01-hello-world-1",
 *   published: true,
 *   tags: ["hello", "world"],
 *   title: "Hello World 1",
 * }
 */
export async function getPostMatterAndContent(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents) as GrayMatterFile<string>;

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}