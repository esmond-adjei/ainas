"use client";

import { ROUTES } from "@/lib";
import { signIn } from "next-auth/react";
import { useState } from "react";
import AppMessage, { AppMessageType } from "./Message";

/**
 * login form 
 */
export function LoginForm() {
  const [message, setMessage] = useState({} as AppMessageType)
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const form = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      redirect: false,
      email: form.get("email"),
      password: form.get("password"),
    });

    if (res?.error) {
      setMessage({ text: res.error, type: 'error'});
    } else {
      setMessage({ text: "You've logged in successfully", type: 'success'});
    }
    setIsLoading(false);
  };

  return (
      <form onSubmit={handleLogin} className="form-container">
        <div>
          <h1 className="text-2xl font-bold">Login</h1>
          <p className="text-slate-600">Welcome back!</p>
        </div>
        {message.text && <AppMessage text={message.text} type={message.type} />}
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 w-full"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border p-2 w-full"
        />
        <button type="submit" className="submit-btn w-full">
          {
            isLoading ? 'Please wait...' : 'Login'
          }
        </button>
        
        <p className="text-xs text-center text-slate-600">
          Don't have an account, click <a href={ROUTES.signup} className="link">sign up</a> to get started.
        </p>
      </form>
  );
}


/**
 * sign up form
 */

export function SignupForm() {
  const [message, setMessage] = useState({} as AppMessageType);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    
    const form = new FormData(event.currentTarget);

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        email: form.get("email"),
        password: form.get("password"),
        firstName: form.get("firstName"),
        lastName: form.get("lastName")
      }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    if (res.ok) {
      setMessage({ text: 'Signup successful! You can now login.', type: 'success'})
    } else {
      setMessage({ text: data.error || "Something went wrong", type: 'error'})
    }
    setIsLoading(false);
  };

  return (
      <form onSubmit={handleSignup} className="form-container">
        <div>
          <h1 className="text-2xl font-bold">Signup</h1>
          <p className="text-slate-600">Join Us and Let's Get Started</p>
        </div>
        {message.text && <AppMessage text={message.text} type={message.type}/> }
        <div className="flex gap-2">
            <input
             type="text"
             name="firstName"
             placeholder="First Name"
             className="input w-1/2"
             />
            <input
             type="text"
             name="lastName"
             placeholder="Last Name"
             className="input w-1/2"
             />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input"
        />
        <input
          type="password"
          name="confirm-password"
          placeholder="Confirm Password"
          className="input"
        />
        <button type="submit" className="submit-btn w-full">
          {
            isLoading ? 'Please wait...' : 'Sign Up'
          }
        </button>

        <p className="text-xs text-center text-slate-600">
          By signing up, you agree to our <a href="#" className="link">Terms and Policies</a>. <br/>
          Already have an account, click <a href={ROUTES.login} className="link">login</a> to continue.
        </p>
      </form>
  );
}
