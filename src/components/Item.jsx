import React from "react";
import { Checkbox, IconButton, ListItem, Typography } from "@mui/material";
import {
  CheckCircle,
  DeleteOutline,
  Edit,
  RadioButtonUnchecked,
} from "@mui/icons-material";

function Item({ text, completed, onClickRemove, onClickCheckBox  }) {
  return (
    <ListItem>
      <div className="d-flex item">
        <Checkbox
          checked={completed}
          icon={<RadioButtonUnchecked />}
          checkedIcon={<CheckCircle />}
          onChange={onClickCheckBox}
        />
        <Typography className="item-text">{text}</Typography>
        <div className="item-buttons d-flex">
          <IconButton>
            <Edit style={{ fontSize: 20 }} />
          </IconButton>
          <IconButton onClick={onClickRemove}>
            <DeleteOutline style={{ fontSize: 20 }} />
          </IconButton>
        </div>
      </div>
    </ListItem>
  );
}

export default Item;
