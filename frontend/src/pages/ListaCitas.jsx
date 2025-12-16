import { useEffect, useState } from 'react';
import ListaCitas from '../components/ListaCitas';
import '../styles/ListaCitas.css';
import axios from 'axios';

const ListaCitasPage = () => {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/citas')
      .then(res => setCitas(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <h2>Lista de Citas</h2>

      <button
        className="btn"
        onClick={() => window.location.href = '/nueva-cita'}
      >
        Nueva cita
      </button>

      <ListaCitas citas={citas} />
    </div>
  );
};

export default ListaCitasPage;
