const ProductController = require("../controllers/product.controller.js")

module.exports = app =>{
    app.get('/api/allProducts',ProductController.allProducts)
    app.get('/api/oneProduct/:id', ProductController.getOneProduct)
    app.post('/api/postProducts',ProductController.createProduct)
    app.put('/api/updateProduct/:id',ProductController.updateProduct)
    app.delete('/api/deleteProduct/:id',ProductController.deleteProduct)
}
    

