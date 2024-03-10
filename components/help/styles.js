import styled from "styled-components";

export const Container = styled.div`
width:100%;
left:8%:
  display: flex;
  
`;
export const Entity = styled.div`
  border: 1px solid #070707;
  max-width: 100%;
  width: 100%;
  margin-bottom: 10px;
  margin: auto;
`;
export const Inner = styled.div`
  padding: 75px 40px;
  max-width: 900px;
  margin: auto;
  flex-direction: column;
  display: flex;
  color: white;
`;
export const Question = styled.div`
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 2px;
  display: flex;
  font-weight: normal;
  padding: 0.75em 1.12em;
  align-items: center;
  color: white;
  background: black;
  font-family: "Founders Grotesk";
  font-size: 24px;
  line-height: 32px;
`;
export const Text = styled.p`
  max-height: 1190px;
  font-family: "Founders Grotesk";
  font-size: 20px;
  line-height: 25px;
  margin: 0;
  transition: max-height 0.23s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.9em 2.1em 0.7em 1.4em;
  user-select: none;
  color: #f2bc56;
  !important @media (max-width: 550px) {
    font-size: 15px;
    line-height: 20px;
  }
`;
export const Header = styled.h1`
  /* color: #070707;
  line-height: 7;
  margin-top: 0 !important;
  font-size: 45px;
  margin-bottom: 9px;
  text-align: center;*/
  position: relative;
  left: 1.75%;
  right: 42.41%;
  top: 16.85%;
  bottom: 80.82%;

  background: linear-gradient(
    130.7deg,
    #f2bc56 0%,
    #e17979 52.09%,
    #787efa 93.53%
  );

  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  @media (max-width: 600px) {
    font-size: 33px;
  }
`;
