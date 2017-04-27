import React from 'react';

export default class Search extends React.Component{
    render() {
        return (
            <div className="search">
                <div className="heze">菏泽优惠购</div>
                <input className="searchInput" placeholder="请输入要搜索的商品"/>
                <button className="searchButton">搜索</button>
            </div>
        )
    }
}