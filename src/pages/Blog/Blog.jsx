import React, { useState } from 'react';
import BlogCard from './BlogCard';

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  fetch('http://localhost:5000/blog')
  .then(res => res.json()
  )
  .then(data => setBlogData(data))
  return (
    <div>
      {blogData.map(blog => <BlogCard key={blog.answer} blog={blog}></BlogCard>)}
    </div>
  );
};

export default Blog;