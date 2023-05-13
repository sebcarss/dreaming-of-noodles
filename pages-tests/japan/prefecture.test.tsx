import Prefecture from "../../pages/japan/[prefecture]";
import renderer from "react-test-renderer";
import { LinkCardData } from "../../types/LinkCardData";
import { PostData } from '../../types/PostData';

const regionData: LinkCardData = {
    frontmatter: {
        country: 'Japan',
        region: 'Hokkaido',
        gridLinkUrl: '/japan/hokkaido',
        gridLinkImage: '/japan-hokkaido.jpg'
    },
    content: "\nWelcome to Hokkaido!"
};

const posts: PostData[] = [
    {
        title: "Hello World 2",
        id: "2019-01-02-hello-world-2",
        date: "2019-01-02",
        tags: ["hello", "world"],
        published: true,
        excerpt: 'Hello excerpt',
        image: "https://source.unsplash.com/random/300x200",
    }
];

describe("Prefecture page", () => {
    it('should match the snapshot', () => {
        const tree = renderer.create(<Prefecture regionData={regionData} posts={posts} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});