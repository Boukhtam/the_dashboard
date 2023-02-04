import React from 'react';
import { Layout, Menu } from 'antd';

import SecondContainer from './containers/SecondContainer/SecondContainer';
import NormalLoginForm from './containers/LoginContainer/LoginContainer';
import MainConatier from './containers/MainContainer/MainContainer';

import { BrowserRouter , Switch, Route, Link} from "react-router-dom"
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

const { Header } = Layout;

const items1 = ['home', 'login', 'second'].map((key) => ({
  key,
  label: <Link to={`/${key}`}>{key}</Link>,
}));

const App = () => {
  return (
    <BrowserRouter>
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']} items={items1}>
          <Menu.Item>
            Hello ...
          </Menu.Item>
        </Menu>
      </Header>

      <Switch>
        <Route path="/login">
          <NormalLoginForm />
        </Route>
        <ProtectedRoute path="/second">
          <SecondContainer />
        </ProtectedRoute>
        <Route path="/">
          <MainConatier />
        </Route>
      </Switch>

    </Layout>
    </BrowserRouter>
  );
};
export default App;