import React, { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

//Get API
const API_URL = 'https://altexchangerateapi.herokuapp.com/latest'

function App() {

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
      })
    }
  }, [fromCurrency, toCurrency])

  //allow to change amounts
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
      <header>
        <div class= "nav-bar">
          <nav class="navbar navbar-expand-md navbar-dark bg-none">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">Currency converter</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Exchange rates</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
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
      <footer>
        <p>© 2022 Copyright Marta Ríos. All Rights Reserved. <span class= "footer-social-network">Github</span></p>
      </footer>
      </>
  );
}

export default App;
