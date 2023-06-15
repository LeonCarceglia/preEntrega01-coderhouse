import express from "express"
import ProductManager from "../ProductManager.js"

const router = express.Router()
const productManager = new ProductManager()
router.get("/", (req, res) => {
  const products = productManager.getProducts()
  res.render("realTimeProducts", { products })
})



export default router
