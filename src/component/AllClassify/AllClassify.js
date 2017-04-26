/**
 * Created by weng on 2017/3/27.
 */
import React from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CardGrid from './CardsGrid'

let currentIndex=0;
let interval =null;
export default class CardComponent extends React.Component {
    constructor(props){
        super(props);

        // this.state={
        //     imgSrc:"../images/cardbg1.png",
        // };
        this.initArr = [
            {
                posX: 0,
                src: "/images/cardbg1.png"
            },
            {
                posX: 100,
                src: "../images/cardbg2.jpg"
            },{
                posX: 200,
                src: "../../images/cardbg1.png"
            },{
                posX: 300,
                src: "../../images/cardbg2.jpg"
            },{
                posX: 400,
                src: "../../images/cardbg1.png"
            }
        ];

        this.state = {
            picsArr: [
                {
                    posX: 0,
                    src: "../../images/cardbg1.png"
                },
                {
                    posX: 100,
                    src: "../../images/cardbg2.jpg"
                },{
                    posX: 200,
                    src: "../../images/cardbg1.png"
                },{
                    posX: 300,
                    src: "../../images/cardbg2.jpg"
                },{
                    posX: 400,
                    src: "../../images/cardbg1.png"
                }
            ],
            delay: 1

        };
        interval = setInterval (() => {
            let newArr = null;
            let delay = 1;
            if(this.state.picsArr[this.state.picsArr.length-1].posX == 0) {
                newArr = this.initArr;
                delay: 0;
                this.setState({delay: 0});
            }
            else {
                newArr = this.state.picsArr.map(e => {
                    return {posX: e.posX - 100, src: e.src};
                });
                this.setState({delay: 1});
            }
            this.setState({picsArr: newArr});
        }, 2000);



    }
    componentWillUnmount(){
        clearInterval(interval);
    }


    render(){
        // var timeOut =setTimeout(()=>this.handleAddClick(),3000);
        // timeOut();

        return(
            <MuiThemeProvider>
                <div width="100%">

                    <Card
                        style={{overflow: "hidden", width: "80%",margin:"0 auto"}}
                    >

                        <div style={{height: "500px",overflow: "hidden"}}>
                            {this.state.picsArr.map( (e, idx) => {
                                    const y = idx * 100;
                                    const vis = e.posX == 0 ? {display: "none"} : null;
                                    return (
                                        <CardMedia

                                            style={{
                                                transition: `all ${this.state.delay}s`,
                                                position: "relative",
                                                transform: `translateX(${e.posX}%) translateY(-${y}%)`,
                                                width:"100%",
                                            }}
                                            key={idx}
                                        >
                                            <img src={e.src} height="500px" />

                                        </CardMedia>
                                    )
                                }
                            )}
                        </div>

                    </Card>

                    <CardGrid card="momImgLoading"/>
                    <Card
                        style={{overflow: "hidden", width: "80%",margin:"0 auto"}}
                    >

                        <div style={{height: "500px",overflow: "hidden"}}>
                            {this.state.picsArr.map( (e, idx) => {
                                    const y = idx * 100;
                                    const vis = e.posX == 0 ? {display: "none"} : null;
                                    return (
                                        <CardMedia

                                            style={{
                                                transition: `all ${this.state.delay}s`,
                                                position: "relative",
                                                transform: `translateX(${e.posX}%) translateY(-${y}%)`,
                                                width:"100%",
                                            }}
                                            key={idx}
                                        >
                                            <img src={e.src} height="500px" />

                                        </CardMedia>
                                    )
                                }
                            )}
                        </div>

                    </Card>
                    <CardGrid card='foodImgLoading'/>

                </div>

            </MuiThemeProvider>
        );
    }
}

