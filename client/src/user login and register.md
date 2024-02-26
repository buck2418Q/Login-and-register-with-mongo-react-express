user login and register

1>npm install mongoose cors 
login page
const [name, setName] = useState();
const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:8888/login",{name,pass}).then(result => {console.log(result);
Navigate("/home")}).
    catch(err => console.log(err))
}
onsubmit ={handleSubmit};
in input onChange={e => setName(e.target.value);
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