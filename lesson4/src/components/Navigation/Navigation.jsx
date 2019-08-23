import './Navigation.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {PageContent} from "../PageContent";

export class Navigation extends Component {
    constructor(props) {
        super(props);
    };
    static propTypes = {
        items: PropTypes.arrayOf(
            PropTypes.shape({
                href: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                id: PropTypes.number.isRequired
            })
        )
    };
    static defaultProps = {
        items: [],
    };


    render() {
        const {title, items, id, handleClickMenu} = this.props;
        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">Start Bootstrap</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarResponsive">

                            <ul className="navbar-nav ml-auto">

                                {items.map((item) =>
                                    <li className="nav-item" key={item.id} ><a className="nav-link" href={item.href}
                                                                               onClick={handleClickMenu}>{item.title}</a>
                                    </li>
                                )}

                            </ul>

                        </div>
                    </div>
                </nav>
            </Fragment>
        )
    }
}