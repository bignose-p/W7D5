import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = (props) => {
  if (props.session.currentUser) {
    return (
      <div>
        <h4>Welcome! {props.session.currentUser.username}</h4>
        <button onSubmit={props.logout}>Log Out</button>
      </div>
    );
  }
  else {
    const string = '/signup'
    return (
      <div>
        <Link to={string}> SIGN UP</Link>
        <Link to='/login'>SIGN IN</Link>
      </div>
    );
  }
};

export default Greeting;
