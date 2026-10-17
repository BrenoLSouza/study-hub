# Guia Git + GitHub + GitHub Pages (publicação via `/docs`)

## 1. Preparar no VS Code

Extraia o ZIP. Abra a pasta `study-hub-profissional` com **File → Open Folder**. Edite `docs/assets/js/config.js` e troque `SEU-USUARIO` pelo seu usuário GitHub.

Teste com `python -m http.server 8000 --directory docs` e abra `http://localhost:8000`.

## 2. Primeiro commit

```bash
git init
git add .
git commit -m "feat: cria estrutura e site do Study Hub"
git branch -M main
```

Se o Git solicitar identidade, configure:

```bash
git config --global user.name "Breno Lopes Souza"
git config --global user.email "SEU-EMAIL-DE-COMMIT"
```

## 3. Criar e conectar o repositório

Crie o repositório público `study-hub` no GitHub, **sem marcar a criação automática de README**, e execute:

```bash
git remote add origin https://github.com/SEU-USUARIO/study-hub.git
git push -u origin main
```

Se o repositório remoto **já tem arquivos ou commits**, não execute estes comandos às cegas. Faça backup e clone o repositório existente, integre os arquivos localmente, resolva conflitos se houver e só então faça push. Não use `--force`.

## 4. GitHub Pages — usar `/docs`

1. Repositório → **Settings** → **Pages**.
2. Em **Build and deployment**, escolha **Deploy from a branch**.
3. Branch **main**, pasta **/docs**, clique em **Save**.
4. Aguarde o deploy. A URL usual será `https://SEU-USUARIO.github.io/study-hub/`.
5. Teste o site em janela anônima e no celular.

O site usa caminhos relativos, então funciona tanto em `/study-hub/` quanto em domínio personalizado.

## 5. Atualizações

```bash
git status
git add .
git commit -m "docs: atualiza conteúdos e projetos"
git push
```

## 6. Tag da versão 1.0

Depois de conferir a primeira publicação:

```bash
git tag -a v1.0.0 -m "Primeira versão publicada do Study Hub"
git push origin v1.0.0
```

## 7. Domínio personalizado (opcional)

O GitHub Pages gratuito já atende ao trabalho. Se registrar um domínio, configure o DNS no registrador e preencha **Settings → Pages → Custom domain**. Para `www.exemplo.com.br`, o CNAME aponta para `SEU-USUARIO.github.io` (sem `/study-hub`). Ative **Enforce HTTPS** após a validação. Não crie `docs/CNAME` antes de ter o domínio registrado e configurado.

## 8. LinkedIn e apresentação

Adicione o link público em **Destaques** do LinkedIn. Use `apresentacao/ROTEIRO-5-MINUTOS.md` e confira `CHECKLIST-ENTREGA.md`.
