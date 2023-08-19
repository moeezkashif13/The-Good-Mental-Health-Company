import { Heading } from "../General";

export default function LeadershipTeam(){

    return (

        <div className="allPaddings py-16 bg-secondary space-y-8">


<Heading text="The leadership team"  />



<div className="text-sm text-textone space-y-5 sm:flex sm:flex-wrap sm:space-y-0 sm:justify-between sm:gap-y-5 lg:text-lg">

{[1,2,3,4].map(()=>{
    return <div  className="sm:w-[calc(50%-10px)] md:w-[calc(33%-10px)] p-5 space-y-3 bg-[#FFFBF8]">

<div className="w-full h-[380px] md:h-[270px] lg:h-[350px]">

<img src="https://res.cloudinary.com/dtcwpaba5/image/upload/v1692434357/The%20Good%20Mental%20Health%20Company/wze94nox2rm9q860nktb.webp" className="w-full max-w-full h-full object-contain " alt="" />


</div>

<p className="text-textone font-semibold text-2xl ">Sarah Parry</p>

<p className="font-medium">FOUNDER & CLINICAL DIRECTOR</p>

<p>An expert in community development and social entrepreneurship, Sarah has dedicated the past 25 years to advocating for people made vulnerable and disadvantaged by systems that have failed them. She is a fierce advocate for those in need, unafraid to challenge and transform the status quo for the good of people.</p>

<p>Trained as a Transpersonal Integrative Psychotherapist, with additional degrees in Psychology, and Public Health Education, Sarah is passionate about utilising and sharing Transpersonal approaches to individual and societal transformation. Her work is inspired by the notion of honouring individual uniqueness amongst people, and guided by moral integrity, courage, and a deep appreciation for the journey of life.</p>

<p>In addition to her work at The Good Mental Health Company, Sarah works as a psychotherapist in private practice specialising in working with people who have experienced complex trauma, addictions, and eating disorders.</p>

    </div>
})}



</div>




        </div>


    )


}