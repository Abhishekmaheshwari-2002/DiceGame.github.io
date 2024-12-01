import styled from "styled-components";

const NumberSelector = ({ setError, error, selectedNumber, setSelectedNumber }) => {
  const arrayNum = [1, 2, 3, 4, 5, 6];
  const numSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("")
  }
  return (
    <NumberSelectorContainer>
      <p className="err">{error}</p>
      <div className="flex">
        {arrayNum.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => numSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .flex {
    display: flex;
    gap: 30px;
  }

  p {
    color: #000;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .err{
     color: red;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
`;

const Box = styled.div`
  display: flex;
  width: 72px;
  height: 72px;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  background: #fff;
  cursor: pointer;

  color: #000;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
