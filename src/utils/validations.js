export const limpiarSoloLetras = (valor) => {
  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/;
  // Si cumple la regla, devuelve el valor. Si no, devuelve null.
  return regex.test(valor) ? valor : null;
};

export const limpiarSoloNumeros = (valor) => {
  const regex = /^[0-9]*$/;
  return regex.test(valor) ? valor : null;
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
  return { edad: edad >= 0 ? edad : 0, esValido: edad >= 12 };
};