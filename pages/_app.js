import '../styles/globals.css';
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl="A3"
      appId="A3">
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp
