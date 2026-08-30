// src/data/tablero.js
export const tablero = {
  // Circuito Exterior
  "1": { tipo: "propiedad", nombre: "Casilla 1", siguientes: ["2"] },
  "2": { tipo: "propiedad", nombre: "Casilla 2", siguientes: ["3"] },
  "3": { tipo: "interseccion", nombre: "Casilla 3", siguientes: ["4", "12"] }, // Aquí se puede desviar al centro
  
  // Circuito Interior (Numeración del Conocimiento)
  "12": { tipo: "conocimiento", nombre: "Nodo 12", siguientes: ["11", "15"] },
  "11": { tipo: "conocimiento", nombre: "Nodo 11", siguientes: ["10", "32"] },
  "50": { tipo: "meta", nombre: "Edificio Central", siguientes: [] }
};