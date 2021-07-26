import Head from 'next/head'
import GridContents from '../components/GridContents'
import HeaderNavbar from '../components/HeaderNavbar'
import Hero from '../components/Hero'

export default function Home() {
  return (
   <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen">
     <HeaderNavbar />
     <Hero 
      img ='https://raw.githubusercontent.com/irfan-fauzi/blog-nextjs-wireframe/main/assets/Rectangle%204.jpg'
      categorie= 'inspiration'
      date= '18 juli 2021'
      title= 'Understanding color theory: the color wheel and finding complementary colors'
      content= 'CNulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. '
      imgWriter= 'https://raw.githubusercontent.com/irfan-fauzi/blog-nextjs-wireframe/main/assets/author-3.jpg'
      nameWriter= 'jenny wilson'
      profesion= 'front end engineer'
     />
     <GridContents />
   </div>
  )
}
