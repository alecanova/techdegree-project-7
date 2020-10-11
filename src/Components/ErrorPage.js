import React from 'react';
import {Link} from "react-router-dom";

const ErrorPage = () => (
    <div className="not-found">
        <h2>404: oh noes, there's nothing in here!</h2>
        <p>The page you are trying to reach does not exist.</p>
        <Link to="/"><p className='home'>Home page</p></Link>
    </div>
)

export default ErrorPage;