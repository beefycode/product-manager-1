const express = require("express"); 
const cors = require("cors");
const app = express(); 
app.use(express.json(), express.urlencoded({ extended: true })); 

app.use(cors());


require("./config/mongoose.config"); 

const productRoutes = require("./routes/product.routes")
productRoutes(app)

app.listen(8000, () => console.log("Listening on Port 8000"))