const mongoose = require("mongoose"); 

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        minLength: [2, 'Product Name must be more than 2 characters'],
        maxLength: [150, 'Product name cannot be more than 150 characters']
    },

    price:{
        type: Number
    },

    description:{
        type: String
    }

    //This line adds a "createdAt" and "updatedAt" field when our document is created.
}, {timestamps: true})

//Our model acts an an interface that we can use to query our database
//It consists of 1. The collection name written capitalized and singular (shows as "products" in db) 2. The Schema
const Product = mongoose.model("Product", ProductSchema);

//We export the model in order to use it in our controller, where we will use it to get info from the DB
module.exports = Product;