import React, { useState, useContext } from 'react';
import useLogin from '../context/loginContext'; // Adjust the import path

function Login({ state, dispatch }) {
    const { logout } = useContext(useLogin);
    const { loginState } = useContext(useLogin);
    const [accNum, setAccNum] = useState('');
    const [pin, setPin] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (!accNum || !pin) {
            setError('Please fill in both Account Number and PIN fields.');
        } else {
            const user = state.find(user => user.acc_num == accNum && user.pin == pin);
            if (user) {
                // Perform successful login action
                loginState(accNum, pin);
                dispatch({
                    type: "LOGIN",
                    payload: { acc_num5: accNum, pin5: pin },
                });
                setError('Logged in successfully');
            } else {
                setError('Invalid account number or PIN.');
            }
        }
        // Clear the input fields when handling login
        setAccNum('');
        setPin('');
    };

    function handleLogout() {
        logout();
    }

    return (
        <div className='main'>
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Account Number"
                value={accNum}
                onChange={(e) => setAccNum(e.target.value)}
            />
            <input
                type="password"
                placeholder="PIN"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
            />
            {/* Display the error message */}
            {error && <h4 style={{ color: 'red' }}>{error}</h4>}
            <button onClick={handleLogin} style={{ marginRight: '20px' }}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Login;
