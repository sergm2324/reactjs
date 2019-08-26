import './PostsContainer.css';


import React, { Component, Fragment } from 'react';
import {BlogPost} from 'components/PageContent/BlogPost';

export class PostsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true, 
      posts: [],
      page: 1
    };
  }
  
  loadPosts = () => {
    //AJAX
    const { page } = this.state
    this.setState ({ loading: true })

    fetch (`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${ page }`)
      .then ((response) => response.json ())
      .then ((posts) => {
        this.setState ({
          loading: false,
          posts: this.state.posts.concat (posts),
          page: page + 1
        })
      })
      .catch (() => { this.setState ({ loading: false }) })
  }

  handleScroll = () => {
    if (document.documentElement.clientHeight - window.scrollY - window.innerHeight === 0) {
      if (!this.state.loading) {
        this.loadPosts ()
      }
    }
  }

  componentWillReceiveProps () {
    let { userSearch } = this.props

    if (userSearch !== /./) {
      this.setState ({
        posts: this.state.posts.filter (el => userSearch.test(el.body))
      })
    }
  }

  componentDidMount () {
    this.loadPosts ()
    window.addEventListener ('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener ('scroll', this.handleScroll)
  }

  render() {
    const { posts, loading } = this.state
    return (
        <Fragment>
         {posts.map (({ title, body, id }) => <BlogPost title={title} body={body} key={id}/>) }<BlogPost />
         
        </Fragment>
    )
  }
}