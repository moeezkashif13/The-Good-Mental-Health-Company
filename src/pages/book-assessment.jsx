import Footer from "@/Components/Footer";
import { Heading } from "@/Components/General";
import Navbar from "@/Components/Navbar";
import Head from "next/head";
import Script from "next/script";

export default function BookAssessment(){


    return (

        <>

        <Head>
            <title>Book An Assessment With The Good Mental Health Company</title>
        </Head>

        <div>
            

<Navbar/>


<div className="allPaddings py-16 space-y-5 bg-secondary flex flex-col text-center">


<div className="h-[200px] md:h-[250px] ">

<img src="https://images.squarespace-cdn.com/content/v1/5dd7c4c447849c0257aaa47a/3a48be2e-fe7b-4f6f-aaa1-05f7805e1fcc/HIW_01.png?format=500w" className="w-full max-w-full h-full object-contain" alt="" />


</div>


<div className="text-textone font-semibold text-2xl md:text-3xl">Book an assessment</div>


<p className="text-sm md:text-base">All assessments are undertaken via Zoom. During the assessment, a member of our Clinical Team will learn more about you, and explore further your reasons for seeking therapy. We will answer any questions you have about therapy during this time. Once the assessment is complete, we will match you with your therapist. </p>


<div className="relative md:-top-12 h-[1020px] bookingForm:h-[700px]">

<div className="calendly-inline-widget w-full h-full" data-url="https://calendly.com/moeezkashif13/portfolio-website?background_color=000000&text_color=91ff00&primary_color=91ff00" style={{minWidth:'320px'}}></div>


</div>




</div>


<Footer/>





        </div>

        <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></Script>

</>



    )


}