import React, { useState } from 'react'
import { Modal } from './Modal'
import { TextField } from '../textfield'
import { Box } from '@mui/material'
import { Button } from '../button'
import { blogsCollection } from '../../firebase'
import { useUserContext } from '../../context'
import { addDoc } from 'firebase/firestore'
export const CreateBlogModal = (props) => {
const { currentUser } = useUserContext();
const { open, handleClose } = props;
const [blogData, setBlogData] = useState({
  title:"",
  description: "",
  content: "",
})

const handleChange = (event) => {
  const { name, value } = event.target;

  setBlogData({...blogData, [name]: value });
}

const handleSubmit = async () => {
  if (blogData.content === ""|| blogData.description === "" || blogData.title === "") {
    alert("Please fill all the fields!")
  }else {
    await addDoc(blogsCollection, {
      userId: currentUser.uid,
      title: blogData.title,
      description: blogData.description,
      content: blogData.content,
    });

    setBlogData({
      title:"",
      description: "",
      content: "",
    });
    handleClose();
  };
};

  return (
    <Modal open={open} handleClose={handleClose}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}> 
       <h2 style={{margin:0}}>Create a new blog</h2>
        <TextField type="text" name="title" placeholder="Title..." value={blogData.title} onChange={handleChange}/>
        <TextField type="text" name="description" placeholder="Description..." value={blogData.description} onChange={handleChange}/>
        <TextField type="text" name="content" placeholder="Content..." value={blogData.content} onChange={handleChange}/>

        <Box sx={{display:"flex", gap:"150px"}}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Create</Button>
        </Box>
      </Box>
    </Modal>
  )
}
