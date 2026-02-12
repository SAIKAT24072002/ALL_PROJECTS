import React, { useState } from "react";
import { Link } from "react-router";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onClickHandler(e) {
    e.preventDefault();
    console.log("Form Submited");
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className=" p-8 rounded-2xl shadow-2xl w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-center mb-6 uppercase">
          Sign Up
        </h1>

        <label className="block mb-4">
          <span className="text-gray-700">Name</span>
          <Input
            type="text"
            placeholder="Enter your Name"
            onChangeHandler={(e) => setName(e.target.value)}
            value={name}
            autoComplete={"off"}
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Email</span>
          <Input
            type="email"
            placeholder="Enter your Email"
            onChangeHandler={(e) => setEmail(e.target.value)}
            value={email}
            autoComplete={"off"}
          />
        </label>

        <label className="block mb-6">
          <span className="text-gray-700">Password</span>
          <Input
            type="password"
            placeholder="Enter your Password"
            onChangeHandler={(e) => setPassword(e.target.value)}
            value={password}
            autoComplete={"off"}
          />
        </label>
        <Button type="some" onClickHandler={onClickHandler} children="SignUp" />
        <div>
          <span>already have an account, please </span>
          <Link to="/" className="text-blue-500 font-bold m">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
