import Footer from "@/Components/Footer";
import { Heading } from "@/Components/General";
import Navbar from "@/Components/Navbar";

export default function Contact(){



    return (

        <div>


<Navbar/>


<div className="allPaddings py-12 space-y-16 bg-secondary text-textone md:flex md:space-y-0 md:gap-x-12">



<div className="md:w-1/2 space-y-8">


<Heading text="Contact Us" />


<div className="flex flex-wrap justify-between gap-y-6">


{/*  */}

<div className="space-y-2 text-sm w-[calc(50%-7px)]">

    <p>First Name</p>
    
    <input type="text" className="w-full outline-none bg-[#FAF8F7] border-primary border px-3 py-2" name="" id="" />
    
    </div>

{/*  */}

<div className="space-y-2 text-sm w-[calc(50%-7px)]">

    <p>Last Name</p>
    
    <input type="text" className="w-full outline-none bg-[#FAF8F7] border-primary border px-3 py-2" name="" id="" />
    
    </div>


{/*  */}

<div className="space-y-2 text-sm w-full">

    <p>Email</p>
    
    <input type="text" className="w-full outline-none bg-[#FAF8F7] border-primary border px-3 py-2" name="" id="" />
    
    </div>

{/*  */}


<div className="space-y-2 text-sm w-full">

    <p>Phone Number</p>
    
    <input type="text" className="w-full outline-none bg-[#FAF8F7] border-primary border px-3 py-2" name="" id="" />
    
    </div>


{/*  */}

<div className="space-y-2 text-sm w-full">


    <p>Message</p>
    
    <textarea rows={8} className="resize-none w-full outline-none bg-[#FAF8F7] border-primary border px-3 py-2" name="" id="" />
    
    </div>


{/*  */}

<div className="px-6 py-4 text-white rounded-[55px] bg-primary font-semibold">Send Message</div>





</div>



</div>

<div className="md:w-1/2 space-y-5">
    

<Heading  text="Our therapy rooms" />

<p>Technopark, 90 London Road, London, SE1 6LN</p>


<div className="h-[450px]">



<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2482.5485821559773!2d-0.12388312426915968!3d51.52149730967455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTHCsDMxJzE3LjQiTiAwwrAwNycxNi43Ilc!5e0!3m2!1sen!2s!4v1692264011636!5m2!1sen!2s" className="w-full max-w-full h-full" style={{border:'none'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


</div>


</div>


</div>



<Footer/>


        </div>



    )



}