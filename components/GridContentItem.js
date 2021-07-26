
const GridContentItem = ({img, categorie, date, title, content, imgWriter, nameWriter, profesion}) => {
  return (
    <section className="text-gray-100 font-patrick border border-gray-700 rounded-xl shadow-2xl p-5 flex flex-col gap-3" key={Math.random()}>
      <div className="overflow-hidden rounded-xl">
         <img src={img} alt={title} className="w-full" />
        </div>
          <div className="flex gap-4 text-gray-400">
            <p>{ categorie }</p>
            <p>{ date }</p>
          </div>
          <h3 className="text-2xl">{ title }</h3>
            <p className="text-gray-400">{ content }</p>
            <div className="flex gap-4 items-center mt-4 text-gray-400">
              <img src={imgWriter} alt={nameWriter} className="rounded-full w-[50px]" />
              <div className="flex flex-col">
                <p className="text-gray-300">{ nameWriter }</p>
                <p>{ profesion }</p>
            </div>  
         </div>
      </section>
  )
}

export default GridContentItem
