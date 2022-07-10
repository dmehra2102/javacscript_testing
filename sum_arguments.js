function Sum(...args){
    var res =  args.reduce((a,b)=>{
        return (a+b)
    },0);
    return Number(res.toFixed(1));
}

module.exports = Sum;