import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header.component";
import Body from "./components/body/body.component";
import SideBar from "./components/sidebar/sidebar.component";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />

      {/* <Routes>
        <Route path="/" element={<Header />}>
          <Route index={true} element={<SideBar />} />
          <Route index={true} element={<Body />} />
        </Route>
      </Routes> */}
    </div>
  );
};

export default App;
