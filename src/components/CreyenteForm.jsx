import { PlusCircle, Heart, Users, Save, X } from 'lucide-react';

const CreyenteForm = ({ formData, setFormData, guardarRegistro, editandoIndex, setEditandoIndex, getInitialState }) => {
  
  const handleInputChange = (e) => {
    const { name, value } = e.target; 
    let nuevosDatos = { ...formData, [name]: value };   
    if (name === 'fechaNacimiento' && value) {
      const hoy = new Date();
      const cumple = new Date(value);
      let edadCalculada = hoy.getFullYear() - cumple.getFullYear();
      const diferenciaMeses = hoy.getMonth() - cumple.getMonth();
      if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < cumple.getDate())) {
        edadCalculada--;
      }
      nuevosDatos.edad = edadCalculada >= 0 ? edadCalculada : 0;
    }
    setFormData(nuevosDatos);
  };

  // Clase CSS reutilizable para todos los inputs
  const inputStyle = "w-full border border-amber-700 rounded p-2 focus:ring-2 focus:ring-blue-500 outline-none text-sm transition-all";

  return (
    <form onSubmit={guardarRegistro} className="p-6 space-y-8">
      {/* SECCIÓN I: DATOS PERSONALES */}
      <section>
        <div className="flex items-center gap-2 mb-4 border-b border-amber-500 pb-2">
          <h2 className="text-lg font-bold text-gray-600 uppercase">👤 I. Datos Personales</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="text-sm font-semibold">Nombres</label>
            <input required name="nombre" value={formData.nombre} onChange={handleInputChange} className={inputStyle} />
          </div>
          <div>
            <label className="text-sm font-semibold">Apellidos</label>
            <input required name="apellidos" value={formData.apellidos} onChange={handleInputChange} className={inputStyle} />
          </div>
          <div>
            <label className="text-sm font-semibold">Cédula</label>
            <input name="cedula" value={formData.cedula} onChange={handleInputChange} className={inputStyle} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="text-sm font-semibold text-gray-600">Estado Civil</label>
            <select name="estadoCivil" value={formData.estadoCivil} onChange={handleInputChange} className={inputStyle}>
              <option>Soltero(a)</option>
              <option>Casado(a)</option>
              <option>Divorciado(a)</option>
              <option>Viudo(a)</option>
            </select> 
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-600">Fecha Nacimiento</label>
            <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleInputChange} className={inputStyle} />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-600">Edad</label>
            <input 
              type="number" 
              name="edad" 
              value={formData.edad} 
              readOnly
              className="w-full border border-amber-700 rounded p-2 text-sm bg-gray-100 cursor-not-allowed outline-none"
              placeholder="Auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-semibold text-gray-600">Teléfono</label>
            <input name="telefono" value={formData.telefono} onChange={handleInputChange} className={inputStyle} />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-600">Correo Electrónico</label>
            <input type="email" name="correo" value={formData.correo} onChange={handleInputChange} className={inputStyle} />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-600">Oficio o Profesión</label>
            <input name="profesion" value={formData.profesion} onChange={handleInputChange} className={inputStyle} />
          </div>
        </div>
      </section>

      {/* SECCIÓN II: CRECIMIENTO */}
      <section className="">
        <div className="flex items-center gap-2 mb-4 border-b border-amber-500 pb-2">
          🕊️
          <h2 className="text-lg font-bold text-gray-600 uppercase">II. Crecimiento Espiritual</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="text-sm font-semibold text-gray-600">Año de decisión por Cristo</label>
            <input 
              type="number" 
              name="fechaDecision" 
              value={formData.fechaDecision} 
              onChange={handleInputChange} 
              min="1900" 
              max={new Date().getFullYear()} 
              placeholder="Ej: 2015"
              className={inputStyle} 
            />
          </div> 
          <div>
            <label className="text-sm font-semibold text-gray-600">Iglesia anterior (si aplica)</label>
            <input name="iglesiaAnterior" value={formData.iglesiaAnterior} onChange={handleInputChange} className={inputStyle} />
          </div> 
          <div>
            <label className="text-sm font-semibold text-gray-600">Dones / Talentos</label>
            <input name="dones" value={formData.dones} onChange={handleInputChange} className={inputStyle} />
          </div>
          <div>
            <div>
            <label className="text-sm font-semibold text-gray-600">Bautizo</label>
            </div>
            <label className="flex items-center gap-2 text-sm font-medium cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-amber-700" checked={formData.bautizadoAgua === 'Sí'} onChange={(e) => setFormData({...formData, bautizadoAgua: e.target.checked ? 'Sí' : 'No'})} /> 
              Bautizo en Agua
            </label>
            <label className="flex items-center gap-2 text-sm font-medium cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-amber-700" checked={formData.bautizadoEspiritu === 'Sí'} onChange={(e) => setFormData({...formData, bautizadoEspiritu: e.target.checked ? 'Sí' : 'No'})} /> 
              Bautismo E.S.
            </label>
          </div>
        </div>
      </section>

      {/* BOTONES DE ACCIÓN */}
      <div className="flex justify-end gap-3 pt-4">
        {editandoIndex !== null && (
          <button type="button" onClick={() => {setEditandoIndex(null); setFormData(getInitialState())}} className="bg-gray-500 text-white px-6 py-2 rounded flex items-center gap-2 hover:bg-gray-600 transition-colors shadow-md">
            <X size={18}/> Cancelar
          </button>
        )}
        <button type="submit" className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-2 rounded shadow-md transition-all flex items-center gap-2 font-bold uppercase tracking-wider">
          <Save size={18}/> {editandoIndex !== null ? 'Actualizar' : 'Registrar'}
        </button>
      </div>
    </form>
  );
};

export default CreyenteForm;