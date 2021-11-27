import React from 'react';
import { render, screen } from '@testing-library/react';
import Digimon from './Digimon';
import App from './App';
import data from './data';
import userEvent from '@testing-library/user-event';

describe('Teste da tela do Digimon', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(data),
    });

    render(<App />);
  });

  it('01. Verify if digimon name is been render', () => {
    const digimonName = screen.getByRole('heading', { level: 2 });

    expect(digimonName).toBeInTheDocument();
  });

  it('02. Verify if digimon image is been render', async () => {
    const input = screen.getByRole('textbox', { name: /digimon/i });    
    const btn = screen.getByRole('button', { name: /search digimon/i });

    userEvent.type(input, 'Koromon');
    userEvent.click(btn);
  
    const digimonImage = await screen.findByRole('img');
    expect(digimonImage).toBeInTheDocument();
  });
});
