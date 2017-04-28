const initState = {
    helloText: "hello world",
    foodImgLoading:[],
    momImgLoading:[],
    Mombaby:[],
    Beautiful:[],
    Clothes:[],
    Foods:[],
    CarThings:[]

};

export default function testReducer(state = initState, action = {}) {
    const {type, payload} = action;
    let clone = Object.assign({}, state);
    switch (type){
        case "CLICK":
            clone.helloText = payload;
            console.log(payload);
            return clone;
        case "MOMIMGLOADING":
            clone.momImgLoading = payload;
            return clone;
        case "FOODIMGLOADING":
            clone.foodImgLoading = payload;
            return clone;
        case "MOMBABY":
            clone.Mombaby = payload;
            return clone;
        case "CARTHINGS":
            clone.CarThings = payload;
            return clone;
        case "FOODS":
            clone.Foods = payload;
            return clone;
        case "BEAUTIFUL":
            clone.Beautiful = payload;
            return clone;
        case "CLOTHES":
            clone.Clothes = payload;
            return clone;


    }
    return clone;
}