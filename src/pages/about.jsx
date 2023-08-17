import GetInTouch from "@/Components/AboutPage/GetInTouch";
import LeadershipTeam from "@/Components/AboutPage/LeadershipTeam";
import OurTherapist from "@/Components/AboutPage/OurTherapist";
import AboutHeroSect from "@/Components/AboutPage/aboutHeroSect";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Head from "next/head";

export default function About(){

    return(

<>

<Head >
    <title>About Good Mental Health Company</title>
</Head>


        <div>

<Navbar/>

<AboutHeroSect/>

<LeadershipTeam/>


<OurTherapist/>


<GetInTouch/>


<Footer/>


        </div>

        </>



    )


}