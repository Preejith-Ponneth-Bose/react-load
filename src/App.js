import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

function App() {
  const [data, setData] = useState({ loaded: true, cartData: [] });

  useEffect(() => {
    async function fetchData() {
      const response = await Axios('http://api.dev02.nebula.run/gd-checkout-gateway/checkout/carts/841a9561-45bb-40f4-a333-c32f6aba64d5?fields=initialized');;
      setData({ loaded: false, cartData: response.data })
    }
    fetchData();
  }, []);

  console.log(data)

  return (
    <div className="App">
      {data?.loaded && <h1>Still loading...wait....</h1>}
      {!data?.loaded && <h1>{data?.cartData.data.cartId} loaded</h1>}
    </div>
  );
}

export default App;
