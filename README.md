````markdown
The Galactic Center — Intégration Frontend
Projet d’intégration frontend réalisé avec Vite, TypeScript, SCSS et Swiper.js..
L’objectif est de reproduire une interface moderne comprenant un header sticky, un carrousel responsive, et un footer structuré en grille.

Ce projet sert également de démonstration technique pour tester un workflow moderne (Vite, GitHub Pages, architecture SCSS modulaire).

🚀 Fonctionnalités
Architecture SCSS modulaire (settings, mixins, functions, components, layout)

Carrousel Swiper.js responsive

Header sticky

Footer en grille avec colonne élargie

Système de breakpoints Sass moderne (@use + sass:map)

Build optimisé via Vite

Déploiement GitHub Pages

🧰 Installation
Assurez-vous d’avoir Node.js installé (version 18+ recommandée).

Clonez le projet :

```bash
git clone https://github.com/sbaudrier/test-fnac.git (github.com in Bing)
cd test-fnac
```
````

Installez les dépendances :

```bash
npm install
```

💻 Lancer le projet en local
Vite propose un serveur de développement ultra rapide :

```bash
npm run dev
```

Le projet sera accessible à une URL du type :

```text
http://localhost:5173
```

🏗️ Build de production
Pour générer les fichiers optimisés :

```bash
npm run build
```

Le build sera disponible dans le dossier :

```text
dist/
```

🌐 Déploiement GitHub Pages
Le projet utilise Vite, donc il faut définir une base spécifique dans vite.config.js :

```js
export default {
  base: '/test-fnac/'
}
```

Le contenu du dossier dist/ est copié dans un dossier docs/, qui sert de source pour GitHub Pages.

Étapes :

```bash
npm run build
rm -rf docs/*
cp -r dist/* docs/
git add .
git commit -m "deploy"
git push
```

GitHub Pages est configuré ainsi :

Branch : main

Folder : /docs

Le site est accessible à :

```text
https://sbaudrier.github.io/test-fnac/
```

🗂️ Structure du projet

```text
src/
scss/
base/
_settings.scss
_mixins.scss
_functions.scss
components/
layout/
main.scss
ts/
main.ts
index.html
vite.config.js
```

🛠️ Technologies utilisées
Vite

TypeScript

SCSS

Swiper.js

GitHub Pages

📄 Licence
Projet personnel — libre d’utilisation pour démonstration ou inspiration.

```

```
