import React from 'react'
import Header from '../component/Header'
import Carousal from "../component/Carousal"
import ProductSlider from '../component/ProductSlider'
import Logo from '../component/Logo'
import Fivebox from '../component/Fivebox'
import data from "../data/data"
import Footer from '../component/Footer'
const Home = () => {
  return (
    <div className="containerr">
        <Header />
        <Carousal />
        <ProductSlider data={data} condition={"my hero academia"}/>
        <ProductSlider data={data} condition={"best seller"}/>
        <Logo/>
        <Fivebox/>
        <ProductSlider data={data}/>
        <Footer/>
    </div>
  )
}

export default Home
