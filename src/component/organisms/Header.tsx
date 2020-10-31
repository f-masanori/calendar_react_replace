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
  UID: string;
}

const Header: React.FC<HeaderProps> = props => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLogined, setIsLogined] = useState(false);
  const { UID } = props;
  useEffect(() => {
    if (UID !== '' && UID !== 'noUser') {
      setIsLogined(true);
    }
  }, [UID]);

  return (
    <Navbar bg="light" expand="lg">
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
            <Button onClick={e => history.push('/calendar')}>calendar</Button>
            <Button
              onClick={e => {
                dispatch(signOut.start());
                history.push('/login');
              }}
            >
              signout
            </Button>
            <Navbar.Text>
              Signed in as: <a href="#">{UID}</a>
            </Navbar.Text>
          </>
        ) : (
          <>
            <Button onClick={e => history.push('/login')}>login</Button>
            <Button
              onClick={e => {
                dispatch(signOut.start());
                history.push('/login');
              }}
            >
              signout
            </Button>
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
