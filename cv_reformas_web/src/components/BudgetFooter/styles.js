import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;

  opacity: 0.8;
  div {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .button-back {
    display: ${props => (props.logged ? 'none' : '')};
  }
`;
