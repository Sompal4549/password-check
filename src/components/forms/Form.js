import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
const Form = () => {
  const [name, setName] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You entered ${name}`);
  };
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const [desc, setDesc] = useState("The description we added");
  const submitHandler = (event) => {
    event.preventDefault();
    alert(inputs);
  };
  const [phone, setMobile] = useState("myPhone");
  const [car, setCar] = useState("Thar");
  return (
    <>
      <h2>Form in react</h2>
      <p>Making form in React is not easy as in simple html</p>
      <p>
        Just like in HTML, React uses forms to allow users to interact with the
        web page.
      </p>
      <div>
        <h2>Adding Forms in React</h2>
        <p>You add a form with React like any other element:</p>
        <h3>Example:</h3>
        <p>Add a form that allows used to enter their name:</p>
        <form onSubmit={handleSubmit}>
          <label>Enter your name:</label>
          <input
            type="text"
            value={name}
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
          />
        </form>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Name"
            value={inputs.username}
            required
            name="username"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Roll number"
            required
            onChange={handleChange}
            name="Roll_number"
            value={inputs["Roll_number"]}
          />
          <textarea
            onChange={(event) => setDesc(event.target.value)}
            value={desc}
            name="description"
          />
          <input
            type="number"
            name="age"
            value={inputs.age}
            required
            onChange={handleChange}
            placeholder="enter you age"
          />
          <select
            value={phone}
            onChange={(event) => setMobile(event.target.value)}
          >
            <option value="myPhone">myPhone</option>
            <option value="yourPhone">yourPhone</option>
            <option value="allsPhone">allsPhone</option>
            <option value="padosi ka phone">padosi ka phone</option>
          </select>
          <select value={car} onChange={(event) => setCar(event.target.value)}>
            <option value="Ford">Ford</option>
            <option value="Volvo">Volvo</option>
            <option value="Thar">Thar</option>
            <option value="Scorpio">Scorpio</option>
          </select>
          <button type="submit">Submit Form</button>
        </form>
      </div>
    </>
  );
};
export default Form;
