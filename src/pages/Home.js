import React, { createContext } from "react";
import Car from "../components/state/CreatingState";
import ChangingStateObject from "../components/state/ChangingStateObject";
import { useState, useContext } from "react";

import Monting from "../components/LifeCycle/Mounting";
import Accordion from "../components/accordion/Accordion";
import UseState from "../components/state/UseState"
import { Tb123 } from "react-icons/tb";
import UseContext from "../components/state/LearnContext";
import LearnContext from "../components/state/LearnContext";
import Form from "../components/forms/Form";
const Home = () => {
  const arr = [4, 5, 6, 2, 33, 5, 2];
  const newArr = [7, 4, 7, 5, 2, 2];
  const constArr = arr.constructor;
  const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
  fruits.copyWithin(2, 0, 2);
  let entries = fruits.entries();
  const Compone = () => {
    for (let x of entries) {
      return `fruits ${x} `;
    }
  };
  const UserContext = createContext();
  const [user, setUser] = useState("Jesse Hall");

  const vehicles = ["mustang", "f-150", "expedition"];

  const filterAndSort = (arr) => {
    let filtered = arr.filter((item) => {
      return item > 18;
    });
    let sorted = arr.sort();
    return [filtered, sorted];
  };
  let newArray = ["a", "x", "d", "e", "l", "p", "g", "n", "o"];
  let numbers = [47, 54, 8, 4, 5, 33, 7, 1, 5, 2, 41, 1, 5, 4, 2, 41, 75, 55];
  console.log(
    filterAndSort(newArray),
    "sorted",
    filterAndSort(numbers),
    "filtered"
  );

  const [motorVehicle, , ,] = vehicles;
  const [car, , suv] = vehicles;
  console.log(motorVehicle, car, suv);


  return (
    <>
    <Form/>
    <Tb123/>
    <UserContext.Provider value={user}>
    <LearnContext/>
      <h2>JavaScript Array Methods and Properties</h2>
      <h3>Concat</h3>
      <h2>JavaScript Array copyWithin()</h2>
      Copy the first two array elements to the last two array elements:
      <br />
      <Accordion />
      {fruits.join(" - ")}
      <p>
        {new Set(arr.concat(newArr).join(" , "))}
        {/* const arr = [442,2,25,6,3,3];
                const newArr=[75,5,8,3,2,5,3,5,];
                const conCated = arr.concat(newArr); */}
        <br />
        <Monting favcol="blue" />
        Example of concatj
        <Car brand={"safari"} />
        <ChangingStateObject />
      </p>
      <p>{constArr}</p>
      <p>JavaScript Array entries()</p>
      {entries}
      {/* <RenderVehicle myVehicle={vehicleOne} /> */}
      <br />
      <p>
        To illustrate destruturing, we'll make a sandwich. Do you take
        everything out of the refrigerator to make you snandwich? now you only
        take out the items you would like to use on your sandwich.
      </p>
      <p>
        Destructuring is exactly the same. We may have an array or object that
        we are working with, but we only need some of the items contained in
        these.
      </p>
      <h2>Destructing Arrays </h2>
      <p>Here is the old way of assigning array items to a variable:</p>
      <Compone />
      <h2>React ES6 Modules</h2>
      <h3>Modules</h3>
      <p>JavaScript modules allow you to break up you code into seprate files. This makes it easier to maintain the code-base.</p>
      <p>ES Modules rely on the import and export statement.</p>
      <hr/>
      <h3>Export</h3>
      <p>You can export a function or variable from any file.</p>
      <p>Let lus create a file named person.js, and fill it with the things we want to export.</p>
      <p> There are two types of exports: Named and Default.</p>
      <h3>Named Exports</h3>
      <p>You can create named exports two ways. In-line individually, or all at once at the bottom.</p>
      <h3>Import</h3>
      <p>You can import a modules into a file in two ways. We can import a modules into a file in two ways. I can import a module into a file in two ways. One can import modules into a file in two ways.</p>
      <p>Named exports must be destructured using curly braces. Default exports do not.</p>
      <UseState/>
      </UserContext.Provider>
    </>
  );
};

export default Home;
 const name = "Jessica";
 const age = "30";
function MyFunction (){
  return "This is exported function";
}
export {name, age, MyFunction};