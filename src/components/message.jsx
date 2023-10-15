
// type
// 'bot'
// 'user'
// 'seller'

import styled from "styled-components"


// eslint-disable-next-line react/prop-types
export function Message({type, text}) {
    return (
        <SCMessage $type={type}>
            <icon></icon>
            <div>
                <p>{text}</p>
            </div>
        </SCMessage>
    )
}

const SCMessage = styled.div`
   display : flex ;
   flex-direction: ${(p) => p.$type === 'user' ? 'row-reverse' : 'row'};
   align-items: flex-end;

   flex-shrink: 0;
   min-height: 50px;

   gap: 10px;

   icon {
    width: 30px;
    height: 30px;
    aspect-ratio: 1;
    background-color: black;

    border-radius: 50%;
   }

   div {
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