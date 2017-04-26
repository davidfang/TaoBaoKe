/**
 * Created by weng on 2017/4/24.
 */
import React from 'react';
import * as testActions from '../../actions/testAction'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {get,post} from "../../http/http";


class BrowserGoods extends React.Component{
    constructor(props){
        super(props);

    }




    handleClick(e){


    }

    render(){
        let newImg = eval('this.props.testReducer.'+this.props.card);

        return(

            <div className="imgGrid">
                {/*{newImg.map((item,indx)=>{<img src={item} key={indx} onClick={()=>this.handleClick()} width='260px'/>})}*/}
                <div width='240px' style={{width:'240px',display:'inline-block',backgroundColor:"white"}}>
                    <div style={{width:'220px',display:"inline-block",margin:'0 auto',padding:'10px'}}>
                        <img src="/images/cardbg1.png" width='220px' style={{margin:'0 auto'}}/>
                        <div style={{width:'100%',display:"inline-block",margin:'0 auto'}}>
                            <p style={{fontSize:'10px'}}>kkkkkk</p>
                            <span style={{fontSize:'10px',color:'red'}}>券后：{}元</span>
                            <span style={{fontSize:'10px',color:'gray',float:'right'}}>已售：{}</span>
                            <div className="imgInner">
                                <div>
                                    <div style={{fontSize:'8px',color:'red',width:'30%',border:'1px solid',display:'inline-block',height:'22px',lineHeight:'22px'}}>券</div>
                                    <div style={{fontSize:'8px',color:'red',width:'60%',display:'inline-block',border:'1px solid',height:'22px',lineHeight:'22px'}}>30</div>
                                </div>
                                <div style={{fontSize:'8px',color:'white',backgroundColor:'red',height:'24px',lineHeight:'24px'}}>立即购买</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div width='260px'>
                    <img src="/images/cardbg1.png" width='220px'/>
                </div>
                <div width='260px'>
                    <img src="/images/cardbg1.png" width='220px'/>
                </div><div width='260px'>
                    <img src="/images/cardbg1.png" width='220px'/>
                </div>





            </div>
        );
    }


}

export  default connect((state)=>state)(BrowserGoods)