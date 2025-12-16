import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaCitas from "./pages/ListaCitas";
import NuevaCita from "./pages/NuevaCita";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListaCitas />} />
        <Route path="/nueva-cita" element={<NuevaCita />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
