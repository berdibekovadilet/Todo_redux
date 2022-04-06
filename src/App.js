import { useReducer } from "react";
import { Button, Divider, List, Paper, Tab, Tabs } from "@mui/material";
import AddFeild from "./components/AddFeild";
import Item from "./components/Item";
import { useSelector, useDispatch } from "react-redux";
import Filter from "./components/Filter";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const addTask = (text, checked) => {
    dispatch({
      type: "ADD_TASK",
      payload: {
        text,
        checked,
      },
    });
  };

  const removeTask = (id) => {
    if (window.confirm("Удалить задачу?")) {
      dispatch({
        type: "REMOVE_TASK",
        payload: id,
      });
    }
  };

  const toggleComplete = (id) => {
    dispatch({
      type: "TOGGLE_COMPLETE",
      payload: id,
    });
  };

  const completeAll = () => {
    dispatch({
      type: "COMPLETE_ALL",
    });
  };

  const clearAll = () => {
    if (window.confirm("Удалить всё?")) {
      dispatch({
        type: "CLEAR",
      });
    }
  };

  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задача</h4>
        </Paper>
        <AddFeild onAdd={addTask} />
        <Divider />
        <Filter />
        <Divider />
        <List>
          {state.tasks
            .filter((obj) => {
              if (state.filterBy === "all") {
                return true;
              }
              if (state.filterBy === "completed") {
                return obj.completed;
              }
              if (state.filterBy === "active") {
                return !obj.completed;
              }
            })
            .map((obj) => (
              <Item
                key={obj.id}
                completed={obj.completed}
                text={obj.text}
                onClickRemove={() => removeTask(obj.id)}
                onClickCheckBox={() => toggleComplete(obj.id)}
              />
            ))}
        </List>
        <Divider />
        <div className="check-buttons">
          <Button disabled={state.length === 0} onClick={completeAll}>
            Отметить все
          </Button>
          <Button disabled={state.length === 0} onClick={clearAll}>
            Очистить
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
