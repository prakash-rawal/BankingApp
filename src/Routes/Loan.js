import React, { useState, useContext } from "react";
import useLogin from '../context/loginContext'

function Loan({ state, dispatch }) {
    const {loggedInUser} = useContext(useLogin);
    const [amount, setAmount] = useState("");
    const [error, setError] = useState("");

    const Loan = () =>{
        setError("");

        const parsedAmount = parseInt(amount)
        if(!isNaN(parsedAmount) && parsedAmount > 0){
            const account = state.find(
                (acc) => acc.acc_num == loggedInUser.accNum && acc.pin == loggedInUser.pin
            );
        

        if(account){
            dispatch({
                type: "LOAN",
                payload: {acc_num2: loggedInUser.accNum, pin2: loggedInUser.pin, loan: parsedAmount }
            })
        
         
            setAmount("")
            setError("Loan Added successfully ")
        }else{
            setError("Envalid amount")
        }
        }else{
            setError("Invalid Pin and Account NUmber")
        }

    }
   if(loggedInUser.loggedIn){
    return (
        <>
        <div className="main">
        <h1>Loan Amount</h1>
            <label htmlFor="">Enter LOAN Amount:</label>
            <input
                type="number"
                value={amount}
                placeholder="Enter loan Amount"
                onChange={(e) => setAmount(e.target.value)}
            />
            <br />
            <button onClick={Loan}>Loan Amount</button>
            <h3>{error}</h3>
            {/* {balance !== null && <h1>Balance: {balance}</h1>} */}
        </div>

        </>
    )
   }else{
    return <div className="main">Login First....</div>
   }
}
export default Loan;