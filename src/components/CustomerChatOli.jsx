import styled from 'styled-components'
import OliSvg from '../assets/oli.svg'

export function CustomerChatOli() {

    return (
       <SBody>
            <h1>Olá, eu sou o Oli!</h1>
            <img src={OliSvg}></img>

            <p>Vou te ajudar a preencher o seu novo anúncio na OLX de forma rápida e completa.</p>
            <p>Vou te fazer algumas perguntas sobre o que você está vendendo para escrevermos o seu novo anúncio na OLX.</p>
       </SBody> 
    )
}

const SBody = styled.div`
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    align-items: center;
    align-self: center;
    width: 85%;

    gap: 5px;

    h1 {
        font-size: 18px;
        font-weight: 700;
        letter-spacing: 0em;
        text-align: center;
    }

    p {
        font-size: 11px;
        font-weight: 400;
        letter-spacing: 0em;
        text-align: center;
        color:#5E6A82;
    }

    img {
        width: 120px;
    }

`