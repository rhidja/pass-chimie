# PASS Médecine — Chimie

Application web d’apprentissage de la chimie du PASS : **33 cours**, **420 QCM corrigés** (dont 107 à réponses multiples, corrigés proposition par proposition) et des **examens blancs chronométrés** de 60 questions.

Site 100 % statique (HTML, CSS, JavaScript natif), sans dépendance ni étape de build. Il fonctionne hors ligne, y compris ouvert directement depuis le disque.

> **Examen blanc : simulation interne, format non officiel.** Le nombre de questions, la durée et le barème de l’épreuve de chimie dépendent de chaque université. Réfère-toi toujours aux modalités de contrôle des connaissances de ta faculté. La note affichée est une estimation linéaire sur 20 et le seuil de 10/20 est indicatif : le PASS est un concours classant.

## Utilisation

Double-clique sur `index.html` : l’application s’ouvre dans le navigateur, même hors ligne.

| Onglet | Contenu |
|---|---|
| **Programme** | Les 40 objectifs, avec leurs notions, les modules de cours liés et l’état de chacun (À découvrir, En cours, Maîtrisé). On y trouve aussi la case « Je maîtrise » et un bouton « S’entraîner » qui filtre l’entraînement sur l’objectif. |
| **Cours** | 33 modules regroupés par domaine. Chaque module donne l’essentiel, les formules, un exemple résolu, les pièges classiques et les points à retenir. |
| **Entraînement** | Questions mélangées, avec des filtres : Toutes, Jamais répondues, Erreurs à revoir, par domaine ou par objectif. Raccourcis clavier : touches A à E pour répondre, Entrée pour valider ou passer à la question suivante. |
| **Examen blanc** | 60 questions en 90 minutes, tirées selon la pondération des domaines. On peut marquer une question et la grille permet de naviguer entre les questions. La correction détaillée s’affiche à la fin. Les 20 derniers examens sont conservés. |
| **Progression** | Précision par domaine, priorités de révision et historique des examens. |

La progression est enregistrée dans le navigateur (`localStorage`, clé `pass-chimie-v1`). Le bouton « Réinitialiser » l’efface.

## Domaines

| Domaine | Pondération | Cours | Questions | dont multiples | Questions par examen |
|---|---|---|---|---|---|
| 1. Structure de la matière et atome | 10 % | 3 | 42 | 10 | 6 |
| 2. Liaisons chimiques et géométrie moléculaire | 10 % | 3 | 42 | 10 | 6 |
| 3. Quantités de matière et stœchiométrie | 10 % | 3 | 42 | 10 | 6 |
| 4. Thermodynamique chimique | 10 % | 3 | 42 | 10 | 6 |
| 5. Équilibres chimiques et acido-basiques | 15 % | 5 | 63 | 16 | 9 |
| 6. Oxydo-réduction et électrochimie | 10 % | 3 | 42 | 9 | 6 |
| 7. Chimie organique | 20 % | 6 | 84 | 22 | 12 |
| 8. Chimie du vivant et molécules biologiques | 10 % | 5 | 42 | 14 | 6 |
| 9. Cinétique chimique et applications | 5 % | 2 | 21 | 6 | 3 |

## Couverture du programme

Les objectifs reprennent le programme détaillé fourni, rangé dans les 9 domaines. La section « Méthodes de chimie utiles au PASS » devient l’objectif 3.4. Les sections 12 et 13 (méthode d’entraînement, examens blancs) sont des consignes pédagogiques : elles sont intégrées au fonctionnement de l’application, pas au programme.

| Objectif | Intitulé | Module(s) | Questions |
|---|---|---|---|
| 1.1 | Atome | 1 | 15 |
| 1.2 | Configuration électronique | 2 | 13 |
| 1.3 | Classification périodique | 3 | 14 |
| 2.1 | Liaisons | 4 | 11 |
| 2.2 | Représentation des molécules | 4 | 8 |
| 2.3 | Géométrie moléculaire | 5 | 13 |
| 2.4 | Interactions | 6 | 10 |
| 3.1 | Mole | 7 | 11 |
| 3.2 | Réactions chimiques | 8 | 12 |
| 3.3 | Solutions | 9 | 10 |
| 3.4 | Méthodes de chimie utiles au PASS | 7, 9 | 9 |
| 4.1 | Notions fondamentales | 10 | 8 |
| 4.2 | Énergie | 10 | 10 |
| 4.3 | Réactions chimiques | 11 | 12 |
| 4.4 | Spontanéité | 12 | 12 |
| 5.1 | Équilibre | 13 | 10 |
| 5.2 | Principe de Le Châtelier | 13 | 8 |
| 5.3 | Acides et bases | 14 | 9 |
| 5.4 | pH | 14 | 10 |
| 5.5 | Acides et bases faibles | 15 | 10 |
| 5.6 | Solutions tampons | 16 | 8 |
| 5.7 | Dosages | 17 | 8 |
| 6.1 | Réactions redox | 18 | 10 |
| 6.2 | Nombres d’oxydation | 18 | 9 |
| 6.3 | Équilibrage | 19 | 10 |
| 6.4 | Électrochimie | 20 | 13 |
| 7.1 | Structure du carbone | 21 | 12 |
| 7.2 | Fonctions organiques | 22 | 18 |
| 7.3 | Nomenclature | 23 | 14 |
| 7.4 | Isomérie | 24, 25 | 20 |
| 7.5 | Réactivité | 26 | 20 |
| 8.1 | Acides aminés | 27 | 10 |
| 8.2 | Peptides et protéines | 28 | 8 |
| 8.3 | Glucides | 29 | 9 |
| 8.4 | Lipides | 30 | 8 |
| 8.5 | Nucléotides | 31 | 7 |
| 9.1 | Vitesse de réaction | 32 | 5 |
| 9.2 | Ordre des réactions | 32 | 5 |
| 9.3 | Demi-vie | 32 | 5 |
| 9.4 | Catalyse | 33 | 6 |

La vérification automatique (`node tools/verifier.js`) confirme que chaque notion du programme apparaît dans un cours ou une question de son objectif.

## Ajouter du contenu

Les données sont dans `data/`, chargées par des balises `<script>` avant `app.js`. Utilise des guillemets doubles et l’apostrophe typographique ’.

```js
// data/programme.js : un objectif
{ id: "5.4", d: 5, title: "pH", notions: ["Définition", "Calcul du pH", "pOH", "Produit ionique de l’eau"] }

// data/courses.js : un module (2 à 5 sections ; HTML autorisé : <b>, <i>, <sub>, <sup>, <br>)
{ d: 5, o: ["5.3", "5.4"], title: "Acides, bases et pH", summary: "Une phrase.",
  sections: [ { h: "Sous-titre", p: "Paragraphe.", points: ["<b>Notion</b> : définition."] } ] }

// data/questions.js : question à une réponse (4 propositions)
{ d: 5, o: "5.4", q: "Énoncé ?", a: ["A", "B", "C", "D"], c: 0, e: "Explication." }

// question à réponses multiples (5 propositions, nombre indiqué dans l’énoncé)
// x : justification de chaque proposition, affichée en Vrai/Faux après la réponse
{ d: 5, o: "5.4", q: "Énoncé ? (Choisissez 2 réponses)", a: ["…", "…", "…", "…", "…"],
  c: [0, 2], x: ["…", "…", "…", "…", "…"], e: "Règle à retenir." }
```

- Le domaine `d` doit être celui des objectifs `o`.
- Le texte des questions est échappé : n’y mets pas de HTML.
- L’identifiant d’une question est calculé à partir de son énoncé. On peut ajouter ou réordonner des questions sans perdre la progression, mais modifier un énoncé réinitialise le suivi de cette question.
- Le nombre de questions par examen se règle avec `examCount` dans `data/domains.js`. La durée et le seuil se règlent dans l’objet `EXAM`, dans le même fichier.
- Après chaque modification, lance `node tools/verifier.js`. Le script contrôle les index, les doublons, la couverture du programme et compile chaque formule.

### Formules (LaTeX et KaTeX)

- Les formules s’écrivent en ligne entre `\\(` et `\\)` dans les chaînes JavaScript (barre oblique inverse doublée), par exemple `"\\(\\mathrm{pH} = -\\log[\\ce{H3O+}]\\)"`. On n’utilise pas `$$`.
- Les espèces et les équations chimiques s’écrivent avec l’extension mhchem : `\\ce{Cu^2+}`, `\\ce{SO4^2-}`, `\\ce{A + B <=> C}`, `\\ce{2 H2 + O2 -> 2 H2O}`.
- Les nombres suivent les conventions françaises : virgule décimale `0{,}5`, pourcentage `5\\,\\%`. Les nombres isolés restent en texte courant.
- Dans les cours (texte HTML), écris `\\lt` et `\\gt` au lieu de `<` et `>` dans une formule.
- KaTeX 0.16 et ses polices sont copiés dans `vendor/katex/`. Aucun CDN n’est utilisé.

## Installer l’application (PWA)

L’installation nécessite une adresse **https** (ou `localhost`). En `file://`, l’application fonctionne normalement mais ne s’installe pas.

- **Android (Chrome)** : ouvre le site, puis touche le bouton « Installer l’app » ou choisis « Ajouter à l’écran d’accueil » dans le menu ⋮.
- **iPhone / iPad (Safari)** : bouton Partager, puis « Sur l’écran d’accueil ».
- **Ordinateur (Chrome, Edge)** : bouton « Installer l’app » ou icône d’installation dans la barre d’adresse.

Une fois installée, l’application fonctionne hors ligne, formules comprises. Seule la police Google n’est pas disponible au tout premier lancement sans connexion ; une police de repli la remplace.

### Publier en ligne

Copie tout le dossier, `tools/` excepté, sur un hébergement statique en https : GitHub Pages (dépôt, puis Settings → Pages), Netlify (glisser-déposer du dossier), Cloudflare Pages, etc. Tous les chemins sont relatifs : un sous-dossier convient.

### Tester localement

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

### Ajouter ou supprimer un fichier

Le service worker (`sw.js`) met en cache la liste `ASSETS`. Si tu ajoutes, renommes ou supprimes un fichier de l’application :

1. mets à jour `ASSETS` dans `sw.js` ;
2. incrémente le nom du cache (`pass-chimie-v1` → `pass-chimie-v2`) pour que les anciens fichiers soient purgés.

Une simple modification du contenu d’un fichier existant ne nécessite rien : les fichiers sont servis « réseau d’abord » et la nouvelle version apparaît au prochain chargement en ligne.

Les icônes PNG se régénèrent à partir de `icons/icon.svg` avec `python3 tools/generer-icones.py` (nécessite Playwright).

## Structure

```
index.html  style.css  app.js
data/domains.js  data/programme.js  data/courses.js  data/questions.js
vendor/katex/          KaTeX, mhchem, auto-render, polices, licence
manifest.webmanifest  sw.js  icons/
tools/verifier.js      vérification des données (Node)
tools/generer-icones.py
```
