import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./screens/Home";
import { LeftMenu } from "./components/LeftMenu";
import { Grid } from "@mui/material";
import { NavBar } from "./components/NavBar";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <div id="main-containter">
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <NavBar />
          <div id="application-container">
            <Grid container spacing={2}>
              <Grid item xs={6} md={2}>
                <LeftMenu />
              </Grid>
              <Grid item xs={6} md={10}>
                <Container fixed>
                  <Routes>
                    <Route path="/" element={<Home />} />
                  </Routes>
                </Container>
              </Grid>
            </Grid>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
