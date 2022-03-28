import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SiCodechef } from 'react-icons/si';

import { Container, LoginButton, LoginForm, LoginInput } from './style';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disableButton, setDisableButton] = useState(true);
  const [isDigit, setIsDigit] = useState(false);
  const passwordMinumunNumber = 6;

  useEffect(() => {
    const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (mailformat.test(email) && password.length > passwordMinumunNumber) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [email, password]);

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('foods');
  };

  return (
    <Container>
      <SiCodechef
        className={ `absolute top-[4.5rem] w-36 h-36
        ${isDigit ? 'text-background' : 'text-sections'} mb-4` }
      />
      <LoginForm>
        <LoginInput
          name="email"
          type="text"
          placeholder="Email"
          data-testid="email-input"
          onChange={ ({ target: { value } }) => setEmail(value) }
          onFocus={ () => {
            setIsDigit(true);
          } }
          onBlur={ () => {
            setIsDigit(false);
          } }
        />
        <LoginInput
          type="password"
          placeholder="Password"
          data-testid="password-input"
          onChange={ ({ target: { value } }) => setPassword(value) }
          onFocus={ () => {
            setIsDigit(true);
          } }
          onBlur={ () => {
            setIsDigit(false);
          } }
        />
        <LoginButton
          type="submit"
          data-testid="login-submit-btn"
          disabled={ disableButton }
          onClick={ handleClick }
        >
          Login
        </LoginButton>
      </LoginForm>
    </Container>
  );
}

export default Login;
