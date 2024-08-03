function setTheme(mode) {
  localStorage.setItem('theme-storage', mode);
  document.documentElement.style.setProperty('color-scheme', mode);
  if (mode === 'dark') {
    document.getElementById("dark-mode-toggle").innerHTML = "<i data-feather=\"sun\"></i>";
  } else if (mode === 'light') {
    document.getElementById("dark-mode-toggle").innerHTML = "<i data-feather=\"moon\"></i>";
  }
  feather.replace();
}

function toggleTheme() {
  if (localStorage.getItem('theme-storage') === 'light') {
    setTheme('dark');
  } else if (localStorage.getItem('theme-storage') === 'dark') {
    setTheme('light');
  }
}

var savedTheme = localStorage.getItem('theme-storage');
if (savedTheme) {
  setTheme(savedTheme);
}

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (event) => {
    if (event.matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  });
