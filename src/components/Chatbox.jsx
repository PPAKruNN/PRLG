import styled from "styled-components"
import { Oli } from "../components/Oli";
import send from "../assets/send.svg"
import anex from "../assets/anex.svg"
import { Message } from "./Message";
import { useEffect, useRef, useState } from "react";
import { SuggestionBox } from "./SuggestionBox";
import axios from "axios";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { IconButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


export function Chatbox() {
    const navigate = useNavigate();

    const [messages, setMessages] = useState([
        {type: "bot", text: "Oi, eu sou o Oli!"},
        {type: "bot", text: "Eu vou te ajudar a anunciar seu produto!"},
    ]);

    const [suggestions, setSuggestions] = useState([]);
    const [answers, setAnswers] = useState({
        question: '',
        answer: '' ,
    })

    const [questionsSaved, setQuestionsSaved] = useState([
        {
            question: "",
            answer: ""
        }
    ])

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
        setAnswers({
            question: questionsSaved[questionsSaved.length - 1],
            answer: input.current.value ,
        })
        input.current.value = "";
    }

    function genMessages(){
        return messages.map((message, index) => {
            return <Message key={index} type={message.type} text={message.text}/>
        })
    }

    function receiveQuestions() {
        axios.post('http://localhost:5000/chat', {questions: answers}).then(res => {
            if (!res.data) {
                receiveQuestions()
            }
            const array = questionsSaved
            array.push(res.data.question || res.data.createdQuestion)
            setQuestionsSaved(array)
            createMessage(res.data.question || res.data.createdQuestion, 'bot')
        }).catch(err => {
            console.error(err);
        })
    }

    // function botPrompt(){
    //     let selected = '';
    //     // verificar se tem alguma questão na fila (questions), caso exista selected = questãoExistente,
    //     // caso contrário, pedimos para o GPETO a prox question
    //     // selected = retorno do GPETO
    //     // createMessage no selected (retorno do GPETO)
    // }
    
    useEffect(() => {
        const delay = answers.length === 0 ? 3000 : 0;
        const timer = setTimeout(() => {
            receiveQuestions();
        }, delay);
        return () => clearTimeout(timer)
    }, [answers]);


    useEffect( () => {
        scrollAnchor.current.scrollIntoView({behavior: 'smooth', block: 'end'});
    })

    return (
          <SCChatbox>
            
            <IconButton 
                icon={<BsFillPlusSquareFill 
                    style={{fontSize: '40px', color: 'F28000', border: '1.5px solid #000', borderRadius: '5px'}}/>
                }
                position="absolute"
                top={3}
                right={3}
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                onClick={() => {navigate('/forms')}}
            />

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
        padding-left: 10px;
    } 

    div {
        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: space-between;

        width: 40px;
        padding: 4px;

        height: 100%;
        overflow: visible;

        button {
            width: 25px;
            height: 25px;
            aspect-ratio: 1;
            img {
                width: 100%;
                height: 100%;
            }
            border-radius: 10%;
        }

        button:nth-of-type(1) {
            background-color: green; 
            padding-bottom: 2px;
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