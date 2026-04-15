import { Search } from 'lucide-react';

const SearchBar = ({ busqueda, setBusqueda }) => (
  <div className="relative w-full md:w-64">
    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
      <Search size={18} />
    </span>
    <input 
      type="text"
      placeholder="Buscar por nombre o CI..."
      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
      value={busqueda}
      onChange={(e) => setBusqueda(e.target.value)}
    />
  </div>
);

export default SearchBar;