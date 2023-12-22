const authorize = (req,res,next)=>{
    const {user} = req.query
    if(user==='Ankit'){
        res.user = {name:'Ankit',id:4}
        next()
    }
    else{
        res.status(401).send('unathorized')
    }
}

module.exports = authorize