import React from 'react';
import { cleanup } from '@testing-library/react';

import { renderWithReduxAndContext } from '../../helpers';

import SearchBar from './index';
import HeaderContext from '../../contexts/HeaderContext/HeaderContext';

const mockFetch = () => {
  jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
    status: 200,
    ok: true,
    json: () => Promise.resolve(testData),
  }));
};

describe('1. Check if SearchBar render', () => {
  beforeAll(mockFetch);
  beforeEach(cleanup);

  it('If showSearchBar is false, SearchBar should not render', () => {
    const initialValue = {
      showSearchBar: false,
    };

    const { queryByRole } = renderWithReduxAndContext(<SearchBar path="foods" />, {
      initialValue,
      Context: HeaderContext,
    });
    const searchForm = queryByRole('textbox');

    expect(searchForm).toBeFalsy();
  });

  it('If showSearchBar is true, SearchBar should be render', () => {
    const initialValue = {
      showSearchBar: true,
    };

    const { queryByRole } = renderWithReduxAndContext(<SearchBar path="foods" />, {
      initialValue,
      Context: HeaderContext,
    });

    const searchForm = queryByRole('textbox');

    expect(searchForm).toBeInTheDocument();
  });
});
