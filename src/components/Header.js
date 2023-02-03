import React from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import { useRouter } from 'next/router'
import TransferModal from './modal/TransferModal'
import Link from 'next/link'

Modal.setAppElement('#__next')
const Header = ({address,sanityTokens,thirdWebTokens}) => {
   const router = useRouter()
    
   const costumStyles={
      content: {
         top: '50%',
         left: '50%',
         right: 'auto',
         bottom: 'auto',
         transform: 'translate(-50%, -50%)',
         backgroundColor: '#0a0b0d',
         padding: 0,
         border: 'none',
       },
       overlay: {
         backgroundColor: 'rgba(10, 11, 13, 0.75)',
       },
    }

  return (
    <Wrapper>
        <Title>Assets</Title>
      <ButtonsContainer>
         <WalletLinlk>
            <WalletLinkTitle>Wallet Connected</WalletLinkTitle>
            <WalletAddress>
               {address.slice(0,7)}...{address.slice(35)}
            </WalletAddress>
         </WalletLinlk>
        <Button style={{backgroundColor:'#3773f5', color:'#000'}}>
            Buy / sell
        </Button>
        <Link href={'/?transfer=1'}>
          <Button>Send / receive</Button>
        </Link>
     </ButtonsContainer>
     <Modal 
     isOpen={!!router.query.transfer}
     onRequestClose={()=>router.push('/')}
     style={costumStyles}
        >
         <TransferModal sanityTokens={sanityTokens} address={address} thirdWebTokens={thirdWebTokens}/>
        </Modal>
    </Wrapper>
    
  )
}

export default Header

const Wrapper= styled.div`
   width:calc(100% - 3rem);
   padding:1rem 1.5rem;
   border-bottom:1px solid #282b2f;
   display:flex;
   align-items:center;
   font-family:Arial;
`

const Title= styled.div`
   font-size:2rem;
   font-weight:600;
   flex:1;
   
`

const ButtonsContainer=styled.div`
    display:flex;
`

const Button = styled.div`

border:1px solid #202b2f;
padding:0.8rem;
font-size:1.3rem;
font-weight:500;
border-radius:0.4rem;
margin-right:1rem;
transition-duration: 0.3s;
  
   &:hover{
    transform:scale(0.8);
    cursor:pinter;
   }
`

const WalletLinlk = styled.div`
    border:1px solid #282b2f;
    border-radius:50rem;
    font-size:1.2rem;
    margin-right:1rem;
    padding:0 1rem;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
`
const WalletLinkTitle = styled.div`
   font-size:1.1rem;
   margin-bottom:0.3rem;
   color:#27ad75;
   font-weight:600;
`

const WalletAddress= styled.div`
   font-size:0.8rem;

`