import React, { useState, useContext } from "react";
import useLogin from '../context/loginContext';

function CloseAccount({ state, dispatch }) {
  const {loggedInUser} = useContext(useLogin);
  const {logout} = useContext(useLogin);
  const [error, setError] = useState("");

  const deleteAccount = () => {
    setError("");

    const accountClose = state.find(
      (acc) => acc.acc_num === parseInt(loggedInUser.accNum) && acc.pin === parseInt(loggedInUser.pin)
    );

    if (accountClose.balance == 0 && accountClose.loan == 0) {
      dispatch({
        type: "CLOSEACCOUNT",
        payload: { acc_num4: accountClose.acc_num, pin4: accountClose.pin }
      });
    logout();
      setError("Account Deleted Successfully")
    } else {
      setError("Clear All Your Balance And Loan ");
    }
    
  };
 if(loggedInUser.loggedIn){
  return (
    <>
    <div className="main">
      <br />
      <button onClick={deleteAccount}>Delete Account</button>
      <h3>{error}</h3>
      </div>
    </>
  );
 }else{
  return <div className="main"> loggin First....</div>
 }
}

export default CloseAccount;
