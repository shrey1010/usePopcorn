import { useState, useEffect } from "react";
const KEY = "2e70d946";

export function useMovies(query,tempMovieData,callback){
      const [movies, setMovies] = useState(tempMovieData);
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState("");
      useEffect(
        function () {
            // callback?.();
          const controller = new AbortController();

          async function fetchMovie() {
            try {
              setIsLoading(true);
              setError("");
              const res = await fetch(
                `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
                { signal: controller.signal }
              );
              if (!res.ok)
                throw new Error("Something went wrong with fetching movies");
              const data = await res.json();
              if (data.Response === false) throw new Error("Movie not found!");
              setMovies(data.Search);
              setError("");
            } catch (err) {
              if (err.name !== "AbortError") {
                setError(err.message);
              }
            } finally {
              setIsLoading(false);
            }
          }
          if (query.length < 3) {
            setMovies([]);
            setError("");
            return;
          }
        //   handleCloseMovie();
          fetchMovie();
          return function () {
            controller.abort();
          };
        },
        [query]
      );
      return {movies,isLoading,error}
}