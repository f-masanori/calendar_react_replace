import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actionCreaters/authentication';
import { firebaseLogin } from '../services/firebase/authentication/authentication';

export const useLoginForm = (): {
  email: string;
  handleEmail: (e: string) => void;
  password: string;
  handlePassword: (p: string) => void;
  submitLoginForm: (h: any) => void;
} => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const reduxState = useSelector(state => state);
  const dispatch = useDispatch();
  const handleEmail = (e: string) => {
    /* バリデーション未実装 */
    setEmail(e);
  };

  const handlePassword = (p: string) => {
    setPassword(p);
  };

  const submitLoginForm = async (history: any) => {
    dispatch(login.start({ email, password }));
    try {
      const uid = await firebaseLogin({ email, password });
      history.push('/calendar');
    } catch {
      /* エラーハンドリング未実装*/
    }
  };

  return { email, handleEmail, password, handlePassword, submitLoginForm };
};
