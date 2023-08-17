import Link from "next/link";

export default function Footer(){


    return(

        <div className="allPaddings bg-primary text-white" >

        <div className="allPaddings py-secondVerticalPadding space-y-14 text-sm ">


<div className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] ">
    <img src="https://images.squarespace-cdn.com/content/v1/5dd7c4c447849c0257aaa47a/0ca969f4-2e12-4d81-a8d4-ba0f9eadbe50/TGMHCo_mark_blush%402x.png?format=300w" className="w-full max-w-full h-full object-cover" alt="" />
</div>


<div className="flex flex-wrap">


<div className=" underline flex flex-col gap-y-3 w-1/2">

    <Link href="/about">About</Link>

    <Link href="/contact">Contact</Link>

</div>

<div className=" underline flex flex-col gap-y-3 w-1/2">

    <Link href="/help-support">Help & Support</Link>

    <Link href="/book-assessment">Book Assessment</Link>

</div>


</div>




<div className="space-y-5">
    <p>The Good Mental Health and Wellbeing Company Ltd trading as the Good Mental Health Company. Registration number: 12218397.</p>
    <p>We are an organisational member of BACP. Membership no. 00276501</p>
</div>





        </div>


<div className="pb-6">

<div className="h-0.5 bg-[#FFBBA6] w-full mb-6"></div>


<p className="allPaddings text-sm">© 2023   |   The Good Mental Health Company</p>

</div>


        </div>

    )


}