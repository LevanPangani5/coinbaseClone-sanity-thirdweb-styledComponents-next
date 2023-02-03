import React from 'react'
import styled from 'styled-components'
import { BsThreeDotsVertical } from 'react-icons/bs'
import Image from 'next/image'


const Coin = ({coin}) => {
  return (
    <Wrapper>
        <div>
            <div style={{flex:3}}>
                <NameCol>
                    <CoinIcon>
                        <Image src={coin.logo} alt={coin.name}  width={40} height={40} margin={5}/>
                    </CoinIcon>
                    <div>
                        <Primary>{coin.name}</Primary>
                        <Secondary>{coin.sign}</Secondary>
                    </div>
                </NameCol>
            </div>
            <div style={{flex:2.7}}>
                 <Primary>
                    {'$'}
                    {coin.balanceUsd}
                 </Primary>
                 <Secondary>
                    {coin.balanceCoin}
                    <br/>
                     {coin.sign}
                 </Secondary>
            </div>
            <div style={{flex:1.7}}>
                <Primary>
                    {'$'}
                    {coin.priceUsd}
                </Primary>
                <Primary style={{color:coin.change <0 ? '#f0616d' : '#26ad75'}}>
                    {coin.change}%
                </Primary>
            </div>
            <div style={{flex:1 }}>
                <Primary>{coin.allocation}%</Primary>
            </div>
            <div style={{flex:0}}><BsThreeDotsVertical style={{marginLeft:10}}/></div>
        </div>
    </Wrapper>
  )
}

export default Coin

const Wrapper= styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
& > div {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}
`

const NameCol= styled.div`
   display:flex;
   align-items:center;
   
`

const CoinIcon=styled.div`
   align-item:center;
   width:0.1rem;
   margin-right:1rem;
`

const Primary=styled.div`
   margin-bottom:0.1rem;
   margin-left:50px;
   justify-item:center;
   
`
const Secondary= styled.div`
   color:#8a919e;
   font-size:0.8rem;
   margin-left:50px;
`