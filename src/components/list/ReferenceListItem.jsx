import React, { memo } from "react";
import "./list.css";

const ReferenceListItem = memo(({ item, onClick }) => {
  console.log(`rendering item with name  ${item.name} \n`);
  const handleClick = () => onClick(item.id);

  return (
    <li
      onClick={handleClick}
      className={!item.isActive ? "inactive list-item" : "list-item"}
    >
      <img src={item.picture} alt="random demo illustration" />
      <h3 className="title">{item.name}</h3>
      <div className="paragraph">{item.descr}</div>
    </li>
  );
});

export default ReferenceListItem;
