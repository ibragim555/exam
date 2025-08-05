import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeDone } from "../store/slices/DoneSlice";

const Done = () => {
  const done = useSelector((state) => state.done);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("done", JSON.stringify(done));
  }, [done]);

  const handleDelete = (id) => {
    dispatch(removeDone(id));
  };
  console.log(done);
  return (
    <div className="done-list">
      <h2>Done List</h2>
      {Array.isArray(done) &&
        done.map((item) => (
          <div>
            <h1>{item.name}</h1>
            <p>{item.comment}</p>
            <button onClick={() => handleDelete(item.id)}>🗑 Delete</button>
          </div>
        ))}
    </div>
  );
};

export default Done;
