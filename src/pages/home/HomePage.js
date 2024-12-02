import React from 'react'
import { Button, Card, Footer, Header } from '../../components'
import { signOutFunction } from '../../firebase'
import { CircularProgress } from '@mui/material';
import "./HomePage.css"
import { useBlogContext, useUserContext } from '../../context';

export const HomePage = () => {
  const { loading, currentUser} = useUserContext();
  const { blogs, blogsLoading } = useBlogContext();

  const handleSignOut = async () => {
    await signOutFunction();
  };

  if (loading || blogsLoading) {
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

        <div style={{display:"flex", flexWrap: "wrap", gap: 20, marginTop: 100}}>
          
            {blogs.map((blog, index) => (
              <div key={index}>
                <Card blog={blog} index={index}/>
              </div>
              
            ))}
       
        </div>
      </div>
      
      <Footer />
    </div>
  )
}