import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const Details = () => {
  const { id } = useParams();
  const { error, loading, data } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=a5e55523d73f5ec7b1a6d2c462bfd0b6`
  );
  console.log(data);
  if (loading) {
    return <div>Loading.........</div>;
  }

  return <div>Details: {id}</div>;
};

export default Details;
