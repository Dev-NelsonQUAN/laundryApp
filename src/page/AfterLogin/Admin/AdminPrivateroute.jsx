import React from 'react'
import AfterLogInPage from '../../AfterLogInPage'
import AdminDashBoard from './AdminDashBoard'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AdminPrivateroute = () => {
  // if(isAdmin == "true"){
  //   Nav("/mainAdminDashBoard")
  // }else{
  //   Nav("/afterlogin")
  // }
  // const Token = useSelector((state)=>state.userDatas.token);
  const admin = localStorage.getItem("isAdmin");
  console.log(admin)

  return (
    <>
    {
      admin == "true" ? 
      <Outlet/>
      : <Navigate to={"/login"}/>
    }
    </>
  )
}

export default AdminPrivateroute