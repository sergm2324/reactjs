import './CommentsContainer.css';

    import React, { Component, Fragment } from 'react';
    
    export function CommentsContainer (props) {
        const { items } = props;
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h1 className="my-4">Комментарии
                            </h1>
                            <p>Тут будут комментарии пользователей.</p>
                        </div>
                    </div>
                </div>
          </Fragment>
        )
      }