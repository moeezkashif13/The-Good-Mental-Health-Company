import { BookButton, Heading } from "../General";

export default function OurTherapist(){


    return(


        <div className="allPaddings pb-16 space-y-8 bg-secondary md:space-y-0 md:flex md:items-center">


<div className="md:w-1/2">
<div className="w-full h-[250px] anotherMobile:w-[350px] anotherMobile:h-[300px]

md:w-[380px] md:h-[400px]

lg:w-[42vw] lg:h-[42vw]



">


<img src="https://images.squarespace-cdn.com/content/v1/5dd7c4c447849c0257aaa47a/1b02f546-1a5c-4026-9b3e-cefff91b2f67/Placements_chairs_02.png?format=750w" className="w-full max-w-full h-full object-contain " alt="" />



</div>

</div>

<div className="md:w-1/2 md:pl-12 space-y-5 md:space-y-8 text-textone lg:text-lg">


<Heading text="Our therapists" />

<p>Delivered with knowledge and care, we have carefully selected talented trainee counsellors and psychotherapists in the later stages of their training who appreciate and are experienced in the sensitive and complicated feelings that clients bring. </p>

<p className="font-medium">Our books continue to grow but we are always keen to hear from talented trainee therapists and supervisors to join our team.</p>


<div className="pt-5  text-center">
    <BookButton/>
</div>




</div>



        </div>



    )


}