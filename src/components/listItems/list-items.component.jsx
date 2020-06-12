import React from "react";
import "./list-items.styles.css";
import { BsTrash } from "react-icons/bs";

const ListItems = ({ items, deleteItem, setUpdate }) => {
  const listItems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <div className="list-item">
          <p>
            <input
              type="text"
              id={item.key}
              value={item.text}
              onChange={(e) => {
                setUpdate(e.target.value, item.key);
              }}
            />
          </p>
          <span>
            <BsTrash className="faicons" onClick={() => deleteItem(item.key)} />
          </span>
        </div>
      </div>
    );
  });
  return <div>{listItems}</div>;
};
export default ListItems;
