const rootDir = require('../util/path');
const path=require('path');


exports.getSuccess=(req,res)=>{
    res.sendFile(path.join(rootDir,'views','success.html'));

}
