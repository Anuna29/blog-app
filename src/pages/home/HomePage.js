import React from 'react'
import "./HomePage.css"
import { Footer, Header } from '../../components'

export const HomePage = () => {
  return (
    <div className='container'>
      <Header />
      <img src="images/image-1.png" alt="home"/>
      <Footer />
    </div>
  )
}
