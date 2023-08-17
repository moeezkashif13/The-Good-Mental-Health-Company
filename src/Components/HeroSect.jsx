import { BookButton, Heading } from "./General";
import {BiCheck} from 'react-icons/bi'

export default function HeroSect(){


    return(


        <div className="bg-secondary">

<div className="flex flex-col py-mobileVerticalPadding   


allPaddings

 space-y-8
  

md:flex-row
md:items-center


  
  ">

  


<div className="md:w-1/2">
<div className="w-[225px] h-[270px] md:w-[300px] md:h-[360px]


lg:w-[400px]
lg:h-[470px]

anotherDesktop:w-[500px]
anotherDesktop:h-[550px]


">

<img src="https://images.squarespace-cdn.com/content/v1/5dd7c4c447849c0257aaa47a/9923a97f-fc81-46e1-abfb-0b8fe21e1339/Head_chakra_shadows.png?format=750w" className="w-full h-full max-w-full object-cover lg:object-contain" alt="" />


</div>

</div>


<div className="space-y-10 md:w-1/2">


<Heading herosectHeading text="Affordable, high-quality therapy delivered with heart & soul" />


<p className="text-textone text-sm leading-6 font-medium md:text-base">Counselling and psychotherapy sessions available online throughout the UK, and face-to-face in Elephant and Castle, London for £35 per session</p>

<div className="pt-3">
<BookButton/>
</div>


</div>




</div>



<div className="bg-[#2F5560] text-white allPaddings py-secondVerticalPadding  space-y-14 font-medium sm:flex sm:space-y-0 sm:gap-y-4 sm:flex-wrap lg:py-24 lg:text-xl"> 


<div className="flex sm:w-1/2 lg:w-1/4 gap-x-5 lg:gap-x-3 items-center ">
    <div className="text-4xl"><BiCheck/></div>
    <p className="pt-1">Weekly sessions</p>
</div>



<div className="flex sm:w-1/2 lg:w-1/4 gap-x-5 lg:gap-x-3 items-center ">
    <div className="text-4xl"><BiCheck/></div>
    <p className="pt-1">High-quality therapy</p>
</div>




<div className="flex sm:w-1/2 lg:w-1/4 gap-x-5 lg:gap-x-3 items-center ">
    <div className="text-4xl"><BiCheck/></div>
    <p className="pt-1">Online or in-person</p>
</div>

<div className="flex sm:w-1/2 lg:w-1/4 gap-x-5 lg:gap-x-3 items-center ">
    <div className="text-4xl"><BiCheck/></div>
    <p className="pt-1">Open-ended sessions</p>
</div>


 </div>


        </div>




    )


}