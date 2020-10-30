import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { Container, Button, Checkbox, Form } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginForm } from '../../hooks/useLoginForm';
import { getAllEvent } from '../../actionCreaters/event';
import { ConbineState } from '../../reducer/index';
import {
  registerUser,
  getAllEventByAPI,
} from '../../services/backendAPI/event';
import {
  firebaseLogin,
  firebaseSignUp,
  firebaseSignOut,
  isFBLogined,
  firebaseDeleteCurrentUser,
} from '../../services/firebase/authentication/authentication';

const Login = (): JSX.Element => {
  const {
    email,
    handleEmail,
    password,
    handlePassword,
    submitLoginForm,
  } = useLoginForm();
  const history = useHistory();
  const loginUserState = useSelector((state: ConbineState) => state.loginUser);
  const dispatch = useDispatch();

  console.log('login comp');

  return (
    <Container>
      <p>ログイン</p>
      <Form>
        <Form.Field>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={e => handleEmail(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type="text"
            value={password}
            onChange={e => handlePassword(e.target.value)}
          />
        </Form.Field>
        <Button onClick={e => submitLoginForm(history)}>Submit</Button>
      </Form>
    </Container>
  );
};

export default withRouter(Login);
