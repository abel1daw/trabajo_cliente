export default function Login() {
    setTimeout(() => {
  const form = document.getElementById("loginForm");

  form.onsubmit = (e) => {
    e.preventDefault();

    const user = username.value.trim();
    const pass = password.value.trim();
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const found = users.find(u => u.user === user && u.pass === pass);

    if (!found) {
      alert("Usuario o contraseña incorrectos");
      return;
    }
    loginSuccess(user);
  };
}, 0);


    return `
            <div class="auth-container">
                <h1>Login</h1>

                <form id="loginForm">
                    <input id="username" type="text" placeholder="Usuario" required>
                    <input id="password" type="password" placeholder="Contraseña" required>
                    <button class="btn">Ingresar</button>
                </form>

                <p>¿No tienes cuenta? <a href="#/register">Regístrate</a></p>
            </div>
  `;
}


