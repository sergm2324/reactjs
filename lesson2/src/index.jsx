import React, { Component } from 'react';
import ReactDom from 'react-dom';

import { Container } from './components/Container';
import { Menu } from './components/Menu';
import { Login } from './components/Login';

const items = [
    {href: '/', title: 'Home'},
    {href: '/news', title: 'News'},
    {href: '/blog', title: 'Blog'}
];


class App extends Component {
    render () {
        return (
            <div className="test1">
                <Container>
                    <Menu items_prop={ items } title={'Меню'}></Menu> <Login/>
                </Container>
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('root'));

