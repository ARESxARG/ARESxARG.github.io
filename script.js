// script.js

// ⚠️ Reemplazá 'TU_USUARIO' por tu nombre de usuario de GitHub
const GITHUB_USERNAME = 'ARESxARG';

async function fetchRepos() {
  const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
  const repos = await response.json();

  const container = document.getElementById('repos');
  container.innerHTML = ''; // Limpia si había algo antes

  repos.forEach(repo => {
    const card = document.createElement('div');
    card.className = 'repo-card';

    const privateTag = repo.private ? '🔒 Privado' : '🌐 Público';

    card.innerHTML = `
      <h3>${repo.name}</h3>
      <p>${repo.description || 'Sin descripción.'}</p>
      <p><strong>${privateTag}</strong> ⭐ ${repo.stargazers_count}</p>
      ${repo.private ? '<p style="color: red;">Este repositorio es privado.</p>' : `<a href="${repo.html_url}" target="_blank">Ver en GitHub</a>`}
    `;

    container.appendChild(card);
  });
}

// Ejecutamos la función al cargar la página
window.onload = fetchRepos;
