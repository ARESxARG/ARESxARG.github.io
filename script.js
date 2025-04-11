// Archivo: script.js

// ⚠️ CAMBIÁ ESTE NOMBRE POR TU USUARIO DE GITHUB
const GITHUB_USERNAME = "ARESxARG";

// Función para obtener los repos públicos del usuario
async function fetchRepos() {
  const url = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!Array.isArray(data)) {
      document.getElementById("repo-list").innerHTML = "<p>No se pudo acceder a los repositorios.</p>";
      return;
    }

    const reposContainer = document.getElementById("repo-list");

    data.forEach(repo => {
      const repoElement = document.createElement("div");
      repoElement.className = "repo-item";
      repoElement.innerHTML = `
        <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a> ${repo.private ? "🔒" : "🌐"}</h3>
        <p>${repo.description || "Sin descripción."}</p>
        <p>⭐ ${repo.stargazers_count} - ${repo.language || "Lenguaje no especificado"}</p>
      `;
      reposContainer.appendChild(repoElement);
    });
  } catch (error) {
    console.error("Error al cargar los repos:", error);
    document.getElementById("repo-list").innerHTML = "<p>Error al cargar los repositorios.</p>";
  }
}

// Ejecutar al cargar la página
window.onload = fetchRepos;
