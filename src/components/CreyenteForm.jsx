import { PlusCircle, Heart, Users, Save, X } from 'lucide-react';

const CreyenteForm = ({ formData, setFormData, guardarRegistro, editandoIndex, setEditandoIndex, getInitialState }) => {
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFamilyChange = (index, field, value) => {
    const newFamilia = [...formData.familia];
    newFamilia[index][field] = value;
    setFormData({ ...formData, familia: newFamilia });
  };

  return (
    <form onSubmit={guardarRegistro} className="p-6 space-y-8">
      <section>
        <div className="flex items-center gap-2 mb-4 border-b border-amber-500 pb-2">
            <h2 className="text-lg font-bold text-gray-600 uppercase">👤 I. Datos Personales</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <label className="text-sm font-semibold">Nombres</label>
            <input required name="nombre" value={formData.nombre} onChange={handleInputChange} className="w-full border border-amber-700  rounded p-2 focus:ring-2 focus:ring-blue-500" />
          </div>
           <div className="md:col-span-1">
            <label className="text-sm font-semibold">Apellidos</label>
            <input required name="apellidos" value={formData.apellidos} onChange={handleInputChange} className="w-full border border-amber-700  rounded p-2 focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="md:col-span-1">
            <label className="text-sm font-semibold">Cédula</label>
            <input name="cedula" value={formData.cedula} onChange={handleInputChange} className="w-full border border-amber-700 rounded p-2 focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
      </section>

      <section className="bg-amber-50 p-4 rounded-lg">
        <div className="flex items-center gap-2 mb-4 border-b border-amber-500 pb-2">
          🕊️
          <h2 className="text-lg font-bold text-gray-600 uppercase">III. Crecimiento</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input placeholder="Dones y Talentos" name="dones" value={formData.dones} onChange={handleInputChange} className="w-full border border-amber-700 focus:ring-2 focus:ring-amber-500 rounded p-2 bg-white" />
            <div className="flex items-center gap-4">
                <label className="flex items-center gap-1 text-sm"><input type="checkbox" checked={formData.bautizadoAgua === 'Sí'} onChange={(e) => setFormData({...formData, bautizadoAgua: e.target.checked ? 'Sí' : 'No'})} /> Bautismo Agua</label>
                <label className="flex items-center gap-1 text-sm"><input type="checkbox" checked={formData.bautizadoEspiritu === 'Sí'} onChange={(e) => setFormData({...formData, bautizadoEspiritu: e.target.checked ? 'Sí' : 'No'})} /> Bautismo E.S.</label>
            </div>
        </div>
      </section>

      <div className="flex justify-end gap-3 pt-4">
        {editandoIndex !== null && (
          <button type="button" onClick={() => {setEditandoIndex(null); setFormData(getInitialState())}} className="bg-gray-500 text-white px-6 py-2 rounded flex items-center gap-2 hover:bg-gray-600 transition-colors">
            <X size={18}/> Cancelar
          </button>
        )}
        <button type="submit" className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-2 rounded shadow transition-all flex items-center gap-2 font-bold">
          <Save size={18}/> {editandoIndex !== null ? 'Actualizar' : 'Registrar'}
        </button>
      </div>
    </form>
  );
};

export default CreyenteForm;