import React from "react";
import "./advice.css";

const Advice = (props) => {
  return (
    <>
      <div className="advice">{props.adv}</div>
    </>
  );
};

export default Advice;
