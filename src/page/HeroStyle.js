import styled from "styled-components";

export const HeroPageContainer = styled.div`
  height: 176vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

  @media screen and (max-width: 768px) {
    height: 200vh;
    width: 100%;
  }
  @media screen and (max-width: 425px) {
    margin-top: 70px;
    height: 300vh;
  }
`;
export const HeropPageUp = styled.div`
  height: 88vh;
  width: 100%;
  background: linear-gradient(
      to bottom,
      rgb(27, 27, 27, 0.68),
      rgb(32, 28, 28, 0.78)
    ),
    url("../../src/assets/womansmell.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 100vh;
    width: 100%;
    background-color: red;
    display: flex;
    gap: 10px;
    flex-direction: column;

    align-items: center;
  }
  @media screen and (max-width: 425px) {
    height: 90vh;
  }
`;
export const HeroPageText = styled.div`
  height: 70%;
  width: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media screen and (max-width: 768px) {
    height: max-content;
    width: 100%;
  }
`;
export const TextUp = styled.div`
  height: max-content;
  width: 990px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 50px;

  @media screen and (max-width: 768px) {
    height: max-content;
    width: 100%;
    gap: 0px;
  }

  h2 {
    font-size: 60px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 700;
    color: white;
    @media screen and (max-width: 768px) {
      font-size: 22px;
      padding-left: 20px;
    }
    @media screen and (max-width: 425px) {
      font-size: 22px;
    }
  }

  p {
    font-size: 31px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
    color: white;

    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
    @media screen and (max-width: 425px) {
      font-size: 16px;
    }
  }

  button {
    height: 63px;
    width: 170px;
    border: none;
    border-radius: 10px;
    font-size: 25px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    background-color: whitesmoke;
    cursor: pointer;
    transition: all 350ms ease-in-out;

    &:hover {
      transform: scale(1.05);
      transition: all 350ms ease-in-out;
    }

    @media screen and (max-width: 768px) {
      font-size: 20px;
      height: 50px;
      width: 120px;
    }
  }
`;
export const TextDown = styled.div`
  height: max-content;
  width: 650px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 768px) {
    height: max-content;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
  }
  p {
    font-size: 23px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
    color: white;
    @media screen and (max-width: 768px) {
      font-size: 18px;
    }
  }
`;
export const HeroPageImage = styled.div`
  height: 100%;
  width: 850px;
  @media screen and (max-width: 768px) {
    height: 80%;
    width: 100%;
  }
  img {
    height: 100%;
    width: 100%;
  }
`;
export const HeroPageDown = styled.div`
  height: 89vh;
  width: 100%;
  background-color: #e6efee;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 425px) {
    height: 280vh;
  }
`;
export const HeroPageDownImage = styled.div`
  height: 90%;
  width: 720px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: max-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 0px;
  }
  @media screen and (max-width: 425px) {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
export const HeroPageImageLeft = styled.div`
  height: 60%;
  width: 320px;

  img {
    height: 95%;
    width: 98%;
    border: 5px solid white;
    border-radius: 15px;
    @media screen and (max-width: 425px) {
      height: 100%;
      width: 70%;
    }
  }
  @media screen and (max-width: 425px) {
    height: 35%;
    width: 100%;
  }
`;
export const HeroPageImageRight = styled.div`
  height: 100%;
  width: 500px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 425px) {
    height: 55%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;
export const HeropageRightUp = styled.div`
  height: 50%;
  width: 90%;
  padding-top: 10px;

  img {
    height: 90%;
    width: 90%;
    border: 5px solid white;
    border-radius: 15px;
    @media screen and (max-width: 425px) {
      height: 100%;
      width: 80%;
    }
  }
`;
export const HeropageRightDown = styled.div`
  height: 45%;
  width: 75%;
  img {
    height: 90%;
    width: 90%;
    border: 5px solid white;
    border-radius: 15px;
    @media screen and (max-width: 425px) {
      height: 100%;
      width: 80%;
    }
  }
`;
export const HeroPageDownText = styled.div`
  height: max-content;
  width: 700px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-right: 15px;

  @media screen and (max-width: 768px) {
    height: max-content;
    width: 100%;
  }
  @media screen and (max-width: 425px) {
    padding-left: 10px;
  }

  h4 {
    font-size: 30px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    text-decoration: underline;

    @media screen and (max-width: 768px) {
      font-size: 15px;
    }
    @media screen and (max-width: 425px) {
      font-size: 20px;
    }
  }
  h1 {
    font-size: 30px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 700;
    @media screen and (max-width: 768px) {
      font-size: 35px;
    }
    @media screen and (max-width: 425px) {
      font-size: 20px;
    }
  }

  p {
    font-size: 23px;
    text-align: center;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    @media screen and (max-width: 425px) {
      font-size: 20px;
    }
  }
`;
