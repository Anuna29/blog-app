import React, { useEffect, useState } from 'react'
import { Footer, Header, Button, DeleteBlogModal } from '../../components'
import { useNavigate, useParams } from 'react-router-dom'
import { useBlogContext } from '../../context';
import { CircularProgress } from '@mui/material';
import "./BlogPage.css"

export const BlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [openDeleteBlog, setOpenDeleteBlog] = useState(false);
  const handleOpenDeleteBlog = () => setOpenDeleteBlog(true);
  const handleCloseDeleteBlog = () => setOpenDeleteBlog(false);

  const { blogs, blogsLoading } = useBlogContext();

  const singleBlog = blogs.find((blog) => blog.blogID === id);

  useEffect(() => {
    if(!blogsLoading && !singleBlog){
      navigate("/404", { replace: true })
    }
  },[blogsLoading, singleBlog,navigate]);

  if (blogsLoading) {
    return (
      <div 
        style={{
          height:"100vh",
          width:"100vw", 
          display:"flex", 
          alignItems:"center",
          justifyContent:"center" 
        }}>
          <CircularProgress />
        </div>);
  }
  if(!singleBlog) return null;
 
  return (
    <div>
      <Header />
      <div id='blog-container'>
        <h1 style={{width:"800px", marginTop:"40px", marginBottom:"40px"}}>{singleBlog.title}</h1>
        <div 
          style={{
            display:"flex",
            gap: "20px",
            width:"100%",
            alignItems:"center",
            justifyContent: "center",
          }}
        >
          <h3>{singleBlog.user.displayName}</h3>
          <p>
            {singleBlog.createdAt.toDate().toLocaleDateString("en-US",{
            year: "numeric", 
            month: "long", 
            day:"numeric",
            })}
          </p>
        </div>
        <img src={singleBlog.imageURL} width={800} alt={singleBlog.title} />
        <p style={{marginTop:"40px"}}>{singleBlog.content}</p>
        <div 
          style={{
            display:"flex",
            justifyContent: "space-between",
            marginTop: 40,
          }}
        >
          <Button style={{ width:"120px"}}>Update</Button>
          <Button style={{ width:"120px"}} onClick={handleOpenDeleteBlog}>Delete</Button>
        </div>
      </div>
      <DeleteBlogModal 
        open={openDeleteBlog}
        handleClose={handleCloseDeleteBlog}
        blogId={id}
      />
      <Footer />
    </div>
  )
}
