import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import FooterExchange from './FooterExchange';

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
    <>
    <body>
      <div className='flexContainer'>
        <h1>Exchange Rates</h1>
        <select className='custom-select'
          value = {base}
          onChange={(e) => {
            const value = e.target.value;
            setBase(value);
            getRates(value);
          }}>
            <option defaultValue>Exchange rates for 1 {base}</option>
              {ratesList.map((d) => (
                <option value={d.symbol} key={d.symbol}>
                  {d.symbol}
                </option>
              ))}
        </select>
      </div>
      <div className='container'>
          {ratesList.map((d) => (
            <div className='row'>
              <div className='col-12 col-sm-6 col-xl-4 mx-auto columns-rates'>
                <li className= 'list-group-item api-data' key={d.symbol}>
                  {d.symbol} - {d.rate}
                </li>
              </div>
            </div>
          ))}
      </div>
     <FooterExchange />
    </body>
    </>
  );
}

export default ExchangeRates;
