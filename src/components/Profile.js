import React from 'react'
import { useSelector } from 'react-redux'  //acessing state in redux
import Color from '../features/Color';
import ChangeColor from './ChangeColor';
function Profile() {
  const user = useSelector((state) =>state.user.value);
  const themeColor = useSelector((state) =>state.theme.value);
  return (
    <div style={{color:themeColor}} >
        <h1>profile PAGE </h1>
        <p> Name:{user.name} </p>
        <p> Age:{user.age} </p>
        <p> Email:{user.email} </p>
        </div>
  )
}

export default Profile
