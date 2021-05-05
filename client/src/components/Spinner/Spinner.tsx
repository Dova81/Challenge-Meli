import styled, { keyframes } from "styled-components";


const SpinnerContainer = styled.div`
    display:flex;
    height:92vh;
    justify-content: center;
    align-items: center;
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export default function SpinnerWrapper() {
    return (
        <SpinnerContainer>
            <Spinner />
        </SpinnerContainer>

    )
};