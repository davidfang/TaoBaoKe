import * as testActions from '../actions/testAction'
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {get,post} from "../http/http"


class MyButton extends React.Component {
    handleClick(e) {
        console.log("click");
        const {dispatch} = this.props;
        let actions = bindActionCreators(testActions, dispatch);
        get("/test/getTestContent",(res)=>{
            actions.click(res.data.content);
        })
    }

    render() {

        return (
            <button onClick={this.handleClick.bind(this)}>点击</button>
        )
    }
}
export  default connect((state)=>state)(MyButton)