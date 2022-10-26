import MoviesList from '../../components/moviesList';
import './home.scss';

function Home() {
  return (
    <div className="movies">
      <h1 className="title">Welcome to movie list</h1>
      <MoviesList />
    </div>
  );
}

export default Home;
