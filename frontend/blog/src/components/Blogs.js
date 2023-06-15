import React,{ useState, useEffect } from "react";
import axois from 'axios';
import { Link } from "react-router-dom";


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
            <div className="home-container">
                <div className="home-blog">
                    <div className="home-blog-single">
                        <img className="home-blog-single-img" src="" />
                        <h4>Blog title</h4>
                        <p>blog excerpt</p>
                    </div>
                </div>
                <br/>
                <p className="copyright">&copy; <i>Axis Blog</i>, 2023</p>
            </div>
        </React.Fragment>
    )
}

export default Blog;