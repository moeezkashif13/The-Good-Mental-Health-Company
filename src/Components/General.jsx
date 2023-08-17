export const Heading = ({text,small,color,herosectHeading})=>{
    return (

<div className={`${color?color:'text-textone'} font-semibold ${small?'text-base sm:text-lg':'text-3xl sm:text-4xl lg:text-5xl'} ${herosectHeading&&'lg:text-6xl lg:leading-[4.3rem]'}  `} >{text}</div>


    )
}


export const BookButton = ()=>{
    return <div className="pb-4">
    
    <div className="bg-primary text-white px-8 py-4 rounded-[60px] inline">Book an assessment</div>
    
    </div>
}