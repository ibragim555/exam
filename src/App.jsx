import React from "react";
import Points from "./components/Points";
import ToDoList from "./components/ToDoList";
import Done from "./components/Done";

const App = () => {
  return (
    <>
      <Points />
      <div className="lists-container">
        <ToDoList />
        <Done />
      </div>
    </>
  );
};

export default App;
