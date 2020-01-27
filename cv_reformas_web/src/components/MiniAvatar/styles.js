import styled from 'styled-components';

export const Container = styled.div`
  width: 50px;
  height: 50px;
  overflow: hidden;

  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background: url(${'https://api.adorable.io/avatars/50/abott@adorable.png'});
  }
`;
