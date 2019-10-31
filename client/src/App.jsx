import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminState from './context/admin/adminState';
import ClientState from './context/client/clientState';
import GithubState from './context/github/githubState';
import home from './component/pages/home';
import register from './component/auth/register';
import login from './component/auth/login';
import GitHubProfile from './component/pages/github';
import Admin from './component/pages/admin';
import PrivateRoute from './routing/privateRoute'
import AlertState from './context/alert/alertState';
import Alert from './component/layout/Alert';
import AuthState from './context/auth/authState';
import setAuthToken from './utils/setAuthToken';
import about from './component/pages/about'
import notFoundPage from './component/pages/NotFoundPage'

import './App.css';

const App = () => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  return (
    <AuthState>
      <AdminState>
        <ClientState>
          <GithubState>
            <AlertState>
              <Router>
                <Fragment>
                 
                  <Switch>
                    <Route exact path="/" component={home} />
                    <Route exact path="/profile" component={GitHubProfile} />
                    <PrivateRoute exact path="/admin" component={Admin} />
                    <Route exact path="/register" component={register} />
                    <Route exact path="/login" component={login} />
                    <Route exact path="/about" component={about} />
                    <Route component={notFoundPage} />
                  </Switch>
                </Fragment>
              </Router>
            </AlertState>
          </GithubState>
        </ClientState>
      </AdminState>
    </AuthState>
  );
};

export default App;
