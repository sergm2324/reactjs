import Human from './components/user'
import MyName from "./components/myname";

import React, { Component } from 'react';
import ReactDom from 'react-dom';

let me = new Human('Serg', 'T');
me.sayHi();
let name = new MyName('Sergey', 'Plyusnin');
name.sayName();
let serg = name.Name();

class App extends Component {
    render() {
        return (
            <div>{serg}</div>
        );
    }
}

ReactDom.render(<App />, document.getElementById('root'));

