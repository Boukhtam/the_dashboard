import React, { useState } from 'react';
import { Layout, Menu } from 'antd';

import SecondContainer from './containers/SecondContainer/SecondContainer';
import NormalLoginForm from './containers/LoginContainer/LoginContainer';
import MainConatier from './containers/MainContainer/MainContainer';

import { BrowserRouter, Switch, Route, Link, useRouteMatch} from "react-router-dom"
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

const { Header } = Layout;

const items1 = ['home', 'login', 'second'].map((key) => ({
  key,
  label: <Link to={`/${key}`}>{key}</Link>,
}));

const App = () => {
  //const match = useRouteMatch()
  //console.log({match})
  const [currentTabKey, setCurrentTabKey] = React.useState("home")
  function onTabSelect(selected) {
    setCurrentTabKey(selected.key)
  }

  return (
    <BrowserRouter>
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu 
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['home']}
          selectedKeys={[currentTabKey]} 
          items={items1}
          onSelect={onTabSelect}
        >
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