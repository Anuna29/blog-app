import { Box, CircularProgress, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react'
import { useTagContext } from '../../context';
import { TextField } from '../textfield';
import { Modal } from './Modal';
import { Button } from '../button';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { blogsCollection } from '../../firebase';

export const UpdateBlogModal = (props) => {
  const { open, handleClose, blog } = props;

  const { tags, tagLoading} = useTagContext();
  const [blogData, setBlogData] = useState({
    ...blog,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBlogData({...blogData, [name]: value });
  };

  const handleSubmit = async () => {
    if (
      !blogData.title || 
      !blogData.description || 
      !blogData.content || 
      !blogData.tagID
    ) {
      alert('Please fill out all required fields');
    }else{
      setLoading(true);

      await setDoc(doc(blogsCollection, blogData.blogId),{
        ...blogData,
        updatedAt: serverTimestamp(),
      });
      setLoading(false);
      handleClose();
    }
  }
  return (
    <Modal open={open} handleClose={handleClose}>
       {tagLoading || loading ? (
        <Box sx={{
          display:'flex', 
          justifyContent:'center', 
          alignItems:'center'}}>
            <CircularProgress />
        </Box>
       ) : (
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}> 
         <h2 style={{margin:0}}>Create a new blog</h2>
          <TextField 
            type="text" 
            name="title" 
            placeholder="Title..." 
            value={blogData.title} 
            onChange={handleChange}/>
          <TextField type="text" 
            name="description" 
            placeholder="Description..." 
            value={blogData.description} 
            onChange={handleChange}/>
          <TextField 
            type="text" 
            name="content" 
            placeholder="Content..." 
            value={blogData.content} 
            onChange={handleChange}/>
          <Select
            value={blogData.tagID}
            name='tagID'
            onChange={handleChange}
            inputPros={{"aria-label": "Without label"}}
            displayEmpty
            sx={{
              height: '37px',
              borderRadius: '8px',
              fontSize: "14px",
            }}
          >
            {tags?.map((tag) => (
               <MenuItem value={tag.tagID} key={tag.tagID}>{tag.name}</MenuItem>
            ))}
          </Select>

          <Box sx={{display:"flex", gap:"60px"}}>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit}>Update</Button>
          </Box>
        </Box>
       )}
    </Modal>
  )
}
