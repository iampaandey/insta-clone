"use client"
import { useContext, useEffect, useState } from "react";
import InputBox from "./InputBox";
import ButtonPrimary from "./ButtonPrimary";
import Link from "next/link";
import { AppContext } from "@app/context/MainContext";
import { handleLogin } from "@app/api/api";
import AlertBox from "./AlertBox";

// import i2 from ''

import {  AlertType, AppContextType, ErrorRes, FormData, initProps, LoggedInUser } from "@Interfaces";

const Login = ():JSX.Element => {
    const { state, dispatch }:AppContextType = useContext(AppContext);
    const [index, setIndex] = useState<number>(0);
    const [email, setEmail] = useState<string>("");
  
    const [alert, setAlert] = useState<AlertType>({type:"", message:""})
    const [isAlert, setIsAlert] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");
    const { isLogin }:initProps = state;
    const imgArr:Array<string> = ["/loginphoto1.png", "/loginphoto2.png"]
   

    useEffect(() => {
        console.log(isLogin)
    }, [isLogin])

    const handleSubmit = async ():Promise<void> => {
        console.log(email, password);
        dispatch({type:"setLoading"})
        if(email==="" || password===""){
            setIsAlert(true);
            setAlert({type:"error", message:"Please provide complete data!"})
            dispatch({type:"unSetLoading"})

            return;
        }
        const formData: FormData = {
            email, password,
            redirect: false
        }
        setEmail("")
        setPassword("")
        let data: LoggedInUser | ErrorRes
        data = await handleLogin(formData)
        if ("username" in data)
            localStorage.setItem('user', JSON.stringify(data));
        if ("username" in data && data?.username) {
         
            setAlert({type:"success", message:"Logged In!"})

                dispatch({ type: "setLogin" })
            dispatch({type:"unSetLoading"})
            

        }
        else {

            setAlert({type:"error", message:"Credentials are not valid"})
            dispatch({type:"unSetLoading"})

        }
        setIsAlert(true)
    }
    useEffect(() => {
        const interval = setInterval(() => {
          setIndex((index) => (index === 0 ? 1 : 0));
        }, 2000); // 2000ms = 2 seconds
    
        return () => clearInterval(interval); // Cleanup the interval on component unmount
      }, []);
    useEffect(() => {
        console.log(setIsAlert)
    }, [setIsAlert])

    return (

        <div className="login-main">
            {isAlert && <AlertBox type={alert.type} message={alert.message} onClose={() => setIsAlert(false)} />
            }            <div className="images-section">
                <img src={"/loginmain.png"} className="loginmainimage" alt="" />
                <img src={imgArr[index]} className="loginsecondaryimage" alt="" />
            </div>
            <div className="loginForm-main">
                <div className="loginForm">
                    <img className="loginLogo" src="/appp-title-2.jpg" alt="InstaLogo" />
                    <b>Login Credentials</b>
                    <p><b>Email : </b> t10@g.com</p>
                    <p><b>Password : </b> 1234</p>
                    <InputBox placeText="Phone number,username or email" type="text" val={email} setVal={setEmail} />
                    <InputBox placeText="Password" type="password" val={password} setVal={setPassword} />
                    <ButtonPrimary buttonValue="Log in" flag={email==="" && password===""} onclickFun={handleSubmit} />
                    <p className="suggestionHeader">Forgot Password ?</p>
                </div>
                <div className="signupop">
                    <p>Don't have a account ? </p>
                    <Link href="/register">
                        <span className="signuptext">Sign up</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
