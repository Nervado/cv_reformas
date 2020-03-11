import styled from 'styled-components';

// import Button from '~/components/Button';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Form = styled.form`
  background-color: #fff;
  margin-top: 10%;
  width: 350px;
  height: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  opacity: 0.92;
  border-radius: 4px;

  box-shadow: 4px 4px 4px rgba(112, 112, 112, 0.8);
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const InputArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Input = styled.input.attrs(props => ({
  type: props.type,
  placeholder: props.placeholder,
  value: props.value,
  name: props.name,
}))`
  background-color: #fff;
  height: 50px;

  margin: 5px;
  padding: 0 5px 0 5px;

  box-shadow: 2px 2px 3px 1px #df7e38;

  border: none;
  font-family: Helvetica, sans-serif;

  color: #000000;
  font-size: 18px;

  flex-basis: ${props => (props.width ? props.width : '50px')};
  flex-grow: ${props => (props.grow ? props.grow : 0)};
  width: ${props => (props.shk ? props.shk : 0)};

  &::placeholder {
    opacity: 0.8;
    color: #707070;
  }
`;

export const StyledButton = styled.button`
  height: 40px;
  width: 200px;

  border: none;

  background-color: ${props => (props.primary ? '#df7e38' : '#707070')};

  color: #fff;
  font-size: 20px;
  border-radius: 4px;

  font-family: Helvetica, sans-serif;

  margin: 5px 5px 5px 5px;

  &:hover {
    opacity: 0.6;
  }
`;

// background: #F2994A;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to top, #F2C94C, #F2994A);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to top, #F2C94C, #F2994A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
