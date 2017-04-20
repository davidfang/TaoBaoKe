import React from 'react';

export default class ModalBox extends React.Component{
    render() {
        return (
            <div className="modalBox">
                <div>这是一个模态框</div>
                <button onClick={() => this.props.onClick()}>Close Me!</button>
            </div>
        )
    }
}