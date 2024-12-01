import styled from "styled-components";

const RollDice = ({ currentDice, roleDice }) => {


  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/image/dice_${currentDice}.png`} alt="img" />
      </div>
      <p>Click on Dice to roll</p>
      {/* <Button onClick={toggle}>Reset Score</Button>
      <Button onClick={toggle}>Show Rules</Button> */}
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 150px;
    height: 150px;
    cursor: pointer;
  }
  p {
    color: #000;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
// const Button = styled.button`
//   min-width: 220px;
//   padding: 10px 18px;
//   background: #000000;
//   border-radius: 5px;
//   border: none;
//   color: white;
//   color: #fff;
//   font-family: Poppins;
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 600;
//   line-height: normal;
//   border: 1px solid transparent;
//   cursor: pointer;
//   transition: 0.5s background ease-in;

//   &:hover {
//     background-color: white;
//     border: 1px solid black;
//     color: black;
//     transition: 0.3s background ease-in;
//   }
// `;
