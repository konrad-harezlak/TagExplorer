import React from "react";
import { useTags } from "../TagsContext";
import TextField from "@mui/material/TextField";
import './tagsCountSelector.css'; 

const TagsCountSelector = () => {
  const { pageSize, setPageSize } = useTags();

  const handlePageSizeChange = (e) => {
    setPageSize(e.target.value);
  };

  return (
    <div className="count-container">
      <label htmlFor="pageSize">Liczba elementów na stronie: </label>
      <TextField
        id="pageSize"
        type="number"
        value={pageSize}
        onChange={handlePageSizeChange}
        variant="outlined" 
        InputLabelProps={{ shrink: true }} 
        inputProps={{ min: 1 }}
      />
    </div>
  );
};

export default TagsCountSelector;
