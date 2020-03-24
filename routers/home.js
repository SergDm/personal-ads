const { Router } = require('express')
const Product = require('../models/product')
const router = Router()

router.get('/', async(req, res) => {
  try {
    const products = await Product.find()
    .populate('userId', 'email name')
    .select('price title img group description')
    return res.status(200).json({ message: products })
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong. Try later' })
    console.log(e)
  }
})

module.exports = router