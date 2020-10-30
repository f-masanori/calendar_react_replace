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

const Header: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);
  const [isLogined, setIsLogined] = useState(false);
  // const UID = useSelector((state: ConbineState) => state.loginUser.uid);
  // if (UID !== '' && UID !== 'noUser') {
  //   setIsLogined(true);
  // }
  // useEffect(() => {
  //   if (UID)
  //     firebase.auth().onAuthStateChanged(user => {
  //       console.log('call onAuthStateChanged');
  //       if (user) {
  //         console.log(user.uid);
  //         setIsLogined(true);
  //       } else {
  //         console.log('not logined');

  //         setIsLogined(false);
  //       }
  //       setAuthChecked(true);
  //     });
  // }, []);

  return isLogined ? (
    <HeaderGrid>
      <HeaderItem theme={{ column: '2 / 3' }}>
        {/* <Button
          onClick={e => {
            firebase.auth().onAuthStateChanged(user => {
              if (user) {
                console.log(user.uid);
              } else {
                console.log('not logined');
              }
            });
          }}
        >
          uid確認
        </Button> */}
      </HeaderItem>
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
