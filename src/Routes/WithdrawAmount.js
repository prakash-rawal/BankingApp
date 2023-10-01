import React,{useState,useContext} from "react";
import useLogin from '../context/loginContext';

function WithdrawAmount({state, dispatch}){
  const {loggedInUser} = useContext(useLogin);
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  

  const  Withdraw =()=>{
    setError(""); // Clear previous errors
    const parsedAmount = parseInt(amount);

    if (!isNaN(parsedAmount) && parsedAmount > 0) {
      const account = state.find(
        (acc) => acc.acc_num == loggedInUser.accNum && acc.pin == loggedInUser.pin
      );

      if (parsedAmount>account.balance ){
        setError('Check Your Account Balance')
      }
      else {
        dispatch({
          type: "WITHDRAW",
          payload: { acc_num1: loggedInUser.accNum, pin1: loggedInUser.pin, withdrawBalance: parsedAmount },
        });
        setError("withdrawn  successfull...")
        setAmount("");
      } 
    } else {
      setError("Invalid withdrawal amount");
    }
  };
  if(loggedInUser.loggedIn){
    return(
        <>
        <div className="main">
        <h1>Withdraw Amount</h1>
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
      /> */}
      <br />
      <label htmlFor="">Enter Withdrawal Amount:</label>
      <input
        type="number"
        value={amount}
        placeholder="Enter Withdrawal Amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <button onClick={Withdraw}>Withdraw Amount</button>
      <h3>{error}</h3>
    </div>
        </>
    );
  }else{
    return <div className="main">Login First...</div>
  }
}
export default WithdrawAmount;