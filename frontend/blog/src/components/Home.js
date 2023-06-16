import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

import axois from 'axios'

const Home = () => {

    // useState const for featured blogs
    const [ featuredBlog, setfeaturedBlog ] = useState([]);

       // func to fetch blogs from backend
       const getfeaturedBlog = async() => {
        const response = await axois.get(`${process.env.REACT_APP_BACKEND_URL}/api/blog/featured/`);
        setfeaturedBlog(response.data)        
    }

    // useEffect to get blogs from getfeaturedBlog function 
    useEffect(() => {
        getfeaturedBlog();
    }, []);

    return (
        <React.Fragment>
            <Helmet>
                <title>Axis Blog | Home</title>
            </Helmet>
            <div className="home-container">
                <div className="home-div">
                    <p className="home-text">Welcome to <i><b>Axis Blog</b></i>, we give the latest trends of every category</p>
                    <button><Link className="to-blog-link" to='/blog'>Check out our latest posts</Link></button>
                </div>
                <div className="home-blog">
                    { featuredBlog && featuredBlog.length > 0 ? featuredBlog.map((blog) => (
                    <div className="home-blog-single">
                        <img className="home-blog-single-img" src={ blog.image }/>
                        <h4><b>{ blog.title }</b></h4>
                        <p><Link className="home-blog-single-link" to={`/blog/${blog.slug}`}>{ blog.preface }</Link></p>
                    </div>
                    )):<h3>No blogs to display</h3>};
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;