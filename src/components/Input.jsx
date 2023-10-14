import styled from "styled-components"
import { HiOutlinePaperAirplane } from 'react-icons/hi2';

export default function Input() {
  return (
    <>
      <SCInput />
      <SCPlane />
    </>
  )
}

const SCPlane = styled(HiOutlinePaperAirplane)`
  position: absolute;
  right: 1em;
  bottom: 5em;
`

const SCInput = styled.input`
  height: 60px;
  width: 100%;
`