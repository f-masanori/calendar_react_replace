import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { Container, Button, Checkbox, Form } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginForm } from '../../hooks/useLoginForm';
import { ConbineState } from '../../reducer/index';
import { LoadingScreen } from '../organisms/Loading';

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

  return (
    <Container>
      {loginUserState.isLoading && <LoadingScreen />}
      <p>login</p>
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
