import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

/**
 * - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на /todos
 * - В противном случае рендерит компонент
 */
const PublicRoute = ({

  isAuthenticated,
  redirectTo,
  children,
  ...routeProps
}) => {
  const isLoggeIn = useSelector(authSelectors.getIsAuthenticated)
  return <Route {...routeProps}>
    {isLoggeIn && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) :( children)}
  </Route>
};

export default PublicRoute;

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(PublicRoute);

    // render={props =>
    //   isAuthenticated && routeProps.restricted ? (
    //     <Redirect to={redirectTo} />
    //   ) : (
    //     <Component {...props} />
    //   )
    // }