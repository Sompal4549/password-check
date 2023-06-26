import React from "react";
import { useState } from "react";
import { ThemeConsumer } from "styled-components";

const OtherPage = () => {
  const products = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];
  return (
    <>
      <div>other page</div>
      <h2>Step 3: Find the minimal but complete representation of UI state</h2>
      <p>
        To make the UI interactive, you need to let users change your underlying
        data{" "}
      </p>
      <p>
        There are two types of "model" data in React: props and state. The two
        are very different:
      </p>
      <ul>
        <li>
          <mark>Props are like arguments you pass</mark>
          to a function. They let a parent component data to a child component
          and customize ites apperance for examplle, a form can pass a color
          prop to a button.
        </li>
        <li>
          <mark>State is like a component's memory.</mark> It lets a component
          keep track of some information and change it in response to
          interactions. For example, a button might keep track of isHovered
          state.
        </li>
      </ul>
      <FilterableProductTable products={products} />
    </>
  );
};

export default OtherPage;
function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
}
function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;
  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  );
}
function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  function Cup({ guest }) {
    return <h2>Tea cup for guest #{guest}</h2>;
  }
  function TeaSet() {
    return (
      <>
        <>
          <Cup guest={1} />
          <Cup guest={2} />
          <Cup guest={3} />
        </>
      </>
    );
  }
  return (
    <>
      <TeaSet />
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={(e) => onFilterTextChange(e.target.value)}
        />
        <label>
          <input
            onChange={(e) => onInStockOnlyChange(e.target.checked)}
            type="checkbox"
            checked={inStockOnly}
          />
          {""}
          Only show products in stock
        </label>
      </form>
    </>
  );
}
function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <>
      <div>
        <SearchBar
          onFilterTextChange={setFilterText}
          onInStockOnlyChange={setInStockOnly}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
        <ProductTable
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </div>
      <h2>For Two</h2>
      <Recipe drinkers={2} />
      <h2>For Gathering</h2>
      <Recipe drinkers={5} />
      <TSet/>
      <TSet/>
      <TSet/>
      <TSet/>

    </>
  );
}
const Recipe = ({ drinkers }) => {
  return (
    <ol>
      <li>Boil {drinkers} cups of water.</li>
      <li>
        Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.
      </li>
      <li>Add 1 cups of milk to boil and sugar to taste.</li>
    </ol>
  );
};

let guest = 0;
function Cup() {
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}
function TSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}
