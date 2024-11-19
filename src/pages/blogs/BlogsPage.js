import React from 'react'
import { Button, Footer, Header } from '../../components'
import "./BlogsPage.css"

export const BlogsPage = () => {
  return (
    <div>
      <Header />
      <div id='blogs-container'>
        <div id='create-blog'>
        <Button style={{width:"120px"}}>Create blog</Button>
        </div>
      </div>
      <Footer />
    </div>
  )
}
