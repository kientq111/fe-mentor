import "./App.css";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import ScoreTable from "./components/ScoreTable";
import { useState } from "react";
function App() {
  const [score, setScore] = useState(0);
  const [userChoice, setUserChoice] = useState();

  const handleChoice = (choice) => {
    setUserChoice(choice);
  };

  const handleScore = (newScore) => {
    setScore(score + newScore);
  };

  return (
    <div className="App">
      <div className="App-header">
        <ScoreTable score={score} />
        {userChoice ? (
          <StepTwo
            handleScore={handleScore}
            userChoice={userChoice}
            handleChoice={handleChoice}
          />
        ) : (
          <StepOne handleChoice={handleChoice} />
        )}
      </div>
    </div>
  );
}

export default App;
