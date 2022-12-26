import React from 'react'
import {useState} from 'react'
import { login } from '../api'

function LogForm() {
    const [log, setLog] = useState({
        email: '',
        password: '',
      })
  return (
    <div>
        <div>
        <label>Email:</label>
        <input  type="email" placeholder="" onChange={(e) => setLog({...log, email:e.target.value})}></input>
      </div>
      <div>
        <label>Password:</label>
        <input type="text" placeholder="" onChange={(e) => setLog({...log, password:e.target.value})}></input>
      </div>
      <button onClick={() => login()}>Login</button>
    </div>
  )
}

export default LogForm