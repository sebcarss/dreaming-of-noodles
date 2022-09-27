import React from 'react';
import { render, screen } from '@testing-library/react';
import Navigation from './navigation';

describe("Navigation", () => {
    it("renders the preview navbar", () => {
        render(<Navigation preview />);
        expect(screen.getByText("Dreaming of Noodles")).not.toBeNull();
        const links = screen.getAllByRole("link");
        expect(links.length).toBe(1);
        expect(links[0].textContent).toBe("Dreaming of Noodles");
    });

    it("renders the full navbar", () => {
        render(<Navigation />);
        expect(screen.getByText("Dreaming of Noodles")).not.toBeNull();

        const links = screen.getAllByRole("link");
        expect(links.length).toBe(3);
        expect(links[0].textContent).toBe("Dreaming of Noodles");
        expect(links[1].textContent).toBe("Japan");
        expect(links[2].textContent).toBe("Recipe Index");
    });
});