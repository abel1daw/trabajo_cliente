import { router } from './router';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer'; 
import './styles/style.css';

window.addToTeam = function (id) {
  const team = JSON.parse(localStorage.getItem("team") || "[]");

  if (team.length >= 6) {
    alert("Tu equipo está lleno (máximo 6)");
    return;
  }

  if (!team.includes(id)) team.push(id);
  localStorage.setItem("team", JSON.stringify(team));

  alert("Añadido al equipo");
};

window.removeFromTeam = function (id) {
  let team = JSON.parse(localStorage.getItem("team") || "[]");
  team = team.filter((p) => p !== id);
  localStorage.setItem("team", JSON.stringify(team));
  location.reload();
};

window.logout = function () {
  localStorage.removeItem("user");
  alert("Sesión cerrada");
  document.querySelector('nav').outerHTML = Navbar();
  location.hash = "#/login";
};


window.loginSuccess = function(user) {
  localStorage.setItem("user", user);
  alert("Bienvenido " + user);
  document.querySelector('nav').outerHTML = Navbar(); 
  location.hash = "#/";
};

document.querySelector('#app').innerHTML = `
  ${Navbar()}
  <main id="view"></main>
  ${Footer()}
`;

router();   
window.addEventListener('hashchange', router);
