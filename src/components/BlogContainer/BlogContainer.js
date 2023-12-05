import React, { useEffect, useState } from 'react';
import './BlogContainer.css'
import Blog from '../Blog/Blog';


const BlogContainer = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='blog-container'>
            <div className='container'>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                    ></Blog>)
                }

            </div>
            <div className='bookmark'>
                <h3>Spent time on read:</h3>
            </div>

        </div>
    );
};

export default BlogContainer;