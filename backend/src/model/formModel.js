import { Schema, model } from "mongoose";

const schema = Schema({
    nombre: String,
    apellido: String,
    correo: String,
    producto: String
})

export const formModel = model("formulario", schema) 