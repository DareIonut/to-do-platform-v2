import axios from "axios";
import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Card from "../components/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [errorField, setErrorField] = useState(false);
  const [helperText, setHelperText] = useState(false);

  const clickHandler = async () => {
    const body = {
      todoTitle: value,
      todoDescription: "Is this thing working?",
      isChecked: false,
    };

    await axios
      .post("http://localhost:5000/api/todos", body)
      .then((response) => {
        console.log(response.data);
        getData();
        setValue("");
        setErrorField(false);
        setHelperText(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorField(true);
        setHelperText(true);
      });
  };

  const getData = async () => {
    await axios
      .get("http://localhost:5000/api/todos")
      .then((response) => {
        setTodos(response.data);
        console.log(todos);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    // Make a GET request when the component mounts
    getData();
  }, []);
  return (
    <div className="App">
      <Stack direction="row" spacing={2} sx={{ m: 5 }}>
        <TextField
          autoComplete="no"
          error={errorField ? true : false}
          helperText={helperText ? "Introduce the todo!" : false}
          id="outlined-basic"
          label="Introduce todo"
          variant="outlined"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Interview at 16"
        />
        <Button variant="contained" onClick={clickHandler}>
          <AddIcon fontSize="large" />
        </Button>
      </Stack>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {todos.map((todo) => (
            <Grid item xs={2} sm={4} md={4}>
              <Card
                keyId={todo.id}
                title={todo.todoTitle}
                description={todo.todoDescription}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
