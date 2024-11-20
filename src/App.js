import {BrowserRouter, Route, Routes} from "react-router-dom";
import { BlogPage, BlogsPage, ContactUsPage, HomePage, NotFoundPage, SignInPage, SignUpPage, } from "./pages";
import { useUserContext } from "./context/UserContext";
import { CircularProgress } from "@mui/material";

export const App = () => {
  const { loading, isUserLoggedIn } = useUserContext();

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
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />}/>

          {isUserLoggedIn ? (
            <>
            <Route path="/blogs" element={<BlogsPage />}/>
            <Route path="/blogs/:id" element={<BlogPage />}/>
            <Route path="/contact-us" element={<ContactUsPage />}/>
            </>
          ) : (
          <>
          <Route path="/contact-us" element={<ContactUsPage />}/>
          <Route path="/404" element={<NotFoundPage />}/>
          <Route path="/sign-in" element={<SignInPage />}/>
          <Route path="/sign-up" element={<SignUpPage />}/>
          <Route path="*" element={<NotFoundPage />}/>
          </>
        )}
        </Routes>
      </BrowserRouter>
  );
}

