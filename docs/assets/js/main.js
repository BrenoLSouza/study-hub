(() => {
  "use strict";
  const cfg = window.STUDY_HUB_CONFIG || {};
  const username = String(cfg.githubUsername || "SEU-USUARIO").trim();
  const configured = username && username !== "SEU-USUARIO";
  const repo = String(cfg.repository || "study-hub");
  const github = configured ? `https://github.com/${encodeURIComponent(username)}/${encodeURIComponent(repo)}` : "https://github.com/";
  document.querySelectorAll("[data-github]").forEach(a => { a.href = github; a.target = "_blank"; a.rel = "noopener noreferrer"; });
  document.querySelectorAll("[data-repo-path]").forEach(a => {
    const path = a.getAttribute("data-repo-path").split("/").filter(Boolean).map(encodeURIComponent).join("/");
    a.href = configured ? `${github}/tree/main/${path}` : "https://github.com/";
    a.target = "_blank"; a.rel = "noopener noreferrer";
  });
  document.querySelectorAll("[data-linkedin]").forEach(a => a.href = cfg.linkedin || "https://www.linkedin.com/");
  document.querySelectorAll("[data-email]").forEach(a => a.href = `mailto:${cfg.email || ""}`);
  const menu = document.getElementById("menu"), btn = document.getElementById("menuBtn");
  btn?.addEventListener("click", () => { const open = menu.classList.toggle("open"); btn.setAttribute("aria-expanded", String(open)); btn.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu"); btn.textContent = open ? "✕" : "☰"; });
  menu?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => { menu.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); btn.setAttribute("aria-label", "Abrir menu"); btn.textContent = "☰"; }));
  document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => {
    const value = button.dataset.filter;
    document.querySelectorAll(".filter").forEach(b => { const active = b === button; b.classList.toggle("active", active); b.setAttribute("aria-pressed", String(active)); });
    document.querySelectorAll(".subject").forEach(card => { card.hidden = value !== "all" && card.dataset.category !== value; });
  }));
  const themeBtn = document.getElementById("themeBtn");
  themeBtn?.addEventListener("click", () => { const light = document.body.classList.toggle("light"); themeBtn.setAttribute("aria-label", light ? "Ativar tema escuro" : "Ativar tema claro"); themeBtn.textContent = light ? "☾" : "◐"; });
  document.getElementById("year").textContent = new Date().getFullYear();
})();
