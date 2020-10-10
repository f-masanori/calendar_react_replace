import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { Container, Button, Checkbox, Form } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginForm } from '../../hooks/useLoginForm';
import { getAllEvent } from '../../actionCreaters/event';
import { ConbineState } from '../../reducer/index';

const Login = (): JSX.Element => {
  const {
    email,
    handleEmail,
    password,
    handlePassword,
    submitLoginForm,
  } = useLoginForm();
  const history = useHistory();
  const submitForm = () => {
    submitLoginForm(history);
  };
  const loginUserState = useSelector((state: ConbineState) => state.loginUser);
  const dispatch = useDispatch();
  const test = () => {
    dispatch(getAllEvent.start({ uid: 'hoge' }));
  };
  useEffect(() => {
    console.log('signup useEffect');
    if (loginUserState.uid) {
      history.push('/calendar');
    }
  });

  return (
    <Container>
      <Form onSubmit={submitForm}>
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
        <Button type="submit">Submit</Button>
      </Form>
      <Button onClick={test}>testevent</Button>
    </Container>
  );
};

export default withRouter(Login);
