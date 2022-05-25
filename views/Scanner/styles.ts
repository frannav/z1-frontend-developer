import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center h1 {
    color: #000000;
    font-family: Roboto;
    font-size: 21px;
    font-weight: bold;
    height: 24px;
    letter-spacing: 0;
    line-height: 24px;
    text-align: center;
    width: 282px;
  }

  p {
    color: #000000;
    font-size: 16px;
    height: 48px;
    letter-spacing: 0;
    line-height: 24px;
    text-align: center;
    width: 314px;
  }
`;

export const ImageContainer = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 20px -6px rgba(0, 0, 0, 0.15);
  height: 160px;
  padding: 0.8rem;
  position: relative;
  width: 260px;
`;

export const Button = styled.button`
  background-color: #2f0079;
  border-radius: 24px;
  border: none;
  cursor: pointer;
  height: 48px;
  left: 60px;
  position: absolute;
  top: 60px;
  width: 160px;

  span {
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    height: 24px;
    letter-spacing: 0.35px;
    line-height: 24px;
    width: 120px;
  }
`;

export const RetakeButton = styled(Button)`
  left: -75px;
  top: -80px;
`;

export const PictureStatusRejected = styled.div`
  background-color: #c00000;
  border-radius: 4px;
  border: none;
  height: 30px;
  left: 130px;
  position: absolute;
  top: 150px;
  width: 102px;

  div {
    display: flex;
    flex-direction: row;
  }

  span {
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    height: 12px;
    letter-spacing: 0.75px;
    line-height: 12px;
    margin: auto 0;
    text-align: center;
    text-align: right;
    width: auto;
  }
`;

export const PictureStatusAccepted = styled(PictureStatusRejected)`
  background-color: #69cc8b;
`;
