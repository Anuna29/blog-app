import React from 'react'
import { Button, Footer, Header } from '../../components'
import { useUserContext } from '../../context/UserContext'
import { signOutFunction } from '../../firebase'
import { CircularProgress } from '@mui/material';
import "./HomePage.css"

export const HomePage = () => {
  const { loading, currentUser} = useUserContext();

  const handleSignOut = async () => {
    await signOutFunction();
  };

  if (loading) {
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
      </div>
      <Footer />
    </div>
  )
}
