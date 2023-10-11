import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import React from "react";
import styled from "styled-components";

const { Header } = Layout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const StyledHeader = styled(Header)`
  padding: 0;
  background: #fff;
`;

export default () => (
  <StyledHeader>
    <Menu mode="horizontal" defaultSelectedKeys={["2"]} items={items1} />
  </StyledHeader>
);
