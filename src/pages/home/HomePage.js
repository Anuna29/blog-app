import React from 'react'
import "./HomePage.css"
import { Button, Footer, Header } from '../../components'
import { useUserContext } from '../../context/UserContext'
import { signOutFunction } from '../../firebase'

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
        }}>Loading...</div>);
  }

  return (
    <div>
      <Header />
      <div id='home-container'>
        {currentUser ? (
          <>
            <h1>Welcome back, {currentUser.displayName}!</h1>
            <Button onClick={handleSignOut} style={{width:"100px"}}>Sign Out</Button>
          </>
        ) : (
          <h1>Welcome Guest!</h1>
        )}
      </div>
      <Footer />
    </div>
  )
}
