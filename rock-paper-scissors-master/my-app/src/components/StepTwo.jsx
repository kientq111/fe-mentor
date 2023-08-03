import React from "react";
import Paper from "./Paper";
import Scissor from "./Scissor";
import Rock from "./Rock";
import { useEffect, useState, useRef } from "react";
const StepTwo = ({ handleScore, userChoice, handleChoice }) => {
  const [housePicker, setHousePicker] = useState(0);
  const dice = ["paper", "scissor", "rock"];
  const [result, setResult] = useState();
  let count = 0;
  const elementRefA = useRef(null);
  const elementRefB = useRef(null);
  const rollDice = () => {
    setHousePicker(dice[count]);
    count++;
    if (count > 2) {
      count = 0;
    }
  };

  const operation = (bot) => {
    if (userChoice === bot) {
      setResult("DRAW");
      return;
    }
    if (
      (userChoice === "paper" && bot === "scissor") ||
      (userChoice === "scissor" && bot === "rock") ||
      (userChoice === "rock" && bot === "paper")
    ) {
      setResult("YOU LOSE");
      handleScore(-10);
    } else {
      setResult("YOU WIN");
      handleScore(10);
    }
    console.log(userChoice, bot);
  };

  useEffect(() => {
    console.log('a')
    const elementA = elementRefA.current;
    const elementB = elementRefB.current;
    const rollingDice = setInterval(rollDice, 300);
    setTimeout(() => {
      clearInterval(rollingDice);
      const randomNum = Math.floor(Math.random() * 3);
      setHousePicker(dice[randomNum]);
      operation(dice[randomNum]);
      elementA.style.transform = "translateX(-100px)";
      elementB.style.transform = "translateX(100px)";
    }, 2000);
  }, []);

  const fakeHandle = (log) => {
    console.log(log);
  };

  return (
    <div className="step-two">
      <div
        style={{ width: 170, transition: "transform 0.4s ease-in-out" }}
        ref={elementRefA}
      >
        <h3 style={{ color: "white", marginLeft: 33, marginBottom: 30 }}>
          YOU PICKED
        </h3>
        {userChoice === "paper" && <Paper handleChoice={fakeHandle} />}
        {userChoice === "scissor" && <Scissor handleChoice={fakeHandle} />}
        {userChoice === "rock" && <Rock handleChoice={fakeHandle} />}
      </div>
      {result && (
        <div
          style={{
            height: 170,
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "column",
          }}
        >
          <h1 style={{ marginBlock: 10, color: "white" }}>{result}</h1>
          <button className="btn" onClick={() => handleChoice(undefined)}>
            PLAY AGAINT
          </button>
        </div>
      )}
      <div
        style={{ width: 180, transition: "transform 0.4s ease-in-out" }}
        ref={elementRefB}
      >
        <h3 style={{ color: "white", marginBottom: 30 }}>THE HOUSE PICKER</h3>
        {housePicker === "paper" && <Paper handleChoice={fakeHandle} />}
        {housePicker === "scissor" && <Scissor handleChoice={fakeHandle} />}
        {housePicker === "rock" && <Rock handleChoice={fakeHandle} />}
      </div>
    </div>
  );
};

export default StepTwo;
