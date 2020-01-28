import styled from 'styled-components';

export const Container = styled.li`
  margin-bottom: 20px;
  width: 100%;
  height: 80px;
  box-shadow: 4px 4px 5px #707070;

  background-color: #fff;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;

  padding: 0 10px 0 10px;
`;

export const Text = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  align-items: center;
  text-align: left;

  span {
    width: 100%;
  }
`;
