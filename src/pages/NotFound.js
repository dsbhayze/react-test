import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <div className="not-fount">
        <p className="bold">The page that you looking for doesn't exist</p>
        <Link className="back-page" to="/">Back</Link>
      </div>
    );
  }
}

export default NotFound;