import './Comment.css';

    import React, { Component, Fragment } from 'react';
    
    export default function(props) {
        const { items } = props;
        return (
            <Fragment>
            <div className="Comment">
              <h2>{props.name}</h2>
              <p>{props.body}</p>
            </div>
          </Fragment>
        )
      }