export default function Register() {
    setTimeout(() => {
        const form = document.getElementById("registerForm");

        if (!form) return; 

        form.onsubmit = (e) => {
            e.preventDefault();

            const user = form.username.value.trim();
            const pass = form.password.value.trim();

            const users = JSON.parse(localStorage.getItem("users") || "[]");

            if (users.find(u => u.user === user)) {
                alert("El usuario ya existe");
                return;
            }

            users.push({ user, pass });
            localStorage.setItem("users", JSON.stringify(users));

            alert("Registro exitoso");
            location.hash = "#/login";
        };
    });

    return `
            <div class="auth-container">
                <h1>Registro</h1>

                <form id="registerForm">
                    <input id="username" type="text" placeholder="Usuario" required>
                    <input id="password" type="password" placeholder="Contraseña" required>
                    <button class="btn">Crear Cuenta</button>
                </form>

                <p>¿Ya tienes cuenta? <a href="#/login">Inicia sesión</a></p>
            </div>
  `;
}

