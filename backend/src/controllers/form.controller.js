import { formModel } from "../model/formModel.js"


export async function enviarDatosFormulario(req, res) {
    const cuerpo = req.body
    res.json(await formModel.insertOne(cuerpo))

}