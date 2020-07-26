import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from '@reach/router';
import SimpleBar from 'simplebar-react';
import { SettingsNav } from '../../components/dashboard/nav/settingsNav';

const Container = styled.div`
  width: 100%;
  display: flex;
  height: calc(100vh - 145px);
`;

interface IProps extends RouteComponentProps {
  children: React.ReactNode;
}
export const Settings: React.FC<IProps> = ({ children }) => (
  <Container>
    <SettingsNav />
    <SimpleBar style={{ height: '80%', width: '100%' }}>
      {children}
    </SimpleBar>
  </Container>
);
