import Footer from "@/Components/Footer";
import { Heading } from "@/Components/General";
import Navbar from "@/Components/Navbar";
import Head from "next/head";
import { useForm } from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";
import { useState } from "react";

const phoneRegExp = /^[0-9]{10}$/; // Adjust the regular expression based on your phone number format


const schema = yup.object({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    email: yup.string().email('Email is required').required('Email is required'),
    
    phoneNumber: yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone number is required'),

    
    message: yup.string().required('Message is required'),

    // firstName: yup.string(),
    // lastName: yup.string(),
    // email: yup.string().email('Email is required'),
    
    // phoneNumber: yup.string(),
    // .matches(phoneRegExp, 'Phone number is not valid'),
    // .required('Phone number is required'),

    
    // message: yup.string(),


  }).required();
  

export default function Contact(){

    const { register, handleSubmit, watch, formState: { errors } } = useForm({

        resolver: yupResolver(schema),
        mode:"onChange"


    });


const [sendingLoader,setSendingLoader] = useState(false)

const [details,setDetails] = useState({});

    const onSubmit =  async data=>{
console.log(data);
        setSendingLoader(true)

        // setTimeout(() => {
        //     setSendingLoader(false)
        // }, 1000);
        
        axios.post('/api/sendemail',{
...data
        }).then(resp=>{

            
        setSendingLoader(false)
        setDetails(resp.data)
            
        }).catch(err=>{
            setSendingLoader(false)
            setDetails(err.response.data)
        })


    };
  


    return (

<>
<Head>
            <title>Contact With Good Mental Health Company</title>
        </Head>
        
        

        <div>



{sendingLoader && <div className="fixed top-0 z-20 w-full h-full bg-[rgba(0,0,0,0.8)] flex justify-center items-center">

<span class="loader"></span>


</div>

}


<Navbar/>


<div className="allPaddings py-12 space-y-16 bg-secondary text-textone md:flex md:space-y-0 md:gap-x-12">



<div className="md:w-1/2 space-y-5">


<Heading text="Contact Us" />


<div >


{/*  */}

<form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-wrap justify-between gap-y-4">


<div className="space-y-2 text-sm w-[calc(50%-7px)]">

    <p>First Name</p>
    
    <input {...register("firstName")} type="text" className="w-full outline-none bg-[#FAF8F7] border-primary border px-3 py-2" />
    
    <p className="text-red-500 font-medium">{errors.firstName?.message}</p>

    </div>

{/*  */}

<div className="space-y-2 text-sm w-[calc(50%-7px)]">

    <p>Last Name</p>
    
    <input {...register("lastName")} type="text" className="w-full outline-none bg-[#FAF8F7] border-primary border px-3 py-2" />
    
    <p className="text-red-500 font-medium">{errors.lastName?.message}</p>


    </div>


{/*  */}

<div className="space-y-2 text-sm w-full">

    <p>Email</p>
    
    <input {...register('email')} type="text" className="w-full outline-none bg-[#FAF8F7] border-primary border px-3 py-2" />
    
    <p className="text-red-500 font-medium">{errors.email?.message}</p>


    </div>

{/*  */}


<div className="space-y-2 text-sm w-full">

    <p>Phone Number</p>
    
    <input {...register('phoneNumber')} type="text" className="w-full outline-none bg-[#FAF8F7] border-primary border px-3 py-2" />
    
    <p className="text-red-500 font-medium">{errors.phoneNumber?.message}</p>


    </div>


{/*  */}

<div className="space-y-2 text-sm w-full">


    <p>Message</p>
    
    <textarea {...register('message')} rows={10} className="resize-none w-full outline-none bg-[#FAF8F7] border-primary border px-3 py-2" />
    
    <p className="text-red-500 font-medium">{errors.message?.message}</p>


    </div>


{/*  */}

<input value="Send Message" type="submit"  className="cursor-pointer px-6 py-4 text-white rounded-[55px] bg-primary font-semibold" />




</form>




</div>

<p className={` font-semibold ${details.sent?'text-green-500':'text-red-500'} `}>

{details.message}


</p>


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

        </>


    )



}