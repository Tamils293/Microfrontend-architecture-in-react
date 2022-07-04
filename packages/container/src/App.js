import React from 'react';
import ConfigureApp from './components/ConfigureApp';
import DashBoardApp from './components/DashBoardApp';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
export default () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/configure" component={ConfigureApp} />
          <Route exact path="/dashboard" component={DashBoardApp} />
          <Route path="/" component={Login} />
        </Switch>
      </BrowserRouter>
      <hr />
      {/* <MarketingApp /> */}
    </div>
  );
};
