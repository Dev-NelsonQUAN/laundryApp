import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import AfterLogInPage from './page/AfterLogInPage';


const UserPrivate = () => {
  const Token = useSelector((state) => state?.userDatas?.token);
  console.log(Token)

  const admin = localStorage.getItem("isAdmin")

  return (
    <>
      {admin == "false" ? <AfterLogInPage /> : <Navigate to="/login" />}
    </>

  )
}

export default UserPrivate