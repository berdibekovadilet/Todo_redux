import { Button, Divider, List, Paper, Tab, Tabs, Grid } from "@mui/material";
import AddFeild from "./components/AddFeild";
import Item from "./components/Item";

function App() {
  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задача</h4>
        </Paper>
        <AddFeild />
        <Divider />
        <Tabs value={0}>
          <Tab label="Все" />
          <Tab label="Активные" />
          <Tab label="Завершенные" />
        </Tabs>
        <Divider />
        <List>
          <Item text="Задача 1" />
        </List>
        <Divider />
        <div className="check-buttons">
          <Button>Отметить все</Button>
          <Button>Очистить</Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
