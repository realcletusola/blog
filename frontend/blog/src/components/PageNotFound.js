import React from 'react';
import {Helmet} from "react-helmet";



const PageNotFound = () => {

    return(
        <React.Fragment>
            <Helmet>
                <title>Axis Blog | 404 </title>
                <link rel="icon" href="https://www.flaticon.com/free-icon/blog_10026257" type="image/png"/>
            </Helmet>
            <div className='page-not-found'>
                <h2>404 Error</h2>
                <p> Sorry the page you request does not exist</p>
            </div>
        </React.Fragment>
    )
};

export default PageNotFound;