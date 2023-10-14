/* eslint-disable react/prop-types */
import styled from "styled-components"

export default function Message({ userName ,text }) {
  return (
    <SCMessage>
      <span>{userName} disse: </span>
      <p>{text}</p>
    </SCMessage>
  )
}

const SCMessage = styled.div`
  width: 100%;
  min-height: 2em;
  height: auto;
  background-color: white;
  padding: 0.4em;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 0.3em;
  span{
    overflow: hidden;
  }
  p{
    overflow: hidden;
    word-break:break-all;
  }
`