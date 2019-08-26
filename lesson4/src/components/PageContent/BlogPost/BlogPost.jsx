import './BlogPost.css';

import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'

export class BlogPost extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const {comments, title, body, id} = this.props;
    return (
        <Fragment>
          <div className="card mb-4">
            <img className="card-img-top" src="http://placehold.it/750x300" alt="Card image cap"/>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p className="card-text">{body}</p>

              <Link to={`/blog/22`} className="btn btn-primary">Read More &rarr;</Link>

            </div>
            <div className="card-footer text-muted">
              Posted on January 1, 2017 by
              <a href="#">Start Bootstrap</a>
            </div>
          </div>
        </Fragment>
    )
  }
}