/* eslint-disable react/prop-types */
import { Button } from '@chakra-ui/react'
import styled from 'styled-components'

export default function ButtomPattern ({ onClick, text }) {
  return (
    <SCButton onClick={onClick} colorScheme='teal' size='md' height='100px' width='300px'>
      <p>{text}</p>
    </SCButton>
  )
}

const SCButton = styled(Button)`
  p{
    word-break: break-all;
  }
`

