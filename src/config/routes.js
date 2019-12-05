import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../components/Landing/Landing';


function Routes(props) {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
    </Switch>
  )
};

export default Routes;