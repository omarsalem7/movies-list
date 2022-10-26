import useFetch from '../hooks/useFetch';
import MovieItem from './movieItem';

const MoviesList = () => {
  const { data, loading, error } = useFetch(
    'https://api.themoviedb.org/3/movie/popular?api_key=a5e55523d73f5ec7b1a6d2c462bfd0b6&language=en-US&page=1'
  );
  console.log(data);
  if (loading) {
    return <div>Loading.........</div>;
  }

  return (
    <div className="list">
      {data?.results.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;
