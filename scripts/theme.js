themeMap = {
  light: "dark",
  dark: "light",
};

theme = localStorage.getItem('theme') || (tmp = Object.keys(themeMap)[0],
  localStorage.setItem('theme', tmp),
  tmp);
bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
  current = localStorage.getItem('theme');
  next = themeMap[current];

  bodyClass.replace(current, next);
  localStorage.setItem('theme', next);
}

// theme button
document.getElementById('themeButton').onclick = toggleTheme;

// document.getElementById('header').onclick = toggleTheme;