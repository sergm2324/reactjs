import React, { Component } from 'react';
import ReactDom from 'react-dom';

import {Navigation} from './components/Navigation'
import {PageContent} from './components/PageContent'
import {Footer} from './components/Footer'


class App extends Component {

  render() {
    return (
        <div>
          <Navigation/>
          <PageContent/>
          <Footer/>
        </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
