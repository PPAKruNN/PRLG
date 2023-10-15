import styled from "styled-components";
import { CustomerChatbox } from "../components/CustomerChatBox";
import CustomerChatHeader from "../components/CustomerChatHeader";

export default function CustomerChatPage() {
  return (
    <>
      <CustomerChatHeader />
      <SCContainer>
        <SCPage>
          <CustomerChatbox></CustomerChatbox>
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

  padding-top: 20px;
  padding-bottom: 15px;

  width: 100%;
  height: 100%;

  h1 {
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: center;

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
  padding-top: 20px;
`
