import { getPokemon } from "../services/pokeapi.js";

export default async function PokemonDetail({ params }) {
  const p = await getPokemon(params.id);

  const stats = p.stats
    .map(
      (s) => `
      <p>${s.stat.name.toUpperCase()}</p>
      <div class="stat-bar">
        <div class="stat-fill" style="width:${s.base_stat * 1.2}px"></div>
      </div>
    `
    )
    .join("");

  return `
    <div class="pokemon-detail">
      <h1>${p.name.toUpperCase()} (#${p.id})</h1>
      <img src="${p.sprites.other['official-artwork'].front_default}">
      <h2>Stats</h2>
      ${stats}
      <button class="btn" onclick="addToTeam(${p.id})">Añadir al equipo</button>
    </div>
  `;
}
