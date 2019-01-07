import React, {Component} from 'react';
import {Link} from 'react-router';

class HomePage extends Component{
    render(){
        return(
            <div className='jumbotron'>
                <h1>Administration</h1>
                <p>React, Redux, React Router for ES6 for responsive web apps.</p>
                <Link to='about' className='btn btn-primary btn-lg'>Learn More</Link>
            </div>
        );
    }
}

export default HomePage;