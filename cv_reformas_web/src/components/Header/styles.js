import styled from 'styled-components';

export const Container = styled.div`
  height: 150px;
  background: #fcfcfc;
  position: fixed;
  z-index: 1;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;

  background: #fcfcfc;
  height: 150px;
  max-width: 1800px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-around;

  nav {
    height: 100px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    div {
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;

      div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        button {
          height: 31px;
          width: 121px;

          border: none;

          margin-right: 10px;
          background: #df7e38;
          color: #fff;
          font-size: 20px;

          border-radius: 4px;

          font-display: 'Helvetica';

          text-align: center;
        }

        button:nth-child(2) {
          background: #707070;
          margin-right: 0;
        }

        button:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
