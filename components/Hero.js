
const Hero = () => {
  return (
    <div className="flex container mx-auto gap-6 h-[450px] items-center">
    <div>
     <div className="rounded-xl w-[710px] overflow-hidden">
       <img src="https://raw.githubusercontent.com/irfan-fauzi/blog-nextjs-wireframe/main/assets/Rectangle%204.jpg" alt="" className=""/>
     </div>
    </div> 
     <div className="font-patrick flex flex-col h-[100%] justify-center gap-4">
       <h4 className="text-gray-200">UI Design. 25 july 2021</h4>
       <h3 className="text-4xl text-gray-100">Understanding color theory: the color wheel and finding complementary color</h3>
       <p className="text-gray-400 text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur et sed porro distinctio consectetur ad. Omnis laudantium aliquid maiores nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quod! Lorem ipsum dolor sit,!</p>
       <div className="flex gap-4 text-gray-100">
         <div className="rounded-full overflow-hidden w-[50px]">
           <img src="https://raw.githubusercontent.com/irfan-fauzi/blog-nextjs-wireframe/main/assets/Ellipse%201.jpg" alt="" />
         </div>
         <div className="flex flex-col">
           <h4>Leslie Alexander</h4>
           <p>UI Designer</p>
         </div>
       </div>
     </div>
  </div>
  )
}

export default Hero
