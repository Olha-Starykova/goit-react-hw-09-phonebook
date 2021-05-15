import React, {  Suspense, lazy, useEffect } from 'react';
import {useDispatch } from 'react-redux';
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


export default function  App () {
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser())
  }, [dispatch]);
  
  return (
    <div>
      <AppBar />
        
      <Suspense fallback={<p>Загружаем...</p>}>
        <Switch>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
            
          <PublicRoute
            path="/register"
            restricted
            redirectTo="/contacts" >
            < RegisterView />
          </PublicRoute>
              
          <PublicRoute
            path="/login"
            restricted
            redirectTo="/contacts" >
            <LoginView />
          </PublicRoute>
            
          <PrivateRoute
            path="/contacts"
            redirectTo="/login">
            <TodosView />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </div>
  );
  }



