import React from 'react';
import './Blog.css'

const Blog = (props) => {
    const {coverImage, name, postDate,title,readTime} = props.blog;
    console.log(name);
    return (
        <div className='blog'>
            <img src={coverImage} alt="" />
           <div className='read-time'>
           <div className='blog-info'>
                <h4 className='name'>{name}</h4> 
                <h6 className='name'>{postDate}</h6>
                <h2 className='name'>{title}</h2>
            </div>
            <div>
                <h6 className='time'><a href="/read">{readTime} min read</a></h6>
            </div>
           </div>
            
        </div>
    );
};

export default Blog;