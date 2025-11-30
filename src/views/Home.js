import { GENERATIONS } from "../data/generations.js";

export default function Home() {
  const rows = GENERATIONS.map(g => {
    const startersHTML = g.starters
      .map(
        id => `<img class="starter-icon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png">`
      )
      .join("");

    return `
      <tr onclick="location.hash='#/gen/${g.gen}'">
        <td>${g.gen}</td>
        <td>${g.region}</td>
        <td>${startersHTML}</td>
      </tr>
    `;
  });

  return `
    <h1>Pokédex por generaciones</h1>
    <p>Selecciona una generación para ver todos sus Pokémon:</p>
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
