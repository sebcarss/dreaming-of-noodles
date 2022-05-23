import React from 'react'
import { render, screen } from '@testing-library/react'
import Layout from './layout';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

const mockNavigation = jest.fn();
jest.mock("./navigation", () => ({ preview }) => {
    mockNavigation(preview);
    return <mock-navigation preview={preview} />;
});

const mockFooter = jest.fn();
jest.mock("./footer", () => () => {
    mockFooter();
    return <mock-footer />;
});

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe('Layout', () => {
    it('renders correctly', () => {
        render(<Layout title="Test Title" preview>Child HTML</Layout>, container);
        expect(mockNavigation).toHaveBeenCalledWith(true);
        expect(screen.getByText("Child HTML")).not.toBeNull();
        expect(mockFooter).toHaveBeenCalled();
    });
})