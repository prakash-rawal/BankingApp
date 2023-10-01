import React,{useReducer} from 'react';

import './index.css';

import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { initialState, bankReducer } from "./reducers/bankReducer";
import Navbar from './Routes/Navbar';
import CreateAccount from './Routes/CreateAccount';
import Login from './Routes/Login';
import DepositeAmount from './Routes/DepositeAmount';
import WithdrawAmount from './Routes/WithdrawAmount';
import Loan from './Routes/Loan';
import PayLoan from './Routes/PayLoan';
import ShowBalance from './Routes/ShowBalance';
import CloseAccount from './Routes/CloseAccount';

import LoginStateProvider from './context/loginStateProvider';


function App() {

  const [state, dispatch] = useReducer(bankReducer, initialState);

  return (
    <>
    {/* <BankReducer /> */}
       <LoginStateProvider state={state} dispatch={dispatch}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />} >
            <Route path='/create' element={<CreateAccount state={state} dispatch={dispatch}/>} />
            <Route path='/login' element={<Login state={state} dispatch={dispatch}/>} />
            <Route path='/deposite' element={<DepositeAmount state={state} dispatch={dispatch}/>} />
            <Route path='/withdraw' element={<WithdrawAmount state={state} dispatch={dispatch}/>} />
            <Route path='/loan' element={<Loan state={state} dispatch={dispatch}/>} />
            <Route path='/payloan' element={<PayLoan state={state} dispatch={dispatch}/>} />
            <Route path='/showbalance' element={<ShowBalance state={state} dispatch={dispatch} />} />
            <Route path='/closeaccount' element={<CloseAccount state={state} dispatch={dispatch} />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </LoginStateProvider> 
    </>
  );
}

export default App;
