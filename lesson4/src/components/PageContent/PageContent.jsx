import './PageContent.css';

import React, { Component, Fragment } from 'react';
import {BlogPost} from './BlogPost/BlogPost'
import {Pagination} from './Pagination/Pagination'
import {SearchWidget} from './SearchWidget/SearchWidget'
import {CategoriesWidget} from './CategoriesWidget/CategoriesWidget'
import {SideWidget} from './SideWidget/SideWidget'


export class PageContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      varPost: <BlogPost/>,
    };
  };
  render() {
    const {varPost} = this.state;
    return (
        <Fragment>
        <div className="container">

          <div className="row">


            <div className="col-md-8">

              <h1 className="my-4">Page Heading
                <small>Secondary Text</small>
              </h1>
              {varPost}
              {varPost}
              {varPost}

            <Pagination/>
            </div>
            <div className="col-md-4">

            <SearchWidget/>
            <CategoriesWidget/>
            <SideWidget/>

            </div>

          </div>


        </div>
        </Fragment>
    )
  }
}