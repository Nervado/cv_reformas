import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Lem = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 60%;

    p {
      text-align: center;
      font-family: 'Helvetica';
      font-size: 20px;
      color: #df7e38;
    }
  }
`;

export const Cards = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 50px 0 50px;
`;

export const Card = styled.li`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  box-shadow: 4px 4px 5px #666;

  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    img {
      margin-top: 10%;
      width: 250px;
      height: 250px;
      overflow: hidden;
    }
    span {
      width: 60%;
      margin-top: 10%;

      font-family: 'Helvetica';
      font-size: 20px;
      color: #707070;

      text-align: center;
    }
  }
`;

export const Mission = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 60%;
    max-height: 700px;
    height: auto;

    p {
      margin-top: 20px;
      text-align: center;
      font-family: 'Helvetica';
      font-size: 35px;
      color: #666;
    }
  }
`;

export const Objective = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 400px;

  padding: 0 50px 0 50px;

  div {
    width: 50%;
    height: 100%;
    overflow: hidden;
    border: 4px solid #fff;

    img {
      width: 100%;
      height: 100%;
    }
  }

  aside {
    width: 50%;
    p {
      text-align: center;
      font-family: 'Helvetica';
      font-size: 29px;
      color: #666;
    }
  }
`;
