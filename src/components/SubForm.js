import React from "react";
import { signUp, getUsers} from "../api";
function SubForm({info, setInfo}) {
    const handleRegis = () => {
        if (signUp(info)) {
            alert("Regist successfully")
        }
    }
  return (
    <div className="sub-form">
      <div>
        <label>Username:</label>
        <input  type="text" placeholder="" onChange={(e) => setInfo({...info, userName:e.target.value})}></input>
      </div>
      <div>
        <label>Email:</label>
        <input type="email" placeholder="" onChange={(e) => setInfo({...info, email:e.target.value})}></input>
      </div>
      <div>
        <label>Password:</label>
        <input type="password" placeholder="" onChange={(e) => setInfo({...info, password:e.target.value})}></input>
      </div>
      <div>
        <label>Name:</label>
        <input type="text" placeholder="" onChange={(e) => setInfo({...info, name:e.target.value})}></input>
      </div>
      <button onClick={() => handleRegis()}>Register</button>
      <button onClick={() => getUsers()}>Users List</button>
    </div>
  );
}

export default SubForm;
