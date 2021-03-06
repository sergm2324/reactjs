import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './routes';

import { Provider } from 'react-redux'
import store from './store' //Объект store

import {Navigation} from './components/Navigation'
import {PageContent} from './components/PageContent'
import {Footer} from './components/Footer'
import {MainContainer} from './components/MainContainer'

const menuItems = [
    {href: '/', title: 'Главная', id: 1},
    {href: '/blog', title: 'Блог', id: 2},
    {href: '/comments', title: 'Комментарии', id: 3},
    {href: '/users', title: 'Пользователи', id: 4},
];


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            varElem: <MainContainer/>,
        };
    };

    // handleClickMenu = (event) => {
    //     event.preventDefault();
    //     menuItems.forEach(element => {
    //         element['title'] === event.target.text ? element['classActive'] = 'active' : delete element['classActive'];
    //     });
    //
    //     switch (event.target.text) {
    //         case 'Главная':
    //             this.setState({varElem: <MainContainer/>});
    //             break;
    //         case 'Блог':
    //             this.setState({varElem: <PageContent/>});
    //             break;
    //         case 'Комментарии':
    //             this.setState({varElem: <CommentsContainer/>});
    //             break;
    //         case 'Пользователи':
    //             this.setState({varElem: <UserContainer/>});
    //             break;
    //         default:
    //             break;
    //     }
    // };

    render() {
        const {varElem} = this.state;
        return (
            <div>
                {/*<Navigation items={menuItems} handleClickMenu={this.handleClickMenu}/>*/}
                <Navigation items={menuItems} />
                <Switch>
                { routes.map ((route, idx) => <Route key={idx} {...route} /> ) }
                </Switch>
                {/*{varElem}*/}
                <Footer/>
            </div>
        )
    }
}

ReactDom.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
