import React ,{useState} from 'react'
import styled from 'styled-components'
import { CoinItem } from './CoinItem'

const CoinSelector = ({
    setAction,
    selectedToken,
    setSelectedToken,
    sanityTokens,
    thirdWebTokens,
    address
}) => {

    
  return (
    <Wrapper>
       <Title>Select Asset</Title>
       <CoinsList>
        {
            sanityTokens.map((token)=>(
              <div>
                <CoinItem 
                coin={token} 
                sender={address}
                selectedToken={selectedToken}
                setSelectedToken={setSelectedToken}
                thirdWebTokens={thirdWebTokens}
                sanityTokens={sanityTokens}
                setAction={setAction}
                />
                <h1>hey</h1>
                </div>
            ))
        }
       </CoinsList>
    </Wrapper>
  )
}

export default CoinSelector

const Wrapper = styled.div`
  font-family:Arial;
`

const Title = styled.div`
  width:100%;
  text-align:center;
  font-size:1.5rem;
  margin-bottom:1rem;
`

const CoinsList= styled.div`
   display:flex;
   flex-direction:column;
`