import { useState } from 'react';
import axios from 'axios';

const NuevaCita = () => {
  const [form, setForm] = useState({
    especialidad: '',
    doctorId: '',
    fecha: '',
    hora: '',
    tipo_consulta: '',
    motivo: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    await axios.post('http://localhost:3000/api/citas', {
      doctorId: form.doctorId,
      fecha: form.fecha,
      hora: form.hora,
      tipo_consulta: form.tipo_consulta,
      motivo: form.motivo
    });

    alert('Cita creada');
    window.location.href = '/';
  };

  return (
    <form onSubmit={handleSubmit}>
      <select name="especialidad" onChange={handleChange} required>
        <option value="">Especialidad</option>
        <option value="Medicina General">Medicina General</option>
        <option value="Pediatría">Pediatría</option>
      </select>

      <select name="doctorId" onChange={handleChange} required>
        <option value="">Doctor</option>
        <option value="1">Dr. Juan</option>
        <option value="2">Dra. María</option>
      </select>

      <input type="date" name="fecha" onChange={handleChange} required />
      <input type="time" name="hora" onChange={handleChange} required />

      <select name="tipo_consulta" onChange={handleChange} required>
        <option value="">Tipo de consulta</option>
        <option value="Presencial">Presencial</option>
        <option value="Virtual">Virtual</option>
      </select>

      <textarea
        name="motivo"
        placeholder="Motivo (opcional)"
        onChange={handleChange}
      />

      <button type="submit">Guardar</button>
    </form>
  );
};

export default NuevaCita;
