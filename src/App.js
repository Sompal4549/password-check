import logo from "./logo.svg";
import "./App.css";
import Posts from "./components/Posts";
import React, { useState } from "react";
import { PasswordCheck } from "./components/PasswordCheck";
import { Game } from "./components/TicTacToe";
import Button from "./components/Button";
import Input from "./components/Input";
import example from "./components/ReactHooks";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Posts Sharer</h1>
        <p>Simple password checklist.</p>
        <div className="abc">
          <Button label="Basic" variant="basic" />
          <Button label="Link" variant="link" />
          <Button label="Secondary" variant="secondary" />
          <Button label="Danger" variant="danger" />
          <Button label="Disabled" disabled={true} />
          <Button label="Primary" variant="primary" />
          <Button label="Outline" variant="outline" />
          <Button label="Medium" variant="primary" size="medium" />
          <Button label="Large" variant="outline" size="large" />
        </div>

        <div className="abc">
          <Input
            type="text"
            placeholder="Enter Text"
            label="Input Box"
            helperText="I am a text type input box"
            name="typeText"
          />
          <hr />
          <Input
            type="email"
            placeholder="Enter Email Address"
            label="Email Box"
            helperText="I am an email type box"
            name="typeEmail"
          />
          <hr />
          <Input
            type="password"
            placeholder="Enter Password"
            label="Password Box"
            helperText="I am a password type box"
            name="typePassword"
          />
          <hr />
          <Input
            type="date"
            placeholder="Enter date"
            label="Date Box"
            helperText="I am a Date type input box"
            name="typeDate"
          />
          <hr />
          <Input
            type="tel"
            placeholder="Enter Telephone Number"
            label="Telephone Box"
            helperText="I am a Telephone type input box"
            name="typeTel"
          />
          <hr />
        </div>

        <Game />
        <PasswordCheckList></PasswordCheckList>
        <PasswordCheck />
      </header>
      <Posts />
      {example}
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
