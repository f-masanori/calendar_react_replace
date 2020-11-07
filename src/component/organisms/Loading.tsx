import React, { useContext } from 'react';
import styled from 'styled-components';
import Spinner from 'react-bootstrap/Spinner';

const MySpinner = styled(Spinner)`

  margin: 10px;
`;
const LoadingScreenStyled = styled.div`

  align-items: center;
  background-color: rgba(128, 128, 128, 0.8);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  opacity: 0.55;
  position: fixed;
  text-align: center;
  top: 0;
  transition: all 1s;
  width: 100vw;
  z-index: 9999;
`;

export const LoadingScreen = (): JSX.Element => {
  return (
    <>
      <LoadingScreenStyled>
        <MySpinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </MySpinner>
        Loading...
      </LoadingScreenStyled>
    </>
  );
};
