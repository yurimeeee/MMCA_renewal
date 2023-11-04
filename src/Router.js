import React from "react";
// import React, { useContext } from "react"; // React와 useContext import
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";

// import App from "./App";
// const { basename } = useContext(SomeContext) || {}; // null인 경우 빈 객체 반환

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Preview"></Route>
        <Route path="/exhibit"></Route>
        <Route path="/education"></Route>
        <Route path="/collection"></Route>
        <Route path="/research"></Route>
        <Route path="/digital"></Route>
      </Routes>
    </>
  );
};

export default AppRouter;
