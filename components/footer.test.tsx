import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './footer';

describe('Footer', () => {
    it('Footer renders correctly', () => {
      render(<Footer />);
      const signOffText = screen.getByText('Recipes by Seb Carss');
      expect(signOffText).not.toBeNull();
    });
})