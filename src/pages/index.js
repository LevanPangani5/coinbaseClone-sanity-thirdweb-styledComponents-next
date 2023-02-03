import styled from 'styled-components'
import {useMetamask ,useAddress } from '@thirdweb-dev/react'
import Dashboard from './Dashboard'

export default function Home() {
const address = useAddress();
const  connectWallet= useMetamask ();

  return (
    <Wrapper>
      {address ?(
        <Dashboard address={address}/> 
      ):(
        <WalletConnect>
          <Button onClick={connectWallet}>Connect</Button>
          <Details>You need a chrome to run this app!</Details>
      </WalletConnect>
      )}
      
    </Wrapper>
  )
}


const Wrapper= styled.div`
   display:flex;
   height:100vh;
   width:100vw;
   background-color:#0a0b0d;
   color:white;
   display:grid;
   align-items:center;
 
`

const WalletConnect = styled.div`
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
`
const Button = styled.div`
   border:1px solid #202b2f;
   padding:0.8rem;
   font-size:1.3rem;
   font-family:Arial;
   font-weight:500;
   border-radius:0.4rem;
   background-color:#3773f5;
   color:#000;

   -webkit-transform: perspective(1px) translateZ(0);
   transform: perspective(1px) translateZ(0);
   -webkit-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -webkit-transition-property: transform;
   transition-property: transform;
   transform:scalse(0.8);
    
   &:hover{
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
    cursor:pointer;
   }
`
const Details=styled.div`
   font-size:1.2rem;
   text-align:center;
   margin-top:1rem;
   font-weight:500;
   font-family:Open Sans;
   color:#282b2f;
`