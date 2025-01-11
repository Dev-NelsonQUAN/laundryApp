import React, { useEffect, useState } from "react";
import {
  SignUpHolder,
  SignHolderLogo,
  SignUpInputHold,
  SignUpText,
  Input,
  InputPasswordDiv,
  AlreadyHave,
  Button,
  PassInfo
} from "./AuthStyle";
import AquaCleanReal from "../../assets/AquaCleanReal.jpg";
import {toast, Toaster} from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import Load from "../AfterLogin/Load";
// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";


const Login = () => {

  const Nav = useNavigate()

  const [seePasswword, setSeePassword] = useState(true)
  const [email, setEmail] = useState()
  const [emailerror, setEmailError] = useState()
  const [toggle, setToggle] = useState(true);
  const [emailerrorshow, setEmailErrorShow] = useState(false)
  const [passwordCheck, setPasswordCheck] = useState(false)
  const [passwordErrorlow, setPasswordErrorLow] = useState("");
 const [passwordErrorUpper, setPasswordErrorUpper] = useState();
 const [passwordErrorNumber, setPasswordErrorNumber] = useState();
 const [passwordErrorSymbol, setPasswordErrorSymbol] = useState();


  const lookPassword = () =>{
    setSeePassword(false)
  }

  const containsLowercase = (input) => {
    // Check if the input string contains at least one lowercase character
    return /[a-z]/.test(input);
  };
  
  const containsUpperrcase = (input) => {
    // Check if the input string contains at least one lowercase character
    return /[A-Z]/.test(input);
  };
  
  const containsNumber = (input) => {
    // Check if the input string contains at least one number
    return /\d/.test(input);
  };
  
  const containsSymbol = (input) => {
    // Check if the input string contains at least one symbol (special character)
    return /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(input);
  };
  
  const validateEmail = (input) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };
  
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  
    // Validate the email
    if(newEmail.trim() === '') {
        toast.error('Email is required');
      setEmailErrorShow(false)
    }else if (!validateEmail(newEmail)) {
      setEmailErrorShow(true)
      setEmailError('Invalid email format');
    } else {
      setEmailError("")
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setToggle(false);
    }, 2000);
  });

  // const handlePassword = (e) => {
  //   const newData  = e.target.value
  //   setPassword(newData)
  //   if(newData.trim() === ""){
  //       toast.error("Password is required")
  //       setPasswordCheck(false)
  //   }if (newData.length > 0){
  //     setPasswordCheck(true)
  //   }if(!containsLowercase(newData)){
  //     setPasswordErrorLow(true)
  //   }else{
  //     setPasswordErrorLow(false)
  //   }if(!containsUpperrcase(newData)){
  //     setPasswordErrorUpper(true)
  //   }else{
  //     setPasswordErrorUpper(false)
  //   }if(!containsNumber(newData)){
  //     setPasswordErrorNumber(true)
  //   }else{
  //     setPasswordErrorNumber(false)
  //   }if(!containsSymbol(newData)){
  //     setPasswordErrorSymbol(true)
  //   }else{
  //     setPasswordErrorSymbol(false)
  //   }
  //  }

  return (
    <>
{
  toggle? <Load/>:
  <SignUpHolder>
  {/* <SignHolderLogo>
    <img src={AquaCleanReal} alt="Wash" />
  </SignHolderLogo> */}

  <SignUpInputHold>
    <SignUpText>
      <h2> Forgot Password </h2>
    </SignUpText>

    <Input placeholder="Enter Your Email" wd hg
           onChange={handleEmailChange}
    />
    {
              emailerrorshow ? <p
              style={{
                color: "white",
                margin: "0px",
                padding: "0px"
              }}
            >{emailerror}</p> : null
    }

    <Button onClick={() => Nav("/reset")}> Submit  </Button>
    <AlreadyHave>
    <p>Already have an account?{" "}
      <span onClick={() => Nav("/login")}> Login </span>
    </p> 
      </AlreadyHave>

  </SignUpInputHold>
</SignUpHolder>
}
    <Toaster/>
    </>
  );
};

export default Login;
