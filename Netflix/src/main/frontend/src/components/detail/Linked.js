import React from 'react';
import { useParams } from 'react-router-dom';
import SearchActor from './SearchActor';
import SearchGenre from './SearchGenre';
import Video from './Video';

const Linked = () => {
  const {detail} = useParams();

  return (
    <div>
      {detail === 'searchActor' && <SearchActor />}
      {detail === 'searchGenre' && <SearchGenre />}
      {detail === 'video' && <Video />}
    </div>
  );
};

export default Linked;