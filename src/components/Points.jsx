import React from "react";
import { useSelector } from "react-redux";

const Points = () => {
  const points = useSelector((state) => state.points);

  return (
    <div  className="points">
      <h2>Points: {points}</h2>
    </div>
  );
};

export default Points;
