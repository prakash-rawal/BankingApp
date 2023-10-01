import React, { useContext, useState } from "react";
import useLogin from '../context/loginContext';

function ShowBalance({ state, dispatch }) {
  const {loggedInUser} = useContext(useLogin);
  const [detail, setDetails] = useState({ balance: 0, loan: 0 }); // Initialize as an object
  const [error, setError] = useState("");

  const showBalance = () => {
    setError("");

    const account = state.find(
      (acc) => acc.acc_num == loggedInUser.accNum && acc.pin == loggedInUser.pin
    );

    if (account) {
      setDetails({
        balance: account.balance,
        loan: account.loan
      });
    
    } else {
      setError("Invalid account number or pin");
    }
  };
  
 if(loggedInUser.loggedIn){

  return (
    <>
    <div className="main">
      <h1>Balance: {detail.balance}</h1>
      <h1>Loan: {detail.loan}</h1>
      <br />

      <br />
      <button onClick={showBalance}>Show Balance</button>
      <h3>{error}</h3>
      </div>
    </>
  );
 }else{
  return <div className="main">Loggin First.....</div>
 }
}

export default ShowBalance;
