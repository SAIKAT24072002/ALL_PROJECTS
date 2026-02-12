import { useState } from "react";
import { Link } from "react-router";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onClickHandler(e) {
    e.preventDefault();
    console.log("Form Submited");
  }
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="bg-white p-8 rounded-2xl  w-full max-w-sm shadow-2xl">
        <h1 className="text-2xl font-semibold text-center mb-6 uppercase">
          Login
        </h1>

        <label className="block mb-4">
          <span className="text-gray-700">Email</span>
          <Input
            type="email"
            placeHolder="Enter your Email here"
            value={email}
            onChangeHandler={(e) => setEmail(e.target.value)}
            autoComplete="username"
          />
        </label>

        <label className="block mb-6">
          <span className="text-gray-700">Password</span>
          <Input
            type="password"
            placeHolder="Enter your Password here"
            value={password}
            onChangeHandler={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
          />
        </label>

        <Button type="some" onClickHandler={onClickHandler} children="Login" />
        <div className="mt-6">
          <span>Don't have an account, please</span>
          <Link to="/signup" className="text-blue-500 font-bold m-1">
            Signup
          </Link>
          <span>here</span>
        </div>
      </form>
    </div>
  );
}
