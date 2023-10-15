import styled from "styled-components"
import { useEffect, useRef, useState } from "react";
import { CustomerChatMessage } from "./CustomerChatMessage";
import axios from "axios";
import { GiTakeMyMoney } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CustomerChatOli } from "./CustomerChatOli";

export function CustomerChatbox() {

    const [messages, setMessages] = useState([
        { type: "bot", text: "Oi, eu sou o Oli!" },
        { type: "bot", text: "Qual sua dúvida sobre este celular?" },
    ]);

    const input = useRef(null);
    const scrollAnchor = useRef(null);

    function createMessage(text, type = "user") {
        const message = { type, text };
        const newMessages = [...messages, message];
        setMessages(newMessages);
    }

    function sendMessage() {
        const message = input.current.value;
        if (message === "") return;
        createMessage(message);
        postMessage(message)
            .then(res => setMessages(prevData => [...prevData, { type: "bot", text: res.data }]))
            .catch(err => sendMessage());
        input.current.value = "";
    }

    function postMessage(message) {
        return axios.post(import.meta.env.VITE_API_URL + "customer-question", { question: message })
    }

    function genMessages() {
        return messages.map((message, index) => {
            return <CustomerChatMessage key={index} type={message.type} text={message.text} />
        })
    }

    useEffect(() => {
        scrollAnchor.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    })

    return (
        <SCChatbox>
            <SCMessages>
                <CustomerChatOli />
                {genMessages()}
                <span ref={scrollAnchor}></span>
            </SCMessages>

            <SCInput>
                <div>
                    <button> <GiTakeMyMoney size={17}/> Fazer oferta </button>
                    <button> <GiTakeMyMoney size={17}/> Chamar vendedor </button>
                    <button> <AiOutlineShoppingCart size={17}/> Comprar </button>
                </div>
                <input
                    onKeyDown={(e) => { if (e.key === 'Enter') sendMessage() }}
                    ref={input}
                    type="text"
                    placeholder="Digite sua mensagem aqui"
                />
            </SCInput>
        </SCChatbox>
    )
}

const SCInput = styled.div`
    position: absolute;
    bottom: 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    height: 90px;
    padding: 0 20px;
    padding-top: 10px;
    background-color: white;
    border-top: 1px solid #E5E5E5;

    input {
        margin-top: 5px;
        width: 100%;
        height: 40px;
        border: 1px solid #E5E5E5;
        padding-left: 10px;
    } 

    div {
        display: flex;

        align-items: center;
        justify-content: space-between;


        button {
            display: flex;
            align-items: center;
            justify-content: space-around;
            gap: 5px;
            height: 30px;
            background-color: none;
            color: #F28000;
            border: 1px solid #F28000;
            border-radius: 30px;
            padding: 0 5px;
            font-size: 13px;
        }

        button:nth-of-type(3) {
            background-color: #F28000;
            color: white;
        }
    }
`

const SCMessages = styled.div`
   display: flex;
   flex-direction: column;  

   width: 100%;

   padding: 10px 35px;
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
  align-items: center;

  overflow: auto;

  width: 100%;
  height: 100%;


    padding-top: 10px;
`