import React, { useState } from 'react'
import { Button, Footer, Header, CreateBlogModal } from '../../components'
import "./BlogsPage.css"

export const BlogsPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Header />
      <div id='blogs-container'>
        <div id='create-blog'>
        <Button style={{width:"120px"}} onClick={handleOpen}>Create blog</Button>
        </div>
      </div>
      <Footer />
      <CreateBlogModal open={open} handleClose={handleClose}/>
    </div>
  )
}
