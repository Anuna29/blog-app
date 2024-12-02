import React from 'react'
import { Footer, Header } from '../../components'
import { useParams } from 'react-router-dom'

export const BlogPage = () => {
  const { id } = useParams();

  console.log(id); 
  return (
    <div>
      <Header />
      <h1>Blog Page</h1>
      <Footer />
    </div>
  )
}
