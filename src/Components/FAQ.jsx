import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { Heading } from "./General";


const FAQArray = [


    {heading:'What type of therapy do I need?',text:'All of our therapists are experienced in working with the emotional difficulties human beings experience. Some therapists will have a particular interest, expertise or speciality that matches the issues you might specifically come to therapy for. We will always try to match clients and therapists who we think will work well together. Your assessment is a good time to discuss any thoughts you have in terms of the experiences, skills, knowledge and attributes you’d particularly like in a therapist.'},


    {heading:'Can I meet my therapist first?',text:'Once we match you with your therapist, we will introduce you to each other. Your therapist will then invite you to make the first appointment.',},


    {heading:'How many sessions will I need?',text:'Our therapists work on a weekly open-ended basis, and each session lasts for 50 minutes. Many people continue to work with their therapists over a number of years, while for others, shorter term counselling is preferred. Essentially, it is up to you and your therapist to discuss the duration of your therapy, but the decision to continue or end your work is ultimately always yours.',},


    {heading:"What if I can't make a session?",text:'If you give your therapist seven full days notice, we will waive the fee for that week. However, therapy works best when it takes place weekly at the same time, consistently. This allows for the difficulties you bring to therapy to be worked through safely, with the time and care that is necessary. If sessions are regularly missed, your therapist will discuss this with you.',},


    {heading:'What is the fee and how do I pay it?',text:'All sessions are charged at £35. Each week, you will be invoiced for your fee via email, which you should pay on receipt by bank transfer; payment instructions will appear on your weekly invoice. The only exception to this is if your therapist is on holiday when there is no charge, or on the infrequent occasion you have given seven full days notice. ',},


    {heading:'Why do I feel nervous about starting therapy?',text:'The honest answer to this question is we may not know why, and this is something you can explore in therapy. However, it is very natural to feel nervous when embarking on a new therapy experience. We are here to help you through the process - our assessment is caring and robust, and we very carefully select the most experienced trainee counsellors, psychotherapists and psychologists to work with you. You’re in safe hands.',},


    


    {heading:'I want some advice, will my therapist give me some?',text:'Your therapist will listen to your story and to all of the questions you have, and hold them safely with you in mind and heart. Over time, the wisdom you need, your personal wisdom that is unique to you and to your own life will manifest and things will seem clearer.',},




]


export default function FAQ(){

    const showDetail = (index)=>{

        document.querySelectorAll('.faqParentElem').forEach(eachElem=>{
    
            eachElem.querySelector('.checkingElem').classList.add('avien')
    
            eachElem.querySelector('.checkingElem').classList.remove('shevein')
    
        
            eachElem.querySelector('.checkingElem').classList.remove('pb-3')
    
    
        })
    
    
    
    const parentElem = document.querySelectorAll('.faqParentElem')[index];
    
        parentElem.querySelector('.checkingElem').classList.remove('avien')
    
        parentElem.querySelector('.checkingElem').classList.add('shevein')
    
    
        parentElem.querySelector('.checkingElem').classList.add('pb-3')
    
    
        
    }

    return (

        <div className="py-mobileVerticalPadding px-mobilePadding sm:px-secondMobilePadding md:px-tabletPadding lg:px-desktopPadding space-y-8 bg-fourthbg text-white
        
        

        md:py-16
        
        
        ">

<div className="text-center">
    <Heading text="FAQs" color="#ffffff" />
</div>


<div>

{FAQArray.map((elem,index)=>{
    return <div style={{transition:'all 1s'}} className="space-y-3 cursor-pointer pt-5 pb-3 border-t last:border-b border-white faqParentElem" onClick={()=>showDetail(index)}>
    
    
    <div className=" flex items-center text-lg lg:text-xl font-medium">
        <p className="pr-12">{elem.heading}</p>

<div className="ml-auto"><FaChevronDown/></div>

    </div>


    <div className="space-y-4  checkingElem  avien  text-[15px] leading-6">
    
    <p>{elem.text}</p>


    </div>



</div>


})}


</div>





        </div>


    )


}