import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import VisitorCounter from "./components/VisitorCounter";

import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/project/:id"
          element={<ProjectDetails />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

      <VisitorCounter />

    </BrowserRouter>
  );
}