const  { Router } = require('express')
const database = require('../database/database_handler')

const router = Router()

router.get('/products', async (req, res)=>{

    let products = await database.getAll()

    let messages = await database.getAllMessages()

    res.render('index', {products, messages})
})

module.exports = router
