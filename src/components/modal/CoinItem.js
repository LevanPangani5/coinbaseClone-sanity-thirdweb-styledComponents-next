import React,{useEffect , useState} from 'react'
import styled from 'styled-components'
import  imageUrlBuilder from '@sanity/image-url'
import {client} from 'lib/sanity'
import { FaCheck } from 'react-icons/fa'



export const CoinItem = ({
    coin,
    sender,
    selectedToken,
    setSelectedToken,
    thirdWebTokens,
    sanityTokens,
    setAction,
  }) => {

    const[imageUrl,setImageUrl]=useState()
    const[balance,setBalance]=useState(null)

    useEffect(()=>{
      const getBalance= async ()=>{
        let activeThirdWebToken
        thirdWebTokens.map(token =>{
          if(token.address==coin.contractAddress){
            activeThirdWebToken=token;
          }
        })
        const balance= await activeThirdWebToken.balanceOf(sender)
        return  setBalance(balance.displayValue.split('.'[0]))
      }
      const getImageUrl = ()=>{
        const url = imageUrlBuilder(client).image(coin.logo).url()
        setImageUrl(url)
      }
      getBalance()
      getImageUrl()
    },[thirdWebTokens,sanityTokens,selectedToken])

  return (   
    <Wrapper style={{backgroundColor:selectedToken.name==token.name&&'#141519'}}
      onClick={()=>{
        setSelectedToken(token)
        setAction('send')
      }}
      >
        <Main>
        <Icon>
          <img src={imageUrl }alt='' />
        </Icon>
        <NameDetails>
          <Name>{token.name}</Name>
          <Symbol>{token.symbol}</Symbol>
        </NameDetails>
        </Main>
        <Balance>
          {balance}{token.symbol}
        </Balance>
        <IsSelected>
          {Boolean(selectedToken.contractAddress==token.contractAddress)&&(<FaCheck/>)}
        </IsSelected>
      </Wrapper>
  )
}
const Wrapper = styled.div`
   display:flex;
   align-items:center;
   padding:1rem 0.5rem;
   border-radius:0.5rem;
   margin-bottom:0.3rem;
`


const Main=styled.div`
  flex:1;
  display:flex;
  align-items:center;
`

const Icon =styled.div`
margin-right: 1rem;
height: 1.8rem;
width: 1.8rem;
border-radius: 50%;
overflow: hidden;
display: grid;
place-items: center;
background:none;
& > img {
  height: 120%;
  width: 110%;
  object-fit: contain;
}
`
const NameDetails = styled.div``

const Name = styled.div`
 font-size:1.1rem;
 margin-bottom:0.2rem;
`
const Balance = styled.div``

const IsSelected =styled.div`
   margin-left:0.5rem;
   color:#3773f5;
`






