import styled from 'styled-components';

export const Container = styled.div`
  display: ${props => (props.hide ? 'none' : '')};
  button {
    height: 31px;
    width: 121px;

    border: none;

    background-color: ${props => (props.primary ? '#df7e38' : '#707070')};

    color: #fff;
    font-size: 20px;
    border-radius: 4px;

    font-family: Helvetica, sans-serif;

    margin: 0 5px 0 5px;

    &:hover {
      opacity: 0.6;
    }
  }
`;
