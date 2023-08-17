import Link from 'next/link'
import {HiMenu} from 'react-icons/hi'
import { BookButton } from './General'
import { FaXmark } from 'react-icons/fa6'
import { useState } from 'react'

export default function Navbar(){

    const [showMenu,setShowMenu] = useState(false);

    return(

        <>

        <div className="bg-secondary px-mobilePadding sm:px-secondMobilePadding md:px-tabletPadding lg:px-desktopPadding py-mobilePadding relative">


{/* CHECKKKKKK */}

<div style={{transition:'all 0.8s'}} className={` bg-secondary w-full fixed left-0 h-full z-20 allPaddings py-mobilePadding space-y-20


${showMenu?'top-0 visible':'-top-[150%] invisible'}



`}>

<div className='flex items-center'>


<div className='w-[250px] lg:w-[320px]'>
<Link href="#!">
    <img src="https://images.squarespace-cdn.com/content/v1/5dd7c4c447849c0257aaa47a/172f605a-27e6-40a7-9243-cc6898d4f943/TGMHCo_logo_inline_blue%402x.png?format=1500w" alt="" className="w-full h-full object-cover max-w-full" />
</Link>
</div>


<div className='ml-auto text-textone text-3xl cursor-pointer' onClick={()=>setShowMenu(false)}>
    
<FaXmark/>

</div>



</div>


<div className='flex flex-col space-y-3 items-center text-2xl text-textone font-semibold'>


<Link href="/">Home</Link>
<Link href="/about">About</Link>
<Link href="/help-support">Help & Support</Link>
<Link href="contact">Contact</Link>

<Link href='/book-assessment'  className='pt-8 mx-auto text-lg'>
    <BookButton/>
</Link>


</div>




</div>


{/* CHECKKKKKK */}





<div className='flex items-center'>


<Link href="/" className='w-[250px] lg:w-[320px]'>
    <img src="https://images.squarespace-cdn.com/content/v1/5dd7c4c447849c0257aaa47a/172f605a-27e6-40a7-9243-cc6898d4f943/TGMHCo_logo_inline_blue%402x.png?format=1500w" alt="" className="w-full h-full object-cover max-w-full" />
</Link>



{/* Desktop Navbar */}

<div className='hidden ml-auto lg:flex lg:items-center gap-x-5 text-[#1c376a] font-semibold '>


<Link href="/">Home</Link>
<Link href="/about">About</Link>
<Link href="/help-support">Help & Support</Link>
<Link href="contact">Contact</Link>

<Link href='/book-assessment'  className='text-sm pt-4'>
<BookButton   />
</Link>



</div>


{/* Desktop Navbar */}



{/* Mobile Navbar */}
<div className='block lg:hidden ml-auto text-3xl text-[#1c376a] cursor-pointer' onClick={()=>setShowMenu(true)}>
    
    <HiMenu/>

</div>
{/* Mobile Navbar */}


        </div>


{/* <div className='bg-orange-500 w-full h-40 '></div> */}





        </div>

</>



    )


}