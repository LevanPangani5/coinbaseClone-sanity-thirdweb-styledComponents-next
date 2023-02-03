import '@/styles/globals.css'
import { ThirdwebProvider,ChainId } from "@thirdweb-dev/react";

const supportedChainIs =[5];
const connectors ={
  injected: {},
}


export default function App({ Component, pageProps }) {
  return(
  <ThirdwebProvider
 // supportedChainIds={supportedChainIs}
  //connectors={connectors}
  desiredChainId={ChainId.Goerli}
  //chainRpc={{ [ChainId.Goerli]: "https://goerli.infura.io/v3/" }}
  >
    <Component {...pageProps} />
  </ThirdwebProvider>
  )
}
