const ListaCitas = ({ citas }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Hora</th>
          <th>Tipo</th>
        </tr>
      </thead>
      <tbody>
        {citas.map(cita => (
          <tr key={cita.id}>
            <td>{cita.fecha}</td>
            <td>{cita.hora}</td>
            <td>{cita.tipo_consulta}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListaCitas;
