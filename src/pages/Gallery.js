import React, { useState } from "react";

import GalleryRow from "../components/Gallery/GalleryRow";
import Input from "../components/Input";
import { Game } from "../components/TicTacToe";
import { PasswordCheck } from "../components/PasswordCheck";
import InfiniteScroller from "../components/InfiniteScroll";
import Posts from "../components/Posts";
import example from "../components/ReactHooks";
import FilterContainer from "../components/Filter/FilterContainer";
import Slider from "react-slick";
import Accordion from "../components/accordion/Accordion";
import Button from "../components/Button";
const Gallery = () => {
  class Car {
    constructor(name, year) {
      this.year = year;
      this.name = name;
    }
  }
  // creating Object with class
  const CarObject = new Car("nano", "2012");
  const typeCarObject = typeof CarObject;
  const typeCar = typeof Car;
  return (
    <>
      <div>
        <GalleryRow />
        The example above creates a class named "Car". The class has two initial
        properties: "name" and "year". A JavaScript calss is not an object. It
        is a template for JavaScript Objects. Using A Class When you have a
        class, you can use the class to create objects. car is a class function
        and class is not object class is a template of an object
        <p>{CarObject.name}</p>
        <p>{CarObject.year}</p>
        <p>{typeCarObject}</p>
        <p>{typeCar}</p>
        EcmaScript 2015 also known as es6, introduced JavaScript classes are
        templates for Javascript objects JavaScript Class Syntax Use the keyword
        class to create a class. Always add a method named constructor():
      </div>
      <PasswordCheckList></PasswordCheckList>
      <FilterContainer />
      <Slider />
      <Accordion />
      <header className="App-header">
        <img src="./logo.svg" className="App-logo" alt="logo" />
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
        <PasswordCheck />
        <InfiniteScroller />
      </header>
      <Posts />
      {example}
    </>
  );
};
export default Gallery;
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
