import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
const Home = React.lazy(() => import("./Home"));
import Create from "./Create";
import Update from "./Update";
const Read = React.lazy(() => import("./Read"));
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <Suspense fallback={<h2>Wait Data is loading </h2>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path={`/update/:id`} element={<Update />}></Route>
          <Route path="/read/:id" element={<Read />}></Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
