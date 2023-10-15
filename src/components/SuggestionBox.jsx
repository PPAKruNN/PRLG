/* eslint-disable react/prop-types */
import styled from "styled-components"

export function SuggestionBox({array, inputRef}) {
    
    function genSuggestions() {
        return array.map((suggestion, index) => {
            return (
                <span
                    key={index}
                    onClick={() => {inputRef.current.value = suggestion}} 
                >
                    {suggestion}
                </span>
            )
        })
    }

    return (
        <SCBody>
            {genSuggestions()}
        </SCBody>
    )
}

const SCBody = styled.section`

    position: absolute;
    top: -40px;
    left: 0px;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;

    width: 100%;
    height: 50px;

    padding: 5px 10px;

    scroll-behavior: smooth;
    overflow-x: scroll;

    --webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;

    span {
        font-size: 10px;
        padding: 3px 10px;
        
        flex-shrink: 0;

        background-color: white;

        border-radius: 12px 12px 12px 1px;
        box-shadow: 0px 0px 5px 0px #00000080;
    }

    span:hover {
        cursor: pointer;
        background-color: #00000020;
    }

`