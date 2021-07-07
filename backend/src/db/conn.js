const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Portfolio", {
    useNewUrlParse:true,
    useUnifiedTopology:true,
    useCreatrIndex:true
}).then(() =>{
    console.log(`connection successfull`);
}).catch((e) =>{
    console.log(`no connection`);

})