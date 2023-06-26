import React from "react"
class ChangingStateObject extends React.Component{
    constructor(props){
        super(props);
        this.state={
            brand:"Ford",
            model:"Mustang",
            year:1934,
            color:"red",
        }
    }
    changeYear=()=>{
        this.setState({year:1968})
    }
    render(){
        return(
            <>
                <h1>My {this.state.brand}</h1>
                <p>It is a {this.state.color} {this.state.model} from {this.state.year}</p>
<button onClick={this.changeYear}>
    change the year
</button>
            </>
        )
    }
}
export default ChangingStateObject;