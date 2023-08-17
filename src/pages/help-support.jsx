import Footer from "@/Components/Footer";
import { Heading } from "@/Components/General";
import Navbar from "@/Components/Navbar";

const LocalHeading = ({text})=>{
    return <span className="inline-block font-semibold ">{text}</span>
}

export default function HelpSupport(){


    return(


        <div className="bg-secondary ">

<Navbar/>


<div className="allPaddings text-textone py-12 space-y-8">


<Heading  text="Help & Support" />


<p>Here are some national organisations that can assist if you are experiencing an acute mental health problem or crisis.</p>

<div className="h-0.5 bg-primary w-full"></div>


<LocalHeading text="If you have seriously harmed yourself, or you don’t feel that you can keep yourself safe right now seek immediate help by calling 999, or going straight to A&E.  " />

<ul className="space-y-8 list-disc allPaddings">
<li><LocalHeading  text="Call your GP" /> and ask for an emergency appointment</li>

<li><LocalHeading  text="Call NHS 111" /> or <LocalHeading  text="NHS Direct"/> (Wales) for out-of-hours to help </li>


<li><LocalHeading  text="Contact your mental health crisis team" /> if you have one</li>

</ul>

<div className="h-0.5 bg-primary w-full"></div>


<LocalHeading text="Further information and resources " />

<ul className="space-y-8 list-disc allPaddings">
    <li>Rethink information page on suicidal thoughts</li>
    <li>Mind information page on suicidal thoughts</li>
    <li>Support After Suicide Partnership offers practical and emotional support for people bereaved or affected by suicide</li>
    <li>Samaritans directory of organisations that provide advice or specialist support for a range of issues, including bereavement, debt, relationships etc.</li>
</ul>

</div>





<Footer/>




        </div>



    )


}