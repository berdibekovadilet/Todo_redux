import React from "react";
import { Tab, Tabs } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const filterIndex = {
  all: 0,
  active: 1,
  completed: 2,
};

function Filter() {

  const dispatch = useDispatch();
  const filterBy = useSelector((state) => state.filterBy);

  const setFilter = (_, newIndex) => {
    const status = Object.keys(filterIndex)[newIndex];
    dispatch({
      type: "SET_FILTER",
      payload: status,
    });
  };
  
  return (
    <Tabs onChange={setFilter} value={filterIndex[filterBy]}>
      <Tab label="Все" />
      <Tab label="Активные" />
      <Tab label="Завершенные" />
    </Tabs>
  );
}

export default Filter;
