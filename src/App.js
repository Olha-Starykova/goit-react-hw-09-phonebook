import React, { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
 //import HomeView from './views/HomeView'
 //import RegisterView from './views/RegisterView'
//import LoginView from './views/LoginView'
 //import TodosView from './views/TodosView'
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import { authOperations } from './redux/auth';
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const TodosView = lazy(() => import('./views/TodosView'));


class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }


  render() {
    return (
      <div>
        <AppBar />
        
        <Suspense fallback={<p>Загружаем...</p>}>
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/contacts"
              component={RegisterView}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={LoginView}
            />
            <PrivateRoute
              path="/contacts"
              redirectTo="/login"
              component={TodosView}
            />
          </Switch>
        </Suspense>
      </div>
    );
  }
}


const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
};


export default connect(null, mapDispatchToProps)(App);