import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styledComponents from './header-styles';
import { Button } from '../atoms/buttons';
import { ConbineState } from '../../reducer/index';
import { signOut } from '../../actionCreaters/authentication';
import firebase from '../../services/firebase/firebase';

const HeaderGrid = styledComponents.LayoutStyles.Header.Grid;
const HeaderItem = styledComponents.LayoutStyles.Header.Item;
interface HeaderProps {
  UID: string;
}

const Header: React.FC<HeaderProps> = props => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);
  const [isLogined, setIsLogined] = useState(false);
  const { UID } = props;

  useEffect(() => {
    console.log(props);

    if (UID !== '' && UID !== 'noUser') {
      setIsLogined(true);
    }
  }, [UID]);

  return isLogined ? (
    <HeaderGrid>
      <HeaderItem theme={{ column: '2 / 3' }} />
      <HeaderItem theme={{ column: '3 / 4' }}>
        <Button onClick={e => history.push('/calendar')}>calendar</Button>
      </HeaderItem>
      <HeaderItem theme={{ column: '5 / 6' }}>
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
  ) : (
    <HeaderGrid>
      <HeaderItem theme={{ column: '2 / 3' }} />
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
