import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Kanban } from "./Kanban";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Kanban />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
