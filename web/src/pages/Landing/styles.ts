import styled from 'styled-components';

import landingImage from '../../assets/images/landing.svg';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    position: relative;
    width: 100%;
    max-width: 1100px;
    height: 100%;
    max-height: 680px;
    margin: 50px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    background: url(${landingImage}) no-repeat 80% center;

    a {
      position: absolute;
      right: 0;
      bottom: 0;

      width: 80px;
      height: 80px;
      background: #ffd666;
      border-radius: 30px;

      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: #96feff;
      }
    }

    @media (max-width: 1130px) {
      background: transparent;
      margin: 0 120px;
    }

    @media (max-width: 770px) {
      background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
      align-items: center;
      max-height: 90%;

      a {
        position: relative;
      }

      section {
        position: relative;
        text-align: center;
        margin-top: 50px;
      }
    }
  }

  main {
    max-width: 350px;

    h1 {
      font-size: 76px;
      font-weight: 900;
      line-height: 70px;
    }

    p {
      margin-top: 40px;
      font-size: 24px;
      line-height: 34px;
    }
  }

  section {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 24px;
    line-height: 34px;
    display: flex;
    flex-direction: column;

    strong {
      font-weight: 800;
    }
  }
`;
