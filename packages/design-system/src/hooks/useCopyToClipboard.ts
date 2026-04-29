import { useCallback, useRef, useState } from 'react';

type State = 'idle' | 'copied' | 'error';

export function useCopyToClipboard(resetMs = 1400) {
  const [state, setState] = useState<State>('idle');
  const timer = useRef<number | null>(null);

  const copy = useCallback(
    async (value: string) => {
      try {
        await navigator.clipboard.writeText(value);
        setState('copied');
      } catch {
        setState('error');
      }
      if (timer.current) window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setState('idle'), resetMs);
    },
    [resetMs],
  );

  return { state, copy };
}
