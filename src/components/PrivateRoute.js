import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на /login
 */
export default function PrivateRoute ({
   isAuthenticated,
  redirectTo,
   children,
  ...routeProps
}) {

  const isLoggeIn = useSelector(authSelectors.getIsAuthenticated)

  return (
    <Route {...routeProps}>
      {isLoggeIn ? (children) : <Redirect to={redirectTo} />}
    </Route>
  );
}

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(PrivateRoute);

  // render={props =>
  //       isLoggeIn ? <Component {...props} /> : <Redirect to={redirectTo} />