import React from 'react';

export default class ModalBox extends React.Component{
    render() {
        return (
            <div className="modalBox">
                <input placeholder="账户:"/>
                <input placeholder="密码:" />
                <button onClick={() => this.props.onClick()}>立即登录</button>
            </div>
        )
    }
}