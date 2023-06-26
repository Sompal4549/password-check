import React, { useState } from "react";
import Data from "./FilterData";
import Card from "./Card";
import Buttons from "./Buttons";
const FilterContainer = ({}) => {
  const [item, setItem] = useState(Data);
  const menuItems = [...new Set(Data.map((Val) => Val.category))];
  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };
  console.log(menuItems);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <h1 className="col-12 text-center my-3 fw-bold">Our Menu</h1>
          <Buttons
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
          <div></div>
          <Card item={item}></Card>
        </div>
      </div>
    </>
  );
};

export default FilterContainer;
