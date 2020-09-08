import { useState, useEffect } from 'react';
import firebase from '../firebase';

export const useLoginForm = (): {
  email: string;
  handleEmail: (e: string) => void;
  password: string;
  handlePassword: (p: string) => void;
} => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmail = (e: string) => {
    console.log(e);
    setEmail(e);
  };

  const handlePassword = (p: string) => {
    setPassword(p);
  };

  return { email, handleEmail, password, handlePassword };
};
