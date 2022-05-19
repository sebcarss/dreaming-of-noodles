import React from 'react';
import { render, screen } from '@testing-library/react';
import Emoji from './emoji';

describe('Render Emoji component', () => {
    it('Emoji renders correctly', () => {
        render(<Emoji symbol="🍕" label="pizza" />);

        const emoji = screen.getByRole('img').textContent;
        expect(emoji).toBe("🍕");
    });

    it('Emoji aria label display "pizza"', () => {
        render(<Emoji symbol="🍕" label="pizza" />);

        const ariaLabel = screen.getByLabelText('pizza');
        expect(ariaLabel).not.toBeNull();
    })
})