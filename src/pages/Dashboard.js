import Main from '../components/Main'
import React ,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import {useContract, ChainId} from '@thirdweb-dev/react'
import { ThirdwebSDK ,ContractInterceptor ,getNativeTokenByChainId, CommonSymbolSchema } from "@thirdweb-dev/sdk";
import { ethers } from 'ethers'
import { Connection } from "@solana/web3.js";




const Dashboard = ({address}) => {

 const[sanityTokens,setSanityTokens]=useState([]);
 const[thirdWebTokens, setThirdWebTokens] =useState([]);
 const sdk = new ThirdwebSDK("goerli");

  useEffect(()=>{
        const getSanityTokens=async()=>{
          /* const sanityToken = await fetch("https://x5pdcm0z.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D'coins'%5D%7B%0A%20%20name%2C%0A%20%20%20%20usdPrice%2C%0A%20%20%20%20contractAddress%2C%0A%20%20%20%20symbol%2C%0A%20%20%20%20logo%0A%7D")
             const tempSanityToken=await sanityToken.json()
             setSanityTokens(tempSanityToken.result)
           */
          /* const tokens=[
            {
            contractAdress:"0x05884B72EcD2E4919FD36886509EfDe7127Df5B9",
            logo:{_type:"image",asset:{_ref:"image-b9cbc84e454595bd0125b80022c339b0849eb720-1000x1000-png",_type:"reference"}},
            name:"Solana",
            symbol:"SOL",
            usdPrice:"23",
          },
          {
            contractAdress:"0x702245105B4bdf429553144C09e881F0cBAcfd0D",
            logo:{_type:"image",asset:{_ref:"image-4d32cfac7aafd7ccd071623952a1957977a4aba3-1000x1000-png",_type:"reference"}},
            name:"Etherium",
            symbol:"ETH",
            usdPrice:"1575",
          },
          {
            contractAdress:"0xcEAdE386ee037b72448e5544fA054797d972710A",
            logo:{_type:"image",asset:{_ref:"image-c1e91983831f17b8096ea86a9a8338ed16aec427-1000x1000-png",_type:"reference"}},
            name:"Bitcoin",
            symbol:"BTC",
            usdPrice:"21161",
          },
        ]
           setSanityTokens(tokens);
           */
        }
       getSanityTokens();
       console.log('sanity')
       console.log(setSanityTokens)
  },[])

  useEffect(()=>{
   const getThirdWebTokens =async()=>{
    const thirdWeb= await Promise.all( 
      sanityTokens.map(async (tokenItem)=>{
      let contract =  await sdk.getContract(tokenItem.contractAddress, "token");
      contract.address=tokenItem.contractAddress;
      return contract;
    }))
    setThirdWebTokens(thirdWeb);
   }
   getThirdWebTokens()
   console.log(thirdWebTokens)
  },[sanityTokens])
  
  return (
    <Wrapper>
        <Sidebar/>
        <MainContainer>
         <Header 
          address={address}
          sanityTokens={sanityTokens}
          thirdWebTokens={thirdWebTokens}
          />
          <Main
          address={address}
          sanityTokens={sanityTokens}
          thirdWebTokens={thirdWebTokens}
         />
        </MainContainer>
    </Wrapper>
   
  )
}

export default Dashboard

const Wrapper = styled.div`
    display:flex;
    height:100vh;
    width:100vw;
    background-color:#0a0b0d;
    color:white;
    overflow:hidden;
`
const MainContainer = styled.div`
    flex:1;
`