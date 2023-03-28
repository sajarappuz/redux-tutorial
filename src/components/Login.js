import React from 'react'
import { useDispatch } from 'react-redux'  //modify state in redux
import { login, logout } from '../features/User'

function Login() {
//creatinfg dispatch fn

 const dispatch = useDispatch()

  return (
    <div>
        <button onClick={()=>{
          dispatch(login({name:"wizz", age:23 ,email:"wiz@gmail.com"}))
          }}>Login</button>
        <button onClick={()=>{
          dispatch(logout())
          }}>LogOUT</button>
    </div>
  )
}

export default Login