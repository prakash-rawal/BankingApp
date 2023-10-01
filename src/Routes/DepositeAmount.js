import React, { useState, useContext } from "react";
import useLogin from '../context/loginContext';

function DepositeAmount({ state, dispatch }) {
  const { loggedInUser } = useContext(useLogin);
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");


  const Deposit = () => {
    // if (!loggedInUser.loggedIn) {
    //   // Handle the case when the user is not logged in
    // setError("Loggin First.....")
    //   return;
    // }
    setError("");

    if (!amount) {
      setError('Please enter some amount..!');
    } else {
      const parsedAmount = parseInt(amount);

      if (!isNaN(parsedAmount) && parsedAmount > 0) {
        setError('Please enter a valid deposit amount.');
      }

      dispatch({
        type: "DEPOSIT",
        payload: { acc_num: loggedInUser.accNum, pin: loggedInUser.pin, balance: parsedAmount },
      });


      setAmount("");
      setError("Deposited Successfully")

    }
    // setError("Invalid deposit amount");


  };
  if (loggedInUser.loggedIn) {
    return (
      <>
        <div className="main">
          <h1>Deposit Amount</h1>
          {/* <label htmlFor="">Enter Account Number:</label>
      <input
        type="number"
        value={accNum}
        placeholder="Enter Acc Number"
        onChange={(e) => setAccNum(e.target.value)}
      />
      <br />
      <label>Enter Pin:</label>
      <input
        type="number"
        value={pin}
        placeholder="Enter Pin Number"
        onChange={(e) => setPin(e.target.value)}
      />
      <br /> */}
          <label htmlFor="">Enter Deposit Amount:</label>
          <input
            type="number"
            value={amount}
            placeholder="Enter Deposit Amount"
            onChange={(e) => setAmount(e.target.value)}
          />
          <br />
          <button onClick={Deposit}>Deposit Amount</button>
          <h3>{error}</h3>
          {/* {balance !== null && <h1>Balance: {balance}</h1>} */}
        </div>
      </>
    );
  } else {
    return <div className="main">Login First</div>
  }
}

export default DepositeAmount;
