import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) =>{
   // const d = new Date();
    const d = new Date("may 20, 2024 11:30:00");
    let day = d.getDay();
    console.log(day);

    let type = "a weekday.";
    let adv = "it's time to work hard";

    if(day === 0 || day === 6){
        type = "a weekend.";
        adv = "lets enjoy the day";
    }
    res.render("index.ejs",{
        dayType:type,
        advice:adv,
    });
})

//port set up
app.listen(port, () =>{
    console.log(`server running on port ${port}.`);
});


