import React from 'react'
import { render, screen } from '@testing-library/react'
import Layout from './layout';

const mockNavigation = jest.fn();
// eslint-disable-next-line react/display-name
jest.mock("./navigation", () => ({ preview }) => {
    mockNavigation(preview);
    return <mock-navigation preview={preview} />;
});

const mockFooter = jest.fn();
// eslint-disable-next-line react/display-name
jest.mock("./footer", () => () => {
    mockFooter();
    return <mock-footer />;
});

describe('Layout', () => {
    it('renders correctly', () => {
        render(<Layout title="Test Title" preview>Child HTML</Layout>);
        expect(mockNavigation).toHaveBeenCalledWith(true);
        expect(screen.getByText("Child HTML")).not.toBeNull();
        expect(mockFooter).toHaveBeenCalled();
    });
})