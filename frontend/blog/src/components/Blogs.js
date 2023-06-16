import React,{ useState, useEffect } from "react";
import axois from 'axios';
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

// Blog const 
const Blog = () => {

    // useState const for blogs 
    const [ blogs, setBlogs ] = useState([]);


    // func to fetch blogs from backend
    const getBlogs = async() => {
        const response = await axois.get(`${process.env.REACT_APP_BACKEND_URL}/api/blog/`);
        setBlogs(response.data)        
    }

    // useEffect to get blogs from getBlogs function 
    useEffect(() => {
        getBlogs();
    }, []);


    return (
        <React.Fragment>
            <Helmet>
                <title>Axis Blog | Blogs</title>
            </Helmet>
            <div className="home-container">
                <div className="home-blog">
                    { blogs && blogs.length > 0 ? blogs.map((blog) => (
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

export default Blog;