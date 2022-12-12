import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";

import styles from "./DropDown.module.css";

const DropDown = ({
  errorMsg = "",
  label,
  items,
  selectedItem,
  setSelectedItem,
}) => {
  const [showErrorMgs, setShowErrorMgs] = useState(false);

  useEffect(() => {
    setShowErrorMgs(!!errorMsg);
  }, [errorMsg]);

  const dropDownToggleStyle = showErrorMgs
    ? [styles.dropDownToggle, styles.dropDownToggleInvalid]
    : styles.dropDownToggle;

  const onDropDownItemClick = (item) => {
    console.log(item.name);
    setSelectedItem(item.name);
    setShowErrorMgs(false);
  };

  return (
    <div className={styles.dropDown}>
      <label>{label}</label>
      <Dropdown>
        <Dropdown.Toggle
          variant=" "
          id="dropdown-basic"
          className={dropDownToggleStyle}
        >
          {selectedItem}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {items.map((item) => (
            <Dropdown.Item
              key={item.id}
              className={styles.dropDownItem}
              onClick={() => onDropDownItemClick(item)}
            >
              {item.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      {showErrorMgs && <div className={styles.errorMessage}>{errorMsg}</div>}
    </div>
  );
};

export default DropDown;
