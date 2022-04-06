import React, { useState } from "react";
import { Add, CheckCircle, RadioButtonUnchecked } from "@mui/icons-material";
import { Button, Checkbox, TextField } from "@mui/material";

function AddFeild({ onAdd }) {
  const [inputValue, setInputValue] = useState([]);
  const [checked, setChecked] = useState(false);

  const onClickAdd = () => {
    onAdd(inputValue, checked);
    setInputValue("");
    setChecked(false);
  };
  return (
    <div className="field">
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.value)}
        className="checkbox"
        icon={<RadioButtonUnchecked />}
        checkedIcon={<CheckCircle />}
      />
      <TextField
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите текст задачи"
        variant="standard"
        fullWidth
      />
      <Button onClick={onClickAdd}>
        <Add />
      </Button>
    </div>
  );
}

export default AddFeild;
