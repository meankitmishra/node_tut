const express = require ('express')
const { products } = require ('./data')
const app = express()

app.get('/',(req,res)=>{
    res.Head
    res.send('<h1>Home Page</h1> <a href="/api/products">product</a>')
})

app.get('/api/products',(req,res)=>{
    const newProduct = products.map((product)=>{
        const {id,name,image}=product
        return {id,name,image}
    })
    res.json(newProduct)
}) 

app.get('/api/products/:productID',(req,res)=>{
    const {productID} = req.params
    const singleProduct = products.find(
        (product)=>product.id === Number(productID)
    )
    if(!singleProduct){
        res.status(404).send('<h1>Page not found</h1>')
    }
    return res.json(singleProduct);
})

app.all('*',(req,res)=>{
    res.status(404).send( '<h1>Page not found</h1>' )
})

app.listen(3000,()=>{
    console.log('Server is listening on port 3000')
})