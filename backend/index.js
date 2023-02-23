const express=require('express')
const app=express()
const cors=require('cors');
const PORT=5000;

app.use(cors())
app.use(express.json())

app.post('/submit',(req,res)=>{
    const savedData=req.body
    res.json({ code: "200", message: "success!" });
    console.log(savedData);
})-

app.listen(PORT, () => {
    console.log(`Server On : ${PORT}`);
})
