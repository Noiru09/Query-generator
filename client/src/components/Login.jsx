import React, { useState } from "react";
import { useToken } from "../Lib/TokenContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setToken} = useToken();

  const login = async (email, password) => {
    const response = await fetch("http://localhost:3005/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: email, password }),
    });

    const data = await response.json();
    console.log(data);
    const token = data.token;
    setToken(token);
    console.log(token);
  };
  return (
    <div>
        <form
            onSubmit={(e) => {
                e.preventDefault();
                login(email, password);
            }}
        >
            <input
                type="text"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>

    </div>
  );
};

export default Login;
