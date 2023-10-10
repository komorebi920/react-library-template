import { Layout } from "antd";
import React from "react";
import styled from "styled-components";
import Content from "./layouts/Content";
import Header from "./layouts/Header";
import Sider from "./layouts/Sider";
import Count from "./components/Count";

const StyledApp = styled(Layout)`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const StyledMain = styled(Layout)`
  position: relative;
  overflow: auto;
`;

const App: React.FC = () => (
  <StyledApp>
    <Header />
    <StyledMain>
      <Sider />
      <Content>
        <Count />
      </Content>
    </StyledMain>
  </StyledApp>
);

export default App;
