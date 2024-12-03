import React, { useState } from 'react'
import { Button, Footer, Header, CreateBlogModal, CreateTagModal,  } from '../../components'
import "./BlogsPage.css"
import { uploadImage } from '../../cloudinary';

export const BlogsPage = () => {
  const [openBlog, setOpenBlog] = useState(false);
  const [openTag, setOpenTag] = useState(false);

  const handleOpenBlog = () => setOpenBlog(true);
  const handleCloseBlog = () => setOpenBlog(false);

  const handleOpenTag = () => setOpenTag(true);
  const handleCloseTag = () => setOpenTag(false);

  const [file, setFile] = useState();
  const [image, setImage] = useState();

  const handleSubmit = async () => {
    if (file) {
      const previewLink = await uploadImage(file);
      setImage(previewLink); 
    }else{
      alert("Select a file to upload")
    }
  };

  return (
    <div>
      <Header />
      <div id='blogs-container'>
        <div id='create-blog'>
        <Button style={{width:"120px"}} onClick={handleOpenTag}>Create tag</Button>
        <Button style={{width:"120px"}} onClick={handleOpenBlog}>Create blog</Button>
        </div>
       
        <div>
          <input type="file" onChange={(e)=>{setFile(e.target.files[0]);
          }}/>
          <Button style={{width:"150px"}} onClick={handleSubmit}>Upload Image</Button>
        </div>

        {image && <img src={image} alt='' height={"500px"}/>}

      </div>
      <Footer />
      <CreateBlogModal open={openBlog} handleClose={handleCloseBlog}/>
      <CreateTagModal open={openTag} handleClose={handleCloseTag}/>
    </div>
  )
}