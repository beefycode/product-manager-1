const Product = require("../models/product.models"); 


module.exports = {
    allProducts: (req,res) => {
        Product.find()
        .then((allProducts) => {
            // console.log(allProducts)
            res.json(allProducts)
        })
        .catch((err)=>{
            res.status(500).json({message:'Something went wrong',error:err})
        })
    },
    getOneProduct: (req,res) => {
        Product.findOne({_id:req.params.id})
        .then((oneProduct)=> {
            res.json(oneProduct)
        })
        .catch((err)=>{
            res.status(500).json({message:'Something went wrong', error:err})
        })
    },
    createProduct: (req,res) => {
        Product.create(req.body)
        .then((newProduct) => {
            res.json(newProduct)
        })
        .catch((err)=>{
            res.status(500).json({message:'Something went wrong', error:err})
        })
    },
    updateProduct: (req,res) => {
        Product.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators: true})
        .then(updatedAlbum => {
            res.json(updatedAlbum)
        })
        .catch((err)=>{
            res.status(500).json({message:'Something went wrong',error:err})
        })
    },
    deleteProduct: (req,res) => {
        Product.deleteOne({_id:req.params.id})
            .then((response) =>{
                res.json(response)
            })
            .catch((err) => {
                res.status(500).json({message:'Something went wrong', error:err})
            })
    }
};