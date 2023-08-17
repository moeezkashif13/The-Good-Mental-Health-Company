import { Heading } from "./General"

export default function HowItWorks(){
    return (

        <div className="py-16 space-y-12 bg-secondary">


<div className="text-center">
<Heading text="How it works" />
</div>


<div className="flex flex-col items-center gap-y-16  sm:flex-row sm:flex-wrap" >

{/*  */}
<div className="sm:w-1/2 md:w-1/3 flex flex-col items-center text-center gap-y-3 px-8">

    <div className="w-[160px] h-[125px] ">
        <img src="https://images.squarespace-cdn.com/content/v1/5dd7c4c447849c0257aaa47a/3a48be2e-fe7b-4f6f-aaa1-05f7805e1fcc/HIW_01.png?format=300w" className="w-full max-w-full h-full object-cover" alt="" />
    </div>

<p className="mt-2"><Heading text="Book an assessment" small /></p>
<p>Fill out our form and book in your assessment at a convenient time for you</p>
    </div>


{/*  */}

<div className="sm:w-1/2 md:w-1/3 flex flex-col items-center text-center gap-y-3 px-8">

    <div className="w-[160px] h-[125px] ">
        <img src="https://images.squarespace-cdn.com/content/v1/5dd7c4c447849c0257aaa47a/0acc3516-fa6f-4ab7-9cf4-a27d8b679c4c/HIW_02.png?format=300w" className="w-full max-w-full h-full object-cover" alt="" />
    </div>

<p className="mt-2"><Heading text="We match you with a therapist" small /></p>
<p>After your assessment, we will match you with the right therapist for your particular needs</p>
    </div>


{/*  */}


<div className="sm:w-1/2 md:w-1/3 flex flex-col items-center text-center gap-y-3 px-8">

    <div className="w-[160px] h-[125px] ">
        <img src="https://images.squarespace-cdn.com/content/v1/5dd7c4c447849c0257aaa47a/e6f3abe4-9948-4ef8-8bb2-30c6d41e67d5/HIW_03.png?format=300w" className="w-full max-w-full h-full object-cover" alt="" />
    </div>

<p className="mt-2"><Heading text="Start therapy" small /></p>
<p>Once you’ve been matched, you can begin  regular therapy sessions for as long as needed</p>
    </div>


{/*  */}


</div>



        </div>


    )
}