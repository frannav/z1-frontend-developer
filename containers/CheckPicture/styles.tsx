import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-image: url("/Images/check-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-start;
  padding-top: 100px;

  h1 {
    color: #ffffff;
    font-size: 21px;
    font-weight: bold;
    height: 24px;
    letter-spacing: 0;
    line-height: 24px;
    margin-bottom: 3rem;
    text-align: center;
    width: 282px;
  }
  p {
    color: #ffffff;
    font-size: 16px;
    height: 48px;
    letter-spacing: 0;
    line-height: 24px;
    margin: -10px;
    text-align: center;
    width: 282px;
  }
`;

export const ImageContainer = styled.div`
  margin-top: 2rem;
  box-sizing: border-box;
  height: 179px;
  width: 289px;
  border: none;
  border-radius: 18px;
  background-image: url("/Images/check-bg-2.png");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AlertContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  width: 200px;

  p {
    margin-left: -2px;
    height: 16px;
    width: 105px;
    color: #ffffff;
    font-size: 16px;
    letter-spacing: 0;
    line-height: 16px;
  }
`;

export const Button = styled.button`
  height: 24px;
  width: 63px;
  border: none;
  background-color: transparent;
  margin-top: 200px;
  cursor: pointer;

  span {
    height: 24px;
    width: 66.5px;
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.35px;
    line-height: 24px;
    text-align: center;
  }
`;
