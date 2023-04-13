import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Nav>
        <Logo src='./assets/todologo.png'/>
    </Nav>
    
  )
}

export default Header;

const Nav = styled.nav`
    background-color: #000;
    height: 200px;
    display:flex;
    justify-content: center;

`
const Logo = styled.img`
    height: 135px;
    width: 325px;
    cursor: pointer;
    margin-top:15px;

`