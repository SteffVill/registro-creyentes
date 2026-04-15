import { Users, Edit, Trash2 } from 'lucide-react';

const CreyenteList = ({ registros, prepararEdicion, eliminarRegistro, busqueda }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {registros.map((reg, idx) => (
      <div key={idx} className="bg-white p-4 rounded-lg shadow border flex justify-between items-center group hover:border-blue-300 transition-all">
        <div>
          <h3 className="font-bold text-blue-900">{reg.nombre}</h3>
          <p className="text-xs text-gray-500 font-medium">Cédula: {reg.cedula || 'N/A'}</p>
        </div>
        <div className="flex gap-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
          <button onClick={() => prepararEdicion(idx)} className="p-2 bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200">
            <Edit size={16} />
          </button>
          <button onClick={() => eliminarRegistro(idx)} className="p-2 bg-red-100 text-red-700 rounded hover:bg-red-200">
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default CreyenteList;