import React from "react";
import { Add, CheckCircle, RadioButtonUnchecked } from "@mui/icons-material";
import { Button, Checkbox, TextField } from "@mui/material";

function AddFeild({ onClick }) {
  return (
    <div className="field">
      <Checkbox
        className="checkbox"
        icon={<RadioButtonUnchecked />}
        checkedIcon={<CheckCircle />}
      />
      <TextField
        placeholder="Введите текст задачи"
        variant="standard"
        sx={{
          "& > :not(style)": { width: "300px" },
        }}
      />
      <Button onClick={onClick}>
        <Add />
      </Button>
    </div>
  );
}

export default AddFeild;
