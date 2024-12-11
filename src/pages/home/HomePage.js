import React, { useState } from 'react'
import { Button, Card, Footer, Header, TrendingCard } from '../../components'
import { signOutFunction } from '../../firebase'
import { CircularProgress } from '@mui/material';
import "./HomePage.css"
import { useBlogContext, useTagContext, useUserContext } from '../../context';

export const HomePage = () => {
  const { loading, currentUser} = useUserContext();
  const { blogs, blogsLoading } = useBlogContext();
  const { tags, tagLoading } = useTagContext();

  const [ selectedTag, setSelectedTag ] = useState();

  const filteredBlogs = selectedTag ? blogs.filter((blog)=> selectedTag === blog.tagID) : blogs;

  const trendingBlogs = [...blogs].sort((a , b) => b.createdAt - a.createdAt).slice(0, 4);

  const handleSignOut = async () => {
    await signOutFunction();
  };

  if (loading || blogsLoading || tagLoading) {
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

  return (
    <div>
      <Header />
      <div id='home-container'>
        {currentUser ? (
          <>
            <h3>Welcome back, {currentUser.displayName}!</h3>
            <Button onClick={handleSignOut} style={{width:"100px"}}>Sign Out</Button>
          </>
        ) : (
          <h3>Welcome Guest!</h3>
        )}
        <div 
          style={{
            display:"flex",
            flexDirection:"column",
            gap:20,
            marginTop: "50px 0px",
          }}
          >
            <h2>Trending</h2>

          <div 
            style={{
              display:"flex",
              gap: "20px",
            }}
          >
            {trendingBlogs.map((blog, index) => (
              <TrendingCard index={index} blog={blog} />
          ))}
          </div>
        </div>
        <div style={{display:"flex", flexDirection:"column", gap:20, marginTop:100}}>
          <h2>All Blog Posts</h2>
          <div style={{display:"flex", gap: 20, fontSize: 14, fontWeight: 700, cursor:"pointer"}}>
            {tags.length === 0 ? (
              "No tags"
            ) : (
              [{name:"All", tagID: ""},...tags].map((tag, index)=><div key={index} style={{color: selectedTag === tag.tagID ? "#D4A373" : "#000"}} onClick={()=> setSelectedTag(tag.tagID)}>{tag.name}</div>)
          )}</div>
          <div style={{display:"flex", flexWrap: "wrap", gap: 20}}>
            {filteredBlogs.map((blog, index) => (
              <div key={index}>
                <Card blog={blog} index={index}/>
              </div>
              
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}