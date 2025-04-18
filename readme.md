# Prueba Técnica - Frontend Angular

Este proyecto es una aplicación frontend desarrollada en Angular que consume una API REST para la gestión de productos, utilizando NgRx para el manejo de estado.

---

## Requisitos

- Node.js (v18 o superior recomendado)
- npm (v9 o superior recomendado)
- Angular CLI (`npm install -g @angular/cli`)

---

## Instalación

1. **Clona el repositorio:**
   ```sh
   git clone https://github.com/tu-usuario/tu-repo.git
   cd Frontend
   ```

2. **Instala las dependencias:**
   ```sh
   npm install
   ```

---

## Configuración de la URL del Backend

La URL base de la API se configura en el archivo de entorno de Angular.

1. Abre el archivo:
   ```
   src/environment.ts
   ```

2. Modifica la propiedad `apiUrl` con la dirección de tu backend:
   ```typescript
   export const environment = {
     production: false,
     apiUrl: 'https://localhost:7181/api/Producto' // Cambia esto según tu backend
   };
   ```

Si tienes un entorno de producción, crea o edita el archivo correspondiente (por ejemplo, `src/environment.prod.ts`).

---

## Ejecución

Para iniciar la aplicación en modo desarrollo:

```sh
ng serve
```

La aplicación estará disponible en [http://localhost:4200](http://localhost:4200).

---

## Funcionalidades

- Listado, creación, edición y eliminación de productos.
- Filtros y búsqueda en la tabla.
- Manejo de estado global con NgRx (Actions, Reducers, Effects, Selectors).
- Integración con API RESTful.

---

## Notas

- Asegúrate de que el backend esté corriendo y accesible desde la URL configurada.
- Si usas un puerto o ruta diferente para la API, actualiza el archivo de entorno antes de iniciar la app.
- Si tienes problemas con CORS, revisa la configuración del backend.

---

## Scripts útiles

- `ng build` — Compila la aplicación para producción.
- `ng test` — Ejecuta los tests unitarios.
- `ng lint` — Ejecuta el linter.

---

## Estructura principal del proyecto

```
Frontend/
├── src/
│   ├── app/
│   │   ├── lista-productos/
│   │   ├── services/
│   │   └── store/
│   ├── environments.ts
│   └── main.ts
├── .gitignore
├── package.json
└── README.md
```

---

## Contacto

Para dudas o sugerencias, contacta a [elwin.ernst@hotmail.com](mailto:elwin.ernst@hotmail.com).