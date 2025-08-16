function login() {
    const name = document.getElementById('userName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (name && email && password) {
        localStorage.setItem('nombreUsuario', name); // Guardar el nombre
        localStorage.setItem('correoUsuario', email); // Guardar el email
        window.location.href = "cursos.html";
    } else {
        alert("Por favor, ingresa tu nombre, correo y contraseña.");
    }
}

function logout() {
    localStorage.removeItem('nombreUsuario');
    localStorage.removeItem('correoUsuario');
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {
    const nombre = localStorage.getItem('nombreUsuario');
    const paginaActual = window.location.pathname.split("/").pop();

    if (!nombre && paginaActual !== "index.html") {
        window.location.href = "index.html";  // 🔹 corregido
        return;
    }

    // Cursos principales
    if (paginaActual === "cursos.html" && nombre) {
        const welcome = document.getElementById("welcomeMessage");
        if (welcome) welcome.textContent = `Bienvenido, ${nombre}`;
        const courses = document.getElementById("coursesSection");
        if (courses) courses.style.display = "flex";
    }

    // Panel de usuario
    if (paginaActual === "usuario.html" && nombre) {
        const welcome = document.getElementById("welcomeMessage");
        if (welcome) welcome.textContent = `Bienvenido, ${nombre}`;
        const userName = document.getElementById("userNameDisplay");
        if (userName) userName.textContent = nombre;
    }

    // Páginas de cursos individuales (Word, Excel, Cocina...)
    if (paginaActual.includes("curso") && nombre) {
        const welcome = document.getElementById("welcomeMessage");
        if (welcome) welcome.textContent = `Bienvenido, ${nombre}`;
    }
});