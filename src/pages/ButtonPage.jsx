import styled from "styled-components";
import BottomButtons from "../components/BottomButtons";
import Header from "../components/Header";
import ButtomPattern from "../components/ButtomPattern";
import { useNavigate } from "react-router-dom";

export default function ButtonPage() {
  const navigateTo = useNavigate();

  const handleRedirect = () => {
    navigateTo('/home');
  };
  return (
    <SCContainer>
      <Header />
        <SCContainerButtons>
          <ButtomPattern onClick={handleRedirect} text={"Gostaria de Ajuda para descrever seu anúncio?"} />
          <ButtomPattern onClick={handleRedirect} text={"Seguir com o formulário padrão."}/>
        </SCContainerButtons>
      <BottomButtons />
    </SCContainer>
  )
}

const SCContainer = styled.div`
  width: 100%;
  min-height: calc(100vh);
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-bottom: 55px;
  padding-top: 2em;
`
const SCContainerButtons = styled.div`
  padding: 2em;
  background-color: #F1F1F1;
  border: 1px solid #CFD4;
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: center;
  justify-content: center;
`
