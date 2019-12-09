import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Landing from '../components/Landing/Landing';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import ProfileContainer from '../containers/ProfileContainer';
import SkillDetailContainer from '../containers/SkillDetailContainer';


function Routes({ setCurrentUser, history }) {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/login" render={() => <Login setCurrentUser={setCurrentUser} history={history} />} />
      <Route path="/register" render={() => <Register setCurrentUser={setCurrentUser} history={history} />} />
      <Route path="/profile" component={ProfileContainer} />
      <Route path="/skills/:id" component={SkillDetailContainer} />
    </Switch>
  )
};

export default withRouter(Routes);