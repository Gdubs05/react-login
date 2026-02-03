import "./Login.css";
import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [usernameInputText, setUsernameInputText] = useState("");
  const [passwordInputText, setPasswordInputText] = useState("");
  const navigate = useNavigate();

  function saveUsernameInputText(event) {
    setUsernameInputText(event.target.value);
    console.log(event.target.value);
  }

  function savePasswordInputText(event) {
    setPasswordInputText(event.target.value);
    console.log(event.target.value);
  }

  function enterKeyPressed(event) {
    if (event.key === "Enter") {
      login();
    }
  }

  function login() {
    if (
      usernameInputText == "Gdubs05" &&
      passwordInputText == "iLoveTurtles23"
    ) {
      alert("Access Granted.");
      navigate("/");
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
        onKeyDown={enterKeyPressed}
      ></input>
      <input
        onChange={savePasswordInputText}
        className="input"
        type="password"
        placeholder="Password"
        onKeyDown={enterKeyPressed}
      ></input>
      <button onClick={login}>Login</button>
    </div>
  );
}
