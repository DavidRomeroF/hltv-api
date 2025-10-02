# HLTV API - README

**Proyecto:** `hltv-api` (repo: DavidRomeroF/hltv-api)

Pequeño servidor Node.js que utiliza la librería `hltv` para obtener datos de equipos y estadísticas de HLTV y exponerlos a través de endpoints HTTP.

---

## Qué es

Esta aplicación es un servidor que permite consultar información de equipos de CS:GO y sus estadísticas a través de HTTP. Se basa en la librería `hltv`, que hace scraping de HLTV.org para obtener los datos. No es una API oficial de HLTV.

Con esta API puedes:

* Obtener información básica de un equipo (ID, nombre, ranking, jugadores).
* Obtener estadísticas completas de un equipo (winrate, mapas jugados, resultados, etc.).

---

## Requisitos

* Node.js ≥ 16
* npm (gestor de paquetes de Node.js)
* Git (opcional si quieres clonar el repositorio)

---

## Cómo usarlo

1. Clona el repositorio:

```bash
git clone https://github.com/DavidRomeroF/hltv-api.git
cd hltv-api
```

2. Instala las dependencias necesarias:

```bash
npm install
```

Esto instalará `express` y `hltv`, que son necesarias para que el servidor funcione.

3. Ejecuta el servidor:

```bash
node index.js
```

4. Ahora la API estará corriendo en `http://localhost:3000`. Puedes probar los endpoints:

* `GET /team/:name` → devuelve información básica de un equipo
  Ejemplo: `http://localhost:3000/team/BIG`

* `GET /teamStatsByName/:name` → devuelve estadísticas completas de un equipo
  Ejemplo: `http://localhost:3000/teamStatsByName/Gentle%20Mates`

> Nota: si el nombre del equipo tiene espacios, reemplaza con `%20` o usa herramientas que codifiquen la URL automáticamente.

---

## Errores comunes

* `ERR_MODULE_NOT_FOUND: Cannot find package 'express'` → significa que no has ejecutado `npm install`.
* `hltv` puede dejar de funcionar temporalmente si HLTV cambia su página. Intenta de nuevo más tarde.

---

## Resumen

* Clonas el repo o descargas los archivos.
* Instalas dependencias con `npm install`.
* Ejecutas con `node index.js`.
* Usas los endpoints para obtener info de equipos y estadísticas.

Eso es todo lo que un usuario necesita para empezar a usar esta API.
