import React from 'react';

import Login from "./Login"
import Logo from "./Logo"

export default class Top extends React.Component{
    render() {
        return (
            <div className="top">
                <Logo></Logo>
                <Login></Login>
            </div>
        )
    }
}