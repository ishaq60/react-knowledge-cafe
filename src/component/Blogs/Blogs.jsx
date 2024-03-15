import React, { useEffect, useState } from 'react';

const Blogs = () => {
const [blogs,Setblogs]=useState([]);
useEffect(()=>{
  fetch('blog.json')
  .then(res =>res.json())
  .then(data=> Setblogs(data))  
},[])
    return (
        <div className='w-2/3'>
          <h1 className="text-4xl">Blogs:{blogs.length}</h1>
        </div>
    );
};

export default Blogs;