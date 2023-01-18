const  { Router } = require('express')
const database = require('../database/database_handler')

const router = Router()

router.get('/products', async (req, res)=>{

    let products = await database.getAll()

    let messages = await database.getAllMessages()

    res.render('index', {products, messages})
})

// router.post('/products', async (req, res)=>{

//     let product = req.body

//     if(product.name=='' || product.price==''){
//         let products = database.getAll()     
//         res.render('newProduct', {products: products, error: "The name and price fields are required"})
//         return
//     }

//     let products = await database.getAll()

//     res.render('newProduct', {products, error:false})
 
// })

module.exports = router