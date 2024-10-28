import React from "react";
import "./item.css";

const Item = ({ filter }) => {
  return( <
    div className="filter-item">
    {filter.icon && filter.icon}
    <div className="filter-name">{filter.title}</div>
  </div>
    );
};

export default Item;