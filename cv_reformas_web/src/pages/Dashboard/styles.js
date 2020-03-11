import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
`;
export const Content = styled.div`
  margin-top: 15px;
  width: 70%;
  height: 550px;
  display: flex;
  justify-content: center;
`;
export const AsideMenu = styled.aside`
  padding: 5px 0 20px 0;
  opacity: 1;
  width: 220px;
  height: 100%;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  box-shadow: 4px 4px 6px 1px rgba(0, 0, 0, 0.16);
  border-radius: 4px;

  .dashboard-avatar {
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    width: 200px;
    margin: 10px;
    background-color: ${props =>
      props.admin ? '#707070' : 'rgba(223, 126, 56, 1)'};
    box-shadow: 4px 4px 6px #707070;

    .dashboard-greet {
      height: 50px;
      width: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      font-family: Helvetica, sans-serif;
    }

    .dashboard-msg {
      font-size: 16px;
      color: ${props => (props.admin ? '#fff' : '#666666')};
    }
    .dashboard-username {
      color: #fff;
      font-size: 18px;
      font-weight: bold;
    }
  }

  .dashboard-buttons {
    width: 200px;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button {
      opacity: 1;
      margin: 10px;
      background-color: #fff;
      height: 30px;
      border: none;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-family: Helvetica, sans-serif;
      font-size: 14px;
      color: #666666;
      padding-left: 15px;
      box-shadow: 4px 4px 6px 1px rgba(0, 0, 0, 0.16);
      font-weight: bold;
      border-radius: 4px;
      border: 2px solid rgba(0, 0, 0, 0);

      span {
        margin-left: 15px;
      }

      .icon {
        color: green;
      }

      &:hover {
        border: 2px solid #df7e38;
        color: #df7e38;
        .icon {
          color: #df7e38;
        }
      }
    }
  }
`;
export const BodyContent = styled.aside`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px 0 10px;
`;

export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 35px;
    width: 70px;
    height: 70px;
  }
`;
