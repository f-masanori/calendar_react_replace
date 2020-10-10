import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styledComponents from './header-styles';
import { Button } from '../atoms/buttons';
import { ConbineState } from '../../reducer/index';
import { signOut } from '../../actionCreaters/authentication';

const HeaderGrid = styledComponents.LayoutStyles.Header.Grid;
const HeaderItem = styledComponents.LayoutStyles.Header.Item;

const Header: React.FC = () => {
  const history = useHistory();
  const loginUserState = useSelector((state: ConbineState) => state.loginUser);
  const dispatch = useDispatch();
  console.log(loginUserState.uid);

  return (
    <HeaderGrid>
      <HeaderItem theme={{ column: '2 / 3' }}>
        <Button onClick={e => console.log(localStorage.getItem('uid'))}>
          uid確認
        </Button>
      </HeaderItem>
      <HeaderItem theme={{ column: '3 / 4' }}>
        <Button onClick={e => history.push('/calendar')}>calendar</Button>
      </HeaderItem>
      <HeaderItem theme={{ column: '4 / 5' }}>
        <Button onClick={e => history.push('/signup')}>signup</Button>
      </HeaderItem>
      <HeaderItem theme={{ column: '5 / 6' }}>
        <Button onClick={e => history.push('/login')}>login</Button>
        <Button
          onClick={e => {
            dispatch(signOut.start());
            history.push('/login');
          }}
        >
          signout
        </Button>
      </HeaderItem>
    </HeaderGrid>
  );
};

export default Header;
