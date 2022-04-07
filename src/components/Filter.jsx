import React from "react";
import { Tab, Tabs } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../redux/actions/filter";

const filterIndex = {
  all: 0,
  active: 1,
  completed: 2,
};

function Filter() {
  const dispatch = useDispatch();
  const filterBy = useSelector((state) => state.filter.filterBy);

  const handleClickSetFilter = (_, newIndex) => {
    const status = Object.keys(filterIndex)[newIndex];
    dispatch(setFilter(status));
  };

  return (
    <Tabs onChange={handleClickSetFilter} value={filterIndex[filterBy]}>
      <Tab label="Все" />
      <Tab label="Активные" />
      <Tab label="Завершенные" />
    </Tabs>
  );
}

export default Filter;
