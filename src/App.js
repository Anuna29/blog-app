import {BrowserRouter, Route, Routes} from "react-router-dom";

export const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Home Page</div>}/>
          <Route path="/blogs" element={<div>All Blogs Page</div>}/>
          <Route path="/blogs/:id" element={<div>Single Blog Page</div>}/>
          <Route path="/contact-us" element={<div>Contact Us</div>}/>
          <Route path="/404" element={<div>Not Found Page</div>}/>
        </Routes>
      </BrowserRouter>
  );
}

