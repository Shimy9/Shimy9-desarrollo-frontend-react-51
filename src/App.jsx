import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importando componentes


// Importando páginas
import NewsDetail from "./pages/NewsDetail";
import Home from "./pages/Home";


function App() {


  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
            <Home />
            </>
          }
        />
        <Route
          path="/news-detail"
          element={
            <>
            <NewsDetail />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
