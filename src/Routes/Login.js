// Login.js
import React, { useState,useContext } from 'react';
import useLogin  from '../context/loginContext'; // Adjust the import path

function Login( {state, dispatch}) {
    const {logout }= useContext(useLogin);
  const { loginState } = useContext(useLogin);
  const [accNum, setAccNum] = useState('');
  const [pin, setPin] = useState('');
  const [ error, setError ] =useState('');

  const handleLogin = () => {
    const user = state.find(user => user.acc_num == accNum && user.pin == pin);
    // loginState(accNum, pin);
    if (user) {
        // Perform successful login action

        loginState(accNum, pin);
        dispatch({
            type: "LOGIN",
            payload: { acc_num5: accNum, pin5: pin },
        })

        setError('Logged in successfully');
    } else {
        setError('Invalid account number or PIN');
    }
    setError("");
    setAccNum("")
    setPin("");
  };

  function handleLogout(){
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
      <h4>{error}</h4>
      <button onClick={handleLogin}>Login</button>
      
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Login;
