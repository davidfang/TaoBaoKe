/**
 * Created by weng on 2017/5/1.
 */
import React from 'react';
import BrowserGoods from '../AllClassify/BrowserGoods'

export default class Clothes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserGoods card="Search"/>
        )
    }
}