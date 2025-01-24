import React from "react";

const MenuItem = ({ item }) => {
  return (
    <div className="row menu-item">
      <div className="col-4">
        <img
          className="menu-img"
          src={`${process.env.PUBLIC_URL}/images/${item.imageName}`}
          alt={`Image of ${item.title}`}
        />
      </div>
      <div className="col-8 menu-text">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <div className="row">
          <div className="col-8">
            <b>{item.price}</b>
          </div>
          <div className="col-2">
            <button>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
