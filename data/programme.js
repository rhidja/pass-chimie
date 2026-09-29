// Objectifs du programme détaillé, rangés dans les 9 domaines.
// Les intitulés et les notions reprennent le programme fourni.
// L'objectif 3.4 regroupe la section « Méthodes de chimie utiles au PASS ».
const OBJECTIVES = [
  // 1. Structure de la matière
  { id: "1.1", d: 1, title: "Atome", notions: ["Constituants de l’atome", "Protons", "Neutrons", "Électrons", "Numéro atomique Z", "Nombre de masse A", "Isotopes", "Ions", "Masse atomique", "Masse molaire"] },
  { id: "1.2", d: 1, title: "Configuration électronique", notions: ["Couches électroniques", "Sous-couches", "Orbitales atomiques", "Règles de remplissage", "Configuration électronique des éléments"] },
  { id: "1.3", d: 1, title: "Classification périodique", notions: ["Organisation du tableau périodique", "Groupes et périodes", "Propriétés périodiques", "Rayon atomique", "Électronégativité", "Énergie d’ionisation"] },

  // 2. Liaisons chimiques et structure moléculaire
  { id: "2.1", d: 2, title: "Liaisons", notions: ["Liaison ionique", "Liaison covalente", "Liaison métallique", "Électronégativité", "Polarité des liaisons"] },
  { id: "2.2", d: 2, title: "Représentation des molécules", notions: ["Formules brutes", "Formules développées", "Formules semi-développées", "Représentations de Lewis"] },
  { id: "2.3", d: 2, title: "Géométrie moléculaire", notions: ["Modèle VSEPR", "Géométrie des molécules", "Angles de liaison", "Polarité moléculaire"] },
  { id: "2.4", d: 2, title: "Interactions", notions: ["Liaisons hydrogène", "Interactions dipôle-dipôle", "Forces de Van der Waals", "Interactions ioniques"] },

  // 3. Quantité de matière et stœchiométrie
  { id: "3.1", d: 3, title: "Mole", notions: ["Quantité de matière", "Nombre d’Avogadro", "Masse molaire", "Concentration molaire", "Concentration massique"] },
  { id: "3.2", d: 3, title: "Réactions chimiques", notions: ["Équilibrage d’une réaction", "Coefficients stœchiométriques", "Réactif limitant", "Réactif en excès", "Rendement d’une réaction"] },
  { id: "3.3", d: 3, title: "Solutions", notions: ["Préparation d’une solution", "Dilution", "Mélange de solutions", "Calcul de concentrations"] },
  { id: "3.4", d: 3, title: "Méthodes de chimie utiles au PASS", notions: ["Analyse dimensionnelle", "Conversion d’unités", "Ordres de grandeur", "Manipulation des puissances de 10", "Résolution d’équations", "Calculs logarithmiques", "Calculs de concentrations", "Lecture de graphiques", "Interprétation de tableaux", "Vérification de cohérence d’un résultat"] },

  // 4. Thermodynamique
  { id: "4.1", d: 4, title: "Notions fondamentales", notions: ["Système", "État thermodynamique", "Variables d’état", "Température", "Pression", "Volume"] },
  { id: "4.2", d: 4, title: "Énergie", notions: ["Travail", "Chaleur", "Énergie interne", "Enthalpie"] },
  { id: "4.3", d: 4, title: "Réactions chimiques", notions: ["Réactions exothermiques", "Réactions endothermiques", "Enthalpie de réaction", "Loi de Hess"] },
  { id: "4.4", d: 4, title: "Spontanéité", notions: ["Entropie", "Énergie libre de Gibbs", "Critères de spontanéité"] },

  // 5. Équilibres chimiques + 6. Chimie acido-basique
  { id: "5.1", d: 5, title: "Équilibre", notions: ["Réactions réversibles", "État d’équilibre", "Constante d’équilibre", "Quotient réactionnel", "Déplacement d’équilibre"] },
  { id: "5.2", d: 5, title: "Principe de Le Châtelier", notions: ["Influence de la concentration", "Influence de la pression", "Influence de la température"] },
  { id: "5.3", d: 5, title: "Acides et bases", notions: ["Définition d’un acide", "Définition d’une base", "Couples acide/base", "Réactions acido-basiques"] },
  { id: "5.4", d: 5, title: "pH", notions: ["Définition", "Calcul du pH", "pOH", "Produit ionique de l’eau"] },
  { id: "5.5", d: 5, title: "Acides et bases faibles", notions: ["Constante d’acidité Ka", "pKa", "Relation pH/pKa", "Approximation et domaines de validité"] },
  { id: "5.6", d: 5, title: "Solutions tampons", notions: ["Définition", "Fonctionnement", "Calcul du pH", "Équation de Henderson-Hasselbalch"] },
  { id: "5.7", d: 5, title: "Dosages", notions: ["Dosage acido-basique", "Équivalence", "Courbes de titrage", "Interprétation"] },

  // 7. Oxydo-réduction
  { id: "6.1", d: 6, title: "Réactions redox", notions: ["Oxydation", "Réduction", "Oxydant", "Réducteur", "Couples redox"] },
  { id: "6.2", d: 6, title: "Nombres d’oxydation", notions: ["Détermination", "Évolution lors d’une réaction"] },
  { id: "6.3", d: 6, title: "Équilibrage", notions: ["Demi-équations électroniques", "Équations d’oxydoréduction"] },
  { id: "6.4", d: 6, title: "Électrochimie", notions: ["Piles", "Potentiel d’électrode", "Force électromotrice", "Équation de Nernst", "Applications biologiques et médicales"] },

  // 9. Chimie organique
  { id: "7.1", d: 7, title: "Structure du carbone", notions: ["Hybridation", "Carbone tétravalent", "Liaisons simples et multiples", "Représentations moléculaires"] },
  { id: "7.2", d: 7, title: "Fonctions organiques", notions: ["Alcane", "Alcène", "Alcyne", "Alcool", "Aldéhyde", "Cétone", "Acide carboxylique", "Ester", "Éther", "Amine", "Amide"] },
  { id: "7.3", d: 7, title: "Nomenclature", notions: ["Chaîne principale", "Substituants", "Numérotation", "Nomenclature des principales fonctions"] },
  { id: "7.4", d: 7, title: "Isomérie", notions: ["Isomérie de constitution", "Stéréoisomérie", "Chiralité", "Carbone asymétrique", "Énantiomères", "Diastéréoisomères", "Configuration R/S"] },
  { id: "7.5", d: 7, title: "Réactivité", notions: ["Nucléophile", "Électrophile", "Réactions d’addition", "Réactions de substitution", "Réactions d’élimination", "Oxydation", "Réduction", "Hydrolyse", "Estérification"] },

  // 10. Chimie du vivant
  { id: "8.1", d: 8, title: "Acides aminés", notions: ["Structure générale", "Classification", "Propriétés acido-basiques", "Forme zwitterionique", "Point isoélectrique", "Liaison peptidique"] },
  { id: "8.2", d: 8, title: "Peptides et protéines", notions: ["Structure primaire", "Structure secondaire", "Structure tertiaire", "Structure quaternaire", "Interactions stabilisatrices", "Dénaturation"] },
  { id: "8.3", d: 8, title: "Glucides", notions: ["Monosaccharides", "Disaccharides", "Polysaccharides", "Glucose", "Fructose", "Liaison glycosidique"] },
  { id: "8.4", d: 8, title: "Lipides", notions: ["Acides gras", "Saturés et insaturés", "Triglycérides", "Phospholipides", "Membranes biologiques"] },
  { id: "8.5", d: 8, title: "Nucléotides", notions: ["Bases azotées", "Nucléosides", "Nucléotides", "ADN", "ARN"] },

  // 8. Cinétique chimique
  { id: "9.1", d: 9, title: "Vitesse de réaction", notions: ["Vitesse de disparition", "Vitesse de formation", "Facteurs influençant la vitesse"] },
  { id: "9.2", d: 9, title: "Ordre des réactions", notions: ["Réactions d’ordre 0", "Réactions d’ordre 1", "Réactions d’ordre 2"] },
  { id: "9.3", d: 9, title: "Demi-vie", notions: ["Temps de demi-réaction", "Applications"] },
  { id: "9.4", d: 9, title: "Catalyse", notions: ["Catalyseur", "Catalyse homogène", "Catalyse hétérogène", "Catalyse enzymatique", "Influence d’un catalyseur"] }
];
