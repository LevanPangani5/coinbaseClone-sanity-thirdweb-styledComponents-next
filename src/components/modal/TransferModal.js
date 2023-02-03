import React, { useState } from 'react'
import styled from 'styled-components'
import Transfer from './Transfer'
import CoinSelector from './CoinSelector'
import { TailSpin } from 'react-loader-spinner'
import Receive from './Receive'
const TransferModal = ({sanityTokens, address,thirdWebTokens}) => {
    const[action, setAction] =useState('send')
     const[selectedToken,setSelectedToken]=useState(sanityTokens[1])
    const SelectedStyle={
            color:'#3773f5'      
    }
      
    const UnselectedStyle= {
            border:'1px solid #282b2f'
    }

    const selectedModal=option=>{
        switch(option){
            case 'send':
              return <Transfer 
              selectedToken={selectedToken} 
              thirdWebTokens={thirdWebTokens} 
              address={address}
              setAction={setAction}/>
            case 'transferring':
                return (
                <div 
                style={{
                  width:'100%',
                  height:'100%',
                  display:'flex' ,
                  justifyContent:'center',
                  flexcDirection:'column',
                  fontFamily:'Arial',
                  fontSize:'1.5rem'
                   }}>
                  <h2>Transferring...</h2>
                <TailSpin
            height="80"
            width="80"
            color="#3773f5"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
          </div>    
                )           
            case 'select':
              return( 
              <CoinSelector
              setAction ={setAction}
              selectedToken={selectedToken}
              sanityTokens={sanityTokens}
              thirdWebTokens={thirdWebTokens}
              address={address}
              setSelectedToken={setSelectedToken}
               /> 
              ) 
               case 'transferred':
               return(
                 <div
                     style={{width:'100%',
                     height:'100%',
                     display:'flex' ,
                     justifyContent:'center',
                     flexcDirection:'column',
                     fontFamily:'Arial',
                     fontSize:'1.5rem',
                      color:'green'
                    }}
               >
                   transfer is completed
               </div>
               )
               case 'receive':
                
                return(
                <Receive  
                setAction ={setAction}
                selectedToken={selectedToken}
                address={address}/>
                )
            default:
                return <Transfer 
                selectedToken={selectedToken} 
                thirdWebTokens={thirdWebTokens} 
                address={address}
                setAction={setAction}/>
        }
    }
  return (
    <Wrapper>
        <Selector>
            <Option 
            style={action == 'send'?SelectedStyle:UnselectedStyle}
            onClick={()=>setAction('send')}
            >
              <p>Send</p>
           </Option>
           <Option 
           style={action == 'receive' ?SelectedStyle:UnselectedStyle}
           onClick={()=> setAction('receive')}
           >
             <p>Recieve</p>
           </Option>
        </Selector>
        <ModalMain>
          {selectedModal(action)}  
        </ModalMain>
    </Wrapper>
  )
}

export default TransferModal

const Wrapper = styled.div`
  height: 35rem;
  width: 27rem;
  color: white;
  border: 1px solid #282b2f;
  display: flex;
  flex-direction: column;
  font-family:Arial;
`
const Selector = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
height: 5rem;
`

const Option = styled.div`
  height:100%;
  width:100%;
  display:flex;
  align-items:center;
  justify-content: center;
  font-size:1.2rem;
  font-weight:600;

  &:hover{
    cursor:pointer;
    background-Color:#111214;
  }
`
const ModalMain = styled.div`
 padding:1rem;
 flex:1;
`


  
