import React, { useEffect, useState } from 'react';
import './BlogContainer.css'
import Blog from '../Blog/Blog';
import TimeSpentCount from '../TimeSpentCount/TimeSpentCount';
import BookMarkedBlogs from '../BookMarkedBlogs/BookMarkedBlogs';


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
            <div>
                <TimeSpentCount></TimeSpentCount>
                <BookMarkedBlogs></BookMarkedBlogs>
            </div>
        </div>


    );
};

export default BlogContainer;