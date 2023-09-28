import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";



function Navbar() {
  const [showNavColor, setShowNavColor] = useState(false);


  return (
    <>
      <div className="nav">
        <Link to='/create'>Create Account</Link>
        <Link to='/login'>Login</Link>
        <Link to='/deposite'>Deposite Amount</Link>
        <Link to='/withdraw'>Withdraw Amount</Link>
        <Link to='/loan'>Loan</Link>
        <Link to='/payloan'>PayLoan</Link>
        <Link to='/showbalance'>Show Balance</Link>
        <Link to='/closeaccount'>Delete Account</Link>
      </div>
      <br />
      <Outlet />
    </>
  );
}
export default Navbar;
