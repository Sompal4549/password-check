import React from "react";
const Card = ({ item }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="content-center">
          {item.map((Val) => {
            return (
              <div key={Val.id}>
                <div className="card-image">
                  <img alt={Val.title} src={Val.img} />
                  <div className="card-body">
                    <div>
                      {Val.title}
                      {Val.price}
                    </div>
                    <div>{Val.desc}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Card;