import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import AfterLogInPage from './page/AfterLogInPage';


const UserPrivate = () => {
    const Token = useSelector((state)=>state?.userDatas?.token);
    console.log(Token)

    // const userKey = localStorage.setItem(userDatas, JSON.stringify(data?.data))
    // console.log(userKey)
    
    const admin = localStorage.getItem("isAdmin")
    // console.log(userKey)
    
  return (
    <>
     { admin == "false" ? <AfterLogInPage/> : <Navigate to="/login"/>}
    </>
   
  )
}

export default UserPrivate