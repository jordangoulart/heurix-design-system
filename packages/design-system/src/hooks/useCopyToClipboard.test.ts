import { describe, it, expect, vi } from 'vitest';
import { renderHook, act, waitFor } from '@testing-library/react';
import { useCopyToClipboard } from './useCopyToClipboard';

describe('useCopyToClipboard', () => {
  it('initial state is idle', () => {
    const { result } = renderHook(() => useCopyToClipboard());
    expect(result.current.state).toBe('idle');
  });

  it('copy() writes to clipboard and flips to copied', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, { clipboard: { writeText } });
    const { result } = renderHook(() => useCopyToClipboard(50));
    await act(async () => {
      await result.current.copy('hello');
    });
    expect(writeText).toHaveBeenCalledWith('hello');
    expect(result.current.state).toBe('copied');
    await waitFor(() => expect(result.current.state).toBe('idle'), { timeout: 200 });
  });
});
