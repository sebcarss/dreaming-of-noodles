import React from 'react';
import { render, screen } from '@testing-library/react';
import Navigation from './navigation';

describe("Navigation of temporary homepage", () => {
    const preview: boolean = false;

    it("renders the navbar without links", () => {
        render(<Navigation preview={preview} />);
        const links: HTMLAnchorElement[] = screen.getAllByRole("link");
        expect(links.length).toBe(1);
        expect(links[0].textContent).toBe("Dreaming of Noodles");
    });
});

describe("Navigation", () => {
    const preview: boolean = true;

    it("renders the homepage link in the navbar", () => {
        render(<Navigation preview={preview} />);
        const links: HTMLAnchorElement[] = screen.getAllByRole("link");
        expect(links[0].textContent).toBe("Dreaming of Noodles");
    });

    it("renders the Japan country link in the navbar", () => {
        render(<Navigation preview={preview} />);
        const links: HTMLAnchorElement[] = screen.getAllByRole("link");
        expect(links[1].textContent).toBe("Japan");
    });

    it("renders the Recipe Index link in the navbar", () => {
        render(<Navigation preview={preview} />);
        const links: HTMLAnchorElement[] = screen.getAllByRole("link");
        expect(links[2].textContent).toBe("Recipe Index");
    });
});