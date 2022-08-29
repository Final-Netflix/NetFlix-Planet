import React from 'react';
import { useParams } from 'react-router-dom';
import SearchActor from './SearchActor';
import SearchGenre from './SearchGenre';
import SearchKeyword from './SearchKeyword';
import Video from './Video';

const Linked = ({type, value}) => {
  const {detail} = useParams();

  return (
    <div>
      {detail === 'searchActor' && <SearchActor />}
      {detail === 'searchGenre' && <SearchGenre />}
      {detail === 'searchKeyword' && <SearchKeyword />}
      {detail === 'video' && <Video type={type} value={value}/>}
    </div>
  );
};

export default Linked;