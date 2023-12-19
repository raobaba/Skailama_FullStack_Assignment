import React from 'react'
import Navbar from './Navbar'
import Middle from './Middle'
import Footer from './Footer'
import MetaData from '../utils/Metadata'

function Home() {
  return (
    <>
     <MetaData title="Skai Lama - Shopify Apps to Supercharge DTC and eCommerce..." />
        <Navbar/>
        <Middle/>
        <Footer/>
    </>
  )
}

export default Home