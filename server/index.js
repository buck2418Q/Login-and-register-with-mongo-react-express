import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import Empmodel from "./models/Employee.js"
import dotenv from "dotenv"
dotenv.config();

const app = express()
app.use(express.json())
app.use(cors())

app.post("/register",(req,res)=>{
    Empmodel.create(req.body).
    then(employess => res.json(employess)).
    catch(err => console.json(err))

});
app.post("/login",(req,res)=>{
    const {names,passs} = req.body;
    Empmodel.findOne({name:names}).then(user =>{
        if(user){
            if(user.password===passs){
                res.json({user})
            }else{
                res.json("fail")
            }
        }else{
            res.json("no record found")
        }
    })
});

mongoose.connect(process.env.DB_URL).then((d) => {
    console.log("DB Connected");
    app.listen(process.env.PORT, () => {
        console.log("server running at port : ", + process.env.PORT);
    });
}).catch((e) => {
    console.log("DB Connection Error")
})


