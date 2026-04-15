# ⛪ Sistema de Registro Nuevos Creyentes

Sistema web profesional para la gestión y censo de miembros parroquiales, desarrollado con un enfoque en **Arquitectura de Componentes** y **Clean Code**.

## 🚀 Características Principales

* **Validación Estricta de Datos:** Saneamiento de entradas mediante expresiones regulares (RegEx) para garantizar la integridad de la información (nombres, cédulas V/E, teléfonos).
* **Lógica de Negocio Automatizada:** Cálculo dinámico de edad a partir de la fecha de nacimiento y validación de mayoría de edad (12+ años).
* **Diseño Responsivo:** Interfaz moderna y adaptativa construida con **Tailwind CSS v4**.
* **Arquitectura Desacoplada:** Separación de responsabilidades entre componentes de UI y lógica de validación (`utils`).
* **Persistencia Local:** Gestión de datos mediante `localStorage` para mantener la información tras recargar la página.

## 🛠️ Tecnologías Utilizadas

* **React 18** (Vite como Bundler)
* **Tailwind CSS v4** (Estilizado avanzado)
* **Lucide React** (Iconografía)
* **JavaScript (ES6+)**

## 📂 Estructura del Proyecto

```text
src/
 ├── components/     # Componentes de interfaz (Form, List, Search)
 ├── utils/          # Lógica de validación y cálculos (Helper functions)
 ├── App.jsx         # Orquestador principal de la aplicación
 └── main.jsx        # Punto de entrada

🔧 Instalación y Uso

    1. Clona el repositorio:
    git clone [https://github.com/SteffVill/registro-creyentes.git](https://github.com/SteffVill/registro-creyentes.git)

    2. Instala las dependencias:
    npm install

    3.Inicia el servidor de desarrollo:
    npm run dev

👤 Autora- Andreina Villalba Ingeniera en Informática Especialista en Desarrollo Web y UI/UX.