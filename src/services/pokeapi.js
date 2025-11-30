const API = "https://pokeapi.co/api/v2/pokemon";

export async function getPokemonList(limit = 10000000) {
  const res = await fetch(`${API}?limit=${limit}`);
  return res.json();
}

export async function getPokemon(id) {
  const res = await fetch(`${API}/${id}`);
  return res.json();
}