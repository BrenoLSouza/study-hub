# Study Hub · Breno Lopes Souza

> Portfólio acadêmico e profissional | Engenharia de Software · 1º semestre

O **Study Hub** é um índice central e evolutivo para organizar estudos, projetos, certificados, documentação e trajetória profissional. O site público está inteiramente em [`docs/`](docs/), pronto para **GitHub Pages**.

## 🌐 Site

Depois da publicação: `https://BrenoLSouza.github.io/study-hub/` (substitua `BrenoLSouza`).

## 🧭 Arquitetura

- **Perfil**: [`perfil/`](perfil/) — apresentação, interesses, objetivos e contatos.
- **Disciplinas**: [`disciplinas/`](disciplinas/) — seis áreas, cada uma com `conteudos/`, `anotacoes/`, `exercicios/`, `projetos/` e `recursos/`.
- **Projetos**: [`projetos/`](projetos/) — acadêmicos, pessoais, profissionais e em desenvolvimento.
- **Certificados**: [`certificados/`](certificados/) — evidências por área, sem declarações não verificadas.
- **Recursos**: [`recursos/`](recursos/) — bibliografia e links úteis.
- **Roadmap**: [`ROADMAP.md`](ROADMAP.md) — próximos passos e evolução.
- **Website**: [`docs/`](docs/) — arquivos publicados pelo GitHub Pages.

O PDF de arquitetura sugere repositórios independentes por disciplina. **Nesta versão, as disciplinas estão organizadas em um único repositório para permitir começar imediatamente**. Posteriormente, cada pasta pode migrar para um repositório `study-*`, com links mantidos neste índice.

## 🛠 Tecnologias

HTML5, CSS3, JavaScript, Markdown, Git e GitHub Pages. Sem framework, instalação ou build obrigatório.

## 🚀 Executar localmente

Abra a pasta no VS Code e execute `docs/index.html` com a extensão Live Server, ou use:

```bash
python -m http.server 8000 --directory docs
```

Acesse `http://localhost:8000`.

## 📤 Publicar

1. Edite `docs/assets/js/config.js` com seu usuário GitHub e seus links.
2. No terminal do VS Code: `git init`, `git add .`, `git commit -m "feat: estrutura inicial do Study Hub"`.
3. Crie no GitHub um repositório **público** chamado `study-hub` (sem arquivos iniciais).
4. Execute `git branch -M main`, `git remote add origin https://github.com/BrenoLSouza/study-hub.git` e `git push -u origin main`.
5. No GitHub: **Settings → Pages → Deploy from a branch → main → /docs → Save**.
6. Confira o site em `https://BrenoLSouza.github.io/study-hub/`.

Veja o guia detalhado em [`GUIA-GIT-GITHUB-PAGES.md`](GUIA-GIT-GITHUB-PAGES.md).

## 📚 Documentação de projetos

Cada projeto usa cinco etapas: **Objetivo → Solução → Desenvolvimento → Testes → Resultados**, seguindo o modelo em [`templates/README-PROJETO.md`](templates/README-PROJETO.md).

## 🎯 Objetivos profissionais

- **Curto prazo:** conquistar um estágio em tecnologia.
- **Médio prazo:** atuar na área de tecnologia de um banco.
- **Longo prazo:** trabalhar com cibersegurança fora do Brasil.

## 👤 Autor

**Breno Lopes Souza** · Engenharia de Software

- LinkedIn: https://www.linkedin.com/in/breno-lopes-67b872436/
- E-mail: breno.lopes3263@gmail.com

> **Estado:** estrutura inicial pronta para personalização. Os diretórios de estudo contêm modelos e espaços para atividades reais; não representam trabalhos já concluídos.
