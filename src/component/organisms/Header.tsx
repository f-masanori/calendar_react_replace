import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Header as SemHeader, Icon, Segment } from 'semantic-ui-react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import styledComponents from './header-styles';
// import { Button } from '../atoms/buttons';
import { ConbineState } from '../../reducer/index';
import { signOut } from '../../actionCreaters/authentication';
import firebase from '../../services/firebase/firebase';

const HeaderGrid = styledComponents.LayoutStyles.Header.Grid;
const HeaderItem = styledComponents.LayoutStyles.Header.Item;
interface HeaderProps {
  uid: string;
  email: string;
}

const Header: React.FC<HeaderProps> = props => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLogined, setIsLogined] = useState(false);
  const { uid, email } = props;
  useEffect(() => {
    if (uid !== '' && uid !== 'noUser') {
      setIsLogined(true);
    }
  }, [uid]);

  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand>カレンダー</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            onClick={(e: any) => {
              history.push('/calendar');
            }}
          >
            Home
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        {isLogined ? (
          <>
            <Navbar.Text>
              Signed in as: <a href="#">{email}</a>
            </Navbar.Text>
            <Button
              variant="outline-info"
              onClick={e => history.push('/calendar')}
              size="sm"
            >
              calendar
            </Button>
            <Button
              variant="outline-info"
              size="sm"
              onClick={e => {
                dispatch(signOut.start());
                history.push('/login');
              }}
            >
              SignOut
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={e => history.push('/login')}
              variant="outline-info"
              size="sm"
            >
              ログイン
            </Button>
            <Button
              onClick={e => {
                history.push('/signup');
              }}
              variant="outline-info"
              size="sm"
            >
              登録する
            </Button>
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
