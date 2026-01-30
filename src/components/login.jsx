import "./Login.css";
import "../App.css";
import { useState } from "react";

export function Login() {
  const [usernameInputText, setUsernameInputText] = useState("");
  const [passwordInputText, setPasswordInputText] = useState("");

  function saveUsernameInputText(event) {
    setUsernameInputText(event.target.value);
    console.log(event.target.value);
  }

  function savePasswordInputText(event) {
    setPasswordInputText(event.target.value);
    console.log(event.target.value);
  }

  function login() {
    if (
      usernameInputText == "Gdubs05" &&
      passwordInputText == "iLoveTurtles23"
    ) {
      alert("Access Granted.");
    } else {
      alert("Access Denied: Your Username and/or Password are incorrect.");
    }
  }

  return (
    <div className="login-container">
      <input
        onChange={saveUsernameInputText}
        className="input"
        type="text"
        placeholder="Username"
      ></input>
      <input
        onChange={savePasswordInputText}
        className="input"
        type="password"
        placeholder="Password"
      ></input>
      <button onClick={login}>Login</button>
    </div>
  );
}
