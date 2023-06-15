import express from "express"
import handlebars from "express-handlebars"
import __dirname from "./utils.js"
import viewsRouter from "./routes/views.router.js"
import ProductManager from "./ProductManager.js"
import {Server} from "socket.io"

const app = express()
const httpServer = app.listen(8080, () => console.log("Listening to port 8080"))

const io = new Server(httpServer)

app.engine("handlebars", handlebars.engine())
app.set("views", __dirname + "/views")
app.set("view engine", "handlebars")
app.use(express.static(__dirname + "/public"))
app.use("/", viewsRouter)


const PM = new ProductManager()
const {products} = PM.getProducts()
app.get('/', (req, res) => {
  res.render('home', products)
})
io.on("connection", socket => {
    console.log("Nuevo cliente conectado")
    socket.on('productUpdated', () => {
      io.emit('updatedProducts', products)
    })
})
