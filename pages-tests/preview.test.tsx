import Home from "../pages/preview";
import { PostData } from '../types/PostData';
import renderer from 'react-test-renderer';

// TODO: Move these to __mocks__
const title = "Dreaming of Noodles";
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

describe("Home component", () => {
  it("should match the snapshot", () => {
    const tree = renderer.create(<Home allPostsData={allPostsData} title="Test Title" preview={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
