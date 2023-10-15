import styled from "styled-components"
import { Oli } from "../components/Oli";
import send from "../assets/send.svg"
import anex from "../assets/anex.svg"
import { Message } from "./Message";
import { useEffect, useRef, useState } from "react";
import { SuggestionBox } from "./SuggestionBox";

export function Chatbox() {

    const [messages, setMessages] = useState([
        {type: "bot", text: "Oi, eu sou o Oli!"},
        {type: "bot", text: "Eu vou te ajudar a anunciar seu produto!"},
    ]);
    const [suggestions, setSuggestions] = useState([]);

    const input = useRef(null);
    const scrollAnchor = useRef(null);

    function createMessage(text, type = "user") {
        const message = {type, text};
        const newMessages = [...messages, message];
        setMessages(newMessages);
    }

    function sendMessage() {
        const message = input.current.value;
        if(message === "") return;
        createMessage(message);
        input.current.value = "";
    }

    function genMessages(){
        return messages.map((message, index) => {
            return <Message key={index} type={message.type} text={message.text}/>
        })
    }

    useEffect( () => {
        scrollAnchor.current.scrollIntoView({behavior: 'smooth', block: 'end'});
    })

    return (
          <SCChatbox>
            <SCMessages>
                <Oli/>
                {genMessages()}
                <span ref={scrollAnchor}></span>
            </SCMessages>

            <SCInput>
                <SuggestionBox inputRef={input} array={suggestions}/>
                <input 
                    onKeyDown={(e) => {if(e.key === 'Enter') sendMessage()}} 
                    ref={input} 
                    type="text" 
                    placeholder="Digite sua mensagem aqui"
                />

                <div>
                    <button onClick={sendMessage}>
                        <img src={anex} alt="Attach a photo"/>
                    </button>
                    <button onClick={sendMessage}>
                        <img src={send} alt="send"/>
                    </button>
                </div>
            </SCInput>
          </SCChatbox>
    )
}

const SCInput = styled.div`
    position: absolute;
    bottom: 0;

    overflow: visible;

    display: flex;
    justify-content: space-between;
    padding: 10px;

    width: 100%;
    height: 80px;
    background-color: white;

    input {
        width: 100%;
        height: 100%;
    } 

    div {
        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: space-between;

        width: 80px;
        padding: 4px;

        height: 100%;
        overflow: visible;

        button {
            width: 30px;
            height: 30px;
            aspect-ratio: 1;
            img {
                width: 100%;
                height: 100%;
            }
            border-radius: 10%;
        }

        button:nth-of-type(1) {
            background-color: green; 
            padding: 3px;
        }
    }
`

const SCMessages = styled.div`
   display: flex;
   flex-direction: column;  

   width: 100%;

   padding: 20px 10px;
   margin-bottom: 80px;

   gap: 10px;

   &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #88888880;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;   


`

const SCChatbox = styled.div`
  position: relative;
  display: flex;
  
  flex-direction: column;
  background-color: #F1F1F1;
  align-items: center;

  overflow: auto;

  width: 85%;
  height: 100%;

  border-radius: 5px;
  border: 1px solid #CFD4DD;

    padding-top: 10px;
`