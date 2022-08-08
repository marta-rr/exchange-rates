import React, { useEffect, useState } from 'react';
import CurrencyRow from './CurrencyRow';
import FooterConverter from './FooterConverter';
import Chart from 'chart.js';


//Get API
const API_URL = 'https://altexchangerateapi.herokuapp.com/latest';
let myChart = undefined;

function App() {

  const getHistoricalRates = (base, quote) => {
    console.log('I am being called')
    const endDate = new Date().toISOString().split('T')[0];
    const startDate = new Date((new Date).getTime() - (30 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0];
    fetch(`https://altexchangerateapi.herokuapp.com/${startDate}..${endDate}?from=${base}&to=${quote}`)
      .then((response) => response.json())
      .then(data => {
        if (data.error) {
          throw new Error(data.error);
        }
        const chartLabels = Object.keys(data.rates);
        const chartData = Object.values(data.rates).map(rate => rate[quote]);
        const chartLabel = `${base}/${quote}`;
        buildChart(chartLabels, chartData, chartLabel);
      })
      .catch(error => console.error(error.message));
  }

  const buildChart = (labels, data, label) => {

  if (typeof myChart !== "undefined") {
    myChart.destroy();
  }

  myChart  = new Chart(document.getElementById('myChart').getContext('2d'), {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: label,
            data,
            fill: true,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          }
        ]
      },
      options: {
        responsive: true,
      }
    })
  }

  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState(1)
  const [amount, setAmount] =useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

  //Calculate rates based on which box (upper or lower) is being modified
  let toAmount, fromAmount;
  if(amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else{
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  //Retrieve data from api
  useEffect(() => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      const firstCurrency = Object.keys(data.rates)[0]
      setCurrencyOptions([data.base, ...Object.keys(data.rates)])
      setFromCurrency(data.base)
      setToCurrency(firstCurrency)
      setExchangeRate(data.rates[firstCurrency])
    })
  }, [])

  //Be able to change currency from the list and get rate
  useEffect(() => {
    if (fromCurrency !== undefined && toCurrency !== undefined){
      fetch(`${API_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
      .then(res => res.json())
      .then(data => {
        setExchangeRate(data.rates[toCurrency])
        getHistoricalRates(fromCurrency,toCurrency)
      })
    }
  }, [fromCurrency, toCurrency])

  //Allow to change amounts
  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value)
    //Set to false as we are changing to amount and not from amount (to know if we are changing the upper or lower box to make conversion)
    setAmountInFromCurrency(false)
  }

  //Display on DOM
  return (
    <>
      <div className='container-fluid'>
        <div id= "currency-converter">
          <h1>Currency converter</h1>
            <CurrencyRow currencyOptions = {currencyOptions}
              selectedCurrency = {fromCurrency}
              onChangeCurrency = {e => setFromCurrency(e.target.value)}
              onChangeAmount = {handleFromAmountChange}
              amount = {fromAmount}
          />
          <div className = "equals">=</div>
            <CurrencyRow currencyOptions = {currencyOptions}
              selectedCurrency = {toCurrency}
              onChangeCurrency = {e => setToCurrency(e.target.value)}
              onChangeAmount = {handleToAmountChange}
              amount = {toAmount}
          />
        </div>
        <canvas id="myChart"></canvas>
      </div>
      <FooterConverter />
    </>
  );
}

export default App;
