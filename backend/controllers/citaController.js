const { Cita, Cliente, Doctor } = require('../models');

module.exports = {

  // Listar todas las citas
  async listarCitas(req, res) {
    try {
      const citas = await Cita.findAll({
        include: [
          { model: Cliente, as: 'cliente', attributes: ['id', 'nombre', 'correo'] },
          { model: Doctor, as: 'doctor', attributes: ['id', 'nombre', 'especialidad'] }
        ],
        order: [['fecha', 'ASC'], ['hora', 'ASC']]
      });
      res.json(citas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al listar las citas' });
    }
  },

  // Crear una nueva cita
  async crearCita(req, res) {
    try {
      const { clienteId, doctorId, fecha, hora, tipo_consulta, motivo } = req.body;

      const nuevaCita = await Cita.create({
        clienteId,
        doctorId,
        fecha,
        hora,
        tipo_consulta,
        motivo
      });

      res.status(201).json(nuevaCita);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al crear la cita' });
    }
  }

};
