import React,{useState, useContext} from "react";
import useLogin from '../context/loginContext'
function PayLoan({state, dispatch}){
    
   const {loggedInUser} = useContext(useLogin);
    const [amount, setAmount] = useState("");
    const [error, setError] = useState("");

    const payLoan = () =>{
        setError("");

        const parsedAmount = parseInt(amount)
        if(!isNaN(parsedAmount) && parsedAmount > 0){
            const account = state.find(
                (acc) => acc.acc_num == loggedInUser.accNum && acc.pin == loggedInUser.pin
            );
            // console.log(account)
        if(parsedAmount > account.balance){
            setError("Check Your Loan Amount")
        }else{
            dispatch({
                type: "PAYLOAN",
                payload: {acc_num3: loggedInUser.accNum, pin3: loggedInUser.pin, payloan: parsedAmount }
            })
        
          
            setAmount("")
            setError("successfull")
        }
        }else{
            setError("Invalid Pin and Account NUmber")
        }

    }
    if(loggedInUser.loggedIn){
    return(
        <>
        <div className="main">
            <h1>Pay Loan Amount</h1>
            <label htmlFor="">Enter PayLOAN Amount:</label>
            <input
                type="number"
                value={amount}
                placeholder="Enter Payloan Amount"
                onChange={(e) => setAmount(e.target.value)}
            />
            <br />
            <button onClick={payLoan}>PayLoan Amount</button>
            <h3>{error}</h3>
            </div>
            </>
    )
    }else{
        return <div className="main">Loggin First.....</div>
    }
}
export default PayLoan;