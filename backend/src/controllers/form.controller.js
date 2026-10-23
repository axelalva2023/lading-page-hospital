import { formModel } from "../model/formModel.js"


export async function enviarDatosFormulario(req, res) {
    try {
        const cuerpo = req.body;

        console.log("Datos recibidos:", cuerpo);

        const resultado = await formModel.create(cuerpo);

        return res.status(201).json({
            mensaje: "Formulario guardado correctamente",
            datos: resultado
        });

    } catch (error) {
        console.error("Error al guardar en MongoDB:", error);

        return res.status(500).json({
            error: "No se pudieron guardar los datos"
        });
    }
}