import Home from "./views/Home.js";
import PokemonList from "./views/PokemonList.js";
import PokemonDetail from "./views/PokemonDetail.js";
import MyTeam from "./views/MyTeam.js";
import Login from "./views/Login.js";
import Register from "./views/Register.js";
import NotFound from "./views/NotFound.js";
import Generations from "./views/Generations.js";
import GenerationDetail from "./views/GenerationDetail.js";

export function router() {
  const view = document.getElementById("view");
  const route = location.hash.slice(1).toLowerCase() || "/";

  const routes = {
    "/gens": Generations,
    "/gen/:gen": GenerationDetail,
    "/": Home,
    "/pokemon": PokemonList,
    "/myteam": MyTeam,
    "/login": Login,
    "/register": Register
  };

  if (route.startsWith("/gen/")) {
    const gen = route.split("/")[2];
    return GenerationDetail({ params: { gen } }).then(html => (view.innerHTML = html));
  }

  if (route.startsWith("/pokemon/")) {
    const id = route.split("/")[2];
    return PokemonDetail({ params: { id } }).then(html => (view.innerHTML = html));
  }

  const screen = routes[route] || NotFound;
  const result = screen();

  if (result instanceof Promise) {
    result.then(html => (view.innerHTML = html));
  } else {
    view.innerHTML = result;
  }
}


