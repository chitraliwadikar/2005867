import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [numbers, setNumbers] = useState([]);
  const apiUrl = 'http://localhost:8008/numbers';

  useEffect(() => {
    const fetchData = async () => {
      const params = new URLSearchParams();
      params.append('url', 'http://20.244.56.144/numbers/primes');
      params.append('url', 'http://20.244.56.144/numbers/fibo');
      params.append('url', 'http://20.244.56.144/numbers/odd');

      try {
        const response = await axios.get(apiUrl, { params });
        setNumbers(response.data.numbers);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Number Management Frontend</h1>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
