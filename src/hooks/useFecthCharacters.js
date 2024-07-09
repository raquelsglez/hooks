import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetchCharacters = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');

  useEffect(() => {
    const getData = async () => {      
      let response;
      try {
        response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error.message);
      }

    };
    getData();
  }, [url]);

  return {data, error};
};

export default useFetchCharacters;
