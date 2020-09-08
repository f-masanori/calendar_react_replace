import React, { useContext } from 'react';
import { withRouter } from 'react-router';
import { useLoginForm } from '../hooks/useLoginForm';

const Login = (): JSX.Element => {
  const { email, handleEmail, password, handlePassword } = useLoginForm();

  return (
    <>
      <div>login</div>
      <form>
        Emal:
        <input
          type="text"
          value={email}
          onChange={e => handleEmail(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default withRouter(Login);
