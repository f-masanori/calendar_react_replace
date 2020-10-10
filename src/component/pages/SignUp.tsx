import React, { useContext, useEffect } from 'react';
import { withRouter } from 'react-router';
import { Container, Button, Checkbox, Form } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginForm } from '../../hooks/useLoginForm';
import { signUp } from '../../actionCreaters/authentication';
import { ConbineState } from '../../reducer/index';

const SignUp = (): JSX.Element => {
  const { email, handleEmail, password, handlePassword } = useLoginForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const loginUserState = useSelector((state: ConbineState) => state.loginUser);
  const submitForm = () => {
    dispatch(signUp.start({ email, password }));
  };
  useEffect(() => {
    console.log('signup useEffect');
    if (loginUserState.uid) {
      history.push('/calendar');
    }
  }, []);

  return (
    <Container>
      <Form onSubmit={submitForm}>
        <Form.Field>
          <p>Email</p>
          <input
            type="text"
            value={email}
            onChange={e => handleEmail(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <p>Password</p>
          <input
            type="text"
            value={password}
            onChange={e => handlePassword(e.target.value)}
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default withRouter(SignUp);
