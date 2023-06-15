import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from "axios";



// BlogDetail const 
const BlogDetail = () => {

    // useParams to get blogs by slug 
    const { slug } = useParams();

    // useState const for blog details
    const [ blog, setBlog ] = useState([]);

    // func to fetch blog from backend
    const getBlog = async () => {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/blog/`)
        setBlog(response.data)
    }

    // useEffect to get blogs from getBlog function
    useEffect(() => {
        getBlog();
    }, [slug]);


    return (
        <React.Fragment>

        </React.Fragment>
    )
}

export default BlogDetail;