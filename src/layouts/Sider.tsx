import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import React from 'react';
import styled from 'styled-components';

const { Sider } = Layout;

const items2: MenuProps['items'] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
  };
});

const StyledSider = styled(Sider)`
  min-width: 50px !important;
  width: 50px !important;
  max-width: 50px !important;
  flex: 0 0 50px !important;
`;

const StyledMenu = styled(Menu)`
  width: 50px;
  height: 100%;
  border-right: 0;
`;

export default () => (
  <StyledSider collapsed={true}>
    <StyledMenu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      items={items2}
    />
  </StyledSider>
);
