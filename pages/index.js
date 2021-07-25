import Head from 'next/head'
import GridContents from '../components/GridContents'
import HeaderNavbar from '../components/HeaderNavbar'
import Hero from '../components/Hero'

export default function Home() {
  return (
   <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen ">
     <HeaderNavbar />
     <Hero />
     <GridContents />
   </div>
  )
}
