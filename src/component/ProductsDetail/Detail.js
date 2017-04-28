import React from 'react';
import * as testActions from '../../actions/testAction'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {get,post} from "../../http/http";

class Detail extends React.Component{
    constructor(){
        super();
        this.state={}
    }
    componentWillMount(){
        console.log("要渲染啦")
        const {dispatch} = this.props;
        let actions = bindActionCreators(testActions, dispatch);
        let myPath =window.location.pathname.split("/")||["","","CarThings","1"];
        let goodCard = myPath[2];
        let goodId = myPath[3];
        let newUrl = '/test/'+goodCard;
        get(newUrl,(res)=>{
            actions[goodCard](res.data.msg);
        })

    }
    render() {
        console.log("正在渲染");
        let myPath =window.location.pathname.split("/")||["","","CarThings","1"];
        let goodCard = myPath[2];
        let goodId = myPath[3];
        let goodsArr = eval('this.props.testReducer.'+goodCard);
        console.log(goodsArr);
        let myItem = goodsArr[goodId ];
        return (
            <div className="detail">
                <div className="pic" >
                    <img src={ myItem.pic || '/images/test1.png' }/>
                </div>
                <div className="text">{myItem.text}</div>
                <div className="preferentialPrice">券后价格:<span className="number">{myItem.originalPrice-myItem.discount}</span>元</div>
                <hr/>
                <div className="intro"><span className="first">在售价: {myItem.originalPrice}</span><span>券:{this.state.coupon}元</span><span>销量{myItem.sales}</span></div>
            </div>
        )
    }
}

export  default connect((state)=>state)(Detail)