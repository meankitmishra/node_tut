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

app.get('/api/v1/query',(req,res)=>{
    const { search , limit } = req.query
    let sortedProduct = [...products]
    if(search){
        sortedProduct = sortedProduct.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProduct.splice(0,Number(limit))
    }

    if(sortedProduct.length < 1){
        // res.status(200).send('no products matched your search T^T')
        return res.status(200).json({ success : true , data : [ ] })
    }

    res.status(200).json(sortedProduct)
})

app.all('*',(req,res)=>{
    res.status(404).send( '<h1>Page not found</h1>' )
})

app.listen(3000,()=>{
    console.log('Server is listening on port 3000')
})