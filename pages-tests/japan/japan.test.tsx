import Japan from "../../pages/japan";
import renderer from 'react-test-renderer';
import { LinkCardData } from "../../types/LinkCardData";
import { PostData } from "../../types/PostData";

const linkData: LinkCardData[] = [
  {
    frontmatter: {
      country: "Japan",
      region: "Hokkaido",
      gridLinkImage: "japan-hokkaido.jpg",
      gridLinkUrl: "/japan/hokkaido",
    },
    content: "\nWelcome to Hokkaido!"
  },
  {
    frontmatter: {
      country: "Japan",
      region: "Aomori",
      gridLinkImage: "japan-aomori.jpg",
      gridLinkUrl: "/japan/aomori",
    },
    content: "\nWelcome to Aomori!"
  },
  {
    frontmatter: {
      country: "Japan",
      region: "Iwate",
      gridLinkImage: "japan-iwate.jpg",
      gridLinkUrl: "/japan/iwate",
    },
    content: "\nWelcome to Iwate!"
  },
  {
    frontmatter: {
      country: "Japan",
      region: "Miyagi",
      gridLinkImage: "japan-miyagi.jpg",
      gridLinkUrl: "/japan/miyagi",
    },
    content: "\nWelcome to Myagi"
  },
];

const allPostsData: PostData[] = [
  {
    title: "Hello World 2",
    id: "2019-01-02-hello-world-2",
    date: "2019-01-02",
    tags: ["hello", "world"],
    published: true,
    excerpt: "Hello excerpt",
    image: "https://source.unsplash.com/random/300x200",
  },
  {
    title: "Hello World 1",
    id: "2019-01-01-hello-world-1",
    date: "2019-01-01",
    tags: ["hello", "jam"],
    published: true,
    excerpt: "Hello 2 excerpt",
    image: "https://source.unsplash.com/random/300x200",
  },
];

describe("Japan page", () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<Japan posts={allPostsData} regionLinkData={linkData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
