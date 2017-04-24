/**
 * Created by weng on 2017/4/24.
 */
import React from 'react';
import * as testActions from '../../actions/testAction'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {get,post} from "../../http/http";


class CardsGrid extends React.Component{
    constructor(props){
        super(props);
        this.style={
            display:'inline-block',


        }
    }

    // componentWillMount(){
    //     const {dispatch} = this.props;
    //     let actions = bindActionCreators(testActions, dispatch);
    //     let newAct = eval('actions.'+this.props.card);
    //     get("/test/getTestContent",(res)=>{
    //         newAct(res.data.content);
    //     })
    // }


    handleClick(e){


    }

    render(){
        let newImg = eval('this.props.testReducer.'+this.props.card);

        return(

            <div className="imgGrid">
                {/*{newImg.map((item,indx)=>{<img src={item} key={indx} onClick={()=>this.handleClick()} width='260px'/>})}*/}
                <div width='260px'>
                    <img src="/images/cardbg1.png" width='220px' />
                </div>
                <div width='260px'>
                    <img src="/images/cardbg1.png" width='220px'/>
                </div>
                <div width='260px'>
                    <img src="/images/cardbg1.png" width='220px'/>
                </div>





            </div>
        );
    }


}

export  default connect((state)=>state)(CardsGrid)