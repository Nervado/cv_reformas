import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 110%;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;
`;

export const Content = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .form-contact {
    width: 40%;
  }
  .info-contact {
    width: 60%;
  }
  .info-cel {
    margin-top: 20px;
    font-size: 18px;
  }

  .email {
    margin-top: 20px;
    font-size: 18px;
    display: flex;
    align-items: center;
  }
  .form-title {
    font-size: 24px;
    text-align: center;
    color: #707070;
  }

  .info-title {
    font-size: 22px;
    text-align: left;
    color: #707070;
  }

  .info-p {
    margin-top: 30px;
    font-size: 20px;
    color: #df7e38;
    font-weight: bold;
  }

  .infos {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .info-text {
    margin-left: 5px;
    font-size: 18px;
  }

  .info-adress {
    margin-top: 20px;
    font-size: 18px;
  }

  .info-adress-text {
    margin-left: 5px;
  }
  .info-map {
    margin-top: 20px;
    border: none;
    box-shadow: 2px 2px 3px 1px #df7e38;
  }

  button {
    margin-top: 10px;
  }
`;
