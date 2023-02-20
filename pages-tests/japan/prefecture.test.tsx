import Prefecture from "../../pages/japan/[prefecture]";
import renderer from "react-test-renderer";
import { LinkCardData } from "../../types/LinkCardData";

const regionData: LinkCardData = {
    frontmatter: {
        country: 'Japan',
        region: 'Hokkaido',
        gridLinkUrl: '/japan/hokkaido',
        gridLinkImage: '/japan-hokkaido.jpg'
    },
    content: "\nWelcome to Hokkaido!"
};

describe("Prefecture page", () => {
    it('should match the snapshot', () => {
        const tree = renderer.create(<Prefecture regionData={regionData} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});