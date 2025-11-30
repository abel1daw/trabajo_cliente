export function Navbar() {
  const user = localStorage.getItem("user");
  return `
    <nav>
      <a href="#/">Inicio</a>
      <a href="#/pokemon">Pokémon</a>
      <a href="#/myteam">Mi Equipo</a>
      ${user 
        ? `<button class="btn" onclick="logout()">Cerrar sesión (${user})</button>` 
        : `<a href="#/login">Login</a>`}
    </nav>
  `;
}