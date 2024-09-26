import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
              <Route path="/homeScreen" element={<HomeScreen />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
