
import React, { useState } from 'react';
import LoginContext from '../context/loginContext';


function LoginStateProvider({ children, state, dispatch }) {

    const [loggedInUser, setLoggedInUser] = useState({
        loggedIn: false,
        accNum: '',
        pin: '',
    });

    const loginState = (accNum, pin) => {

        const account = state.find((account) => account.acc_num == accNum && account.pin == pin);
       
        if (account) {
            setLoggedInUser({ loggedIn: true, accNum, pin });
        }
    }
    console.log(loggedInUser);

    const logout = () => {
        setLoggedInUser({ loggedIn: false, accNum: '', pin: '' });
    };

    return (
        <LoginContext.Provider value={{ loginState, loggedInUser,logout }}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginStateProvider;