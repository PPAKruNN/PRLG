
import styled from "styled-components"
import user from '../assets/user.png'
import logo from '../assets/OLX.svg'
import arrow from '../assets/arrow.png';

export default function Header () {
  return (
    <SCHeader>
      <div>
        <img width={18} height={30} src={arrow}></img>
        <img width={50} src={logo} />
      </div>

      <img width={40} height={30} src={user}></img>
      
    </SCHeader>
  )
}

const SCHeader = styled.div`
  position: relative;
  height: 40px;
  padding: 25px 40px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #CFD4DD;

  h1{
    overflow: hidden;
  }

  div {
    display: flex;
    align-items: center;
    gap: 30px;
  }

`
