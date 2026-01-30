import "./login.css";
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
      console.log("Access granted");
    } else {
      console.log("Acess denied: Your username and/or password are wrong");
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
        type="text"
        placeholder="Password"
      ></input>
      <button onClick={login}>Login</button>
    </div>
  );
}
