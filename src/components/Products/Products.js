import styled from "styled-components";

const products = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$1", stocked: false, name: "Passionfruit" },
  { category: "Vegetable", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetable", price: "$2", stocked: false, name: "Pumpkin" },
  { category: "Vegetable", price: "$2", stocked: true, name: "Peas" },
];
const ProductRow = ({ product }) => {
  const Flex = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  `;
  const FlexItem = styled.div`
    flex: 1;
  `;
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    </>
  );
};
const ProductCategoryRow = ({ category }) => {
  return (
    <>
      <tr>
        <th colSpan={2}>{category}</th>
      </tr>
    </>
  );
};
const ProductTable = ({ products }) => {
  const rows = [];
  let lastCategory = null;
  products.forEach((product) => {
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
};
const SearchBar = () => {
  const Input = styled.div`
    width: 100%;
    height: 45px;
    border: 1px solid #000;
  `;
  return (
    <form>
      <Input placeholder="Search..." />
      <label htmlFor="stockAvail">
        <Input name="stock" id="stockAvail" type="checkbox" /> Only show
        products in stock
      </label>
    </form>
  );
};
const FilterableProductTable = ({ products }) => {
  return (
    <>
      <SearchBar />
      <ProductTable products={products} />
    </>
  );
};
export default FilterableProductTable;
