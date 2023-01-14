import React from "react";

export const FilterData = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <span>
      <input
        className="input"
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
};
