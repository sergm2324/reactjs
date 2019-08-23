import './UserContainer.css';

    import React, { Component, Fragment } from 'react';
    
    export function UserContainer (props) {
        const { items } = props;
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h1 className="my-4">Список пользователей
                            </h1>
                            <p>Тут будет список пользователей.</p>
                        </div>
                    </div>
                </div>
          </Fragment>
        )
      }