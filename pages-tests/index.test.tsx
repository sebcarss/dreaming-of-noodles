import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("render temporary homepage", () => {
    it('renders the navbar', () => {
        render(<Home title="test" preview={false} />);
        console.log(screen.getAllByRole('link'));
    });
});