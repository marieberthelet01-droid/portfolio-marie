# Portfolio Marie Berthelet — version JavaScript + design

Le projet contient maintenant :
- un design modernisé,
- un dossier `assets/` pour les visuels,
- un contenu piloté par `script.js`.

## Dossier ajouté

- `assets/avatar.svg`
- `assets/project-bank.svg`
- `assets/project-cancel.svg`
- `assets/project-landing.svg`
- `assets/project-daxium.svg`

Tu peux remplacer ces fichiers par tes vraies images (mêmes noms ou modifier `script.js`).

## Lancer le site

```bash
npm install
npm run dev
```

Puis ouvre l'URL affichée (souvent `http://localhost:5173`).

## Modifier le contenu

Dans `script.js` :
- `profile.name`, `profile.role`, `profile.title`, `profile.description`
- `profile.heroImage`
- `profile.socialLinks`
- `profile.projects` (titre, résumé, tags, image)

## Push GitHub

```bash
git add .
git commit -m "Mise à jour design portfolio"
git push
```