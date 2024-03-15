import React, { useEffect, useState } from 'react';

const Blogs = () => {
const [blogs,Setblogs]=useState([]);
useEffect(()=>{
  fetch('blog.json')
  .then(res =>res.json())
  .then(data=> Setblogs(data))  
},[])
    return (
        <div>
      
        </div>
    );
};

export default Blogs;