import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import {Helmet} from "react-helmet";



// BlogDetail const 
const BlogDetail = () => {

    // useParams to get blogs by slug 
    const { slug } = useParams();

    // useState const for blog details
    const [ blog, setBlog ] = useState([]);

    // func to fetch blog from backend
    const getBlog = async () => {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/blog/${slug}`)
        setBlog(response.data)
    }

    // useEffect to get blogs from getBlog function
    useEffect(() => {
        getBlog();
    }, [slug]);


    return (
        <React.Fragment>
            <Helmet>
                <title>Axis Blog | {slug}</title>
            </Helmet>
            <div className="detail-container">
                <img className="detail-img" src={blog.image}/>
                <p><b><i>Title</i></b>: {blog.title}</p>
                <p><b><i>Category</i></b>: {blog.category}</p>
                <p><i><b>Date </b>:{blog.created} | <b>Author</b>:{blog.created_by}</i></p>
                <p className="contents" dangerouslySetInnerHTML={{__html: blog.content}} />
            </div>
        </React.Fragment>
    )
}

export default BlogDetail;