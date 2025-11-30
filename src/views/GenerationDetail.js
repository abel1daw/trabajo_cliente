import { GENERATIONS } from "../data/generations.js"; 

export default async function GenerationDetail({ params }) {
  const gen = Number(params.gen);
  const data = GENERATIONS.find(g => g.gen === gen);
  const [start, end] = data.range;

  let cards = "";
  for (let id = start; id <= end; id++) {
    cards += `
      <div class="pokemon-card" onclick="location.hash='#/pokemon/${id}'">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png">
        <p>#${id}</p>
      </div>
    `;
  }

  return `
    <h1>${data.region} – Generación ${data.gen}</h1>
    <div class="pokemon-grid">${cards}</div>
  `;
}
