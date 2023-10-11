import { useState } from 'react';
import { CallGPT } from './api/gpt';

function App() {
  const handleClickAPICall = async () => {
    await CallGPT();
  };
  
  return(
    <>
      <button onClick={handleClickAPICall}>GPT API call</button>
    </>
  );
}

export default App;
