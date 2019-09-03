
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { load } from 'actions/comments';

import {BlogPost} from 'components/PageContent/BlogPost';

class PostsContainer extends Component {

  handleScroll = () => {
    const {loadComments} = this.props;

    if (document.documentElement.clientHeight - window.scrollY - window.innerHeight === 0) {
      if (!this.props.loading) {
        loadComments ()
      }
    }
  };
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
    loadComments ();
    window.addEventListener ('scroll', this.handleScroll)

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
    loadComments: () => dispatch (load())
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (PostsContainer) //замыкание