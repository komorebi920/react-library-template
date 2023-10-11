import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import React from "react";
import styled from "styled-components";
import { Button } from "antd";

const StyledLogo = styled.img`
  width: 80px;
  height: 80px;
  padding: 20px;
`;

const StyledCard = styled.div`
  padding: 24px;
`;

const StyledButton = styled(Button)`
  margin-bottom: 24px;
`;

const StyledTips = styled.p`
  color: #888;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <StyledLogo src={viteLogo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <StyledLogo src={reactLogo} alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <StyledCard>
        <StyledButton onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </StyledButton>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </StyledCard>
      <StyledTips>Click on the Vite and React logos to learn more</StyledTips>
    </>
  );
}

export default App;
