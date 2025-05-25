
import Blog from '@/components/blog/page';
import Link from 'next/link';
import React from 'react';

const HomePage = async () => {
  const res = await fetch('http://localhost:3004/blogs', {
    next: {
      revalidate: 20
    }
  })
  const blogs = await res.json()
  return (
    <div>

      <h2 className="text-3xl text-center" >Home page</h2>
      <div className='grid grid-cols-3 mx-auto ml-24 mt-10'>
        {
          blogs.slice(0, 3).map(blog => <Blog key={blog.id} blog={blog}></Blog>)
        }
      </div>
      <div className='mt-10 text-center'><Link className='bg-blue-500 text-white rounded-lg p-2' href='/blogs' >Load More</Link></div>


    </div>
  );
};

export default HomePage;