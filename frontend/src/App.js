import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./screens/Home";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <main>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Container fixed>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Container>
        </ThemeProvider>
      </main>

      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
