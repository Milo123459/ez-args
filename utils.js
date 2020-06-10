module.exports.type = (value) => typeof value;
module.exports.typeCheck = (value,type) => !!typeof value == type.toLowerCase(); 
module.exports.parseNum = (num) => parseInt(num);
module.exports.term = (condition,ifTrue,ifFalse) => condition ? ifTrue : ifFalse
module.exports.objectFromArray = (array) => {
    let res = {};
    array.map((obj,i) => {
        res[i]=obj;
    })
    return res;
};
module.exports.arrayFromObject = (obj) => {
    let res = [];
    for (const [key,value] of Object.entries(obj)){
        res.push({
            key,
            value
        })
    }
    return res;
}