// in this we going to learn one of the lifecycle of Components
import React from 'react';
class Monting extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            favoritecolor:"red"
        };
    }
    static getDerivedStateFromProps(props, state){
        return {
            favoritecolor:props.favcol
        };
    }
    render(){
        return(
            <>
            <p>My favorite color is {this.state.favoritecolor}.</p>
                <h2>Lifecycle of Components</h2>
                <p>Each component in React has a lifecycle which you cna monitor and manipulate during its three main phases.</p>
                <p>The three phases are Mounting, Updating, and Unmounting</p>
                <p>Mounting means putting elements into the Dom.</p>
                <p>React has for built in methods that gets called, in this order, when mounting a component:</p>
                <p>1. constructor()</p>
                <p>2. getDerivedStateFromProps()</p>
                <p>3. render()</p>
                <p>4. componentDidMount()</p>
                <p>The render() method is required and will always be called, the others are optional and will be called if you them</p>
                <h2>
                    getDerivedStateFromProps
                </h2>
                <p>The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM.</p>
            </>
        )
    }
}
export default Monting;