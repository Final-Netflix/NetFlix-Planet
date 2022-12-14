import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Detail from './Detail';
import DetailForMovie from './DetailForMovie';

const DetailMain = () => {
  
  const location = useLocation();
  const tvId = location.state.tvId;
  const movieId = location.state.movieId;

  console.log(tvId, movieId);
  
  return (
    <div>
      {movieId === undefined && <Detail type='tv' id={ tvId } />}
      {tvId === undefined && <DetailForMovie type='movie' id={ movieId } />}
    </div>
  );
};

export default DetailMain;