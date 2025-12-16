const express = require('express');
const router = express.Router();
const citaController = require('../controllers/citaController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Cita:
 *       type: object
 *       properties:
 *         clienteId:
 *           type: integer
 *         doctorId:
 *           type: integer
 *         fecha:
 *           type: string
 *         hora:
 *           type: string
 *         tipo_consulta:
 *           type: string
 *         motivo:
 *           type: string
 */

/**
 * @swagger
 * /citas:
 *   get:
 *     summary: Listar citas (prueba)
 *     tags: [Citas]
 *     responses:
 *       200:
 *         description: OK
 */

/**
 * @swagger
 * /citas:
 *   post:
 *     summary: Crear cita (prueba)
 *     tags: [Citas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cita'
 *     responses:
 *       201:
 *         description: Creado
 */

router.get('/', citaController.listarCitas);
router.post('/', citaController.crearCita);

module.exports = router;
