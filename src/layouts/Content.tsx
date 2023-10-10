import { Layout } from 'antd';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

const { Content } = Layout;

interface Props {
  children?: ReactNode;
}

const StyledContent = styled(Content)`
  margin: 0;
`;

export default (props: Props) => (
  <StyledContent>{props.children}</StyledContent>
);
