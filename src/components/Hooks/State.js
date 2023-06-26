import React, {useState} from "react"; // importing useState from react this is named export so we are calling it inside curly brackets.
const State =()=>{
    const {name, setName}=useState("sonia"); // we initialize the state here so we can use it and update the state when needed using the second value
    const [brand, setBrand]= useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1964");
    const [color, setColor]= useState('red');
    const [mobile, setMobile] = useState({
        brand:"Poco",
        model:"X4",
        year:"2022",
        color:"black",
    })
  const updateColor = ()=>{
    setMobile(prev=>{
        return {...prev, color:"yellow"}
    })
  }
    return(
        <>
            <div>
                <h2>React useState Hook</h2>
                <p>The React useState Hook allows us to track state in a function component.</p>
                <p>State generally refers to data or properties that need to be tracking in an application.</p>
                <h2>Import useState</h2>
                <p>To use the useState Hook, we first need to import it into our component. </p>
                <p>At the top of your component, import the useState Hook.</p>
                {/* import {useState} from 'react'; */}
                <p>Notice that we are destructuring useState from react as it is a named export.</p>
                <h3>Initialize useState</h3>
                <p>We initialize our state by calling useState in our function component.</p>
                <p>useState accepts an initial state and returns two values:</p>
                <ul>
                    <li>
                        The current state.
                    </li>
                    <li>A function that updates the state.</li>
                </ul>
                <p>Notice that again, we are destructuring the returned values from useState.</p>
                <p>The first value, name, is our current state.</p>
                <p>The second value, setName, is the function that is used to update our state.</p>
                <p>These names are variables that can be named anything you would like.</p>
                <p>Lastly, we set the initial state to a string: useState("Sonia").</p>
                <h3>Read State</h3>
                <p>We can now include our state anywhere in our component.</p>
                <p>The name state has a value of {name}. So that is why your name is {name}.</p>
                <button onClick={()=>setName("Ravi")
                }>Change name to Ravi</button>
                <h2>What Can State Hold</h2>
                <p>The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!</p>
                <p>We could create multiple state Hooks to track individual values.</p>
                <div>
                    <h2>My {brand}.</h2>
                    <p>It is a {color} {model} from {year}.</p>
                </div>
                <p>Or, we can just use one state and include an object instead!</p>
                <h1>My {mobile?.brand}.</h1>
                <p>It is {mobile?.color} {mobile?.model} from {mobile.year}.</p>
                <button onClick={updateColor}>color to yellow</button>
                <p>Because we need the current value of state, we pass a function into our setMobile function. This function receives the previous state.</p>
                <p>We then return an object, spreading the previousState and overwriting only the color.</p>
            </div>
        </>
    )
}
export default State;