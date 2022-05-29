const fs = require("fs");

const fileName = "target.txt";
fs.watch(fileName,()=>{console.log("file changed. ")
    const content = fs.readFile(fileName,(err,data)=>{
        if(err)  console.log("error reading file");
        else{
        const filecontent  =  '\n'+data.toString();
        console.log(filecontent);
        }
    });
    console.log('file read')

});