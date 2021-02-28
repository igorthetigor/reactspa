import React, { ReactElement, useEffect, useState } from 'react';
import axios from 'axios';

const LoadApi = (): ReactElement => {
  const [characters, setCharacters] = useState<string>('');
  useEffect(() => {
    (async () => {
      const response = await axios.get<string>(
        'https://rickandmortyapi.com/api/character'
      );
      setCharacters(JSON.stringify(response.data));
    })();
  }, []);
  return <div>{characters}</div>;
};

export default LoadApi;
