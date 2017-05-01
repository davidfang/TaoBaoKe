import React from 'react';

export default class ModalBox extends React.Component{
    constructor(){
        super();
    }

    handleLogin(){
        this.props.onClick();
    }
    render() {
        return (
            <div className="modalBg">
                <div className="modalBox">
                    <input placeholder="账户:"/>
                    <input placeholder="密码:" type="password"/>
                    <button onClick={this.handleLogin.bind(this)}>立即登录</button>
                </div>
            </div>
        )
    }
}