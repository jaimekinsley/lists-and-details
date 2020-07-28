import { renderHook, act } from '@testing-library/react-hooks';
import { useHome } from './HomeHook';

jest.mock('../../services/getCharacters.js', () => ({
  getCharacters() {
    return Promise.resolve([
      {
        '_id': '5da237699734fdcb7bef8f56',
        'name': 'Miles Shortman',
        'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/2/2e/Miles.jpg/revision/latest/scale-to-width-down/243?cb=20101115140639'
      },
      {
        '_id': '5da237699734fdcb7bef8f54',
        'name': 'Mitzi',
        'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/d/d9/Mitzi.png/revision/latest/scale-to-width-down/310?cb=20171212070331'
      }
    ]);
  }
}));

describe('useHome hooks', () => {
  it('has characters state', () => {
    return act(() => {
      const { result, waitFor } = renderHook(() => useHome());
      return waitFor(() => {
        expect(result.current.characters).not.toBeUndefined();
      });
    });
  });

  it('has loading state', () => {
    return act(() => {
      const { result, waitFor } = renderHook(() => useHome());
      return waitFor(() => {
        expect(result.current.loading).not.toBeUndefined();
      });
    });
  });

  it('sets the characters state on mount', () => {
    const { result, waitFor } = renderHook(() => useHome());

    return waitFor(() => {
      expect(result.current.characters).toEqual([
        {
          '_id': '5da237699734fdcb7bef8f56',
          'name': 'Miles Shortman',
          'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/2/2e/Miles.jpg/revision/latest/scale-to-width-down/243?cb=20101115140639'
        },
        {
          '_id': '5da237699734fdcb7bef8f54',
          'name': 'Mitzi',
          'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/d/d9/Mitzi.png/revision/latest/scale-to-width-down/310?cb=20171212070331'
        }
      ]);
    });
  });

  it('sets loading to false after fetch is complete', () => {
    const { result, waitFor } = renderHook(() => useHome());

    return waitFor(() => {
      expect(result.current.loading).toEqual(false);
    });
  });
});
