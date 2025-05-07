async function loadPosts() {
    const res = await fetch('posts.json');
    const posts = await res.json();
    const container = document.querySelector('.post-list');
  
    posts.forEach(post => {
      const el = document.createElement('div');
      el.className = 'post-preview';
      el.innerHTML = `
        <h3><a href="${post.id}.html">${post.title}</a></h3>
        <p class="date">${post.date}</p>
        <p>${post.excerpt}</p>
      `;
      container.appendChild(el);
    });
  }
  
  window.addEventListener('DOMContentLoaded', loadPosts);