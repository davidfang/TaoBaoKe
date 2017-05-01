import React from 'react';
import ModalBox from "./ModalBox"
export default class Login extends React.Component{
    constructor(){
        super();
        this.state = {
           ModalIsShow : false,
        }
    }
    handleLogin(){  //弹出模态框
        this.setState({
            ModalIsShow:true,
        })
    }
    getInformation(){

    }
    handCloseModal(){ //关闭模态框
        this.setState({
            ModalIsShow:!this.state.ModalIsShow,
        });
        this.getInformation();
    }
    renderModal(){
        return this.state.ModalIsShow ? <ModalBox ModalStatus={this.state.ModalIsShow} onClick={()=>this.handCloseModal()}/> : null;
        //传给ModalBox两个参数 ModalStatus 和onClick(ModalBox可以调用的函数)
    }
    render() {
        return (
            <div className="login">
                <span onClick={this.handleLogin.bind(this)}>会员登录</span>
                <div>
                    {this.renderModal()}
                </div>
            </div>
        )
    }
}