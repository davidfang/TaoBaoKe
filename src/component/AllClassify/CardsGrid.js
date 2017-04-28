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

    }
    componentWillMount(){
        const {dispatch} = this.props;
        let actions = bindActionCreators(testActions, dispatch);
        //let newAct = 'actions.'+this.props.card;
        let newUrl = '/test/'+this.props.card;
        get(newUrl,(res)=>{
            console.log(res);
            actions[this.props.card](res.data.msg);
        })
    }



    handleClick(e){


    }

    render(){


        return(

            <div className="imgGrid">
                {this.props.testReducer[this.props.card].map((item,indx)=>{
                    return (
                        <div width='240px' key={indx} style={{width:'240px',display:'inline-block',backgroundColor:"white",cursor: "pointer",marginTop:20}}>
                            <div style={{width:'220px',display:"inline-block",margin:'0 auto',padding:'10px'}}>
                                <img src="/images/cardbg1.png" width='220px' style={{margin:'0 auto'}}/>
                                <div style={{width:'100%',display:"inline-block",margin:'0 auto'}}>
                                    <p style={{fontSize:'10px'}}>{item.text}</p>
                                    <span style={{fontSize:'10px',color:'red'}}>券后：{item.originalPrice-item.discount}元</span>
                                    <span style={{fontSize:'10px',color:'gray',float:'right'}}>已售：{item.sales}</span>
                                    <div className="imgInner">
                                        <div>
                                            <div style={{fontSize:'8px',color:'red',width:'30%',border:'1px solid',display:'inline-block',height:'22px',lineHeight:'22px'}}>券</div>
                                            <div style={{fontSize:'8px',color:'red',width:'60%',display:'inline-block',border:'1px solid',height:'22px',lineHeight:'22px'}}>{item.discount}</div>
                                        </div>
                                        <div style={{fontSize:'8px',color:'white',backgroundColor:'red',height:'24px',lineHeight:'24px'}}>立即购买</div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                })}







            </div>
        );
    }


}

export  default connect((state)=>state)(CardsGrid)