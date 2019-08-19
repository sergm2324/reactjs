import React, { Component, Fragment } from 'react'

import './Menu.scss'

export class Menu extends Component {
    render () {
        const {items_prop, title} = this.props; //props - объект
        return (
            <Fragment>
                <h1> { title } </h1>
                <ul className="menu">
                    { items_prop.map (el => <li> <a href= { el.href } > { el.title } </a></li>) }
                </ul>
            </Fragment>
        )
    }
}