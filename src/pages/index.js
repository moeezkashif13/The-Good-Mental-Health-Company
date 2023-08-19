import FAQ from "@/Components/FAQ";
import Footer from "@/Components/Footer";
// import HeroSect from "@/Components/HeroSect";
// import HowItWorks from "@/Components/How It Works";
// import Info from "@/Components/Info";
// import Location from "@/Components/Location";
import Navbar from "@/Components/Navbar";
// import WhatWeTreat from "@/Components/What We Treat";
import Head from "next/head";

import dynamic from 'next/dynamic'

const HeroSect = dynamic(() => import('../Components/HeroSect'))


const HowItWorks = dynamic(() => import('../Components/How It Works'))


const Info = dynamic(() => import('../Components/Info'))

const WhatWeTreat = dynamic(() => import('../Components/What We Treat'))

const Location = dynamic(() => import('../Components/Location'))



export default function Home() {


  
  return (
<>

<Head>

<title>Affordable, high-quality therapy delivered with heart and soul</title>




</Head>

<div className="bg-secondary">


<Navbar/>


<HeroSect/>


<Info/>


<Location/>


<HowItWorks/>


<WhatWeTreat/>

<FAQ/>

<Footer/>

</div>

</>


  
    

  )
}

