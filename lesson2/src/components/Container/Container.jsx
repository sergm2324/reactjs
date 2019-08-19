import React, { Component } from 'react'
import './Container.scss'

export class Container extends Component {
    render () {
        const {children} = this.props;
        return (
            <div className="main">
                { children }
            </div>
        )
    }
}