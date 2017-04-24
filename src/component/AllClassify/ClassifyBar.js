

import React from 'react';

import { Tabs, Tab } from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AllClassify from './AllClassify';
import Beautiful from './Beautiful';
import Carthings from './CarThings';
import Clothes from './Clothes';
import Foods from './Foods';
import Mombaby from './MomBaby';
import {Link }from 'react-router-dom';





export default class ClassifyBar extends React.Component {
    constructor(props) {
        super(props);
        this.list =[
            {
                label: '所有分类',
                ele: <AllClassify/>,
                link:'All'
            },
            {
                label: '母婴',
                ele: <Mombaby/>,
                link:'Mombaby'
            },
            {
                label: "车品",
                ele: <Carthings/>,
                link:'/Carthings'
            },
            {
                label: "美妆",
                ele: <Beautiful/>,
                link:'/Beautiful'
            },
            {
                label: "服饰",
                ele: <Clothes/>,
                link:'/Clothes'
            },
            {
                label: "食品",
                ele: <Foods/>,
                link:'/Foods'
            }
        ];
        this.iniSelect=0;


    }
    componentWillMount(){
        switch (window.location.pathname){
            case '/All':
                this.iniSelect=0;
                break;
            case '/Mombaby':
                this.iniSelect=1;
                break;
            case '/Carthings':
                this.iniSelect=2;
                break;
            case '/Beautiful':
                this.iniSelect=3;
                break;
            case '/Clothes':
                this.iniSelect=4;
                break;
            case '/Foods':
                this.iniSelect=5;
                break;

        }
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Tabs initialSelectedIndex={this.iniSelect}>
                        {this.list.map( (e, idx) => <Tab value={idx} style={{fontSize: "12px"}}  key={idx} label={e.label} containerElement={<Link to={e.link}></Link>}></Tab>)}
                    </Tabs>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        )
    }
}