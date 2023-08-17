import { BookButton, Heading } from "./General"

import {FaPlus} from 'react-icons/fa6'


const WhatWeTreatArray = [


    {heading:'Anxiety',text:'Anxiety can be viewed as a symptom of deeper internal conflicts or tensions that can be addressed in therapy. It can arise when there is a conflict between what we consciously think and feel, and what is buried in our subconscious. This could be due to unresolved conflicts or unexpressed emotions that we may not be aware of.',secondText:'Anxiety is a normal human experience that can be seen as a warning sign that something needs attention. By exploring the root causes of our anxiety, we can gain a deeper understanding of ourselves and our place in the world, leading to a more fulfilling and meaningful life. Working through our anxiety can be an opportunity for personal growth and self-discovery.'},


    {heading:'Depression',text:'From a therapeutic perspective, depression can be viewed as a symptom of deeper psychological conflicts or tensions that need to be addressed. Depression can arise when there is a disconnection or imbalance between our conscious and unconscious aspects. This could be due to unresolved emotional wounds, feelings of meaninglessness, or a lack of purpose in life.',secondText:'Depression is a natural and common human experience that can be seen as an opportunity for self-discovery and personal growth. By exploring the underlying causes of our depression, we can gain a deeper understanding of ourselves and our place in the world, leading to a more fulfilling and meaningful life. Working through our depression can help us find greater meaning and purpose in life and can lead to a more authentic expression of ourselves.'},


    {heading:'Trauma',text:'Trauma can take many forms, such as physical or emotional abuse, neglect, or sudden loss of a loved one. From a therapeutic perspective, trauma can be an opportunity for personal growth and transformation. By working through the trauma, individuals can integrate the experience into their psyche, leading to a more authentic and meaningful life.',secondText:'Therapy can help individuals process and integrate their traumatic experiences by providing a safe and supportive environment for exploring their emotions and thoughts. By exploring the underlying causes of their trauma, individuals can gain a deeper understanding of themselves and their place in the world, leading to a greater sense of wholeness and wellbeing.'},


    {heading:'Stress',text:'Stress can be seen as a natural response to external pressures and demands that we face in our daily lives. These pressures can come from a variety of external sources such as work, finances and relationships, etc. Stress may also be a response to internal psychological pressures such as early life difficulties, and problems stemming from unaddressed problems from childhood. When these demands feel overwhelming or beyond our capacity to manage, we may experience feelings of anxiety, tension, and even physical symptoms.',secondText:'In therapy, we view stress as an opportunity for personal growth and transformation. By exploring the underlying causes of our stress, we can gain a deeper understanding of ourselves and our place in the world. This can lead to a more fulfilling and meaningful life, with greater self-awareness, purpose, and resilience.',thirdText:'In therapy, we view stress as an opportunity for personal growth and transformation. By exploring the underlying causes of our stress, we can gain a deeper understanding of ourselves and our place in the world. This can lead to a more fulfilling and meaningful life, with greater self-awareness, purpose, and resilience.',fourthText:'During therapy, you and your therapist will work together to understand your stress and ways of alleviating the problems it poses to you. We may also explore how different aspects of our lives are interconnected and impact our well-being. By working through our stress in therapy, we can develop greater self-awareness and build a stronger sense of purpose and meaning in our lives.    '},




    {heading:'Relationship difficulties',text:'We view relationship difficulties as symptoms of deeper psychological conflicts or tensions that need to be addressed on an individual level. These conflicts can arise from our unconscious aspects that may impact our conscious thoughts, feelings, and behaviours towards others.',secondText:'Relationship difficulties can take many forms, such as communication breakdowns, trust issues, or conflicts over different values or needs. From a therapeutic perspective, relationship difficulties can be an opportunity for personal growth and transformation. By exploring the underlying causes of our relationship difficulties, we can gain a deeper understanding of ourselves and our place in the world.',thirdText:'Therapy can help individuals develop the tools and techniques necessary to improve their relationships by working on improving communication, building trust, and addressing underlying conflicts. By working through relationship difficulties in therapy, individuals can gain greater self-awareness, deepen their connections with others, and develop a more fulfilling and meaningful life.'},


    {heading:'Addiction',text:'Addiction can be viewed as a symptom of a deeper psychological conflict or wound that has not been fully addressed or integrated. This conflict or wound can stem from unresolved issues from childhood, repressed emotions, or a lack of connection to our authentic self.',secondText:'Addiction can take many forms, including substance abuse, food addiction, overconsumption of alcohol, compulsive behaviours in a variety of areas, or unhealthy patterns of thinking or relating. From a therapeutic perspective, addiction can be seen as an opportunity for personal growth and transformation. By exploring the underlying causes of addiction, individuals can gain a deeper understanding of themselves and their place in the world.',thirdText:'Therapy can help individuals address the root causes of their addiction, develop greater self-awareness, and build healthier coping mechanisms. By working through addiction in therapy, individuals can begin to integrate the wounded aspects of themselves and find greater balance and wholeness in their lives. Ultimately, this can lead to a more fulfilling and meaningful life, with greater self-awareness, purpose, and resilience.    '},


    

]



export default function WhatWeTreat(){

const showDetail = (index)=>{

    document.querySelectorAll('.parentElem').forEach(eachElem=>{

        eachElem.querySelector('.checkingElem').classList.add('avien')

        eachElem.querySelector('.checkingElem').classList.remove('shevein')

    
        eachElem.querySelector('.checkingElem').classList.remove('pb-3')


    })



const parentElem = document.querySelectorAll('.parentElem')[index];

    parentElem.querySelector('.checkingElem').classList.remove('avien')

    parentElem.querySelector('.checkingElem').classList.add('shevein')


    parentElem.querySelector('.checkingElem').classList.add('pb-3')


    
}


    return(


        <div className="py-12 allPaddings space-y-16 sm:space-y-20 bg-thirdbg
        

        checking


        md:flex 

        md:space-y-0

        md:py-16
        

        lg:py-24

        
        ">

<div className="md:w-1/2 md:space-y-20 md:pr-8">
<Heading text="We offer help in a variety of areas and we welcome all difficulties that clients bring" />

<div className="hidden md:block">
<BookButton/>

</div>

</div>


<div className="text-lg md:w-1/2">

{WhatWeTreatArray.map((elem,index)=>{
    return <div  className="space-y-2 cursor-pointer pt-4 pb-2 border-t last:border-b border-primary parentElem" onClick={()=>showDetail(index)}>
        
        <div className="    flex items-center text-primary ">
        <p className=" font-medium">{elem.heading}</p>
        <div className="ml-auto"><FaPlus/></div>

    </div>

<div className="space-y-4  checkingElem  avien  text-[15px] leading-6">
    

    <p>{elem.text}</p>

    <p>{elem.secondText}</p>

{elem.thirdText&&<p>{elem.thirdText}</p>}

{elem.fourthText&&<p>{elem.fourthText}</p>}



    </div>

    </div>


})}


</div>




<div className="block md:hidden">

<BookButton/>

</div>



        </div>

)


}