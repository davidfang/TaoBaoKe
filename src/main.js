import React from 'react'
import ReactDOM from 'react-dom'
import MyButton from './component/MyButton'
import Hello from './component/Hello'
import {Provider} from 'react-redux'
import createStore from './store/configureStore'
import ClassifyBar from './component/ClassifyBar'
import injectTapEventPlugin from 'react-tap-event-plugin';
import Top from "./component/top/Top";
import Search from "./component/search/Search"

injectTapEventPlugin();
const store = createStore();

class Main extends React.Component {


    render() {
        return (
            <Provider store={store}>
                <div>
                    <Top/>
                    <Search/>
                    <ClassifyBar/>
                </div>

            </Provider>
        )

    }
}


ReactDOM.render(<Main />, document.getElementById("app"))