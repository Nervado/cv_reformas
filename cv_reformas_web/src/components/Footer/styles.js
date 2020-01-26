import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  width: 100%;
  padding: 60px;
  display: flex;

  justify-content: space-between;
  align-items: center;
  font-family: Helvetica, sans-serif;
  font-size: 18px;

  div {
    width: 33%;

    div {
      height: 100px;
      width: 100%;
      display: flex;
      justify-content: center;

      align-items: center;

      img {
        width: 30%;
        margin-top: -20px;
        margin-left: 10px;
      }
      div {
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }
  }
`;
