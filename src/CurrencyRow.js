import React from 'react'

export default function CurrencyRow(props) {
    //Retrieve const from app.js
    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    } = props
    return (
        <div>
            <input type ="number"
            className = "input"
            value={amount}
            onChange = {onChangeAmount} />
            <select value = {selectedCurrency} onChange = {onChangeCurrency}>
                {currencyOptions.map (option => (
                <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}
