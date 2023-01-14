import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import "./styles.css";

export const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || "");
  }, 750);
  return (
    <span className="footerDiv">
      Global Search:{" "}
      <input
        className="input"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </span>
  );
};
