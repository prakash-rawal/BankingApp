// src/reducers/bankReducer.js
import React,{useState} from "react";

// const [ loggedInAcc, setloggedInAcc ] = useState(null); 
const initialState = [{}];


const bankReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_ACCOUNT":
     console.log(state);

     return [...state, action.payload]
    case "DEPOSIT":
        const { acc_num, pin, balance } = action.payload;
        // console.log(action.payload)
      
        const depositeData = state.map(account =>
          account.acc_num == acc_num && account.pin == pin
            ? { ...account, balance: account.balance + balance }
            : account
            );
            console.log(depositeData)
            return depositeData
        
     
    case "WITHDRAW":
      const { acc_num1, pin1, withdrawBalance } = action.payload;
      const withdrawData  = state.map(account =>
        account.acc_num == acc_num1 && account.pin == pin1
          ? { ...account, balance: account.balance - withdrawBalance }
          : account
          );
          console.log(withdrawData)
          return withdrawData

    case "LOAN" :
      const { acc_num2, pin2, loan} = action.payload;
      const loanData = state.map( account =>
        account.acc_num == acc_num2 && account.pin == pin2 
        ? { ...account, loan : account.loan + loan,balance:account.balance+loan}
        : account
      );
      // console.log(loanData);
      return loanData;

      case "PAYLOAN":
        const { acc_num3, pin3, payloan } = action.payload;
        const payloanData = state.map(account =>
          account.acc_num == acc_num3 && account.pin == pin3
            ? { ...account, loan: account.loan - payloan, balance:account.balance - payloan }
            : account
        );
        return payloanData;
    
      case "SHOWBALANCE" :
      return state ; 

      case "CLOSEACCOUNT" :
        const { acc_num4, pin4 } = action.payload;
        const updatedAccounts = state.filter(
          account => account.acc_num !== acc_num4 || account.pin !== pin4
        );
        return updatedAccounts;  
      case "LOGIN" :
        const { acc_num5, pin5 } = action.payload;
        var loggedInUser = state.map(account => {
          if (account.acc_num == acc_num5 && account.pin == pin5) {
            return account
          }
          return loggedInUser;
        })
        console.log(loggedInUser);
    default:
      return state;
  }
};

export { initialState, bankReducer };
