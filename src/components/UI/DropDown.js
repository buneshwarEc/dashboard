import React from "react";
import { Dropdown } from "react-bootstrap";

import styles from "./DropDown.module.css";

const DropDown = ({ label, items, selectedItem, setSelectedItem }) => {
  return (
    <div className={styles.dropDown}>
      <label>{label}</label>
      <Dropdown>
        <Dropdown.Toggle
          variant=" "
          id="dropdown-basic"
          className={styles.dropDownToggle}
        >
          {selectedItem}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {items.map((item) => (
            <Dropdown.Item
              key={item.id}
              className={styles.dropDownItem}
              onClick={() => setSelectedItem(item.name)}
            >
              {item.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropDown;
