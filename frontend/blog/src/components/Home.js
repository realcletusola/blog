import React from "react";
import { Link } from "react-router-dom";



const Home = () => {

    return (
        <React.Fragment>
            <div className="home-container">
                <div className="home-div">
                    <p className="home-text">Welcome to <i><b>Axis Blog</b></i>, we give the latest trends of every category</p>
                    <button><Link className="to-blog-link" to='/blog'>Check out our latest posts</Link></button>
                </div>
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

export default Home;