import { useState } from "react"
import GridContentItem from "./GridContentItem"

const GridContents = () => {
  
  const [content, setContent] = useState([
    {
      img: 'https://raw.githubusercontent.com/irfan-fauzi/blog-nextjs-wireframe/main/assets/thumbnail-2.jpg',
      categorie: 'internet',
      date: '18 juli 2021',
      title: 'how to design your product that can grow 20x',
      content : 'Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.',
      imgWriter: 'https://raw.githubusercontent.com/irfan-fauzi/blog-nextjs-wireframe/main/assets/author-2.jpg',
      nameWriter: 'jenny wilson',
      profesion: 'front end engineer'

    },
    {
      img: 'https://raw.githubusercontent.com/irfan-fauzi/blog-nextjs-wireframe/main/assets/thumbnail-3.jpg',
      categorie: 'inspiration',
      date: '18 juli 2021',
      title: 'the more important the work, the more important the rest',
      content : 'Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.',
      imgWriter: 'https://raw.githubusercontent.com/irfan-fauzi/blog-nextjs-wireframe/main/assets/author-3.jpg',
      nameWriter: 'jenny wilson',
      profesion: 'front end engineer'
    },
    {
      img: 'https://raw.githubusercontent.com/irfan-fauzi/blog-nextjs-wireframe/main/assets/thumbnail-4.jpg',
      categorie: 'inspiration',
      date: '18 juli 2021',
      title: 'email Love- email inspiration template and discovery',
      content : 'Consider that for a moment: everything we see around us is assumed to have had a cause and is contingent upon something else.',
      imgWriter: 'https://raw.githubusercontent.com/irfan-fauzi/blog-nextjs-wireframe/main/assets/author-4.jpg',
      nameWriter: 'jenny wilson',
      profesion: 'front end engineer'
    },
    {
      img: 'https://raw.githubusercontent.com/irfan-fauzi/blog-nextjs-wireframe/main/assets/thumbnail-5.jpg',
      categorie: 'inspiration',
      date: '18 juli 2021',
      title: 'The More Important the Work, the More Important the Rest',
      content : 'Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.',
      imgWriter: 'https://raw.githubusercontent.com/irfan-fauzi/blog-nextjs-wireframe/main/assets/author-2.jpg',
      nameWriter: 'jenny wilson',
      profesion: 'front end engineer'
    },
    {
      img: 'https://raw.githubusercontent.com/irfan-fauzi/blog-nextjs-wireframe/main/assets/thumbnail-6.jpg',
      categorie: 'inspiration',
      date: '18 juli 2021',
      title: 'Email Love - Email Inspiration, Templates and Discovery',
      content : 'Consider that for a moment: everything we see around us is assumed to have had a cause and is contingent upon something else.',
      imgWriter: 'https://raw.githubusercontent.com/irfan-fauzi/blog-nextjs-wireframe/main/assets/author-3.jpg',
      nameWriter: 'jenny wilson',
      profesion: 'front end engineer'
    },
    {
      img: 'https://raw.githubusercontent.com/irfan-fauzi/blog-nextjs-wireframe/main/assets/thumbnail-7.jpg',
      categorie: 'inspiration',
      date: '18 juli 2021',
      title: 'How to design a product that can grow itself 10x in year',
      content : 'Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.',
      imgWriter: 'https://raw.githubusercontent.com/irfan-fauzi/blog-nextjs-wireframe/main/assets/author-4.jpg',
      nameWriter: 'jenny wilson',
      profesion: 'front end engineer'
    },
    
  ])
  return (
    <article className="grid grid-cols-1 md:grid-cols-3 gap-2 container mx-auto">
      {
        content.map(({img, categorie, date, title, content, imgWriter, nameWriter, profesion}) => (
          <GridContentItem 
            img={img}
            categorie={categorie}
            date={date}
            title={title}
            content={content}
            imgWriter={imgWriter}
            nameWriter={nameWriter}
            profesion={profesion}
          />
        ))
      }
      
    </article>
  )
}

export default GridContents
