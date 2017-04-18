const initState = {
    helloText: "hello world"

};

export default function testReducer(state = initState, action = {}) {
    const {type, payload} = action;
    let clone = Object.assign({}, state);
    switch (type){
        case "CLICK":
            clone.helloText = payload;
            console.log(payload);
            return clone;
        
    }
    return clone;
}