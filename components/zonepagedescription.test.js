import React from "react";
import { render, screen } from "@testing-library/react";
import ZonePageDescription from "./zonepagedescription";

const image = "https://source.unsplash.com/random/300x200/";
const alt = "random image";
const title = "Japan";

describe('ZonePageDescription component', () => {
    it('should render an image', () => {
        render(<ZonePageDescription image={image} alt={alt} />);
        expect(screen.getByRole('img')).not.toBeNull();
    });

    it('should render a title', () => {
        render(<ZonePageDescription title={title} image={image} alt={alt} />);
        expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Japan');
    });
});