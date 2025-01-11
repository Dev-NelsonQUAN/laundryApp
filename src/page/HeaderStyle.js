import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 12vh;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 99999;
  top: 0px;
  bottom: 0px;

  @media screen and (max-width: 768px) {
    height: 12vh;
    width: 100%;
  }
`;
export const HeaderLeft = styled.div`
  height: 100%;
  width: 1118px;
  display: flex;
  justify-content: space-between;
  gap: 40px;

  @media screen and (max-width: 768px) {
    display: flex;
    gap: 0px;
  }

  ul {
    display: flex;
    gap: 20px;
    justify-content: space-between;

    li {
      display: flex;
      gap: 20px;
      transition: all 350ms ease-in-out;

      &:hover {
        transform: scale(1.05);
        transition: all 350ms ease-in-out;
        color: #1d84d8;
      }
    }
  }
`;

export const Logo = styled.div`
  height: 100%;
  width: 200px;

  img {
    height: 100%;
    width: 78%;
  }
  @media screen and (max-width: 768px) {
    height: 100%;
    width: 180px;
  }
`;

export const HeaderRight = styled.div`
  height: 100%;
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 100%;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  button {
    height: 45px;
    width: 95px;
    border: none;
    border-radius: 7px;
    font-size: 25px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    background-color: #2196f3;
    cursor: pointer;
    color: white;
    transition: all 350ms ease-in-out;

    &:hover {
      transform: scale(1.05);
      transition: all 350ms ease-in-out;
    }

    @media screen and (max-width: 425px) {
      display: none;
    }
  }
  @media screen and (max-width: 425px) {
    display: none;
  }
`;
