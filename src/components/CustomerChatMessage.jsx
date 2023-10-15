
// type
// 'bot'
// 'user'
// 'seller'

import styled from "styled-components"
import Oli from "../assets/oli.svg"
import user from "../assets/user.png"
import seller from "../assets/user.png"


// eslint-disable-next-line react/prop-types
export function CustomerChatMessage({type, text}) {
    function chooseIcon() {
        if(type === 'bot') return Oli;
        if(type === 'user') return user;
        if(type === 'seller') return seller;
    }

    return (
        <SCMessage $type={type}>
            <Icon src={chooseIcon(type)} ></Icon>
            <div>
                <p>{text}</p>
            </div>
        </SCMessage>
    )
}

const Icon = styled.img`
    width: 35px;
    height: 35px;
    aspect-ratio: 1;

    border-radius: 50%;
`

const SCMessage = styled.div`
   display : flex ;
   flex-direction: ${(p) => p.$type === 'user' ? 'row-reverse' : 'row'};
   align-items: flex-end;

   flex-shrink: 0;
   min-height: 50px;
   max-width: 100%;

   gap: 10px;

   icon {
    width: 30px;
    height: 30px;
    aspect-ratio: 1;
    background-color: black;

    border-radius: 50%;
   }

   div {
    max-width: 60%;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0em;
    padding: 10px;
    border-radius: ${(p) => p.$type === 'user' ? '10px 10px 0px 10px' : '10px 10px 10px 0px'};
;

    background-color: ${(p) => {
        if(p.$type === 'bot') return '#F2A54FA6';
        if(p.$type === 'user') return '#8CE563A6';
        if(p.$type === 'seller') return '#6868E8A6';
    }};
    }
`