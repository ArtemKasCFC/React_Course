import { useState, useEffect } from 'react';

const apiKey = '4655f590';

export function useMovies(query, callback) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(
    function () {
      callback?.();

      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setError(error => '');
          setIsLoading(true);
          const res = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`, { signal: controller.signal });
          if (!res.ok) throw new Error('Something went wrong with fetching movies');
          const data = await res.json();
          if (data.Response === 'False') throw new Error(data.Error);
          setMovies(movies => data.Search);
          setError(error => '');
        } catch (err) {
          if (err.name !== 'AbortError') setError(error => err.message);
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies(movies => []);
        setError(error => '');
        return;
      }

      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { movies, error, isLoading };
}
