import './MainContainer.css';

    import React, { Component, Fragment } from 'react';
    
    export function MainContainer (props) {
        const { items } = props;
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h1 className="my-4">Главная страница
                            </h1>
                            <p>Приветствуем Вас на нашем сайте.</p>
                        </div>
                    </div>
                </div>
          </Fragment>
        )
      }