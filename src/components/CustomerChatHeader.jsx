
import styled from "styled-components"
import logo from '../assets/logo.png'
import arrow from '../assets/arrow.png';
import { Flex, Image, Text } from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { BiDotsVertical } from "react-icons/bi";

export default function CustomerChatHeader() {
    return (
        <SCHeader>
            <Flex gap={3} alignItems='center'>
                <Image src={arrow} w={3} h={3}></Image>
                <Flex flexDir="column">
                    <Text fontSize={15} fontWeight={500}>Vendedor</Text>
                    <Text fontSize={11} fontWeight={300}>Último acesso 12/10/2023</Text>
                </Flex>
            </Flex>
            <Flex gap={3} alignItems='center'>
                <BsPerson color="#6E0AD6"/>
                <BiDotsVertical style={{color: "#6E0AD6"}} />
            </Flex>

        </SCHeader>
    )
}


const SCHeader = styled.div`
  position: relative;
  height: 50px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dfdfdf83;
  padding: 0 15px;

  h1{
    overflow: hidden;
  }

  svg {
    width: 30px;
    height: 30px;
    fill: #000;
    cursor: pointer;
  }
`
