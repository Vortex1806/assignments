const express = require("express")
const cors = require("cors");

const app = express()
app.use(cors());

app.get('/sum',(req,res)=>{
    try{
        const a = req.query.a;
        const b = req.query.b;
        if (!a || !b) {
            return res.status(400).json({ error: "Missing query parameters 'a' and 'b'" });
        }
        const numA = parseInt(a, 10);
        const numB = parseInt(b, 10);
        if (isNaN(numA) || isNaN(numB)) {
            return res.status(400).json({ error: "Invalid numbers provided" });
        }
        res.json({ result: numA + numB });
    }catch(err){
        res.status(500).json({ error: err.message });
    }
})

app.listen(3333, () => console.log("Server running on port 3333"));