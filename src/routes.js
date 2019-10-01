import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Welcome from '././components/Welcome/Welcome';
import Home from '././components/Home/Home';
import Employee from '././components/Employee/Employee';
import ForgotPassword from '././components/Employee/ForgotPassword';
import NotFound from '././components/NotFound/NotFound';

const Routes = () => (
<Router>
<Switch>
<Route exact path="/" component={Welcome}/>
<Route path="/home" component={Home}/>
<Route path="/employee" component={Employee}/>
<Route path="/forgotpassword" component={ForgotPassword}/>
<Route path="*" component={NotFound}/>
</Switch>
</Router>
);
export default Routes;