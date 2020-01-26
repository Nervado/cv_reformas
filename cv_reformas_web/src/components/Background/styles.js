import styled from 'styled-components';

import background from '~/assets/background.png';

export const Container = styled.div`
  width: 100%;
  height: 1000px;
  border: none;
  position: relative;
  overflow: hidden;

  img {
    top: -1px;
    position: absolute;
    background: url(${background});
    width: 100%;
    height: 100%;

    border: none;

    overflow: hidden;
  }

  div {
    margin-top: 100px;
    height: 50%;
    width: 50%;
    position: absolute;

    display: ${props => (props.logged ? 'none' : 'flex')};

    div {
      cursor: pointer;

      height: 50%;
      width: 100%;

      margin-top: 10%;
      left: calc(50%);

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      text-align: center;

      h1,
      h2 {
        color: #707070;
        font-family: 'Helvetica Neue';

        font-size: 35px;
        font-weight: bold;
        font-style: italic;
      }
    }
  }

  span {
    font-family: 'Helvetica Neue';
    color: #df7e38;
  }
`;
