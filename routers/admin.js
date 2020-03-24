const { Router } = require('express')
const { validationResult } = require('express-validator')
const Product = require('../models/product')
const admin = require('../middleware/admin')
const { productValidators } = require('../utils/validators')
const marked = require('marked')
const router = Router()

router.post('/product', productValidators, admin, async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).render('admin', {
      title: 'Admin',
      isAdd: true,
      error: errors.array()[0].msg,
      data: {
        group: req.body.group,
        title: req.body.title,
        price: req.body.price,
        img: req.body.img,
        description: req.body.description
      }
    })
  }
  const markedDescription = marked(req.body.description)
  const product = new Product({
    title: req.body.title,
    group: req.body.group,
    price: req.body.price,
    description: markedDescription,
    descriptionMarked: req.body.description,
    img: req.body.img,
    userId: req.user
  })

  try {
    await product.save()
    res.redirect('/products')
  } catch (e) {
    console.log(e)
  }
})

module.exports = router