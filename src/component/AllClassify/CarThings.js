import React from 'react';
import BrowserGoods from './BrowserGoods'

export default class CarThings extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserGoods card="CarThings"/>
        )
    }
}
