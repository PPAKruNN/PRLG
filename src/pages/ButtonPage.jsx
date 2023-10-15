import styled from "styled-components";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

export default function ButtonPage() {
  const navigateTo = useNavigate();

  const handleRedirect = () => {
    navigateTo('/home');
  };
  return (
    <SCContainer>
      <Header></Header>
      <SCModal>
        <h1>Novidade na área</h1>
        <div>
          <p>A OLX segue inovando para ajudar você a desapegar e fazer uma grana extra. 
          <p>Aumente as chances do seu anúncio vender rápido com a ajuda do <b>Oli</b>, nosso <b>assistente virtual</b> alimentado por IA.</p></p>
        </div>

        <button onClick={handleRedirect}>Quero criar meu anúncio com o Oli</button>
        <button onClick={handleRedirect}>Seguir com a criação de anúncio padrão</button>
      </SCModal>
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
const SCModal = styled.div`

  width: 80%;
  max-width: 400px;
  min-height: 400px;
  padding: 0% 40px;

  border: 1px solid #CFD4DD;
  border-radius: 5px;

  background-color: #F1F1F1;
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: center;
  justify-content: center;

  h1 {
    color: #1A1D23;
    font-weight: 700;
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: center;
  }

  p {
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;

    b {
      font-size: 13px;
      font-weight: 600;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: center;
    }
  }

  button {
    width: 100%;
    min-height: 40px;
    color: #FFFFFF;
    font-size: 13px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;
    padding: 10px 15px;

    border-radius: 5px;
    border-color: #CFD4DD;
  }

  button:nth-of-type(1) {
    background-color: #6E0AD6;
  }

  button:nth-of-type(2) {
    background-color: #F28000;
  }

`
