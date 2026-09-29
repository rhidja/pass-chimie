// Domaines du programme de chimie PASS.
// weight : pondération en % ; examCount : nombre de questions tirées dans ce domaine
// pour un examen blanc (simulation interne de 60 questions).
const DOMAINS = [
  { id: 1, name: "Structure de la matière et atome", weight: 10, examCount: 6 },
  { id: 2, name: "Liaisons chimiques et géométrie moléculaire", weight: 10, examCount: 6 },
  { id: 3, name: "Quantités de matière et stœchiométrie", weight: 10, examCount: 6 },
  { id: 4, name: "Thermodynamique chimique", weight: 10, examCount: 6 },
  { id: 5, name: "Équilibres chimiques et acido-basiques", weight: 15, examCount: 9 },
  { id: 6, name: "Oxydo-réduction et électrochimie", weight: 10, examCount: 6 },
  { id: 7, name: "Chimie organique", weight: 20, examCount: 12 },
  { id: 8, name: "Chimie du vivant et molécules biologiques", weight: 10, examCount: 6 },
  { id: 9, name: "Cinétique chimique et applications", weight: 5, examCount: 3 }
];

// Paramètres de l'examen blanc (simulation interne, format non officiel).
const EXAM = {
  minutes: 90,
  passScore: 10,   // seuil indicatif sur 20
  scale: 20
};
