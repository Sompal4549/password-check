import React, { useState } from "react";
function Item({ name, isPacked, importance }) {
  // if (isPacked) {
  //   return null;
  // }
  // return <li className="item">{name} 🤦‍♀️</li>;
  return (
    <li>
      {isPacked ? name + " ✔" : name + " ❌"}{" "}
      {importance > 0 && `important ${importance}`}
    </li>
  );
}
export function PackingList() {
  return (
    <section>

      <h1>Sally Ride's Packing List</h1>
      <kbd>ctrl</kbd>
      <ul>
        <Item isPacked={true} importance={0} name="Space suit" />
        <Item isPacked={true} importance={9} name="Helmet with a golden leaf" />
        <Item isPacked={false} importance={10} name="Photos of Tam" />
      </ul>
    </section>
  );
}
const Contact = () => {
  return (
    <div>

      <PackingList />
      <h1>Contact page</h1>
      <h2>Conditional Rendering</h2>
      <p>
        Our components ofter need to display things depending on different
        conditions. In React, you can conditionally render JSX using JavaScript
        syntax like iif statement, &&, and ? :operators.
      </p>
      <h3>You will learn</h3>
      <ul>
        <li>How to return different JSX depending on a condition</li>
        <li>How to conditionally include or exclude a piece of JSX</li>
        <li>
          Common conditional syntax shortcuts you'll encounter in React
          codebases
        </li>
      </ul>
      <h2>Conditionally returning JSX</h2>
      <p>
        Let's say you have a packing List component rendering several Items,
        which can be marked as packed or not:
      </p>
    </div>
  );
};

export default Contact;
