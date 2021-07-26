
const Hero = ({ img, categorie, date, title, content, imgWriter, nameWriter, profesion }) => {
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 container mx-auto gap-8 h-auto md:h-[460px] items-center px-4 md:px-0">
    <div>
     <div className="rounded-xl  overflow-hidden">
       <img src={img} alt="" className=""/>
     </div>
    </div> 
     <div className="font-patrick flex flex-col h-[100%] justify-center gap-4">
       <h4 className="text-gray-200">{categorie} <span>{date}</span></h4>
       <h3 className="text-4xl text-gray-100">{title}</h3>
       <p className="text-gray-400 text-lg">{content}</p>
       <div className="flex gap-4 text-gray-100">
         <div className="rounded-full overflow-hidden w-[50px]">
           <img src={imgWriter} alt={nameWriter} />
         </div>
         <div className="flex flex-col">
           <h4>{ nameWriter }</h4>
           <p>{ profesion }</p>
         </div>
       </div>
     </div>
  </article>
  )
}

export default Hero
