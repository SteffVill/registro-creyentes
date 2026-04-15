export const limpiarSoloLetras = (valor) => {
  return valor.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
};

export const limpiarSoloNumeros = (valor) => {
  return valor.replace(/\D/g, '');
};

export const formatearCedula = (valor) => {
  const letra = valor.charAt(0).toUpperCase().replace(/[^V|E]/g, '');
  const numeros = valor.slice(1).replace(/\D/g, '');
  return letra + numeros;
};

export const calcularEdad = (fechaNacimiento) => {
  if (!fechaNacimiento) return { edad: "", esValido: false };
  
  const hoy = new Date();
  const cumple = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - cumple.getFullYear();
  const mes = hoy.getMonth() - cumple.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < cumple.getDate())) {
    edad--;
  }

  return {
    edad: edad >= 0 ? edad : 0,
    esValido: edad >= 12
  };
};