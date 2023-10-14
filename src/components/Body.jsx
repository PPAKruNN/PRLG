import styled from "styled-components"
import Message from "./Message"

export default function Body() {
  return (
    <SCBody>
      <Message userName="Levy" text="HAHAHHAAHHAHAHAHAAHAHAHAHHAHA" />
      <Message userName="Rafa" text="uuuuuu" />
      <Message userName="Gabriel" text="bbbbb" />
      <Message userName="Pedro" text="pppppppppp" />
      <Message userName="Marina" text="oiasoiasdiouasiohdaopihdiopjhahsdljiahsjkldhaljkdhlajkshdljkashdljkahsdjklahsljkdhasjklhdlajkshdkljashdjklahskldjhaskljdhasjkldhasjklhdlasjkhdljkshdaljk" />
    </SCBody>
  )
}

const SCBody = styled.div`
  background-color: #e6e6e6;
  width: 100%;
  min-height: calc(100vh - 10.2em);
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  padding-bottom: 1rem;
  justify-content: end;
`