import React, { useContext } from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';

// const LoadingScreenStyled = styled.div({
//   pointerEvents: 'none',
//   zIndex: '1000',
//   backgroundColor: 'gray',
// });
// const LoadingScreenStyled = styled.div(() => ({
//   // pointerEvents: 'none',
//   // zIndex: '1000',
//   pointerEvents: 'none',
//   background: 'gray',
// }));
const LoadingScreenStyled = styled.div`

  background-color: #0bd;
  height: 100vh;
  left: 0;
  opacity: 0.55;
  position: fixed;
  top: 0;
  transition: all 1s;
  width: 100vw;
  z-index: 9999;
`;

export const LoadingScreen = (): JSX.Element => {
  return (
    <>
      <LoadingScreenStyled />
    </>
  );
};
