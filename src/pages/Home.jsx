// import React, { useState } from "react";
import styled from "styled-components";
import BottomButtons from "../components/BottomButtons";
import Header from "../components/Header";
import Input from "../components/Input";
import Body from "../components/Body";

export default function Home() {
  return (
    <SCContainer>
      <Header />
      <Body />
      <Input />
      <BottomButtons />
    </SCContainer>
  )
}

const SCContainer = styled.div`
  width: 100%;
  min-height: calc(100vh);
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  position: relative;
  padding-bottom: 55px;
  padding-top: 2em;
`
