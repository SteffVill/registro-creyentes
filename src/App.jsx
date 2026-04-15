import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import CreyenteForm from './components/CreyenteForm';
import CreyenteList from './components/CreyenteList';
import { Users } from 'lucide-react';

const App = () => {
  const [registros, setRegistros] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [editandoIndex, setEditandoIndex] = useState(null);

  const getInitialState = () => ({
    nombre: '', apellidos: '', fechaNacimiento: '', cedula: '', estadoCivil: 'Soltero(a)', profesion: '',
    telefono: '', correo: '', bautizadoAgua: 'No', bautizadoEspiritu: 'No', dones: '', familia: []
  });

  const [formData, setFormData] = useState(getInitialState());

  useEffect(() => {
    const saved = localStorage.getItem('creyentes_data');
    if (saved) setRegistros(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('creyentes_data', JSON.stringify(registros));
  }, [registros]);

  const guardarRegistro = (e) => {
    e.preventDefault();
    if (editandoIndex !== null) {
      const actualizados = [...registros];
      actualizados[editandoIndex] = formData;
      setRegistros(actualizados);
      setEditandoIndex(null);
    } else {
      setRegistros([...registros, formData]);
    }
    setFormData(getInitialState());
  };

  const eliminarRegistro = (idx) => {
    if (confirm("¿Eliminar registro?")) setRegistros(registros.filter((_, i) => i !== idx));
  };

  const prepararEdicion = (idx) => {
    setFormData(registros[idx]);
    setEditandoIndex(idx);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filtrados = registros.filter(r => 
    r.nombre.toLowerCase().includes(busqueda.toLowerCase()) || r.apellidos.toLowerCase().includes(busqueda.toLowerCase()) || r.cedula.includes(busqueda)
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
        <header className="bg-amber-100 text-amber-600 p-6 text-center">
          <h1 className="text-2xl font-bold  tracking-tighter">Registro de Nuevos Creyentes</h1>
        </header>

        <CreyenteForm 
          formData={formData} setFormData={setFormData} 
          guardarRegistro={guardarRegistro} editandoIndex={editandoIndex}
          setEditandoIndex={setEditandoIndex} getInitialState={getInitialState}
        />

        <div className="p-6 bg-gray-50 border-t border-amber-400">
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
            <h2 className="text-xl font-bold text-amber-600 flex items-center gap-2">⛪ Lista de Registrados</h2>
            <SearchBar busqueda={busqueda} setBusqueda={setBusqueda} />
          </div>
          
          <CreyenteList 
            registros={filtrados} 
            prepararEdicion={prepararEdicion} 
            eliminarRegistro={eliminarRegistro} 
          />
        </div>
      </div>
    </div>
  );
};

export default App;