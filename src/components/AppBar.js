import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
 import { authSelectors } from '../redux/auth';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

export default function AppBar() {
  
const isLoggeIn = useSelector(authSelectors.getIsAuthenticated)

 return (
    <header style={styles.header}>
      <Navigation />
      {isLoggeIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};


// useSelector

// const mapStateToProps = state => ({
//   isLoggeIn: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(AppBar);