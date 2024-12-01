import styled from "styled-components"
const TotalScore = ({ score }) => {
    return (
        <ScoreContainer>
            <h1>{score}</h1>
            <p>
                Total score
            </p>
        </ScoreContainer>
    )
}

export default TotalScore

const ScoreContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
max-width: 200px;
gap: 3px;

h1{
width: 62px;
height: 112px;
color: #000;
font-family: Poppins;
font-size: 100px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
p{
color: #000;
font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: normal;
}


`