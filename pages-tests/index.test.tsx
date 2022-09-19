import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("render homepage", () => {
    it("renders brand logo on preview page", () => {
        render(<Home title="test" preview={false} />)
        expect(screen.getByRole('image'))
    });
});