import { useState, useEffect } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function useFetch<T>(fetcher: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setStatus('loading');
    fetcher()
      .then(d => {
        if (!cancelled) {
          setData(d);
          setStatus('success');
        }
      })
      .catch(e => {
        if (!cancelled) {
          setError(e.message);
          setStatus('error');
        }
      });
    return () => { cancelled = true; };
  }, []);

  return { data, status, error };
}
