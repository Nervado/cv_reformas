import { createGlobalStyle } from 'styled-components';

import background from '~/assets/background.png';

import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }
   #root {
    height: 100%;
  }

  body , html, #root {

    width: 100%;
    z-index: 0;
    height: 860px;

}

body::after {
  content: "";
  background: url(${background});

  opacity: ${props => (props.opctMax ? 1 : 0.2)};

  top: ${props => (props.spaOn ? '150px' : '0px')};
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
  width: 100%;
  height:100%;

}

  body,html,#root {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, input, button {
    font: 14px, 'Roboto', sans-serif;
  }
  a {text-decoration: none;}

  ul { list-style: none;}

  button {
    cursor: pointer;
  }


  .success {
    font-family: Helvetica, sans-serif;
    color: #fff;

    background-color: #df7e38;
    box-shadow: 2px 2px 3px 1px #df7e38;
  }


`;
