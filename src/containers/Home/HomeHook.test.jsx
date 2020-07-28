import { renderHook } from '@testing-library/react-hooks';
import { useHome } from './HomeHook';

describe('useHome hooks', () => {
  it('has characters state', () => {
    const { result } = renderHook(() => useHome());
    expect(result.current.characters).not.toBeUndefined();
  });

  it('has loading state', () => {
    const { result } = renderHook(() => useHome());
    expect(result.current.loading).not.toBeUndefined();
  });
});
