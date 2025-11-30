export function PokemonCard(pokemon) {
  return `
    <div class="pokemon-card">
      <a href="#/pokemon/${pokemon.id}">
        <img src="${pokemon.image}" alt="${pokemon.name}">
        <h3>${pokemon.name.toUpperCase()}</h3>
      </a>
    </div>
  `;
}
