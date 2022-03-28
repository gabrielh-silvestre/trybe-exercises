import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithRouterAndRedux } from '../../helpers';

import Profile from '../../pages/Profile/index';

const { getComputedStyle } = window;

describe('1. Check if footer render', () => {
  it('', () => {
    window.getComputedStyle = (elt) => getComputedStyle(elt);
    renderWithRouterAndRedux(<Profile />);
    const text = screen.getByText(/Done Recipes/i);
    const doneButton = screen.getByRole('button', { name: 'Done Recipes' });

    expect(doneButton).toBeInTheDocument();
    userEvent.click(doneButton);

    expect(text).toBeInTheDocument();
  });
});
