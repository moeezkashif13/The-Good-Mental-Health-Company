import '@/styles/globals.css'


import {Poppins} from 'next/font/google'
import Head from 'next/head'


const PoppinsFont = Poppins({subsets:['latin'],  weight: ["100","200","300","400", "500", "600", "700", "800", "900"],
})




export default function App({ Component, pageProps }) {



  return       <>
  
  

  <Head>

  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>



      </Head>
  
  
  <main className={PoppinsFont.className} >

  <Component {...pageProps} />



  
</main>
</>

}
