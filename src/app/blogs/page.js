import Blog from '@/components/blog/page';
import React from 'react';

const BlogsPage = async () => {
    const res = await fetch('http://localhost:3004/blogs', {
        cache: 'no-store'
    })
    const blogs = await res.json()
    return (
        <div>
            <h2 className="text-2xl text-center font-bold">All Blogs</h2>
            <div className="grid grid-cols-3 mx-auto ml-24 mt-10">
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>

        </div>
    );
};

export default BlogsPage;