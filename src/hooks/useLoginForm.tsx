import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actionCreaters/authentication';

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
    console.log(e);
    // 必要であればバリデーション処理
    setEmail(e);
  };

  const handlePassword = (p: string) => {
    setPassword(p);
  };

  const submitLoginForm = (history: any) => {
    dispatch(login.start({ email, password }));
    console.log('submit処理');
  };

  return { email, handleEmail, password, handlePassword, submitLoginForm };
};
