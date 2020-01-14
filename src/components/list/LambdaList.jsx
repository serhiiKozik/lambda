import React, { useState } from "react";
import LambdaListItem from "./LambdaListItem";

const LambdaList = ({ listItems }) => {
  const [items, setItems] = useState(listItems);
  const toggleStatus = itemId => {
    setItems(state =>
      state.map(item =>
        item.id === itemId ? { ...item, isActive: !item.isActive } : item
      )
    );
  };

  return (
    <ul className="list">
      {items.map(item => (
        <LambdaListItem
          item={item}
          key={item.id}
          onClick={() => toggleStatus(item.id)}
        />
      ))}
    </ul>
  );
};

export default LambdaList;
