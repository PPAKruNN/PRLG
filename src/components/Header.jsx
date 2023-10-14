
import styled from "styled-components"
import logo from '../assets/logo.png'

export default function Header () {
  return (
    <SCHeader>
      <SCImg>
        <img width={30} src={logo} />
      </SCImg>
      <h1>Chat Bot - PRLG</h1>
    </SCHeader>
  )
}

const SCImg = styled.section`
  position: absolute;
  top: 0.5em;
  left: 2em;
`

const SCHeader = styled.div`
  position: relative;
  height: 40px;
  background-color: yellow;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #dfdfdf83;
  h1{
    overflow: hidden;
  }
  `
