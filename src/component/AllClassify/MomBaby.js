/**
 * Created by weng on 2017/4/18.
 */
import React from 'react';
import BrowserGoods from './BrowserGoods'

export default class MomBaby extends React.Component {
    constructor(props) {
        super(props);
    }
    // componentWillMount(){
    //     const {dispatch} = this.props;
    //     let actions = bindActionCreators(testActions, dispatch);
    //     let newAct = eval('actions.'+this.props.card);
    //     get("/test/getTestContent",(res)=>{
    //         newAct(res.data.content);
    //     })
    // }

    render() {
        return (
            <BrowserGoods/>
        )
    }
}