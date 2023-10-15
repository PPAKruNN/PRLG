import styled from "styled-components";
import Header from "../components/Header";
import { Chatbox } from "../components/Chatbox";

export default function Home() {
  return (
    <>
      <Header />
      <SCContainer>
        <SCPage>
          <h1>O que você está anunciando?</h1>
          <Chatbox></Chatbox>
        </SCPage>
      </SCContainer>
    </> 
  )
}

const SCPage = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 20px;

  padding-top: 25px;

  width: 100%;
  height: 100%;

  h1 {
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: center;

    flex-shrink: 0;

  }

`

const SCContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 50px 0 10px 0;
`
