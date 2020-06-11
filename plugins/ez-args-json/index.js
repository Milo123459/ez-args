const path = require('./path');
const fs = require('fs');
module.exports = (p, o) => {
    return {
        set(key,value){
            let js;
            if(fs.existsSync(path)){
                js = JSON.parse(JSON.stringify(require(path)))
            }else js = {};
            js[key]=value;
            fs.writeFileSync(path,JSON.stringify(js,null,2))
        },
        get(key){
            let js;
            if(fs.existsSync(path)){
                js = JSON.parse(JSON.stringify(require(path)));
            }
            if(!js) return undefined;
            if(!js[key]) return undefined; else return js[key]
        },
        has(key){
            return !!this.get(key);
        },
        delete(key){
            let js;
            if(fs.existsSync(path)){
                js = JSON.parse(JSON.stringify(require(path)))
            }else return undefined;
            js[key]=undefined;
            fs.writeFileSync(path,JSON.stringify(js,null,2))
        }
    }
}