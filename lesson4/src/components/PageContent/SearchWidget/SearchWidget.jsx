import './SearchWidget.css';

import React, { Component, Fragment } from 'react';

export class SearchWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSearch: /./
    };
  }

  handleSearch = (e) => {
    let { onSearch } = this.props

    onSearch (this.state.userSearch)
  }

  addReg = (e) => {
    let reg = e.target.value
    this.setState ({ userSearch: new RegExp (reg, 'i')})
  }
  render() {

    return (
        <Fragment>
          <div className="card my-4">
            <h5 className="card-header">Search</h5>
            <div className="card-body">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for..." onInput={this.addReg} />
                <span className="input-group-btn">
                <button className="btn btn-secondary" type="button" onClick={this.handleSearch}>Go!</button>
              </span>
              </div>
            </div>
          </div>
        </Fragment>
    )
  }
}