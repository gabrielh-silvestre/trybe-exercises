import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import data from './data';
import userEvent from '@testing-library/user-event';

describe('Teste da aplicação toda', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(data),
    });

    render(<App />);
  });
  it('01. Verify if existence of basic elements, input and button', async () => {
    const input = screen.getByRole('textbox', { name: /digimon/i });
    const btn = screen.getByRole('button', { name: /search digimon/i });

    expect(input).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });

  it('02. Verify if title exist', () => {
    const title = screen.getByRole('heading', {
      name: /faça uma pesquisa/i,
      level: 1,
    });

    expect(title).toBeInTheDocument();
  });

  it('03. Verify if input works', () => {
    const input = screen.getByRole('textbox', { name: /digimon/i });
    userEvent.type(input, 'Koromon');

    expect(input.value).toBe('Koromon');
  });

  it('04. Verify if the button fire a API request', async () => {
    const input = screen.getByRole('textbox', { name: /digimon/i });    
    const btn = screen.getByRole('button', { name: /search digimon/i });

    userEvent.type(input, 'Koromon');
    userEvent.click(btn);

    expect(global.fetch).toHaveBeenCalled();
  });

  it('05. Verify if the button fire a API request just when input is not empty', async () => {
    const btn = screen.getByRole('button', { name: /search digimon/i });
    userEvent.click(btn);

    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('06. Verify if fetch is correct', async () => {
    const input = screen.getByRole('textbox', { name: /digimon/i });    
    const btn = screen.getByRole('button', { name: /search digimon/i });

    userEvent.type(input, 'Koromon');
    userEvent.click(btn);

    const digimon = await (await global.fetch()).json();
    expect(global.fetch).toHaveBeenCalled();
    expect(digimon).toEqual(data);
  });
});
