import { CssBaseline } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import OurMenu from "./pages/OurMenu";
import Error from "./pages/Error";
import BlogEntries from "./pages/BlogEntries";
import ContactUs from "./pages/ContactUs";
import MenuPlaner from "./pages/MenuPlaner";

function App() {
  return (
    <CssBaseline>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/ourMenu" element={<OurMenu />} />
          <Route path="/blogEntries" element={<BlogEntries />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/menuPlaner" element={<MenuPlaner />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </CssBaseline>
  );
}

export default App;
