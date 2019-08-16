import React, { Component } from 'react'
import './Login.scss'

export class Login extends Component {
    render () {
        return (
            <div className="login">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Login
                </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Введите логин и пароль:</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <input type="email" className="form-control" id="inputEmail" placeholder="E-mail"/>
                                <input type="password" className="form-control" id="inputPassword"
                                       placeholder="Password"/>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">OK</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}