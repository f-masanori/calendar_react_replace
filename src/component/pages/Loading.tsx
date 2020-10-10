import React, { useContext } from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';

// const LoadingScreenStyled = styled.div({
//   pointerEvents: 'none',
//   zIndex: '1000',
//   backgroundColor: 'gray',
// });
const LoadingScreenStyled = styled.div((props: any) => ({
  // pointerEvents: 'none',
  // zIndex: '1000',
  backgroundColor: 'gray',
}));

export const LoadingScreen = (): JSX.Element => {
  return (
    <>
      <LoadingScreenStyled />
    </>
  );
};
