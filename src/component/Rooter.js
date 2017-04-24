/**
 * Created by weng on 2017/4/18.
 */


import React from 'react';

import { BrowserRouter as Router, Route, Redirect,Link,IndexRoute  } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import ClassifyBar from './AllClassify/ClassifyBar';
import AllClassify from './AllClassify/AllClassify';
import Beautiful from './AllClassify/Beautiful';
import Carthings from './AllClassify/CarThings';
import Clothes from './AllClassify/Clothes';
import Foods from './AllClassify/Foods';
import Mombaby from './AllClassify/MomBaby';

const history = createHistory();

export default class Root extends React.Component {
    constructor(props){
        super(props);



    }


    render(){

        return(



                    <Router history={history}>
                        <div>

                        <ClassifyBar >
                            {location.pathname == '/' ? <Redirect from="/" to="/All"/> : null}
                            <Route path='/All' component={ AllClassify }/>
                            <Route path='/Beautiful' component={ Beautiful }/>
                            <Route path='/Carthings' component={ Carthings }/>
                            <Route path='/Clothes' component={ Clothes }/>
                            <Route path='/Foods' component={ Foods }/>
                            <Route path='/Mombaby' component={ Mombaby }/>
                        </ClassifyBar>
                        </div>
                    </Router>



        )



    }




}
