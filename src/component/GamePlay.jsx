import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(4);
  const [error, setError] = useState("");
  const [rules, setRules] = useState(false);

  const genRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    const randNum = genRandom(1, 7);
    setCurrentDice((prev) => randNum);

    if (selectedNumber === randNum) {
      setScore((prev) => prev + randNum);
    } else {
      setScore((prev) => prev - randNum);
    }

    setSelectedNumber(undefined);
  };
  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <div className="rolldice">
        <RollDice currentDice={currentDice} roleDice={roleDice} />
      </div>
      <div className="btn">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => {setRules((prev) => !prev);}}>{rules ? "Hide":"Show"} Rules{" "}</Button>
      </div>
      {rules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .btn {
    display: flex;
    width: 220px;
    padding: 10px 18px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 0 auto;
    margin-top: 40px;
  }
`;
