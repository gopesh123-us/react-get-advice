import React, { useState, useEffect } from "react";
import "./app.css";
import Advice from "./Components/Advice";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    getAdvice();
  }, []);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
    //console.log(data.slip.advice);
  }
  return (
    <div>
      <button className="button" onClick={getAdvice}>
        Get Advice
      </button>
      <p className="counter-text">
        You have read <strong>{count}</strong> pieces of advice
      </p>
      <Advice adv={advice} />
    </div>
  );
}
