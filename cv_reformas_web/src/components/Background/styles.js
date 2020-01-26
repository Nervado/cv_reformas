import styled from 'styled-components';

import background from '~/assets/background.png';

export const Container = styled.div`
  overflow: hidden;
  width: 1900px;
  height: 1000px;
  border: none;
  margin-left: -100px;
  position: relative;
  margin-top: 0;

  img {
    top: -1px;
    position: absolute;
    background: url(${background});
    width: 1900px;
    height: 1200px;
    background-size: contain;
    border: none;
    z-index: -2;
  }

  div {
    z-index: 0;
    overflow: hidden;

    display: ${props => (props.logged ? 'none' : 'block')};

    height: 800%;
    width: 100%;
    position: absolute;

    div {
      cursor: pointer;

      position: fixed;

      height: 100%;
      width: 50%;

      margin-top: 5%;
      left: calc(50% - 50% / 2);

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
