import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 25%;
`;

export const Stars = styled.div`
  height: 20%;
  width: 100%;
  display: flex;

  align-items: center;
  justify-content: flex-end;

  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    justify-content: space-around;

    padding-left: 20px;

    li {
      width: 100%;
      img {
        width: 30px;
      }
    }
  }

  div {
    height: 100%;
    width: 20%;
    font-family: Helvetica, sans-serif;
    color: #df7e38;
    font-size: 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const Resume = styled.div`
  width: 100%;
  height: 80%;

  padding-left: 20px;

  div {
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    div {
      height: 30%;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;

      justify-content: flex-start;

      span {
        font-family: Helvetica, sans-serif;
        font-size: 16px;
        margin-left: 10px;
      }
    }
  }
`;
