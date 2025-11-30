(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();const i=[{gen:1,region:"Kanto",range:[1,151],starters:[1,4,7]},{gen:2,region:"Johto",range:[152,251],starters:[152,155,158]},{gen:3,region:"Hoenn",range:[252,386],starters:[252,255,258]},{gen:4,region:"Sinnoh",range:[387,494],starters:[387,390,393]},{gen:5,region:"Teselia",range:[495,649],starters:[495,498,501]},{gen:6,region:"Kalos",range:[650,721],starters:[650,653,656]},{gen:7,region:"Alola",range:[722,809],starters:[722,725,728]},{gen:8,region:"Galar",range:[810,905],starters:[810,813,816]},{gen:9,region:"Paldea",range:[906,1025],starters:[906,909,912]}];function d(){return`
    <h1>Pokédex por generaciones</h1>
    <p>Selecciona una generación para ver todos sus Pokémon:</p>
    <table class="gen-table">
      <tr>
        <th>Generación</th>
        <th>Región</th>
        <th>Iniciales</th>
      </tr>
      ${i.map(e=>{const r=e.starters.map(o=>`<img class="starter-icon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${o}.png">`).join("");return`
      <tr onclick="location.hash='#/gen/${e.gen}'">
        <td>${e.gen}</td>
        <td>${e.region}</td>
        <td>${r}</td>
      </tr>
    `}).join("")}
    </table>
  `}const u="https://pokeapi.co/api/v2/pokemon";async function p(t=1e7){return(await fetch(`${u}?limit=${t}`)).json()}async function g(t){return(await fetch(`${u}/${t}`)).json()}async function h(){const t=await p();return`
    <h1>Pokédex</h1>
    <div class="pokemon-grid">
      ${(await Promise.all(t.results.map(async(r,o)=>{const n=o+1;return`
        <div onclick="location.hash='#/pokemon/${n}'" class="pokemon-card">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${n}.png">
          <h3>${r.name.toUpperCase()}</h3>
          <p>#${n}</p>
        </div>
      `}))).join("")}
    </div>
  `}async function f({params:t}){const e=await g(t.id),r=e.stats.map(o=>`
      <p>${o.stat.name.toUpperCase()}</p>
      <div class="stat-bar">
        <div class="stat-fill" style="width:${o.base_stat*1.2}px"></div>
      </div>
    `).join("");return`
    <div class="pokemon-detail">
      <h1>${e.name.toUpperCase()} (#${e.id})</h1>
      <img src="${e.sprites.other["official-artwork"].front_default}">
      <h2>Stats</h2>
      ${r}
      <button class="btn" onclick="addToTeam(${e.id})">Añadir al equipo</button>
    </div>
  `}function v(){if(!localStorage.getItem("user"))return`
      <h1>Acceso restringido</h1>
      <p>Debes iniciar sesión para ver tu equipo.</p>
      <a class="btn" href="#/login">Ir al login</a>
    `;const e=JSON.parse(localStorage.getItem("team")||"[]");return e.length===0?"<h1>Mi equipo</h1><p>No hay Pokémon en tu equipo.</p>":`
    <h1>Mi equipo</h1>
    <div class="team-grid">${e.map(o=>`
        <div class="team-card">
          <img  onclick="location.hash='#/pokemon/${o}'" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${o}.png">
          <p>#${o}</p>
          <button class="btn" onclick="removeFromTeam(${o})">Quitar</button>
        </div>
      `).join("")}</div>
  `}function $(){return setTimeout(()=>{const t=document.getElementById("loginForm");t.onsubmit=e=>{e.preventDefault();const r=username.value.trim(),o=password.value.trim();if(!JSON.parse(localStorage.getItem("users")||"[]").find(a=>a.user===r&&a.pass===o)){alert("Usuario o contraseña incorrectos");return}loginSuccess(r)}},0),`
            <div class="auth-container">
                <h1>Login</h1>

                <form id="loginForm">
                    <input id="username" type="text" placeholder="Usuario" required>
                    <input id="password" type="password" placeholder="Contraseña" required>
                    <button class="btn">Ingresar</button>
                </form>

                <p>¿No tienes cuenta? <a href="#/register">Regístrate</a></p>
            </div>
  `}function b(){return setTimeout(()=>{const t=document.getElementById("registerForm");t&&(t.onsubmit=e=>{e.preventDefault();const r=t.username.value.trim(),o=t.password.value.trim(),n=JSON.parse(localStorage.getItem("users")||"[]");if(n.find(s=>s.user===r)){alert("El usuario ya existe");return}n.push({user:r,pass:o}),localStorage.setItem("users",JSON.stringify(n)),alert("Registro exitoso"),location.hash="#/login"})}),`
            <div class="auth-container">
                <h1>Registro</h1>

                <form id="registerForm">
                    <input id="username" type="text" placeholder="Usuario" required>
                    <input id="password" type="password" placeholder="Contraseña" required>
                    <button class="btn">Crear Cuenta</button>
                </form>

                <p>¿Ya tienes cuenta? <a href="#/login">Inicia sesión</a></p>
            </div>
  `}function k(){return`
    <section>
      <h1>404</h1>
      <p>Página no encontrada.</p>
    </section>
  `}function w(){return`
    <h1>Generaciones Pokémon</h1>
    <table class="gen-table">
      <tr>
        <th>Generación</th>
        <th>Región</th>
        <th>Iniciales</th>
      </tr>
      ${i.map(e=>{const r=e.starters.map(o=>`
        <img class="starter-icon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${o}.png">
      `).join("");return`
      <tr onclick="location.hash='#/gen/${e.gen}'">
        <td>${e.gen}</td>
        <td>${e.region}</td>
        <td class="starter-cell">${r}</td>
      </tr>
    `}).join("")}
    </table>
  `}async function l({params:t}){const e=Number(t.gen),r=i.find(a=>a.gen===e),[o,n]=r.range;let s="";for(let a=o;a<=n;a++)s+=`
      <div class="pokemon-card" onclick="location.hash='#/pokemon/${a}'">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${a}.png">
        <p>#${a}</p>
      </div>
    `;return`
    <h1>${r.region} – Generación ${r.gen}</h1>
    <div class="pokemon-grid">${s}</div>
  `}function m(){const t=document.getElementById("view"),e=location.hash.slice(1).toLowerCase()||"/",r={"/gens":w,"/gen/:gen":l,"/":d,"/pokemon":h,"/myteam":v,"/login":$,"/register":b};if(e.startsWith("/gen/")){const s=e.split("/")[2];return l({params:{gen:s}}).then(a=>t.innerHTML=a)}if(e.startsWith("/pokemon/")){const s=e.split("/")[2];return f({params:{id:s}}).then(a=>t.innerHTML=a)}const n=(r[e]||k)();n instanceof Promise?n.then(s=>t.innerHTML=s):t.innerHTML=n}function c(){const t=localStorage.getItem("user");return`
    <nav>
      <a href="#/">Inicio</a>
      <a href="#/pokemon">Pokémon</a>
      <a href="#/myteam">Mi Equipo</a>
      ${t?`<button class="btn" onclick="logout()">Cerrar sesión (${t})</button>`:'<a href="#/login">Login</a>'}
    </nav>
  `}function y(){return`
    <footer class="footer">
      <p>© 2024 Trabajo Abel - SPA</p>
    </footer>
  `}window.addToTeam=function(t){const e=JSON.parse(localStorage.getItem("team")||"[]");if(e.length>=6){alert("Tu equipo está lleno (máximo 6)");return}e.includes(t)||e.push(t),localStorage.setItem("team",JSON.stringify(e)),alert("Añadido al equipo")};window.removeFromTeam=function(t){let e=JSON.parse(localStorage.getItem("team")||"[]");e=e.filter(r=>r!==t),localStorage.setItem("team",JSON.stringify(e)),location.reload()};window.logout=function(){localStorage.removeItem("user"),alert("Sesión cerrada"),document.querySelector("nav").outerHTML=c(),location.hash="#/login"};window.loginSuccess=function(t){localStorage.setItem("user",t),alert("Bienvenido "+t),document.querySelector("nav").outerHTML=c(),location.hash="#/"};document.querySelector("#app").innerHTML=`
  ${c()}
  <main id="view"></main>
  ${y()}
`;m();window.addEventListener("hashchange",m);
