// The state object can contains as many propertiex as you like:
import React from "react";
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: props.brand,
      model: "mustang",
      color: "red",
      year: 1964,
    };
  }
  render() {
    return (
      <>
        <div>
          <h1>My {this.state.brand}</h1>
          <p>
            It is a {this.state.color} {this.state.model} from {this.state.year}
            .
            Hooks were added to React in version 16.8.

          </p>
          <p>Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.</p>
        </div>
      </>
    );
  }
}
export default Car;
