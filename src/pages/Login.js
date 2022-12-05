import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import { config } from "../config"
import AuthenClient from "../clients/authenClient"
import SubmitButton from "../components/form/SubmitButton"
import Field from "../components/form/Field"

const client = new AuthenClient(config);

export default function Login() {
  const [loginForm, setLoginForm] = useState({ username: '', password: ''})
  const navigate = useNavigate();

  const onLogin = async (e) => {
    e.preventDefault();
    await client
      .login(loginForm)
      .then((response) => {
        navigate("/?login");
        alert(response.data.detail);
      })
      .catch((error) => {
        alert(error.response.data.detail);
      });
  };

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <form onSubmit={ onLogin }>
          <Field
            name="email"
            type="email"
            label="Email address"
            value={ loginForm.email }
            onChange={(e) => setLoginForm({...loginForm, username: e.target.value})} />
          <Field
            name="password"
            type="password"
            label="Password"
            value={ loginForm.password }
            onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}/>
          <SubmitButton html="Log in" />
        </form>
      </div>
    </div>
  );
}