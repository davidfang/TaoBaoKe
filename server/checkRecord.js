module.exports = function (app) {
    app.use("/test/getTestContent",(req,res)=>{
        res.json(require("./json/test.json"))
    })
}