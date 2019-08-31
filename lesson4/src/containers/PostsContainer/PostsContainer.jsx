import './PostsContainer.css';

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { load } from 'actions/comments';

import {BlogPost} from 'components/PageContent/BlogPost';

class PostsContainer extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loading: true,
  //     posts: [],
  //     page: 1
  //   };
  // }
  //
  // loadPosts = () => {
  //   //AJAX
  //   const { page } = this.state
  //   this.setState ({ loading: true })
  //
  //   fetch (`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${ page }`)
  //     .then ((response) => response.json ())
  //     .then ((posts) => {
  //       this.setState ({
  //         loading: false,
  //         posts: this.state.posts.concat (posts),
  //         page: page + 1
  //       })
  //     })
  //     .catch (() => { this.setState ({ loading: false }) })
  // }
  //
  // handleScroll = () => {
  //   if (document.documentElement.clientHeight - window.scrollY - window.innerHeight === 0) {
  //     if (!this.state.loading) {
  //       this.loadPosts ()
  //     }
  //   }
  // }
  //
  // componentWillReceiveProps () {
  //   let { userSearch } = this.props
  //
  //   if (userSearch !== /./) {
  //     this.setState ({
  //       posts: this.state.posts.filter (el => userSearch.test(el.body))
  //     })
  //   }
  // }

  componentDidMount () {
    const {loadComments} = this.props;
    loadComments ()
    // window.addEventListener ('scroll', this.handleScroll)

  }

  // componentWillUnmount () {
  //   window.removeEventListener ('scroll', this.handleScroll)
  // }

  render() {
    const { comments, loading } = this.props;
    return (
        <Fragment>
         {comments.map (({ title, body, id }) => <BlogPost title={title} body={body} key={id}/>) }<BlogPost />
         
        </Fragment>
    )
  }
}

function mapStateToProps (state, props) {
  debugger
  return {
    ...props,
    comments: state.comments.entities,
    loading: state.comments.loading
  }
}

function mapDispatchToProps (dispatch, props) {
  return {
    ...props,
    loadComments: () => load (dispatch)
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (PostsContainer) //замыкание