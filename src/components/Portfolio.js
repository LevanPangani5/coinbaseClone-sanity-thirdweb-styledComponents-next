import React,{useEffect , useState} from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import styled from 'styled-components'
import {coins} from '../static/coins.js'
import Coin from './Coin.js'
import BalanceChart from './BalanceChart'




const Portfolio = () => {

  return (
    <Wrapper>
      <Content>
          <Chart>
            <div>
                <Balance>
                  <BalanceTitle>Portfolio balance</BalanceTitle>
                  <BalanceValue>
                    {'$'}
                    
                  </BalanceValue>
                </Balance>
            </div>
            <BalanceChart/>
          </Chart>
        
        <PortfolioTable>
          <TableItem>
            <Title>Your assets</Title>
          </TableItem>
        <Devider/>
        <Table>
            <TableItem>
                <TableRow>
                    <div style={{flex:3}}>Name</div>
                    <div style={{flex:2}}>Balance</div>
                    <div style={{flex:1}}>Price</div>
                    <div style={{flex:1}}>Allocation</div>
                    <div style={{flex:0}}><BsThreeDotsVertical/></div>
                </TableRow>
            </TableItem>
            <Devider/>
            <div>{coins.map(coin=>(
                   <div>
                       <Coin coin={coin}/>
                       <Devider/>
                   </div>
            ))}</div>
        </Table>
        </PortfolioTable>
      </Content>
    </Wrapper>
  )
}

export default Portfolio

const Wrapper = styled.div`
   flex:1;
   display:flex;
   justify-content:center;
   font-family:Arial;
   
   `
   const PortfolioTable= styled.div`
   margin-top:1rem;
   border:1px solid #282b2f;
`
const Content=styled.div`
   width:100%;
   max-width:1000px;
   padding:2rem 1rem;
`
const Balance=styled.div``

const BalanceTitle=styled.div`
    color:#8a919e;
    font-size:0.9rem;
`

const BalanceValue= styled.div`
    font-size:1.8rem;
    font-weight:700;
    margin : 0.5rem 0;

`

const Chart = styled.div`
   border:1px solid #282b2f;
   padding :1rem 2rem;
`
  const Table = styled.div`
      width:100%;
  `
  const TableRow = styled.tr`
     width:100%;
     display:flex;
     justify:content:space-between;

     & > th{
        text-align:left;
     }
  `
  const TableItem= styled.div`
     padding:1.2rem 2rem;
  `
  const Devider=styled.div`
     border-bottom:1px solid #282b2f;
  `
  const Title = styled.div`
     font-size:1.2rem;
     font-family: Arial;
     font-weight:600;
  `