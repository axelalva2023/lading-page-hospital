import { enviarDatosFormulario } from "../controllers/form.controller.js";
import { Router } from "express";

const router = Router()

router.post("/", enviarDatosFormulario)

export default router;