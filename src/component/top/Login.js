import React from 'react';
import ModalBox from "./ModalBox"
export default class Login extends React.Component{
    constructor(){
        super();
        this.state = {
           ModalIsShow : false,
        }
    }
    handleLogin(e){
        this.setState({
            ModalIsShow:!this.state.ModalIsShow,
        })
    }
    render() {
        return (
            <div className="login" onClick={this.handleLogin.bind(this)}>
                会员登录
                {this.state.ModalIsShow ? <ModalBox/> : null}
            </div>
        )
    }
}