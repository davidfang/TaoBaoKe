import React from 'react';
import BrowserGoods from './BrowserGoods'

export default class Clothes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserGoods card="Clothes"/>
        )
    }
}