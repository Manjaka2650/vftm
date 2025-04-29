// pages/page.tsx
import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import BlogPosts from "./index";
const Page = () => {
  return (
    <div>
      <Navbar />
      <BlogPosts />
      <Footer />
    </div>
  );
};

export default Page;
