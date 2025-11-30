export default function MyTeam() {

  const logged = localStorage.getItem("user");
  if (!logged) {
    return `
      <h1>Acceso restringido</h1>
      <p>Debes iniciar sesión para ver tu equipo.</p>
      <a class="btn" href="#/login">Ir al login</a>
    `;
  }

  const team = JSON.parse(localStorage.getItem("team") || "[]");

  if (team.length === 0) {
    return `<h1>Mi equipo</h1><p>No hay Pokémon en tu equipo.</p>`;
  }

  const cards = team
    .map((p) => {
      return `
        <div class="team-card">
          <img  onclick="location.hash='#/pokemon/${p}'" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p}.png">
          <p>#${p}</p>
          <button class="btn" onclick="removeFromTeam(${p})">Quitar</button>
        </div>
      `;
    })
    .join("");

  return `
    <h1>Mi equipo</h1>
    <div class="team-grid">${cards}</div>
  `;
}
