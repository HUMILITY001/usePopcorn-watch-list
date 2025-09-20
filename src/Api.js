const KEY = "f84fc31d";
export async function getMovieDetails(setIsLoading, setMovie, selectedId) {
  setIsLoading(true);
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
  );
  const data = await res.json();
  setMovie(data);
  setIsLoading(false);
}
