const fs=require("fs");

fs.write("massage.txt",'hello ujjwal' ,(err) => {
    if (err) throw err;
    console.log("The file has been saved!");
});

fs.readFile("./massage.txt","utf8",(err,data) => {
    if (err) throw err;
    console.log(data);
});

