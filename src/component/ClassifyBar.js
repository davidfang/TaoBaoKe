

import React from 'react';

import { Tabs, Tab } from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';




export default class ClassifyBar extends React.Component {
    constructor(props) {
        super(props);
        this.list =[
            {
                label: '所有分类',
                ele: ''
            },
            {
                label: '母婴',
                ele: ''
            },
            {
                label: "车品",
                ele: ''
            },
            {
                label: "美妆",
                ele: ''
            },
            {
                label: "服饰",
                ele: ''
            },
            {
                label: "食品",
                ele: ''
            }
        ]
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Tabs>
                        {this.list.map( (e, idx) => <Tab value={idx} style={{fontSize: "12px"}} key={idx} label={e.label}>{e.ele}</Tab>)}
                    </Tabs>
                </div>
            </MuiThemeProvider>
        )
    }
}