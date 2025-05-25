
import Link from 'next/link';
import React from 'react';

const Blog = ({ blog }) => {
    return (

        <div>
            <div className="card w-96 bg-base-100 card-xs shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">{blog.title}</h2>
                    <p>{blog.content}</p>
                    <div className="justify-end card-actions">
                        <button className="btn btn-primary">Read Now</button>
                    </div>
                </div>
            </div>


        </div>



    );
};

export default Blog;