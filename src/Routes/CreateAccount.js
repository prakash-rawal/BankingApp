import React, { useState, useContext, useReducer, useEffect } from "react";
import LoginContext from "../context/loginContext";


function CreateAccount({ dispatch }) {
    // const { setAccountInfo } = useContext(LoginContext);

    const [status, setStatus] = useState(0);
    const [name, setName] = useState("");
    const [panNum, setPanNum] = useState("");
    const [detail, setDetails] = useState(null);
    const [error, setError] = useState('')

    // const [state, dispatch] = useReducer(reducer, { name:"" ,pan_num:"", acc_num:"", pin:"", balance: 0, loan: 0, isActive: false })


    const handler = (status) => {
        setStatus(status);
    }

    const CreateAccount = () => {
        if (name && panNum) {
            const generateRandomNumber = () => Math.floor(Math.random() * 10000000000);

            const generateRandomPin = () => Math.floor(Math.random() * 10000);
            const newAccount = {
                name,
                panNum,
                acc_num: generateRandomNumber(),
                pin: generateRandomPin(),
                balance: 0,
                loan: 0,
                isActive: true
            }
            dispatch({ type: "CREATE_ACCOUNT", payload: newAccount });

            setDetails({
                acc_num: newAccount.acc_num,
                pin: newAccount.pin,
            })
            // setAccountInfo(newAccount.acc_num, newAccount.pin);
            console.log(newAccount);
            setName("");
            setPanNum("");
        } else {
            console.log("enter both value");
        }
    }

    return (
        <>
            <div className="main">
                <h1>Create Account</h1>
                <label htmlFor="">Enter Name:</label>
                <input type="text" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} /><br />
                <br />
                <label>Do You Have an Pan Card:</label>
                <label>Yes</label>
                <input type="radio" name="release" checked={status === 1} onChange={(e) => handler(1)} />
                <label>No</label>
                <input type="radio" name="release" checked={status === 2} onChange={(e) => handler(2)} />
                {status === 1 ?
                    <div style={{ display: 'block' }} >
                        <label htmlFor="">Enter Pan Number:</label>
                        <input type="number" placeholder="Enter Pan No" value={panNum} onChange={(e) => setPanNum(e.target.value)} /><br />
                        <button onClick={CreateAccount}>Create Account</button>
                    </div> : <div style={{ display: 'none' }} ></div>
                }

                {detail && (
                    <div>
                        Account Number : {detail.acc_num} <br />
                        Pin : {detail.pin}
                    </div>
                )
                }
            </div>
        </>
    )
}
export default CreateAccount;