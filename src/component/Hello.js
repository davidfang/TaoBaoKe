import React from 'react'
import {connect} from 'react-redux'

class Hello extends React.Component{
    componentDidMount(){
        console.log(this.props)
    }

    render() {
        return (
            <p>{this.props.testReducer.helloText}</p>
        )
    }
}

export default connect((state)=>state)(Hello)