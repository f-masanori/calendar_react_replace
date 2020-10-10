import style from 'styled-components';

const styledComponents = {
  LayoutStyles: {
    Body: {
      Grid: style.div`

        display: grid;
        grid-template-columns: 300px 1fr;
        grid-template-rows: 80px 1fr;
`,
    },
    Header: {
      Grid: style.div`

        background-color: #008080;
        display: grid;
        grid-column: 1 / 3;
        grid-row: 1 / 2;
        grid-template-columns: 40px 1fr 1fr 1fr 1fr 40px;
`,
      Item: style.div`

        grid-column: ${({ theme }) => theme.column};
        max-height: 80px;
`,
    },
    Main: {
      Grid: style.div`

        background-color: #ffe4c4;
        display: grid;
        grid-column: 2 / 3;
        grid-row: 2 / 3;
        grid-template-columns: 100px 1fr 1fr 1fr 1fr 100px;
        height: calc(100vh - 80px);
        overflow-y: scroll;
`,
      Item: style.div`

        grid-column: ${({ theme }) => theme.column};
        grid-row: ${({ theme }) => theme.row};
        height: 200px;
`,
    },
    Sidepane: {
      Grid: style.div`

        background-color: #696969;
        grid-column: 1 / 2;
        grid-row: 2 / 3;
        height: calc(100vh - 80px);
        overflow-y: scroll;
`,
      Item: style.div`

        height: 200px;
        width: 100%;
`,
    },
  },
  ComponentStyles: {
    // As you prefer...
  },
};

export default styledComponents;
