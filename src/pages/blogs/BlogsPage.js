import React, { useState } from 'react'
import { Button, Footer, Header, CreateBlogModal, CreateTagModal, Card,  } from '../../components'
import "./BlogsPage.css"
import { useBlogContext, useUserContext } from '../../context';

export const BlogsPage = () => {
  const { currentUser } = useUserContext();
  const { blogs } = useBlogContext();


  const [openBlog, setOpenBlog] = useState(false);
  const [openTag, setOpenTag] = useState(false);

  const handleOpenBlog = () => {
    currentUser ? setOpenBlog(true) : alert("User needs to be signed in!");
  };
  const handleCloseBlog = () => setOpenBlog(false);

  const handleOpenTag = () => {
    currentUser ? setOpenTag(true) : alert("User needs to be signed in!");
  };
  const handleCloseTag = () => setOpenTag(false);


  return (
    <div>
      <Header />
      <div id='blogs-container'>
        <div id='create-blog'>
        <Button style={{width:"120px"}} onClick={handleOpenTag}>Create tag</Button>
        <Button style={{width:"120px"}} onClick={handleOpenBlog}>Create blog</Button>
        </div>
       
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            marginTop: "60px",
          }}
        >
          {blogs.map((blog, index) => (
            <div key={index}>
              <Card blog={blog} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <CreateBlogModal open={openBlog} handleClose={handleCloseBlog}/>
      <CreateTagModal open={openTag} handleClose={handleCloseTag}/>
    </div>
  )
}