const initState = {
    helloText: "hello world",
    monBabyImg:[],
    foodImg:[]

};
export default function testReducer(state = initState, action = {}) {
    const {type, payload} = action;
    let clone = Object.assign({}, state);//复制之前的状态树
    switch (type){
        case "CLICK":
            clone.helloText = payload;
            console.log(payload);
            return clone;
        case "MOMIMGLOADING":
            clone.monBabyImg = payload;
            return clone;
        case "FOODIMGLOADING":
            clone.foodImg = payload;
            return clone;

    }
    return clone;
}