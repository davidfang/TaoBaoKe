import React from 'react';
import ModalBox from "./ModalBox"
export default class Login extends React.Component{
    constructor(){
        super();
        this.state = {
           ModalIsShow : false,
            userName:"会员登录"
        }
    }
    handleLogin(){  //弹出模态框
        this.setState({
            ModalIsShow:true,
        })
    }

    handCloseModal(){ //关闭模态框
        this.setState({
            ModalIsShow:!this.state.ModalIsShow,
        });
        //if(是否输入正确账户密码)
        {   this.setState({
                userName:"某某用户"
            })
            this.handleLogin=function () {};//登录成功后注销登录函数
        }
    }
    renderModal(){
        return this.state.ModalIsShow ? <ModalBox ModalStatus={this.state.ModalIsShow} onClick={()=>this.handCloseModal()}/> : null;
        //传给ModalBox两个参数 ModalStatus 和onClick(ModalBox可以调用的函数)
    }
    render() {
        return (
            <div className="login">
                <span onClick={this.handleLogin.bind(this)}>{this.state.userName}</span>
                <div>
                    {this.renderModal()}
                </div>
            </div>
        )
    }
}