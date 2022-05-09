import { LockOpenIcon, MailIcon, UserIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passerror, setPasserror] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const [signInWithGoogle, userG] = useSignInWithGoogle(auth);

  const handleUserSignIn = (event) => {
    event.preventDefault();

    if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setPasserror("Password should contain at least one special character");
      return;
    }
    setPasserror("");
    event.preventDefault();
    createUserWithEmailAndPassword(email, password);
    console.log(email, password);
  };

  return (
    <div className="m-20">
      <h2 className="font-bold pb-3">Create an account</h2>
      <hr />
      <p className="font-light text-sm text-gray-500 m-5">
        No account? Create one here:
      </p>
      <form onSubmit={handleUserSignIn}>
        <div className="flex items-center h-14 w-96 border m-5">
          <UserIcon className="h-5 w-5 m-5"></UserIcon>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onBlur={handleNameBlur}
          />
        </div>
        <div className="flex items-center h-14 w-96 border m-5">
          <MailIcon className="h-5 w-5 m-5"></MailIcon>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onBlur={handleEmailBlur}
          />
        </div>
        <div className="flex items-center h-14 w-96 border mx-5">
          <LockOpenIcon className="h-5 w-5 m-5"></LockOpenIcon>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onBlur={handlePasswordBlur}
          />
        </div>
        <p className="font-light text-sm text-gray-500 m-5">{passerror}</p>
        <br />
        <button
          className="h-12 w-28 rounded-md bg-black text-white font-semibold text-xs mx-5"
          type="submit"
        >
          Register
        </button>
      </form>
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
  );
};

export default Register;