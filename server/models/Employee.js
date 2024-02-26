import mongoose from "mongoose";

const employeeSchme = new  mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
});

const Empmodel = mongoose.model("employee",employeeSchme);
export default  Empmodel;