import logo from "./logo.svg";
import "./App.css";
import Posts from "./components/Posts";
import React, { useState } from "react";
import { PasswordCheck } from "./components/PasswordCheck";
import { Game } from "./components/TicTacToe";
import Button from "./components/Button";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Posts Sharer</h1>
        <p>Simple password checklist.</p>
        <Button label="basic" variant="secondary"/>
        <Game />
        <PasswordCheckList></PasswordCheckList>
        <PasswordCheck />
      </header>
      <Posts />
    </div>
  );
}

export default App;
function PasswordCheckList() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  function handleChange(e) {
    setPassword(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const requirements = [
      password.length >= 8,
      /[A-Z]/.test(password),
      /[a-z]/.test(password),
      /\d/.test(password),
    ];
    const isValid = requirements.every(Boolean);
    if (isValid) {
      alert("Password is valid");
    } else {
      setError(true);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Password:
        <input type="password" value={password} onChange={handleChange} />
      </label>
      <input type={"submit"} value="Submit" />
      {error && <p>Password is not valid!</p>}
    </form>
  );
}
