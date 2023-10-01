import React, { useReducer } from "react";

const OPEN_ACCOUNT = "OPEN_ACCOUNT";
const DEPOSITE = "DEPOSITE";
const WITHDRAW = "WITHDRAWAL";
const REQ_LOAN = "REQ_LOAN";
const PAY_LOAN = "PAY_LOAN";
const CLOSE_ACCOUNT = "CLOSE_ACCOUNT"

const reducer = (state, action) => {
    switch (action.type) {
        case OPEN_ACCOUNT:
            if (state.isActive) {
                return state;
            } else {
                return { ...state, isActive: !state.isActive , balance:500 }
            }
        case DEPOSITE:
            if( state.isActive){
                return { ...state, balance: state.balance + 150}
            } 
        case WITHDRAW:
            if(state.isActive && state.balance > 0){
                return {...state, balance: state.balance - 50}
            }else{
                return state;
            }
        case REQ_LOAN :
            if(state.isActive && state.loan == 0){
                return{...state, loan: 5000, balance: state.balance + 5000}
            }else{
                return state;
            }    
        case PAY_LOAN :
            if(state.isActive && state.loan == 5000){
                return {...state, loan: state.loan - 5000, balance: state.balance - 5000};
            }else{
                return state;
            }
        case CLOSE_ACCOUNT :
          
            if(state.isActive && state.loan == 0 && state.balance == 0 ){
                return {...state, isActive: !state.isActive}
            }else{
                alert("First OF All Clear Your Current Balance\nClear Your Requested Loan ")
                return state;
            }
}
}

    const BankReducer = () => {
        const [state, dispatch] = useReducer(reducer, { balance: 0, loan: 0, isActive: false })

        return (
            <>
                <h1>useReducer Bank Account</h1>
                <p>Balance: {state.balance}</p>
                <p>Loan: {state.loan}</p>
                <button onClick={() => dispatch({ type: OPEN_ACCOUNT })} disabled={state.isActive} >Open Account</button>
                <button onClick={() => dispatch({ type: DEPOSITE })} disabled={!state.isActive}>Deposite 150</button>
                <button onClick={() => dispatch({ type: WITHDRAW })} disabled={!state.balance || !state.isActive}>Withdraw 50</button>
                <button onClick={() => dispatch({ type: REQ_LOAN })} disabled={state.loan || !state.isActive}>Request A Loan Of 5000</button>
                <button onClick={() => dispatch({ type: PAY_LOAN })} disabled={!state.loan}>Pay Loan</button>
                <button onClick={() => dispatch({ type: CLOSE_ACCOUNT })} disabled={!state.isActive}>Close Account</button>
            </>
        )
    }

    export default BankReducer;