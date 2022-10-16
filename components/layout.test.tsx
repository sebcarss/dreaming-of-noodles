import React from 'react'
import { render, screen } from '@testing-library/react'
import Layout from './layout';
import Navigation from './navigation';
import Footer from './footer';

jest.mock("./navigation");
jest.mock("./footer");

describe('Layout', () => {

    const mockNavigation = Navigation as jest.MockedFunction<typeof Navigation>;
    const mockFooter = Footer as jest.MockedFunction<typeof Footer>;

    it('should render the child HTML', () => {
        render(<Layout title="Test Title" preview>Child HTML</Layout>);
        expect(mockNavigation).toHaveBeenCalledWith({"preview": true}, {});
        expect(screen.getByText("Child HTML")).not.toBeNull();
        expect(mockFooter).toHaveBeenCalled();
    });
})