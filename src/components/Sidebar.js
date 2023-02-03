import React, { useState } from 'react'
import styled from 'styled-components'
import CoinbaseLogo from '../assets/cb-logo.png'
import Image from 'next/image' 
import {navItems} from '../static/navItems'

const Sidebar = () => {
    const[ activeIcon , setActiveIcon] =useState(navItems[0].title);
    
  return (
    <Wrapper>
        <LogoContainer>
            <Logo>
                <Image src={CoinbaseLogo} alt='Coinbase Logo' height={28} width={125}/>
            </Logo>
        </LogoContainer>
        <NavItemsContainer>
           {navItems.map((navItem , index) =>(
              <div>
                  <NavItem key={index} onClick={()=>setActiveIcon(navItem.title)}>
                        <NavIcon style={{color: activeIcon == navItem.title && '#3773f5'}}>
                           {navItem.icon} 
                        </NavIcon>
                        <Navtitle>{navItem.title}</Navtitle>
                  </NavItem>
              </div>
           ))}
        </NavItemsContainer>
    </Wrapper>
  )
}

export default Sidebar


const Wrapper = styled.div`
    height:calc(100vh);
    border-right:1px solid #282b2f;
    width:calc(22rem - 16px - 16px);
    padding:0.1rem;
`

const LogoContainer= styled.div`
margin: 1.5rem 0;
`

const Logo= styled.div`
width:44%;
object-fit: contain;
margin-left: 1.5rem;

   
`

const NavItemsContainer = styled.div`
    margin-top:3rem;

    &:hover{
        cursor:pointer;
    }
`

const NavItem=styled.div`
   display:flex;
   align-item:center;
   font-size:1.3rem;
   font-weight:500;
   border-radius:0.5rem;
   margin-bottom:1.5rem;
   height:4rem;
   align-items:center;
   font-family:Arial;
   &:hover{
    background-color:#141519;
   }
`

const NavIcon=styled.div`
   background-color:#14159;
   padding:0.7rem;
   margin:0.1rem;
   display:grid;
   place-items:center;
   border-radius:50%;
`

const Navtitle =styled.div``
