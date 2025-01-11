import styled from "styled-components";

export const ImgPic = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;

  img {
    height: 100%;
  }
`;

export const ReviewImg = styled.div`
  height: 30%;
  display: flex;
  gap: 5px;
  align-items: center;
  padding-left: 10px;
`;

export const ReviewTxtP = styled.div`
  height: 55%;
  text-align: center;
  color: gray;
  display: flex;
  align-items: center;
`;

export const ReviewIcon = styled.div`
  height: 15%;
`;

export const CardTxtHeader = styled.h3`
  font-size: 25px;
`;

export const ReviewCardM = styled.div`
  background-color: #e7ebee;
  box-shadow: 1px 1px 1px lightgray;
  height: 360px;
  width: 320px;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 425px) {
    height: 300px;
    width: 280px;
  }
`;

export const ReviewCard = styled.div`
  background-color: #e7ebee;
  height: 360px;
  width: 320px;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 425px) {
    height: 300px;
    width: 280px;
  }
`;

export const CardImg = styled.div`
  background-color: #e7ebee;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  display: flex;
  justify-content: center;

  img {
    height: 100px;
    width: 100px;
    border-radius: 50px;
  }
`;

export const CardTxtSec = styled.div`
  height: 50%;
  background: white;
  gap: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border-radius: 0px 0px 10px 10px;
  border: 1px solid #2196f3;
`;

export const CardImgSec = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ReviewCardHolder = styled.div`
  padding: 5px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;
  height: 70%;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  @media screen and (max-width: 425px) {
    display: flex;
    justify-content: center;
  }
`;

export const ReviewTxt = styled.h3`
  font-size: 30px;
  padding: 5px;
  width: 85%;
  display: flex;
  justify-content: center;
  font-size: 40px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  @media screen and (max-width: 425px) {
    font-size: 30px;
  }
`;

export const ReviewsBox = styled.div`
  border-top: 1px solid black;
  height: 90vh;
  width: 91%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 425px) {
    height: max-content;
  }
`;

export const Btn = styled.div`
  background-color: #2196f3;
  color: white;
  padding: 10px;
  width: 120px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  font-size: 20px;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  transition: all 350ms ease-in-out;

  &:hover {
    background-color: #1a81d6;
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const Card = styled.div`
  height: 375px;
  width: 280px;
  background-color: #2196f3;
  border-radius: 10px;
  @media screen and (max-width: 425px) {
    height: 350px;
    width: 250px;
  }
`;

export const CardsBox = styled.div`
  height: 30%;
  width: 90%;
  justify-content: space-between;
  /* background-color: aqua; */
  flex-wrap: wrap;
  /* padding: 20px; */
  display: flex;
  gap: 30px;
  @media screen and (max-width: 425px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }
`;

export const Services2 = styled.h3`
  color: black;
  font-weight: bold;
  font-size: 40px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding-top: 13px;
  @media screen and (max-width: 425px) {
    font-size: 30px;
  }
`;

export const Service = styled.p`
  color: #2196f3;
  font-size: 19px;
  padding-top: 10px;
  transition: all 350ms ease-in-out;
`;

export const LandingPageBody = styled.div`
  width: 100%;
  gap: 40px;
  height: max-content;
  height: 180vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 425px) {
    height: max-content;
  }
`;

export const MainPageBody = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
`;
