(function(){
  // Theme toggle
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    root.classList.add('light');
  }
  document.getElementById('themeToggle')?.addEventListener('click', () => {
    root.classList.toggle('light');
    localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
  });

  // Project filter
  const filter = document.getElementById('filterInput');
  if (filter) {
    filter.addEventListener('input', e => {
      const q = e.target.value.toLowerCase();
      document.querySelectorAll('.project-card').forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(q) ? '' : 'none';
      });
    });
  }

  // Blog search
  const blogSearch = document.getElementById('blogSearch');
  if (blogSearch) {
    blogSearch.addEventListener('input', e => {
      const q = e.target.value.toLowerCase();
      document.querySelectorAll('.post-item').forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(q) ? '' : 'none';
      });
    });
  }
})();
