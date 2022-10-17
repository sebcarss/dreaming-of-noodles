import React from 'react';
import { render, screen } from '@testing-library/react';
import Emoji from './emoji';

describe('Render Emoji component', () => {
    it('renders emoji symbol', () => {
        render(<Emoji symbol="🍕" />);

        const emoji = screen.getByRole('img').textContent;
        expect(emoji).toBe("🍕");
    });

    it('renders aria label when argument passed', () => {
        render(<Emoji symbol="🍕" label="pizza" />);

        const emoji = screen.getByTestId('emoji').getAttribute('aria-label');
        expect(emoji).toBe("pizza");
    });
})