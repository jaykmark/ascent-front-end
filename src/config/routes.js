import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Landing from '../components/Landing/Landing';
import Login from '../components/Auth/Login';
import ProfileContainer from '../containers/ProfileContainer';


function Routes({ setCurrentUser, history }) {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/login" render={() => <Login setCurrentUser={setCurrentUser} history={history} />} />
      <Route path="/profile" component={ProfileContainer} />
    </Switch>
  )
};

export default withRouter(Routes);