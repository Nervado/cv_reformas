import { createGlobalStyle } from 'styled-components';

import background from '~/assets/background.png';

import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
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
  opacity: 0.2;
  top: 150px;
  top: ${props => (props.spaOn ? '150px' : '0px')};
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px, 'Roboto', sans-serif;
  }
  a {text-decoration: none;}

  ul { list-style: none;}

  button {
    cursor: pointer;
  }


`;
