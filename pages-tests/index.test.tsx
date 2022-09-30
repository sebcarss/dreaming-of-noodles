import renderer from 'react-test-renderer';
import Home from "../pages/index";


describe("render homepage", () => {
    it("matches the snapshot for the non-preview homepage", () => {
        const tree = renderer.create(<Home title="Test title" preview={false} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});