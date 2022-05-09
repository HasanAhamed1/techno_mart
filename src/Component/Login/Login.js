import { async } from "@firebase/util";
import {
  
  LockOpenIcon,
  MailIcon,
} from "@heroicons/react/outline";
import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import { sendPasswordResetEmail } from "firebase/auth";
import React, { useRef, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import Register from "../Register/Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
  const emailRef = useRef("");
  const passRef = useRef("");

  const [sendPassResetEmail, sending] = useSendPasswordResetEmail(auth);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, userG] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  let errorElement;

  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = <p className="thin">Error: {error?.message}</p>;
  }

    const handleUserSignIn = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    signInWithEmailAndPassword(email, password);
    console.log(email, password);
    
  };

  const resetPass = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPassResetEmail(email);
      toast("Sent email");
    } 
    else {
      toast("please eneter your email address");
    }
    
  };
  return (
    <div className="flex justify-center">
      <div>
        <Register></Register>
      </div>
      <div className="m-20">
        <h2 className="font-bold pb-3">Login</h2>
        <hr />
        <p className="font-light text-sm text-gray-500 m-5">
          Insert Your Account Information:
        </p>
        <form onSubmit={handleUserSignIn}>
          <div className="flex items-center h-14 w-96 border m-5">
            <MailIcon className="h-5 w-5 m-5"></MailIcon>
            <input
              type="email"
              name="email"
              placeholder="Email"
              ref={emailRef}
              required
            />
          </div>

          <div className="flex items-center h-14 w-96 border mx-5">
            <LockOpenIcon className="h-5 w-5 m-5"></LockOpenIcon>
            <input
              type="password"
              name="password"
              placeholder="Password"
              ref={passRef}
              required
            />
          </div>
          <br />
          
          <button
            className="h-12 w-28 rounded-md bg-black text-white font-semibold text-xs mx-5"
            type="submit"
          >
            LOGIN
          </button>
        </form>
        {errorElement}
        <br />
        <p>
          Forget Password? <button className="border" onClick={resetPass}>Reset Password</button>
        </p>
        <ToastContainer />
        <br />
        <hr />
          <br />
        <button
        className="h-12 w-28 rounded-md bg-blue-500 text-white font-semibold text-xs mx-5"
        onClick={() => signInWithGoogle()}
      >
        Google Sign In
      </button>
      </div>
    </div>
  );
};

export default Login;

