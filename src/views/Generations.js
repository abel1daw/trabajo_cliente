import { GENERATIONS } from "../data/generations.js";

export default function Generations() {
  const rows = GENERATIONS.map(g => {
    const startersHTML = g.starters
      .map(id => `
        <img class="starter-icon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png">
      `)
      .join("");

    return `
      <tr onclick="location.hash='#/gen/${g.gen}'">
        <td>${g.gen}</td>
        <td>${g.region}</td>
        <td class="starter-cell">${startersHTML}</td>
      </tr>
    `;
  });

  return `
    <h1>Generaciones Pokémon</h1>
    <table class="gen-table">
      <tr>
        <th>Generación</th>
        <th>Región</th>
        <th>Iniciales</th>
      </tr>
      ${rows.join("")}
    </table>
  `;
}
