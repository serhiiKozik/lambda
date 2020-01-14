import React, { memo } from "react";
import "./list.css";

const LambdaListItem = memo(({ item, onClick }) => {
  console.log(`rendering item with name  ${item.name} \n`);
  return (
    <li
      onClick={onClick}
      className={!item.isActive ? "inactive list-item" : "list-item"}
    >
      <img src={item.picture} alt="random demo illustration" />
      <h3 className="title">{item.name}</h3>
      <div className="paragraph">{item.descr}</div>
    </li>
  );
});

export default LambdaListItem;
