import styled from 'styled-components';

export const Button = styled.button((props: any) => {
  const color = props.primary ? 'white' : 'blue';

  return {
    border: '2px solid',
    borderRadius: '3px',
    color,
    padding: '0.25em 1em',
    margin: '1em',
    fontSize: '1em',
  };
});

// export const Button = styled.button`
//   border: 2px solid ${props => props.theme.main};
//   border-radius: 3px;

//   /* Color the border and text with theme.main */
//   color: ${props => props.theme.main};
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
// `;
