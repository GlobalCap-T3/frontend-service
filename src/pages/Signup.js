import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import { config } from "../config"
import AuthenClient from "../clients/authenClient"
import SubmitButton from "../components/form/SubmitButton"
import Field from "../components/form/Field"

const client = new AuthenClient(config);

export default function Signup() {
  const [signupForm, setSignupForm] = useState({ email: '', password: '', first_name: '', last_name: ''});
  const navigate = useNavigate();

  const onSignup = async (e) => {
    e.preventDefault();
    await client
      .signup(signupForm)
      .then((response) => {
        navigate("/?signin");
        alert(response.data.detail);
      })
      .catch((error) => {
        alert(error.response.data.detail);
      });
  };

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <form onSubmit={ onSignup }>
          <div className="flex items-center justify-between">
            <Field
              name="first_name"
              type="text"
              label="First name"
              value={ signupForm.first_name }
              onChange={(e) => setSignupForm({...signupForm, first_name: e.target.value})} />
            <Field
              name="last_name"
              type="text"
              label="Last name"
              value={ signupForm.last_name }
              onChange={(e) => setSignupForm({...signupForm, last_name: e.target.value})} />
          </div>
          <Field
            name="email"
            type="email"
            label="Email address"
            value={ signupForm.email }
            onChange={(e) => setSignupForm({...signupForm, email: e.target.value})} />
          <Field
            name="password"
            type="password"
            label="Password"
            value={ signupForm.password }
            onChange={(e) => setSignupForm({...signupForm, password: e.target.value})} />
          <SubmitButton html="Sign up" />
        </form>
      </div>
    </div>
  );
}