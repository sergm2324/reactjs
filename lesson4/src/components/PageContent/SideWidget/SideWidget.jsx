import './SideWidget.css';

import React, { Component, Fragment } from 'react';

export class SideWidget extends Component {

  render() {

    return (
        <Fragment>
          <div className="card my-4">
            <h5 className="card-header">Side Widget</h5>
            <div className="card-body">
              You can put anything you want inside of these side widgets. They are easy to use, and feature the new
              Bootstrap 4 card containers!
            </div>
          </div>
        </Fragment>
    )
  }
}