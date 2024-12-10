import React, { useState } from 'react'
import { Modal } from './Modal'
import { TextField } from '../textfield'
import { Box, CircularProgress, MenuItem, Select } from '@mui/material'
import { Button } from '../button'
import { blogsCollection } from '../../firebase'
import { useTagContext, useUserContext } from '../../context'
import { addDoc, serverTimestamp } from 'firebase/firestore'
import { uploadImage } from '../../cloudinary'
export const CreateBlogModal = (props) => {
const { currentUser } = useUserContext();
const { tags, tagLoading} = useTagContext();
const { open, handleClose } = props;
const [blogData, setBlogData] = useState({
  title:"",
  description: "",
  content: "",
  tag: "",
})

const [loading, setLoading] = useState(false);
const [file, setFile] = useState();


const handleChange = (event) => {
const { name, value } = event.target;

  setBlogData({...blogData, [name]: value });
}

const handleSubmit = async () => {
  if (
    blogData.content === ""|| 
    blogData.description === "" || 
    blogData.title === "" || 
    blogData.tag === "",
    !file
  ) {
    alert("Please fill all the fields!")
  }else {
    setLoading(true);

    const previewLink = await uploadImage(file);


    await addDoc(blogsCollection, {
      userId: currentUser.uid,
      title: blogData.title,
      description: blogData.description,
      content: blogData.content,
      imageUrl: previewLink,
      createdAt: serverTimestamp(),
      tagID: blogData.tag,
    });

    setBlogData({
      title:"",
      description: "",
      content: "",
      tag: "",
    });
    setFile();
    setLoading(false);

    handleClose();
  };
};

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
          <TextField type="text" name="title" placeholder="Title..." value={blogData.title} onChange={handleChange}/>
          <TextField type="text" name="description" placeholder="Description..." value={blogData.description} onChange={handleChange}/>
          <TextField type="text" name="content" placeholder="Content..." value={blogData.content} onChange={handleChange}/>

          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={blogData.tag}
            name='tag'
            label=""
            onChange={handleChange}
            displayEmpty
            sx={{
              height: '37px',
              borderRadius: '8px',
              fontSize: "14px",
            }}
          >
            <MenuItem value="">
              {tags.lenght === 0 ? "Add new tag" : "Choose tag..."}
            </MenuItem>

            {tags.map((tag) => (
               <MenuItem value={tag.tagID} key={tag.tagID}>{tag.name}</MenuItem>
            ))}
          </Select>

          <input type="file" onChange={(e)=>{setFile(e.target.files[0]);
          }}/>
  
          <Box sx={{display:"flex", gap:"150px"}}>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit}>Create</Button>
          </Box>
        </Box>
       )}
    </Modal>
  )
}