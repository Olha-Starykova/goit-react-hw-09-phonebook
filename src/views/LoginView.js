import React, { useState, useCallback} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
 import { useDispatch } from 'react-redux';
 import { authOperations } from '../redux/auth';


const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    margin: 20,
  },
  card: {
    margin: 15,
  },
  logoDiv: {
    padding: 20,
   }
};

export default function LoginView() {

   const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  


    return (
      <div style={styles.logoDiv}>
        <Card style={styles.card}>
          <CardActionArea>
            <h1>Страница логина</h1>

            <form
              onSubmit={handleSubmit}
              style={styles.form}
              autoComplete="off"
            >
              <label style={styles.label}>
                Почта
            <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </label>

              <label style={styles.label}>
                Пароль
            <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </label>
              <Button type="submit" size="small" color="secondary">
                Войти
              </Button>
              {/* <button type="submit">Войти</button> */}
            </form>
          </CardActionArea>
        </Card>
    
      </div>
    );
  }


// const mapDispatchToProps = {
//   onLogin: authOperations.logIn,
// };

// export default connect(null, mapDispatchToProps)(LoginView);


// import React, { Component } from 'react';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import Button from '@material-ui/core/Button';
//  import { connect } from 'react-redux';
//  import { authOperations } from '../redux/auth';


// const styles = {
//   form: {
//     width: 320,
//   },
//   label: {
//     display: 'flex',
//     flexDirection: 'column',
//     margin: 20,
//   },
//   card: {
//     margin: 15,
//   },
//   logoDiv: {
//     padding: 20,
//    }
// };

// class LoginView extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onLogin(this.state);

//     this.setState({ name: '', email: '', password: '' });
//   };

//   render() {
//     const { email, password } = this.state;

//     return (
//       <div style={styles.logoDiv}>
//         <Card style={styles.card}>
//           <CardActionArea>
//             <h1>Страница логина</h1>

//             <form
//               onSubmit={this.handleSubmit}
//               style={styles.form}
//               autoComplete="off"
//             >
//               <label style={styles.label}>
//                 Почта
//             <input
//                   type="email"
//                   name="email"
//                   value={email}
//                   onChange={this.handleChange}
//                 />
//               </label>

//               <label style={styles.label}>
//                 Пароль
//             <input
//                   type="password"
//                   name="password"
//                   value={password}
//                   onChange={this.handleChange}
//                 />
//               </label>
//               <Button type="submit" size="small" color="secondary">
//                 Войти
//               </Button>
//               {/* <button type="submit">Войти</button> */}
//             </form>
//           </CardActionArea>
//         </Card>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onLogin: authOperations.logIn,
// };

// export default connect(null, mapDispatchToProps)(LoginView);