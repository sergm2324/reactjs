import './CommentsContainer.css';

import {PageContent} from 'components/PageContent';

import React, { Component, Fragment } from 'react';
    
    export class PageContainer extends Component {
      constructor(props) {
          super(props);
      
          this.state = {
            loading: true, 
            varpost: [varpost, varpost, varpost],
            page: 1
          };
        }

      //methods
      
      handleScroll = () => {
        if (document.documentElement.clientHeight - window.scrollY - window.innerHeight === 0) {
          if (!this.state.loading) {
            this.loadComments ()
          }
        }
      }

      componentDidMount () {


        window.addEventListener ('scroll', this.handleScroll)
      }

      componentWillUnmount () {
        window.removeEventListener ('scroll', this.handleScroll)
      }

      render() {
        const { varpost, loading } = this.state

        return (
          <Fragment>
            <PageContent varpost={varpost}/> { loading ? 'PROCESSING...' : '' }
          </Fragment>
        )
      }
    }