import styled from "styled-components";
import { Button } from "../styled/Button"
const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/image/dices 1.png" alt="Dices" />
      </div>
      <div className="content">
        <h1>
          DICE GAME
        </h1>
        <Button onClick={toggle} aria-label="Start the Dice Game">
          Play Now
        </Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
 
  .content{
    h1{
      font-size: 96px;
      white-space: nowrap;

    }
  }
  @media (max-width: 768px) {
    .content h1 {
      font-size: 48px; // Responsive font size
    }
  }
`;

