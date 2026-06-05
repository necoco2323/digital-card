const checkbox = document.getElementById("themeToggle");

//▼テーマ設定取得
function getInitTheme() {
  // localStorageデータ（前回の保存設定）
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) return savedTheme;

  // OSの設定
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

//▼テーマ適用
function applyTheme(theme) {
  document.documentElement.setAttribute("theme", theme);
  checkbox.checked = (theme === "dark") ? true : false;
}

//▼初期読み込み
applyTheme(getInitTheme());

//▼トグル操作時
checkbox.addEventListener("change", () => {
  const next = checkbox.checked ? "dark" : "light";
  applyTheme(next);
  localStorage.setItem("theme", next);
});
