# Prompt : générer une application d'apprentissage

Ce prompt sert à créer une application du même genre qu'**AWS Ready** ou **PASS Maths & Biostats** ou **Chimie PASS Médecine**pour un autre sujet : une autre certification (Azure, GCP, Kubernetes, Scrum…), un langage, une matière scolaire, le code de la route, etc.

**Utilisation :**

1. Crée un dossier vide et ouvre-le avec Claude Code.
2. Remplis la section « Paramètres » ci-dessous.
3. *(Optionnel mais recommandé)* Fournis ton **programme détaillé** d'une de ces deux façons :
   - colle-le dans la section « Programme détaillé » à la fin du prompt ;
   - ou dépose-le dans le dossier (ex. `programme.md`, `.txt`, ou le PDF du guide d'examen officiel) et indique son nom dans les paramètres.
4. Copie tout ce qui se trouve entre les deux lignes `=====` et colle-le dans Claude Code.

Le programme détaillé peut être le plan officiel de l'examen, le syllabus d'un cours, ou ta propre liste de notions. Tant qu'il est découpé en domaines, puis en objectifs, avec les notions de chaque objectif, l'IA s'en sert comme référence unique. Le format conseillé est décrit à la fin du prompt, mais un copier-coller brut fonctionne aussi.

Sans programme, l'IA en rédige un et te le soumet avant de produire le contenu. Pour une certification officielle sans programme, indique au moins ses domaines et leur pondération tels qu'ils figurent dans le guide d'examen. Si tu ne les connais pas, laisse le champ vide : l'IA les proposera et te demandera de les valider.

=====

Crée dans ce dossier une application web d'apprentissage selon le cahier des charges suivant.

## Paramètres

* **Sujet** : Chimie — PASS Médecine

* **Examen ou objectif visé** : Réussir le PASS Médecine et maîtriser le programme de chimie exigé pour les épreuves de PASS, avec une préparation spécifique aux QCM et exercices de type concours.

* **Nom de l'application** : PASS Médecine — Chimie

* **Langue du contenu et de l'interface** : français

* **Public** : Étudiante en PASS Médecine, débutante ou ayant un niveau lycée en chimie, avec progression vers le niveau exigé en PASS.

* **Domaines et pondération** :

  1. Structure de la matière et atome — 10 %
  2. Liaisons chimiques et géométrie moléculaire — 10 %
  3. Quantités de matière et stœchiométrie — 10 %
  4. Thermodynamique chimique — 10 %
  5. Équilibres chimiques et acido-basiques — 15 %
  6. Oxydo-réduction et électrochimie — 10 %
  7. Chimie organique — 20 %
  8. Chimie du vivant et molécules biologiques — 10 %
  9. Cinétique chimique et applications — 5 %

* **Format de l'examen réel** : QCM et/ou exercices selon les modalités de l'université. Ne jamais inventer le nombre de questions, la durée ou le barème. Utiliser les modalités officielles de l'université concernée lorsqu'elles sont disponibles.

* **Volume visé** : 30 à 35 cours progressifs + au minimum 400 QCM/exercices corrigés + séries d'entraînement par chapitre + 5 à 10 examens blancs chronométrés.

* **Couleur principale** : violet / bleu scientifique

* **Programme détaillé** : voir la section « Programme détaillé ».

* **Respect du programme** : strict. Le programme officiel de l'université de PASS concernée est prioritaire. Toute notion hors programme doit être clairement signalée comme « complément » et ne doit jamais être présentée comme exigée à l'examen.


## Avant de coder

1. **Si un programme détaillé est fourni**, lis-le en entier. S'il s'agit d'un fichier, lis toutes ses pages.
   - Il fait foi : les domaines, pondérations, objectifs et notions viennent de lui, et remplacent les paramètres « Domaines et pondération » s'ils se contredisent.
   - Garde les intitulés et la numérotation du programme. N'en reformule que l'orthographe ou la mise en forme.
   - S'il est ambigu, incomplet ou incohérent (pondérations dont la somme ne fait pas 100 %, objectif sans notion, domaine vide), liste-moi les problèmes et propose une correction avant de continuer.
2. **Si aucun programme n'est fourni**, rédige-en un au même format, réaliste et fidèle à l'examen visé, et soumets-le-moi.
3. Si d'autres paramètres sont vides ou imprécis (format d'examen, volume), propose des valeurs réalistes.
4. Présente ensuite un **plan de couverture** et attends ma validation avant de produire le contenu. Le plan prend la forme d'un tableau avec une ligne par objectif : identifiant, intitulé, module(s) de cours qui le traitent, nombre de questions prévues.
   - Le nombre de questions par domaine est proportionnel à la pondération.
   - Au sein d'un domaine, il est réparti entre les objectifs selon le nombre et l'importance de leurs notions.

## Contraintes techniques

- Site 100 % statique : HTML, CSS et JavaScript natif. Aucun framework, aucun build, aucune dépendance npm. On l'ouvre en double-cliquant sur `index.html`, y compris en `file://`.
- Seule ressource externe chargée depuis Internet : une police Google Fonts, avec des polices de repli.
- Si « Formules mathématiques » vaut oui : KaTeX (version 0.16 ou plus récente) est **copié dans `vendor/katex/`** (`katex.min.js`, `katex.min.css`, `auto-render.min.js`, polices `.woff2`, `LICENSE`), jamais chargé depuis un CDN, pour que l'application reste utilisable hors ligne et en `file://`. C'est la seule bibliothèque tierce autorisée.
- Si « Application installable » vaut oui : voir la section « Application installable (PWA) ». L'application doit continuer à fonctionner à l'identique en `file://`, sans service worker.
- Code lisible et commenté avec parcimonie, pas de code minifié.
- La progression est sauvegardée dans `localStorage` sous une clé versionnée (ex. `nom-app-v1`). Chaque accès doit être entouré d'un `try/catch` : l'application doit fonctionner même si le stockage est indisponible.
- Tout texte venant des données et affiché dans une question doit être échappé avant insertion en HTML.

## Structure des fichiers

```
index.html
style.css
app.js              ← logique uniquement, aucun contenu pédagogique
data/domains.js     ← domaines
data/programme.js   ← objectifs du programme détaillé
data/courses.js     ← cours
data/questions.js   ← banque de questions
README.md
vendor/katex/       ← si formules : KaTeX et ses polices
manifest.webmanifest, sw.js, icons/   ← si PWA
```

Les fichiers de `data/` sont chargés par des balises `<script>` classiques, avant `app.js`, et déclarent des constantes globales. Utilise des chaînes entre guillemets doubles et l'apostrophe typographique ’ dans les textes, pour éviter les problèmes d'échappement.

### Formats de données

```js
// data/domains.js
// examCount : nombre de questions tirées dans ce domaine pour un examen blanc.
const DOMAINS = [
  { id: 1, name: "Nom du domaine", weight: 25, examCount: 11 }
];

// data/programme.js
// Un objectif par entrée, avec l'identifiant et l'intitulé du programme.
// notions : notions à maîtriser, reprises du programme.
const OBJECTIVES = [
  { id: "1.1", d: 1, title: "Intitulé de l’objectif", notions: ["Notion A", "Notion B"] }
];

// data/courses.js
// d = id du domaine, o = objectifs traités par le module.
// Les textes de cours peuvent contenir du <b> pour les notions clés.
const COURSES = [
  {
    d: 1,
    o: ["1.1", "1.2"],
    title: "Titre du module",
    summary: "Une phrase de résumé.",
    sections: [
      { h: "Sous-titre", p: "Paragraphe explicatif." },
      { h: "Points clés", points: ["<b>Notion</b> : définition.", "…"] }
    ]
  }
];

// data/questions.js
// o = objectif évalué par la question.
// c = index de la bonne réponse, ou tableau d'index pour une question à réponses multiples.
const QUESTIONS = [
  { d: 1, o: "1.1", q: "Énoncé ?", a: ["A", "B", "C", "D"], c: 2, e: "Explication." },
  { d: 2, o: "2.3", q: "Énoncé ? (Choisissez 2 réponses)", a: ["A", "B", "C", "D", "E"], c: [0, 3], e: "Explication." }
];
```

Le domaine d'un cours ou d'une question doit correspondre au domaine de ses objectifs. En mode « compléments autorisés », une section de cours hors programme porte `extra: true` et s'affiche avec une étiquette « Hors programme ».

L'identifiant de chaque question est calculé dans `app.js` par un hachage de son énoncé. Ajouter ou réordonner des questions ne casse donc pas la progression enregistrée.

### Formules mathématiques (si activées)

- Toute formule, dans les cours, le programme, les énoncés, les réponses et les explications, s'écrit en LaTeX entre `\\(` et `\\)` dans les chaînes JavaScript (barre oblique inverse doublée). Pas d'affichage en bloc `$$` : uniquement des formules en ligne.
  ```js
  { d: 4, o: "4.2", q: "Que vaut \\(P(A \\mid B)\\) si \\(P(A \\cap B) = 0{,}12\\) ?", … }
  ```
- Conventions françaises : virgule décimale `0{,}5` (sans accolades, LaTeX ajoute une espace), pourcentage dans une formule `5\\,\\%`. Les nombres et pourcentages isolés restent en texte courant.
- Notations : contraire `\\overline{A}`, moyenne `\\bar{x}`, indices et exposants en LaTeX. Pas de caractères Unicode combinants (M̄) ni de surlignement CSS pour simuler une notation.
- Dans `app.js`, une fonction `math(el)` appelle `renderMathInElement` (délimiteurs `\\(` `\\)`, `throwOnError: false`) après chaque rendu d'une vue ou d'une question. Elle ne fait rien si KaTeX n'est pas chargé. Une formule invalide s'affiche en rouge au lieu de bloquer la page.
- L'échappement HTML des textes se fait avant le rendu KaTeX ; il ne doit pas altérer les délimiteurs ni les commandes LaTeX.
- Les formules longues ne doivent pas provoquer de défilement horizontal de la page sur mobile.

## Exigences sur le contenu

- Contenu exact et à jour. N'invente jamais de service, de commande, de chiffre ou de règle. En cas de doute sur une information, ne l'utilise pas plutôt que de risquer une erreur.
- Si le format officiel de l'examen (nombre de questions, durée, barème) n'est pas connu avec certitude, l'examen blanc est présenté partout comme une **simulation interne** (« format non officiel »), avec un renvoi aux modalités officielles.
- **Cours** : chaque module a 2 à 5 sections. On y trouve des définitions claires, des exemples concrets, les pièges classiques et les distinctions souvent testées (ex. « A vs B »).
- **Questions** :
  - Respecte le style de l'examen réel : questions de connaissance directe, mais surtout des mises en situation (« Une entreprise veut… Quelle solution choisir ? »).
  - 4 réponses par question, 5 pour les questions à réponses multiples. Les mauvaises réponses doivent être plausibles et réelles, pas absurdes.
  - Environ 8 % de questions à réponses multiples, avec « (Choisissez N réponses) » dans l'énoncé.
  - L'explication dit pourquoi la bonne réponse est juste et, si utile, pourquoi un piège fréquent est faux. Pour une question de calcul, elle détaille le calcul.
  - Aucune mauvaise réponse ne doit être elle aussi juste : pour chaque question de calcul, refais le calcul et vérifie que seule la bonne réponse donne le résultat (attention aux valeurs équivalentes écrites autrement : 0,5 et 1/2, 10⁻² et 0,01).
  - Aucun doublon d'énoncé. Chaque domaine contient au moins 2 fois `examCount` questions, pour que les examens blancs varient.
- **Couverture du programme** :
  - chaque objectif est traité par au moins un module de cours ;
  - chaque objectif est évalué par au moins 3 questions, davantage pour les objectifs riches ;
  - chaque notion listée dans le programme est expliquée dans un cours et testée par au moins une question ;
  - en mode « strict », aucune question ne porte sur une notion absente du programme.

## Fonctionnalités

Navigation par onglets : **Programme**, **Cours**, **Entraînement**, **Examen blanc**, **Progression**. Un bouton « Réinitialiser » dans l'en-tête efface toute la progression, après confirmation. Si l'application est installable, un bouton « Installer l’app » apparaît à côté (voir plus bas).

### 1. Programme
- Le programme complet, par domaine (numéro, nom, pondération), puis par objectif (identifiant, intitulé, liste des notions).
- Pour chaque objectif :
  - les modules de cours qui le traitent, sous forme de liens qui ouvrent le module ;
  - une pastille d'état : « À découvrir » (rien fait), « En cours » (cours lu ou questions commencées), « Maîtrisé » (au moins 80 % de bonnes réponses sur au moins 3 questions de l'objectif) ;
  - la précision obtenue et le nombre de questions vues sur le total ;
  - un bouton « S’entraîner » qui ouvre l'entraînement filtré sur cet objectif.
- En haut, une barre de progression globale : nombre d'objectifs maîtrisés sur le total.
- Pour une révision en autonomie, une case à cocher « Je maîtrise » par objectif, enregistrée, qui s'ajoute à l'état calculé.

### 2. Cours
- Modules regroupés par domaine, avec un en-tête indiquant le numéro, le nom et la pondération du domaine.
- Chaque carte a un numéro, un résumé, les identifiants des objectifs traités (ex. « 1.1 · 1.2 »), et le badge « LU » si le module a été ouvert.
- Vue détaillée d'un module :
  - en haut, un rappel des objectifs du programme couverts par le module ;
  - en bas, trois boutons : « ← Tous les cours », « S’entraîner sur ces objectifs » (qui ouvre l'entraînement filtré) et « Module suivant ».

### 3. Entraînement
- Trois compteurs : questions différentes répondues, précision, série de bonnes réponses en cours.
- Filtres avec leur nombre de questions : Toutes, Jamais répondues, Erreurs à revoir, puis un filtre par domaine. Un filtre par objectif est accessible depuis les onglets Programme et Cours, et s'affiche comme filtre actif avec un bouton pour le retirer.
- Chaque question affiche l'identifiant et l'intitulé de l'objectif évalué.
- Ordre des questions et des réponses mélangé. Les lettres A, B, C… suivent l'ordre affiché.
- **Question à une réponse** : le clic valide immédiatement.
- **Question à réponses multiples** : on sélectionne le nombre de réponses demandé, puis on clique sur « Valider ».
- Après la réponse :
  - bonnes réponses en vert, mauvaise réponse choisie en orange ;
  - encadré « Bonne réponse » ou « À revoir » avec la ou les lettres attendues et l'explication.
- Le résultat de chaque question (juste ou faux, dernière tentative) est enregistré.
- En fin de série, la liste est recalculée et mélangée à nouveau.
- Si « Erreurs à revoir » est vide, un message de félicitations s'affiche.
- Raccourcis clavier : touches A à E pour répondre, Entrée pour valider ou passer à la suite.

### 4. Examen blanc
*(Si aucun examen n'est visé, remplace-le par un « Défi » de 20 questions chronométré, sur le même principe.)*

- **Écran d'accueil** : règles de l'examen (nombre de questions, durée, répartition par domaine, seuil de réussite), bouton « Commencer », historique des examens passés.
- **Pendant l'examen** :
  - questions tirées selon `examCount` de chaque domaine, puis mélangées ;
  - chronomètre décroissant, qui devient orange sous 5 minutes ; l'examen se termine automatiquement à zéro ;
  - boutons Précédente et Suivante, et bouton « Marquer pour révision » ;
  - grille de numéros cliquables : répondue, marquée, question en cours ;
  - aucune correction affichée avant la fin ;
  - avant de terminer, une confirmation signale les questions sans réponse et les questions marquées ;
  - avertissement si on ferme l'onglet pendant l'examen.
- **Résultat** :
  - score sur l'échelle de l'examen réel (formule linéaire, présentée comme une estimation) ;
  - mention réussi ou non réussi ;
  - barres de résultat par domaine ;
  - liste des objectifs ratés (au moins une erreur), avec un lien vers le module de cours correspondant ;
  - liste repliable des erreurs, avec l'objectif évalué, les réponses choisies, la correction et l'explication.
- Les réponses données pendant l'examen alimentent aussi la progression et la liste « Erreurs à revoir ».
- Les 20 derniers examens sont enregistrés.

### 5. Progression
- Compteurs : objectifs maîtrisés, cours lus, questions vues, meilleur score d'examen blanc.
- Barres de précision par domaine : vertes à partir de 70 %, orange en dessous.
- Encadré « Priorité de révision » avec les 3 objectifs les plus faibles parmi ceux déjà travaillés, puis les objectifs jamais abordés. Chacun a un bouton pour s'entraîner dessus.
- Historique des examens (date, score, bonnes réponses, résultat).

### 6. Application installable (PWA)
*(Uniquement si « Application installable » vaut oui.)*

- `manifest.webmanifest` : `name`, `short_name` (12 caractères max.), `description`, `lang`, `id`, `start_url` et `scope` à `./` (chemins relatifs, pour fonctionner dans un sous-dossier), `display: standalone`, `background_color` et `theme_color` cohérents avec le design, catégories.
- Icônes dans `icons/` : `icon.svg` (favicon), `icon-192.png`, `icon-512.png`, `maskable-512.png` (motif dans la zone de sécurité centrale de 80 %), `apple-touch-icon.png` (180 px, fond opaque). Génère les PNG à partir du SVG avec un script (Python, ImageMagick ou Chromium sans interface).
- `index.html` : `theme-color`, métadonnées `apple-mobile-web-app-*`, `apple-touch-icon`. Le `<link rel="manifest">` n'est ajouté par script que hors `file://` (en `file://`, Chrome le refuse et affiche une erreur CORS).
- `sw.js` :
  - à l'installation, met en cache une liste `ASSETS` de **tous** les fichiers de l'application (HTML, CSS, JS, `data/`, icônes, KaTeX et chacune de ses polices) ;
  - fichiers de l'application en « réseau d'abord, cache en secours », pour qu'une mise à jour du contenu soit visible au prochain chargement en ligne ; navigation hors ligne vers `index.html` ;
  - polices Google en « cache d'abord », dans un cache séparé ;
  - à l'activation, suppression des anciens caches ; nom de cache versionné (`nom-app-v1`), à incrémenter quand la liste `ASSETS` change.
- `app.js` : enregistre `sw.js` seulement si `serviceWorker` est disponible et hors `file://`, sans erreur visible en cas d'échec. Intercepte `beforeinstallprompt` pour afficher le bouton « Installer l’app » (caché par défaut), le cache après installation (`appinstalled`).

## Design

- Style éditorial sobre :
  - fond clair légèrement texturé (grille de points), cartes blanches à bordure fine ;
  - une couleur principale, une couleur d'accent pour les erreurs et les alertes, une couleur vive pour la série en cours ;
  - titres dans une police géométrique (ex. Space Grotesk), texte dans une police lisible (ex. DM Sans).
- En-tête de page : petit sur-titre en capitales espacées, grand titre en trois temps (ex. « Apprendre. Répondre. Progresser. »), une phrase de présentation, et une ligne résumant le format de l'examen.
- Couleurs définies en variables CSS dans `:root`.
- Responsive jusqu'à 390 px de large :
  - aucun défilement horizontal de la page ;
  - onglets et filtres défilants sur une ligne ;
  - pendant l'examen, sur mobile, grille des questions sur une seule ligne défilante et chronomètre compact au-dessus de la question.
- Accessibilité : vrais `<button>` pour tout ce qui est cliquable, contrastes suffisants, attribut `lang` correct sur `<html>`.

## Vérifications avant de terminer

1. Charge les fichiers de `data/` avec Node et vérifie :
   - le nombre de cours et de questions par domaine ;
   - chaque domaine contient au moins `examCount` questions ;
   - chaque index de `c` est valide ;
   - aucun énoncé en double ;
   - chaque question a une explication ;
   - si formules : chaque `\(` a son `\)` dans chaque chaîne, et chaque formule se compile avec `katex.renderToString` (`throwOnError: true`) chargé depuis `vendor/katex/`.
2. Vérifie la couverture du programme avec un script Node et affiche un tableau (objectif, nombre de modules, nombre de questions) :
   - chaque `o` des cours et des questions existe dans `OBJECTIVES` ;
   - le domaine d'un cours ou d'une question correspond à celui de ses objectifs ;
   - chaque objectif a au moins un module et au moins 3 questions ;
   - aucun objectif du programme fourni ne manque dans `OBJECTIVES` ;
   - pour chaque notion, cherche sa présence (sans tenir compte de la casse) dans les textes des cours et des questions de son objectif ; liste les notions introuvables et vérifie-les une par une.
3. Lance `node --check app.js`.
4. Si Playwright ou Chromium est disponible, teste l'application dans un navigateur sans interface :
   - parcours chaque onglet ;
   - depuis l'onglet Programme, lance l'entraînement sur un objectif et vérifie que seules ses questions apparaissent ;
   - réponds à des questions simples et multiples ;
   - passe un examen jusqu'au résultat ;
   - vérifie qu'aucune erreur n'apparaît dans la console ;
   - si formules : vérifie qu'aucun élément `.katex-error` n'apparaît et qu'aucun délimiteur `\(` brut ne reste visible dans les cours, le programme et un échantillon de questions ;
   - si PWA : sers le dossier en local (`python3 -m http.server`), vérifie que le service worker s'active, que le manifeste est chargé sans erreur, que chaque fichier de `ASSETS` répond 200 et que chaque fichier de l'application figure dans `ASSETS` ; recharge ensuite la page hors ligne et vérifie qu'elle s'affiche avec ses formules ; vérifie aussi qu'en `file://` l'application fonctionne sans erreur ;
   - fais des captures d'écran en 1280 px et en 390 px, et vérifie que `document.documentElement.scrollWidth` ne dépasse pas la largeur de l'écran.
5. Corrige ce qui ne va pas.
6. Rédige le `README.md` : utilisation, tableau des domaines, tableau de couverture du programme, format des données pour ajouter du contenu. Si formules : conventions d'écriture LaTeX. Si PWA : installation sur Android, iPhone/iPad et ordinateur, publication sur un hébergement statique en https (GitHub Pages, Netlify…), test local, et procédure quand on ajoute ou supprime un fichier (mettre à jour `ASSETS` et incrémenter le cache).
7. Termine par :
   - un résumé de ce qui a été créé (volumes par domaine et par objectif) ;
   - les écarts éventuels avec le programme fourni ;
   - les points de contenu que je devrais vérifier moi-même.

## Programme détaillé

*(Colle ton programme ci-dessous, ou écris « voir fichier » si tu l'as déposé dans le dossier. Laisse vide si tu n'en as pas. Format conseillé, mais un copier-coller brut du programme officiel fonctionne aussi :)*

```
## 1. Structure de la matière

### Atome

* Constituants de l'atome
* Protons
* Neutrons
* Électrons
* Numéro atomique Z
* Nombre de masse A
* Isotopes
* Ions
* Masse atomique
* Masse molaire

### Configuration électronique

* Couches électroniques
* Sous-couches
* Orbitales atomiques
* Règles de remplissage
* Configuration électronique des éléments

### Classification périodique

* Organisation du tableau périodique
* Groupes et périodes
* Propriétés périodiques
* Rayon atomique
* Électronégativité
* Énergie d'ionisation

---

## 2. Liaisons chimiques et structure moléculaire

### Liaisons

* Liaison ionique
* Liaison covalente
* Liaison métallique
* Électronégativité
* Polarité des liaisons

### Représentation des molécules

* Formules brutes
* Formules développées
* Formules semi-développées
* Représentations de Lewis

### Géométrie moléculaire

* Modèle VSEPR
* Géométrie des molécules
* Angles de liaison
* Polarité moléculaire

### Interactions

* Liaisons hydrogène
* Interactions dipôle-dipôle
* Forces de Van der Waals
* Interactions ioniques

---

## 3. Quantité de matière et stœchiométrie

### Mole

* Quantité de matière
* Nombre d'Avogadro
* Masse molaire
* Concentration molaire
* Concentration massique

### Réactions chimiques

* Équilibrage d'une réaction
* Coefficients stœchiométriques
* Réactif limitant
* Réactif en excès
* Rendement d'une réaction

### Solutions

* Préparation d'une solution
* Dilution
* Mélange de solutions
* Calcul de concentrations

---

## 4. Thermodynamique

### Notions fondamentales

* Système
* État thermodynamique
* Variables d'état
* Température
* Pression
* Volume

### Énergie

* Travail
* Chaleur
* Énergie interne
* Enthalpie

### Réactions chimiques

* Réactions exothermiques
* Réactions endothermiques
* Enthalpie de réaction
* Loi de Hess

### Spontanéité

* Entropie
* Énergie libre de Gibbs
* Critères de spontanéité

---

## 5. Équilibres chimiques

### Équilibre

* Réactions réversibles
* État d'équilibre
* Constante d'équilibre
* Quotient réactionnel
* Déplacement d'équilibre

### Principe de Le Châtelier

* Influence de la concentration
* Influence de la pression
* Influence de la température

---

## 6. Chimie acido-basique

### Acides et bases

* Définition d'un acide
* Définition d'une base
* Couples acide/base
* Réactions acido-basiques

### pH

* Définition
* Calcul du pH
* pOH
* Produit ionique de l'eau

### Acides et bases faibles

* Constante d'acidité Ka
* pKa
* Relation pH/pKa
* Approximation et domaines de validité

### Solutions tampons

* Définition
* Fonctionnement
* Calcul du pH
* Équation de Henderson-Hasselbalch

### Dosages

* Dosage acido-basique
* Équivalence
* Courbes de titrage
* Interprétation

---

## 7. Oxydo-réduction

### Réactions redox

* Oxydation
* Réduction
* Oxydant
* Réducteur
* Couples redox

### Nombres d'oxydation

* Détermination
* Évolution lors d'une réaction

### Équilibrage

* Demi-équations électroniques
* Équations d'oxydoréduction

### Électrochimie

* Piles
* Potentiel d'électrode
* Force électromotrice
* Équation de Nernst
* Applications biologiques et médicales si prévues au programme

---

## 8. Cinétique chimique

### Vitesse de réaction

* Vitesse de disparition
* Vitesse de formation
* Facteurs influençant la vitesse

### Ordre des réactions

* Réactions d'ordre 0
* Réactions d'ordre 1
* Réactions d'ordre 2 si au programme

### Demi-vie

* Temps de demi-réaction
* Applications

### Catalyse

* Catalyseur
* Catalyse homogène
* Catalyse hétérogène
* Catalyse enzymatique
* Influence d'un catalyseur

---

## 9. Chimie organique

### Structure du carbone

* Hybridation
* Carbone tétravalent
* Liaisons simples et multiples
* Représentations moléculaires

### Fonctions organiques

* Alcane
* Alcène
* Alcyne
* Alcool
* Aldéhyde
* Cétone
* Acide carboxylique
* Ester
* Éther
* Amine
* Amide

### Nomenclature

* Chaîne principale
* Substituants
* Numérotation
* Nomenclature des principales fonctions

### Isomérie

* Isomérie de constitution
* Stéréoisomérie
* Chiralité
* Carbone asymétrique
* Énantiomères
* Diastéréoisomères
* Configuration R/S si au programme

### Réactivité

* Nucléophile
* Électrophile
* Réactions d'addition
* Réactions de substitution
* Réactions d'élimination
* Oxydation
* Réduction
* Hydrolyse
* Estérification

---

## 10. Chimie du vivant

### Acides aminés

* Structure générale
* Classification
* Propriétés acido-basiques
* Forme zwitterionique
* Point isoélectrique
* Liaison peptidique

### Peptides et protéines

* Structure primaire
* Structure secondaire
* Structure tertiaire
* Structure quaternaire
* Interactions stabilisatrices
* Dénaturation

### Glucides

* Monosaccharides
* Disaccharides
* Polysaccharides
* Glucose
* Fructose
* Liaison glycosidique

### Lipides

* Acides gras
* Saturés et insaturés
* Triglycérides
* Phospholipides
* Membranes biologiques

### Nucléotides

* Bases azotées
* Nucléosides
* Nucléotides
* ADN
* ARN

---

## 11. Méthodes de chimie utiles au PASS

* Analyse dimensionnelle
* Conversion d'unités
* Ordres de grandeur
* Manipulation des puissances de 10
* Résolution d'équations
* Calculs logarithmiques
* Calculs de concentrations
* Lecture de graphiques
* Interprétation de tableaux
* Vérification de cohérence d'un résultat

---

## 12. Entraînement QCM PASS

Pour chaque chapitre :

1. Cours détaillé
2. Résumé à mémoriser
3. Formules essentielles
4. Exemples résolus
5. Exercices progressifs
6. QCM faciles
7. QCM intermédiaires
8. QCM difficiles
9. QCM avec pièges classiques
10. Correction détaillée de chaque proposition
11. Explication des erreurs
12. Fiche de révision
13. Test chronométré

### Règles de correction

Pour chaque QCM :

* indiquer clairement Vrai/Faux ;
* expliquer pourquoi ;
* donner le calcul lorsque nécessaire ;
* identifier le piège éventuel ;
* rappeler la règle ou formule utilisée ;
* proposer un exercice similaire après une erreur.

---

## 13. Examens blancs

Prévoir progressivement :

* examens blancs par chapitre ;
* examens blancs cumulés ;
* séries chronométrées ;
* sujets de niveau PASS ;
* examens blancs complets ;
* correction détaillée ;
* analyse des erreurs ;
* révision ciblée des notions faibles.

### Objectif final

L'étudiante doit être capable de :

* comprendre les concepts de chimie ;
* effectuer rapidement les calculs nécessaires ;
* reconnaître les structures et fonctions chimiques ;
* résoudre les exercices de chimie du PASS ;
* identifier les pièges des QCM ;
* gérer son temps ;
* répondre avec précision dans les conditions de l'examen.

**Important :** si le programme officiel de l'université contient moins ou davantage de ces notions, supprimer ou ajouter les chapitres concernés afin de rester strictement conforme au programme officiel.

```

=====
