import React, { useState  } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';

import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth/';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
  regDiv: {
    padding: 20
  }
};

export default function RegisterView() {
   
const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  

  // state = {
  //   name: '',
  //   email: '',
  //   password: '',
  // };

  // handleChange = ({ target: { name, value } }) => {
  //   this.setState({ [name]: value });
  // };

  // handleSubmit = e => {
  //   e.preventDefault();

  //   this.props.onRegister(this.state);

  //   this.setState({ name: '', email: '', password: '' });
  // };



    return (
      <div style={styles.regDiv}>
        <Card>
          <CardActionArea>
        <h1>Страница регистрации</h1>

        <form
          onSubmit={handleSubmit}
          style={styles.form}
          autoComplete="off"
        >
          <label style={styles.label}>
            Имя
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>

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
             Зарегистрироваться
              </Button>
          {/* <button type="submit">Зарегистрироваться</button> */}
            </form>
            </CardActionArea>
          </Card>
      </div>
    );
  }


// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };

// export default connect(null, mapDispatchToProps)(RegisterView);