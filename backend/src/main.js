import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import handlebars from "express-handlebars"
import __dirname from "./utils.js"
import formRouter from "./routes/form.routes.js"
import "dotenv/config";

const servidor = express();

const PORT = process.env.PORT || 3000;

const httpServer = servidor.listen(PORT, "0.0.0.0", () => console.log("Servidor corriendo exitosamente")); mongoose.connect(process.env.MONGO_URI).then(() => console.log("Conectado a MONGODB"))

servidor.use(express.json())

servidor.use(cors())

servidor.engine("handlebars", handlebars.engine({
    defaultLayout: "main",
    layoutsDir: __dirname + "/views/layout"
}))
servidor.set("view engine", "handlebars")
servidor.set("views", __dirname + "/views")

servidor.use(express.static(__dirname + "/public"));

servidor.use("/", formRouter)






