import React, { useState, useEffect } from 'react';

function CurrencyConverter() {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('EUR');
    const [toCurrency, setToCurrency] = useState('USD');
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (fromCurrency !== toCurrency) {
            setLoading(true);
            fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`)
                .then(response => response.json())
                .then(data => {
                    setConvertedAmount(data.rates[toCurrency]);
                    setLoading(false);
                });
        } else {
            setConvertedAmount(amount);
        }
    }, [amount, fromCurrency, toCurrency]);

    return (
        <div className="currency-converter">
            <h1>Currency Converter</h1>
            <div className="input-container">
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    disabled={loading}
                    className="amount-input"
                />
                <select
                    disabled={loading}
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className="currency-select"
                >
                    <option value="EUR">EUR</option>
                    <option value="CAD">CAD</option>
                    <option value="INR">INR</option>
                    <option value="USD">USD</option>
                </select>
                <span className="arrow">→</span>
                <select
                    disabled={loading}
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                    className="currency-select"
                >
                    <option value="EUR">EUR</option>
                    <option value="CAD">CAD</option>
                    <option value="INR">INR</option>
                    <option value="USD">USD</option>
                </select>
            </div>
            <div className="result">
                {loading ? <p>Loading.....</p> : <p>{convertedAmount} {toCurrency}</p>}
            </div>
        </div>
    );
}

export default CurrencyConverter;
