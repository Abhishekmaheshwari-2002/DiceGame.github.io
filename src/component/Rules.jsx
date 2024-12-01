import styled from "styled-components";

const Rules = () => {
    return (
        <RulesContainer>
            <h2>How to play dice game</h2>
            <p>
                <li>1.Select any number</li>
                <li>2.Click on dice image</li>
                <li>3.after click on dice if selected number is equal to dice number you will get same point as dice</li>
                <li>4.if you get wrong guess then 2 point will be dedcuted</li>
            </p>
        </RulesContainer>
    );
};

export default Rules;
const RulesContainer = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  background: #fbf1f1;
  /* max-width: 800px; */
  margin: 0 auto;
  margin-top: 40px;

  h2 {
    color: #000;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  p {
    color: #000;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  
  }
  li{
    list-style: none;
  }
`;
