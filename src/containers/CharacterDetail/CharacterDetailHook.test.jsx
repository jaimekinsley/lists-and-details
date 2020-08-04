import { renderHook, act } from '@testing-library/react-hooks';
import { useCharacterDetail } from './CharacterDetailHook';

jest.mock('../../services/getCharacters.js', () => ({
  getCharacterById() {
    return Promise.resolve({
      '_id': '5da237699734fdcb7bef8f51',
      'name': 'Arnold Shortman',
      'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/f/f5/Arnold.png/revision/latest?cb=20181027162333'
    });
  }
}));

describe('useCharacterDetail hooks', () => {
  it('has character state', () => {
    return act(() => {
      const { result, waitFor } = renderHook(() => useCharacterDetail('3589'));
      return waitFor(() => {
        expect(result.current.character).not.toBeUndefined();
      });
    });
  });

  it('has loading state', () => {
    return act(() => {
      const { result, waitFor } = renderHook(() => useCharacterDetail('3589'));
      return waitFor(() => { expect(result.current.loading).not.toBeUndefined();
      });
    });
  });

  it('sets the character state on mount', () => {
    const { result, waitFor } = renderHook(() => useCharacterDetail('3589'));

    return waitFor(() => {
      expect(result.current.character).toEqual({
        '_id': '5da237699734fdcb7bef8f51',
        'name': 'Arnold Shortman',
        'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/f/f5/Arnold.png/revision/latest?cb=20181027162333'
      });
    });
  });

  it('sets loading to false after fetch is complete', () => {
    const { result, waitFor } = renderHook(() => useCharacterDetail('3589'));

    return waitFor(() => {
      expect(result.current.loading).toEqual(false);
    });
  });
});


