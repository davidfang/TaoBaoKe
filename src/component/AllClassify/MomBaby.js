/**
 * Created by weng on 2017/4/18.
 */
import React from 'react';

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
            <div>
                <h2>MOM</h2>
                <p>
                    This is an example tab.
                </p>
                <p>
                    You can put any sort of HTML or react component in here. It even keeps the component state!
                </p>
            </div>
        )
    }
}