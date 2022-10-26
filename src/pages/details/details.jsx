import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import './details.scss';

const Details = () => {
  const { id } = useParams();
  const { error, loading, data } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=a5e55523d73f5ec7b1a6d2c462bfd0b6`
  );

  if (loading) {
    return <div className="center">Loading.........</div>;
  }
  if (error) {
    return <div className="error center">{error}</div>;
  }

  return (
    <div className="details">
      <div className="overview">
        <div className="img_cont">
          <img src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} />
        </div>
        <div>
          <ul>
            <li>
              <h2>{data?.original_title}</h2>
            </li>
            <li>Rate: {data?.vote_average} / 10 ⭐ </li>
            <li>Language: {data?.original_language} </li>
            <li>Adult: {data?.adult ? 'Yes' : 'No'} </li>
            <li>Time: {data?.runtime} </li>
            <li>Production Country: {data?.production_countries[0].name} </li>
            <li>Popularity: {data?.popularity} </li>
          </ul>
        </div>
      </div>
      <h3>Story</h3>
      <p>{data?.overview}</p>
    </div>
  );
};

export default Details;
