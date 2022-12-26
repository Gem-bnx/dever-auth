import React from 'react'
import SubForm from '../components/SubForm'

function Register({info, setInfo}) {
  return (
    <div>
        <SubForm info={info} setInfo={setInfo}></SubForm>
    </div>
  )
}

export default Register