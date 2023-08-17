import FAQ from "@/Components/FAQ";
import Footer from "@/Components/Footer";
import HeroSect from "@/Components/HeroSect";
import HowItWorks from "@/Components/How It Works";
import Info from "@/Components/Info";
import Location from "@/Components/Location";
import Navbar from "@/Components/Navbar";
import WhatWeTreat from "@/Components/What We Treat";
import Head from "next/head";

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

