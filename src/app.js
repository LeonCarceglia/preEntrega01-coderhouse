// Importaciones

import express from "express"
import products from "../routes/products.router.js"
import carts from "../routes/carts.router.js"


// Inicializacion del servidor

const app = express()
const server = app.listen(8080, () => console.log("Server running on port 8080"))

// Configuracion del servidor

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api/products", products)
app.use("/api/carts", carts)
app.use(express.static("public"))