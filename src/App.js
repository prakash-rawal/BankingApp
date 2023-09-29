import React,{useReducer} from 'react';

import './index.css';

import ShowingCardsApi from './FetchApi/ShowingCardsApi';

function App() {

  return (
    <>
      <ShowingCardsApi />
    </>
  );
}

export default App;
