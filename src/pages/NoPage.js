import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const NoPage = () => {
  class Error extends React.Component {
    constructor() {
      super();
      this.state = {};
    }
    render() {
      return <h2>I am a Car!</h2>;
    }
  }
  class Garage extends React.Component {
    render() {
      return (
        <>
          <div>
            <h1>Who lives in my Garage!</h1>
            <Error />
          </div>
        </>
      );
    }
  }
  class StateObject extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964,
      };
    }
    render() {
      return (
        <div>
          <h1>My Car is out of the world</h1>
          <p>Using the State property</p>
          <h1>My {this.state.brand}</h1>
          <p>
            It is a {this.state.color} {this.state.model}
          </p>
        </div>
      );
    }
  }
  function checkOutput() {
    var x = 20;
    console.log(x, "inside function");
  }
  useEffect(() => {
    checkOutput();
  }, []);
  var x = 10;
  console.log(x, "outside function");
  const fruits = ["banana", "Orange", "Apple", "Mango"];
  const myGirls = ["Cecilie", "Lone"];
  const myBoys = ["Emil", "Tobias", "Linus"];
  const myChildren = myBoys.concat(myGirls);
  const blank = myChildren.at(2);
  fruits.splice(2, 0, "Lemon", "Kiwi");
  const deleted = fruits.splice(3, 1, "pineapple");
  const fruitsSpliced = fruits.splice(0, 1);
  const citrus = fruits.slice(0, 1);
  console.log(citrus, "slicing one element from an array");
  const citruses = fruits.slice(0, 2);
  console.log(citruses, "slicing more than one element in array ");
  console.log(fruits.indexOf("Orange"), "index of orange");
  console.log(fruits, "fruits at last");
  return (
    <>
      {console.log(fruits, "sjgtnolgljjgjk gggjg")}
      {blank}
      <br />
      {myChildren.toLocaleString()}
      <br />
      {fruitsSpliced}
      <br />
      {fruits.shift((fruit) => fruit.join("_"))}
      <div className="error_page">
        <h1>404! Page Not Found</h1>
        <p>Return to Home Page</p>
        <Garage />
        <StateObject />
        <Link to="/">Click to view Home page</Link>
        With clever parameter setting, you can use splice() to remove elements
        without leaving holes in the array:
        {fruits.toString()};{deleted.join(" / ")}
      </div>
    </>
  );
};
export default NoPage;
