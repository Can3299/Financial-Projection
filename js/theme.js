function initTheme() {
  const html = document.documentElement;
  const icon = document.getElementById('themeIcon');

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    html.classList.add('dark');
    icon.innerText = '☀️';
  } else {
    html.classList.remove('dark');
    icon.innerText = '🌙';
  }
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  const html = document.documentElement;
  const icon = document.getElementById('themeIcon');

  if (event.matches) {
    html.classList.add('dark');
    icon.innerText = '☀️';
  } else {
    html.classList.remove('dark');
    icon.innerText = '🌙';
  }
  if (window.myChart) calculate();
});

function toggleTheme() {
  const html = document.documentElement;
  const icon = document.getElementById('themeIcon');

  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    icon.innerText = '🌙';
  } else {
    html.classList.add('dark');
    icon.innerText = '☀️';
  }
  if (window.myChart) calculate();
}
