import { getPokemonList } from "../services/pokeapi.js";

export default async function PokemonList() {
  const data = await getPokemonList();

  const cards = await Promise.all(
    data.results.map(async (p, index) => {
      const id = index + 1;
      return `
        <div onclick="location.hash='#/pokemon/${id}'" class="pokemon-card">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png">
          <h3>${p.name.toUpperCase()}</h3>
          <p>#${id}</p>
        </div>
      `;
    })
  );

  return `
    <h1>Pokédex</h1>
    <div class="pokemon-grid">
      ${cards.join("")}
    </div>
  `;
}
