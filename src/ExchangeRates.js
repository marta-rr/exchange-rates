import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function ExchangeRates() {

  const[ratesList, setRatesList ] = useState ([]);
  const [base, setBase] = useState('USD');

  // const API_URL = `https://altexchangerateapi.herokuapp.com/latest?from=${base}`

  useEffect(() =>{
    getRates ('USD');
  }, []);

  const getRates = async(base)=>{
    const res = await axios.get(`https://altexchangerateapi.herokuapp.com/latest?base=${base}`);
    const { rates } = res.data;
    const ratesTemp = [];
    for (const [symbol, rate] of Object.entries(rates)) {
      ratesTemp.push({ symbol, rate});
    }
    setRatesList(ratesTemp);
  };


  return (
    <div className='ExchangeRates'>
      <select className='custom-select'
      value = {base}
      onChange={(e) => {
        const value = e.target.value;
        setBase(value);
        getRates(value);
        console.log(value)
      }}>
        <option defaultValue>{base}</option>
          {ratesList.map((d) => (
            <option value={d.symbol} key={d.symbol}>
              {d.symbol}
            </option>
          ))}
      </select>
      <ul className='list-group'>
        {ratesList.map((d) => (
        <li className= 'list-group-item' key={d.symbol}>
           {d.symbol} - {d.rate}
         </li>
        ))}
      </ul>
    </div>
  );
}

export default ExchangeRates;
