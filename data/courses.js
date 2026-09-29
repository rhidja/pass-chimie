// Cours : 33 modules. d = domaine, o = objectifs traités.
// Les textes peuvent contenir du HTML simple (<b>) et des formules LaTeX entre \\( et \\).
// Espèces chimiques : \\ce{...} (extension mhchem de KaTeX).
const COURSES = [
  // ===================== Domaine 1 — Structure de la matière =====================
  {
    d: 1,
    o: ["1.1"],
    title: "L’atome : constituants, isotopes et ions",
    summary: "Protons, neutrons, électrons, numéro atomique Z, nombre de masse A, isotopes, ions et masse molaire.",
    sections: [
      { h: "Constituants de l’atome", p: "Un atome est formé d’un <b>noyau</b> très petit et très dense, entouré d’un nuage d’<b>électrons</b>. Le noyau contient des <b>protons</b> et des <b>neutrons</b>, appelés ensemble <b>nucléons</b>. Le rayon du noyau est de l’ordre de \\(10^{-15}\\) m, celui de l’atome de l’ordre de \\(10^{-10}\\) m : l’atome est essentiellement « vide ».",
        points: [
          "<b>Proton</b> : charge \\(+e\\) avec \\(e = 1{,}602 \\times 10^{-19}\\) C, masse \\(\\approx 1{,}673 \\times 10^{-27}\\) kg.",
          "<b>Neutron</b> : charge nulle, masse \\(\\approx 1{,}675 \\times 10^{-27}\\) kg (très proche de celle du proton).",
          "<b>Électron</b> : charge \\(-e\\), masse \\(\\approx 9{,}109 \\times 10^{-31}\\) kg, soit environ 1 836 fois plus léger qu’un proton : sa masse est négligeable dans la masse de l’atome.",
          "Un atome est <b>électriquement neutre</b> : il possède autant d’électrons que de protons."
        ] },
      { h: "Numéro atomique Z et nombre de masse A", p: "Un noyau se note \\(\\ce{^{A}_{Z}X}\\).",
        points: [
          "<b>Numéro atomique Z</b> = nombre de protons. C’est lui qui définit l’<b>élément chimique</b> (Z = 6 : carbone, quel que soit le reste).",
          "<b>Nombre de masse A</b> = nombre de nucléons = Z + N, où N est le nombre de neutrons : \\(N = A - Z\\).",
          "Exemple : \\(\\ce{^{23}_{11}Na}\\) possède 11 protons, 23 − 11 = 12 neutrons et 11 électrons."
        ] },
      { h: "Isotopes et ions", points: [
          "<b>Isotopes</b> : atomes de même Z mais de A différent (nombre de neutrons différent). Ils appartiennent au même élément et ont les mêmes propriétés chimiques. Exemples : \\(\\ce{^{12}C}\\), \\(\\ce{^{13}C}\\), \\(\\ce{^{14}C}\\) ; hydrogène \\(\\ce{^{1}H}\\), deutérium \\(\\ce{^{2}H}\\), tritium \\(\\ce{^{3}H}\\).",
          "<b>Ions</b> : atomes (ou groupes d’atomes) ayant perdu ou gagné des électrons. Un <b>cation</b> a perdu des électrons (charge +), un <b>anion</b> en a gagné (charge −). Le nombre de protons ne change jamais.",
          "\\(\\ce{^{24}_{12}Mg^{2+}}\\) : 12 protons, 12 neutrons, 10 électrons. \\(\\ce{^{35}_{17}Cl-}\\) : 17 protons, 18 neutrons, 18 électrons.",
          "Des espèces <b>isoélectroniques</b> ont le même nombre d’électrons : \\(\\ce{Na+}\\), \\(\\ce{Mg^2+}\\), \\(\\ce{F-}\\), \\(\\ce{O^2-}\\) et Ne en ont tous 10."
        ] },
      { h: "Masse atomique et masse molaire", p: "L’<b>unité de masse atomique</b> (u) vaut 1/12 de la masse d’un atome de carbone 12, soit \\(1{,}661 \\times 10^{-27}\\) kg. La <b>masse atomique</b> d’un élément est la moyenne des masses de ses isotopes, pondérée par leurs abondances naturelles. La <b>masse molaire</b> atomique M (en g·mol⁻¹) a la même valeur numérique que la masse atomique exprimée en u.",
        points: [
          "Exemple du chlore : 75,8 % de \\(\\ce{^{35}Cl}\\) (34,97 u) et 24,2 % de \\(\\ce{^{37}Cl}\\) (36,97 u) : \\(0{,}758 \\times 34{,}97 + 0{,}242 \\times 36{,}97 \\approx 35{,}45\\) u, d’où \\(M(\\ce{Cl}) = 35{,}5\\) g·mol⁻¹.",
          "Valeurs à connaître : H = 1,0 ; C = 12,0 ; N = 14,0 ; O = 16,0 ; Na = 23,0 ; Cl = 35,5 g·mol⁻¹.",
          "Une masse molaire non entière s’explique par le mélange d’isotopes."
        ] },
      { h: "Pièges classiques", points: [
          "Confondre Z (protons) et A (nucléons) : le nombre de neutrons est \\(A - Z\\), pas A.",
          "Pour un ion, on ajoute ou on retire des <b>électrons</b>, jamais des protons : \\(\\ce{Fe^3+}\\) a 26 protons et 23 électrons.",
          "Deux isotopes sont le <b>même élément</b> : même Z, même chimie, masses différentes.",
          "La masse d’un atome est concentrée dans le noyau ; le volume, lui, est dû au nuage électronique."
        ] }
    ]
  },
  {
    d: 1,
    o: ["1.2"],
    title: "Configuration électronique",
    summary: "Couches, sous-couches et orbitales atomiques ; règles de Klechkowski, Pauli et Hund ; configurations des éléments et des ions.",
    sections: [
      { h: "Couches, sous-couches et orbitales atomiques", p: "Les électrons se répartissent en <b>couches électroniques</b> repérées par le nombre quantique principal n (n = 1 : couche K, 2 : L, 3 : M, 4 : N). Chaque couche se divise en <b>sous-couches</b> s, p, d, f (nombre quantique secondaire \\(\\ell = 0, 1, 2, 3\\), avec \\(0 \\le \\ell \\le n-1\\)).",
        points: [
          "Une <b>orbitale atomique</b> est une région de l’espace où la probabilité de trouver l’électron est élevée ; elle est définie par le triplet \\((n, \\ell, m_\\ell)\\) avec \\(-\\ell \\le m_\\ell \\le +\\ell\\).",
          "Nombre d’orbitales par sous-couche : s = 1, p = 3, d = 5, f = 7. Chaque orbitale contient au plus 2 électrons : s = 2, p = 6, d = 10, f = 14 électrons.",
          "Une couche n contient \\(n^2\\) orbitales et au plus \\(2n^2\\) électrons (K : 2, L : 8, M : 18).",
          "Le 4ᵉ nombre quantique, le spin \\(m_s\\), vaut \\(+\\tfrac{1}{2}\\) ou \\(-\\tfrac{1}{2}\\)."
        ] },
      { h: "Règles de remplissage", points: [
          "<b>Règle de Klechkowski</b> : les sous-couches se remplissent par \\(n + \\ell\\) croissant, et à égalité par n croissant : \\(\\mathrm{1s,\\,2s,\\,2p,\\,3s,\\,3p,\\,4s,\\,3d,\\,4p,\\,5s,\\,4d,\\,5p,\\,6s,\\,4f,\\,5d,\\,6p}\\).",
          "<b>Principe d’exclusion de Pauli</b> : deux électrons d’un même atome ne peuvent pas avoir leurs quatre nombres quantiques identiques ; une orbitale contient donc au plus 2 électrons, de spins opposés.",
          "<b>Règle de Hund</b> : dans des orbitales de même énergie (les 3 orbitales p par exemple), les électrons occupent le maximum d’orbitales avec des spins parallèles avant de s’apparier. L’azote (\\(\\mathrm{2p^3}\\)) a donc 3 électrons célibataires, l’oxygène (\\(\\mathrm{2p^4}\\)) en a 2."
        ] },
      { h: "Configuration électronique des éléments", points: [
          "C (Z = 6) : \\(\\mathrm{1s^2\\,2s^2\\,2p^2}\\) ; O (Z = 8) : \\(\\mathrm{1s^2\\,2s^2\\,2p^4}\\) ; Na (Z = 11) : \\(\\mathrm{[Ne]\\,3s^1}\\) ; Cl (Z = 17) : \\(\\mathrm{[Ne]\\,3s^2\\,3p^5}\\).",
          "K (Z = 19) : \\(\\mathrm{[Ar]\\,4s^1}\\) : la 4s se remplit avant la 3d. Fe (Z = 26) : \\(\\mathrm{[Ar]\\,3d^6\\,4s^2}\\).",
          "<b>Exceptions</b> à connaître : Cr (Z = 24) \\(\\mathrm{[Ar]\\,3d^5\\,4s^1}\\) et Cu (Z = 29) \\(\\mathrm{[Ar]\\,3d^{10}\\,4s^1}\\) (sous-couche d demi-remplie ou pleine plus stable).",
          "Les <b>électrons de valence</b> sont ceux de la couche de n le plus élevé, plus ceux d’une sous-couche d en cours de remplissage. Ils déterminent les propriétés chimiques.",
          "Ions : on retire d’abord les électrons de n le plus élevé. \\(\\ce{Fe^2+}\\) : \\(\\mathrm{[Ar]\\,3d^6}\\) (les 4s partent en premier) ; \\(\\ce{Na+}\\) : \\(\\mathrm{1s^2\\,2s^2\\,2p^6}\\), comme le néon."
        ] },
      { h: "Exemple résolu", p: "Configuration du soufre (Z = 16) et de l’ion sulfure \\(\\ce{S^2-}\\). On place 16 électrons dans l’ordre de Klechkowski : \\(\\mathrm{1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^4}\\). La couche de valence (n = 3) contient 6 électrons : le soufre est dans le groupe 16, comme l’oxygène. D’après Hund, les 4 électrons 3p occupent les 3 orbitales avec 2 électrons célibataires. L’ion \\(\\ce{S^2-}\\) a 18 électrons : \\(\\mathrm{1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^6}\\), isoélectronique de l’argon." },
      { h: "Pièges classiques", points: [
          "La 4s se remplit avant la 3d, mais c’est elle qui se vide en premier lors de l’ionisation des métaux de transition.",
          "Pauli limite à 2 électrons par orbitale ; Hund dit comment répartir les électrons entre orbitales de même énergie : ne pas confondre.",
          "Ne pas oublier la charge : un anion a plus d’électrons que Z, un cation moins.",
          "Une sous-couche p peut contenir 6 électrons mais ne compte que 3 orbitales."
        ] }
    ]
  },
  {
    d: 1,
    o: ["1.3"],
    title: "Classification périodique et propriétés périodiques",
    summary: "Organisation du tableau, groupes et périodes, blocs ; évolution du rayon atomique, de l’énergie d’ionisation et de l’électronégativité.",
    sections: [
      { h: "Organisation du tableau périodique", p: "Les 118 éléments sont rangés par <b>numéro atomique Z croissant</b>. Une ligne est une <b>période</b>, une colonne un <b>groupe</b>.",
        points: [
          "<b>Groupes et périodes</b> : 7 périodes et 18 groupes. Le numéro de période est la valeur de n de la couche de valence. Les éléments d’un même groupe ont la même configuration de valence, donc des propriétés chimiques voisines.",
          "Blocs : s (groupes 1 et 2), p (groupes 13 à 18), d (groupes 3 à 12, métaux de transition), f (lanthanides et actinides).",
          "Familles : alcalins (groupe 1, sauf H) ; alcalino-terreux (groupe 2) ; halogènes (groupe 17 : F, Cl, Br, I) ; gaz nobles (groupe 18, couche de valence pleine, très peu réactifs).",
          "Les métaux occupent la gauche et le centre du tableau, les non-métaux la droite."
        ] },
      { h: "Propriétés périodiques : rayon atomique", points: [
          "Sur une période, de gauche à droite, le <b>rayon atomique diminue</b> : n est constant mais la charge du noyau augmente, les électrons sont plus attirés.",
          "Dans un groupe, de haut en bas, le rayon <b>augmente</b> : on ajoute une couche électronique à chaque période.",
          "Un cation est plus petit que l’atome dont il provient ; un anion est plus gros.",
          "Pour des espèces isoélectroniques, le rayon diminue quand Z augmente : \\(\\ce{O^2-} \\gt \\ce{F-} \\gt \\ce{Na+} \\gt \\ce{Mg^2+}\\)."
        ] },
      { h: "Énergie d’ionisation", p: "L’<b>énergie d’ionisation</b> (première) est l’énergie minimale pour arracher un électron à un atome à l’état gazeux : \\(\\ce{X(g) -> X+(g) + e-}\\). Elle est toujours positive.",
        points: [
          "Elle <b>augmente de gauche à droite</b> sur une période et <b>diminue de haut en bas</b> dans un groupe (électron plus loin du noyau).",
          "Maximale pour les gaz nobles (He a la plus élevée de tous les éléments), minimale pour les alcalins, qui perdent facilement leur électron.",
          "Les énergies d’ionisation successives sont croissantes, avec un <b>saut brutal</b> quand on attaque une couche interne : pour Na, la 2ᵉ est environ 9 fois plus grande que la 1ʳᵉ.",
          "Petites anomalies : \\(E_i(\\text{B}) \\lt E_i(\\text{Be})\\) et \\(E_i(\\text{O}) \\lt E_i(\\text{N})\\)."
        ] },
      { h: "Électronégativité", p: "L’<b>électronégativité</b> \\(\\chi\\) mesure l’aptitude d’un atome à attirer vers lui les électrons d’une liaison qu’il forme. L’échelle la plus utilisée est celle de <b>Pauling</b> (sans unité).",
        points: [
          "Elle augmente de gauche à droite sur une période et de bas en haut dans un groupe.",
          "Le <b>fluor</b> est l’élément le plus électronégatif (3,98), puis l’oxygène (3,44), le chlore (3,16), l’azote (3,04). Carbone : 2,55 ; hydrogène : 2,20. Les alcalins lourds (Cs) sont les moins électronégatifs.",
          "Les gaz nobles, qui forment très peu de liaisons, n’ont généralement pas de valeur tabulée."
        ] },
      { h: "Pièges classiques", points: [
          "Rayon atomique et énergie d’ionisation évoluent en sens <b>inverse</b> : plus l’atome est petit, plus il retient ses électrons.",
          "L’électronégativité concerne un atome <b>dans une liaison</b> ; l’énergie d’ionisation concerne un atome isolé gazeux.",
          "La période correspond à n, le groupe à la configuration de valence : Cl (\\(\\mathrm{[Ne]\\,3s^2\\,3p^5}\\)) est en période 3, groupe 17.",
          "H est placé dans le groupe 1 mais n’est pas un métal alcalin."
        ] }
    ]
  },

  // ===================== Domaine 2 — Liaisons et géométrie =====================
  {
    d: 2,
    o: ["2.1", "2.2"],
    title: "Liaisons chimiques et représentations de Lewis",
    summary: "Liaisons ionique, covalente et métallique ; électronégativité et polarité des liaisons ; formules brutes, développées, semi-développées et schémas de Lewis.",
    sections: [
      { h: "Les trois grands types de liaisons", points: [
          "<b>Liaison covalente</b> : mise en commun d’une paire d’électrons (un doublet liant) entre deux atomes, le plus souvent deux non-métaux. Elle peut être simple, double ou triple. Exemples : \\(\\ce{H2}\\), \\(\\ce{CH4}\\), \\(\\ce{H2O}\\).",
          "<b>Liaison ionique</b> : transfert d’électrons d’un atome peu électronégatif (métal) vers un atome très électronégatif (non-métal), puis attraction électrostatique entre les ions formés. Exemple : \\(\\ce{NaCl}\\), qui forme un cristal ionique et non des molécules.",
          "<b>Liaison métallique</b> : les atomes métalliques mettent en commun leurs électrons de valence, délocalisés dans tout le métal (« mer d’électrons ») autour des cations. Elle explique la conductivité électrique et thermique des métaux et leur malléabilité.",
          "Règle de l’<b>octet</b> : les atomes des périodes 2 et 3 tendent à s’entourer de 8 électrons (4 doublets) ; l’hydrogène se contente de 2 (règle du duet)."
        ] },
      { h: "Électronégativité et polarité des liaisons", p: "La <b>polarité des liaisons</b> dépend de la différence d’électronégativité \\(\\Delta\\chi\\) entre les deux atomes.",
        points: [
          "\\(\\Delta\\chi = 0\\) : liaison covalente <b>apolaire</b> (\\(\\ce{H-H}\\), \\(\\ce{Cl-Cl}\\)).",
          "\\(\\Delta\\chi\\) modérée (en pratique entre 0,4 et environ 1,7) : liaison covalente <b>polarisée</b>. L’atome le plus électronégatif porte une charge partielle \\(\\delta^-\\), l’autre \\(\\delta^+\\). Exemple : \\(\\ce{O-H}\\) (\\(\\Delta\\chi \\approx 1{,}2\\)), \\(\\ce{C=O}\\).",
          "\\(\\Delta\\chi\\) grande (au-delà d’environ 1,7 à 2) : liaison à caractère <b>ionique</b> dominant (\\(\\ce{NaCl}\\) : \\(\\Delta\\chi \\approx 2{,}1\\)).",
          "La liaison C–H (\\(\\Delta\\chi \\approx 0{,}35\\)) est considérée comme très peu polaire. Les seuils sont indicatifs : il existe un continuum entre covalent et ionique."
        ] },
      { h: "Formules brutes, formules développées, formules semi-développées", points: [
          "<b>Formule brute</b> : nature et nombre des atomes, par exemple \\(\\ce{C2H6O}\\). Elle ne dit rien de l’enchaînement.",
          "<b>Formule développée</b> : tous les atomes et <b>toutes</b> les liaisons sont représentés.",
          "<b>Formule semi-développée</b> : les liaisons avec les hydrogènes ne sont pas dessinées, par exemple \\(\\ce{CH3-CH2-OH}\\) (éthanol).",
          "Une même formule brute peut correspondre à plusieurs molécules : \\(\\ce{C2H6O}\\) est l’éthanol \\(\\ce{CH3-CH2-OH}\\) ou le méthoxyméthane \\(\\ce{CH3-O-CH3}\\) (isomères)."
        ] },
      { h: "Représentations de Lewis", p: "Méthode : 1) compter les électrons de valence de tous les atomes (ajouter un électron par charge négative, en retirer un par charge positive) ; 2) en déduire le nombre de doublets ; 3) placer les doublets liants, puis compléter les octets avec des doublets non liants ; 4) calculer les charges formelles : \\(CF = \\text{e}^-_{\\text{valence}} - \\text{e}^-_{\\text{non liants}} - \\text{nombre de liaisons}\\).",
        points: [
          "\\(\\ce{H2O}\\) : 8 électrons de valence, 4 doublets : 2 liants O–H et 2 non liants sur O.",
          "\\(\\ce{NH3}\\) : 3 doublets liants, 1 doublet non liant sur N. \\(\\ce{NH4+}\\) : 4 doublets liants, charge formelle +1 sur N.",
          "\\(\\ce{CO2}\\) : O=C=O, 2 doublets non liants sur chaque O. \\(\\ce{N2}\\) : triple liaison, un doublet non liant sur chaque N.",
          "Exceptions à l’octet : \\(\\ce{BF3}\\) (lacune électronique, 6 électrons autour de B) ; hypervalence des éléments de la période 3 et au-delà (\\(\\ce{PCl5}\\), \\(\\ce{SF6}\\))."
        ] },
      { h: "Pièges classiques", points: [
          "Des liaisons polarisées ne font pas forcément une molécule polaire : tout dépend de la géométrie (voir module suivant).",
          "Un composé ionique n’est pas une molécule : on parle de cristal et de formule statistique.",
          "Oublier la charge de l’ion dans le décompte des électrons de valence.",
          "Une formule brute ne suffit pas à identifier une molécule."
        ] }
    ]
  },
  {
    d: 2,
    o: ["2.3"],
    title: "Géométrie moléculaire : le modèle VSEPR",
    summary: "Notation AXₘEₙ, géométries et angles de liaison, influence des doublets non liants, polarité moléculaire.",
    sections: [
      { h: "Le modèle VSEPR", p: "Le <b>modèle VSEPR</b> (répulsion des paires électroniques de valence, Gillespie) prévoit la <b>géométrie des molécules</b> : autour d’un atome central A, les doublets liants (X) et non liants (E) se repoussent et s’écartent au maximum. On note la molécule \\(\\mathrm{AX_mE_n}\\) ; \\(m + n\\) est le nombre de domaines électroniques.",
        points: [
          "Une liaison double ou triple compte comme <b>un seul</b> X.",
          "La géométrie de répartition des domaines dépend de \\(m + n\\) ; la forme de la molécule (ce que l’on nomme) ne décrit que la position des atomes."
        ] },
      { h: "Géométries à connaître", points: [
          "\\(\\mathrm{AX_2}\\) : <b>linéaire</b>, 180° (\\(\\ce{CO2}\\), \\(\\ce{BeCl2}\\)).",
          "\\(\\mathrm{AX_3}\\) : <b>trigonale plane</b>, 120° (\\(\\ce{BF3}\\)). \\(\\mathrm{AX_2E}\\) : <b>coudée</b>, un peu moins de 120° (\\(\\ce{SO2}\\)).",
          "\\(\\mathrm{AX_4}\\) : <b>tétraédrique</b>, 109,5° (\\(\\ce{CH4}\\)). \\(\\mathrm{AX_3E}\\) : <b>pyramide trigonale</b>, environ 107° (\\(\\ce{NH3}\\)). \\(\\mathrm{AX_2E_2}\\) : <b>coudée</b>, environ 104,5° (\\(\\ce{H2O}\\)).",
          "\\(\\mathrm{AX_5}\\) : bipyramide trigonale, 90° et 120° (\\(\\ce{PCl5}\\)). \\(\\mathrm{AX_6}\\) : octaédrique, 90° (\\(\\ce{SF6}\\))."
        ] },
      { h: "Angles de liaison", p: "Un doublet non liant occupe plus d’espace qu’un doublet liant : il repousse davantage et <b>referme les angles de liaison</b>. D’où la série \\(\\ce{CH4}\\) (109,5°) > \\(\\ce{NH3}\\) (≈ 107°) > \\(\\ce{H2O}\\) (≈ 104,5°) : les trois ont 4 domaines électroniques (répartition tétraédrique), mais 0, 1 puis 2 doublets non liants." },
      { h: "Polarité moléculaire", p: "Chaque liaison polarisée porte un moment dipolaire (vecteur orienté, en debye). Une molécule est <b>polaire</b> si la <b>somme vectorielle</b> de ses moments dipolaires de liaison est non nulle.",
        points: [
          "\\(\\ce{CO2}\\) : liaisons C=O polarisées, mais molécule linéaire symétrique : moments opposés qui s’annulent → <b>apolaire</b>.",
          "\\(\\ce{H2O}\\) : molécule coudée → moments qui ne s’annulent pas → <b>polaire</b>. De même \\(\\ce{NH3}\\) (pyramide).",
          "\\(\\ce{CH4}\\), \\(\\ce{CCl4}\\), \\(\\ce{BF3}\\) : géométries symétriques → apolaires. \\(\\ce{CHCl3}\\) (chloroforme) : symétrie rompue → polaire."
        ] },
      { h: "Pièges classiques", points: [
          "Compter une double liaison comme deux X : \\(\\ce{CO2}\\) est \\(\\mathrm{AX_2}\\), pas \\(\\mathrm{AX_4}\\).",
          "Oublier les doublets non liants : \\(\\ce{H2O}\\) n’est pas linéaire.",
          "Nommer la répartition des doublets au lieu de la forme : \\(\\ce{NH3}\\) a une répartition tétraédrique mais une <b>forme</b> de pyramide trigonale.",
          "« Liaisons polaires » ne veut pas dire « molécule polaire »."
        ] }
    ]
  },
  {
    d: 2,
    o: ["2.4"],
    title: "Interactions intermoléculaires",
    summary: "Interactions ioniques, dipôle-dipôle, forces de Van der Waals et liaisons hydrogène ; conséquences sur l’ébullition et la solubilité.",
    sections: [
      { h: "Interactions ioniques", p: "Les <b>interactions ioniques</b> sont des attractions électrostatiques entre charges opposées (loi de Coulomb : force proportionnelle à \\(q_1 q_2 / r^2\\)). Elles sont fortes et assurent la cohésion des cristaux ioniques (\\(\\ce{NaCl}\\)). En biologie, on parle de <b>ponts salins</b> entre un groupe \\(\\ce{-COO-}\\) et un groupe \\(\\ce{-NH3+}\\) dans une protéine. Lors de la dissolution d’un sel dans l’eau, chaque ion s’entoure de molécules d’eau orientées (interaction ion-dipôle, hydratation)." },
      { h: "Forces de Van der Waals", p: "Les <b>forces de Van der Waals</b> sont des interactions faibles (quelques kJ·mol⁻¹) entre dipôles. On en distingue trois :",
        points: [
          "<b>Keesom</b> : <b>interactions dipôle-dipôle</b> entre molécules polaires (dipôles permanents), par exemple entre molécules de HCl.",
          "<b>Debye</b> : dipôle permanent – dipôle induit.",
          "<b>London</b> (dispersion) : dipôles instantanés – dipôles induits. Elles existent entre <b>toutes</b> les molécules, même apolaires, et augmentent avec la taille (polarisabilité) : \\(\\ce{F2}\\) et \\(\\ce{Cl2}\\) sont gazeux, \\(\\ce{Br2}\\) liquide, \\(\\ce{I2}\\) solide à température ambiante."
        ] },
      { h: "Liaisons hydrogène", p: "Une <b>liaison hydrogène</b> s’établit entre un atome d’hydrogène lié à un atome petit et très électronégatif (<b>F, O ou N</b>) et un doublet non liant d’un autre atome F, O ou N. Énergie typique : 10 à 40 kJ·mol⁻¹, plus forte que Van der Waals, beaucoup plus faible qu’une liaison covalente (plusieurs centaines de kJ·mol⁻¹).",
        points: [
          "Elle explique la température d’ébullition élevée de l’eau (100 °C) comparée à \\(\\ce{H2S}\\) (≈ −60 °C), et le fait que la glace flotte (structure ouverte, moins dense).",
          "En biologie : appariement des bases de l’ADN (A–T : 2 liaisons H ; G–C : 3), hélices α et feuillets β des protéines.",
          "Une liaison C–H ne donne pas de liaison hydrogène (C pas assez électronégatif).",
          "Elle peut être intermoléculaire ou intramoléculaire."
        ] },
      { h: "Conséquences sur les propriétés", points: [
          "Plus les interactions entre molécules sont fortes, plus la <b>température d’ébullition</b> est élevée. Éthanol \\(\\ce{CH3CH2OH}\\) (liaisons H) : 78 °C ; méthoxyméthane \\(\\ce{CH3OCH3}\\) (même formule brute, pas de H lié à O) : −24 °C.",
          "À taille comparable : liaisons H > dipôle-dipôle > London seules.",
          "<b>Solubilité</b> : « qui se ressemble s’assemble ». Les composés polaires ou ioniques se dissolvent dans l’eau, les composés apolaires (lipides, alcanes) dans les solvants apolaires.",
          "Ordre de force habituel : covalente > ionique (en cristal) > liaison hydrogène > Van der Waals."
        ] },
      { h: "Pièges classiques", points: [
          "La liaison hydrogène n’est pas une liaison covalente, et ce n’est pas la liaison O–H elle-même.",
          "Les forces de London ne sont pas réservées aux molécules apolaires : elles s’ajoutent à toutes les autres.",
          "Un éther (R–O–R) peut <b>accepter</b> une liaison H de l’eau mais ne peut pas en donner entre ses propres molécules."
        ] }
    ]
  },

  // ===================== Domaine 3 — Stœchiométrie =====================
  {
    d: 3,
    o: ["3.1", "3.4"],
    title: "La mole et les outils de calcul",
    summary: "Quantité de matière, nombre d’Avogadro, masse molaire, concentrations ; conversions, puissances de 10, logarithmes et vérification des résultats.",
    sections: [
      { h: "Quantité de matière et nombre d’Avogadro", p: "La <b>quantité de matière</b> n se mesure en moles. Une mole contient exactement \\(N_A = 6{,}022\\,140\\,76 \\times 10^{23}\\) entités : c’est le <b>nombre d’Avogadro</b> (constante d’Avogadro, en mol⁻¹).",
        points: [
          "\\(n = \\dfrac{N}{N_A}\\) (N : nombre d’entités) et \\(n = \\dfrac{m}{M}\\) (m en g, M en g·mol⁻¹).",
          "<b>Masse molaire</b> d’une molécule = somme des masses molaires atomiques : \\(M(\\ce{H2O}) = 18{,}0\\) ; \\(M(\\ce{CO2}) = 44{,}0\\) ; \\(M(\\ce{NaCl}) = 58{,}5\\) ; \\(M(\\ce{C6H12O6}) = 180{,}0\\) g·mol⁻¹."
        ] },
      { h: "Concentration molaire et concentration massique", points: [
          "<b>Concentration molaire</b> : \\(C = \\dfrac{n}{V}\\) en mol·L⁻¹.",
          "<b>Concentration massique</b> : \\(C_m = \\dfrac{m}{V}\\) en g·L⁻¹. Relation : \\(C_m = C \\times M\\).",
          "Exemple : le sérum physiologique à 9 g·L⁻¹ de NaCl a une concentration molaire \\(C = 9 / 58{,}5 \\approx 0{,}154\\) mol·L⁻¹. Le glucose à 5 % (50 g·L⁻¹) : \\(50 / 180 \\approx 0{,}28\\) mol·L⁻¹.",
          "Ne pas confondre concentration massique (masse de soluté par volume de solution) et masse volumique (masse de solution par volume de solution)."
        ] },
      { h: "Analyse dimensionnelle, conversion d’unités et puissances de 10", points: [
          "<b>Analyse dimensionnelle</b> : vérifier que les unités d’un résultat sont cohérentes. \\(\\dfrac{m\\,[\\text{g}]}{M\\,[\\text{g·mol}^{-1}]}\\) donne bien des mol ; \\(C \\times V\\) donne des mol si C est en mol·L⁻¹ et V en L.",
          "<b>Conversion d’unités</b> : 1 L = 1 dm³ = 1 000 mL = \\(10^{-3}\\) m³ ; 1 mmol = \\(10^{-3}\\) mol ; 1 µmol = \\(10^{-6}\\) mol ; 1 mg·mL⁻¹ = 1 g·L⁻¹ ; 1 mol·L⁻¹ = 1 mmol·mL⁻¹ ; 1 g·L⁻¹ = 100 mg·dL⁻¹.",
          "<b>Manipulation des puissances de 10</b> : \\(10^a \\times 10^b = 10^{a+b}\\) ; \\(10^a / 10^b = 10^{a-b}\\) ; \\((10^a)^b = 10^{ab}\\) ; \\(10^0 = 1\\).",
          "<b>Ordres de grandeur</b> : rayon d’un atome \\(\\sim 10^{-10}\\) m ; natrémie ≈ 140 mmol·L⁻¹ ; glycémie à jeun ≈ 5 mmol·L⁻¹, soit ≈ 0,9 g·L⁻¹."
        ] },
      { h: "Calculs logarithmiques et résolution d’équations", points: [
          "\\(\\log(ab) = \\log a + \\log b\\) ; \\(\\log(a/b) = \\log a - \\log b\\) ; \\(\\log(10^n) = n\\) ; \\(\\log(a^n) = n\\log a\\).",
          "Valeurs utiles : \\(\\log 2 \\approx 0{,}30\\) ; \\(\\log 3 \\approx 0{,}48\\) ; \\(\\log 5 \\approx 0{,}70\\) ; \\(\\ln 2 \\approx 0{,}693\\) ; \\(\\ln x \\approx 2{,}3 \\log x\\).",
          "Exemple : \\(10^{-3{,}7} = 10^{0{,}3} \\times 10^{-4} \\approx 2 \\times 10^{-4}\\).",
          "<b>Résolution d’équations</b> : isoler l’inconnue avant de remplacer par les valeurs numériques ; garder les unités jusqu’au bout.",
          "<b>Lecture de graphiques</b> : identifier les grandeurs et unités des axes, l’échelle (linéaire ou logarithmique), la pente et l’ordonnée à l’origine. <b>Interprétation de tableaux</b> : repérer les unités en en-tête et les tendances."
        ] },
      { h: "Vérification de cohérence d’un résultat", points: [
          "Le signe et l’unité sont-ils plausibles ? Une masse, un volume, une concentration sont positifs.",
          "L’ordre de grandeur est-il réaliste ? Un pH en solution aqueuse diluée est en général compris entre 0 et 14 ; une solution diluée est moins concentrée que la solution mère ; un rendement ne dépasse pas 100 %.",
          "Piège fréquent : oublier de convertir des mL en L (erreur d’un facteur 1 000) ou des mg en g."
        ] }
    ]
  },
  {
    d: 3,
    o: ["3.2"],
    title: "Réactions chimiques et stœchiométrie",
    summary: "Équilibrer une équation, lire les coefficients stœchiométriques, trouver le réactif limitant et calculer un rendement.",
    sections: [
      { h: "Équilibrage d’une réaction", p: "Une équation chimique doit respecter la <b>conservation des éléments</b> et la <b>conservation de la charge</b>. On ajuste les <b>coefficients stœchiométriques</b> (les plus petits entiers possibles) ; on ne modifie jamais les formules.",
        points: [
          "Méthode pratique : équilibrer d’abord C, puis H, puis O (souvent en dernier car présent partout).",
          "\\(\\ce{CH4 + 2 O2 -> CO2 + 2 H2O}\\)",
          "\\(\\ce{C3H8 + 5 O2 -> 3 CO2 + 4 H2O}\\)",
          "Respiration cellulaire (bilan) : \\(\\ce{C6H12O6 + 6 O2 -> 6 CO2 + 6 H2O}\\)"
        ] },
      { h: "Coefficients stœchiométriques et tableau d’avancement", p: "Les coefficients donnent les proportions <b>en moles</b> (pas en masse). Pour \\(a\\,\\ce{A} + b\\,\\ce{B} \\ce{->} c\\,\\ce{C}\\), à l’avancement x : \\(n(\\ce{A}) = n_0(\\ce{A}) - a x\\), \\(n(\\ce{B}) = n_0(\\ce{B}) - b x\\), \\(n(\\ce{C}) = c x\\).",
        points: [
          "Dans la combustion du méthane, 1 mol de \\(\\ce{CH4}\\) consomme 2 mol de \\(\\ce{O2}\\) ; mais 16 g de \\(\\ce{CH4}\\) consomment 64 g de \\(\\ce{O2}\\), et non 32 g.",
          "Mélange stœchiométrique : \\(\\dfrac{n_0(\\ce{A})}{a} = \\dfrac{n_0(\\ce{B})}{b}\\) : les deux réactifs sont épuisés en même temps."
        ] },
      { h: "Réactif limitant et réactif en excès", p: "Le <b>réactif limitant</b> est celui qui est entièrement consommé le premier : c’est celui pour lequel \\(n_0 / \\text{coefficient}\\) est le plus petit. On a alors \\(x_{max} = \\min\\left(\\dfrac{n_0(\\ce{A})}{a}, \\dfrac{n_0(\\ce{B})}{b}\\right)\\). L’autre est le <b>réactif en excès</b> : il en reste en fin de réaction.",
        points: [
          "Exemple : \\(\\ce{2 H2 + O2 -> 2 H2O}\\) avec 3 mol de \\(\\ce{H2}\\) et 2 mol de \\(\\ce{O2}\\). \\(3/2 = 1{,}5\\) et \\(2/1 = 2\\) : \\(\\ce{H2}\\) est limitant, \\(x_{max} = 1{,}5\\) mol. On forme 3 mol d’eau et il reste \\(2 - 1{,}5 = 0{,}5\\) mol de \\(\\ce{O2}\\).",
          "Le réactif limitant n’est pas forcément celui dont la quantité est la plus petite : il faut diviser par les coefficients."
        ] },
      { h: "Rendement d’une réaction", p: "Le <b>rendement</b> compare la quantité de produit réellement obtenue à la quantité maximale (théorique) calculée à partir du réactif limitant : \\(\\eta = \\dfrac{n_{\\text{obtenu}}}{n_{\\text{théorique}}}\\) (ou avec les masses), exprimé en %. Il est toujours ≤ 100 %.",
        points: [
          "Exemple : la synthèse d’un ester à partir de 1,0 mol d’acide et 1,0 mol d’alcool donne 0,67 mol d’ester : \\(\\eta = 67\\) %.",
          "Causes d’un rendement inférieur à 100 % : réaction limitée (équilibre), réactions parasites, pertes lors de la purification."
        ] },
      { h: "Pièges classiques", points: [
          "Raisonner en masses avec les coefficients stœchiométriques : les coefficients sont des rapports de <b>moles</b>.",
          "Calculer le rendement à partir du réactif en excès au lieu du réactif limitant.",
          "Oublier de vérifier la conservation de la charge quand l’équation contient des ions."
        ] }
    ]
  },
  {
    d: 3,
    o: ["3.3", "3.4"],
    title: "Solutions : préparation, dilution et mélanges",
    summary: "Préparer une solution par dissolution, diluer, mélanger deux solutions et calculer toutes les concentrations utiles.",
    sections: [
      { h: "Préparation d’une solution par dissolution", p: "Pour préparer un volume V de solution de concentration C d’un soluté de masse molaire M, on pèse \\(m = C \\times V \\times M\\), on l’introduit dans une <b>fiole jaugée</b>, on dissout dans un peu de solvant puis on complète jusqu’au trait de jauge et on homogénéise.",
        points: [
          "Exemple : 250 mL de NaCl à 0,20 mol·L⁻¹ : \\(n = 0{,}20 \\times 0{,}250 = 0{,}050\\) mol, \\(m = 0{,}050 \\times 58{,}5 \\approx 2{,}9\\) g.",
          "Pour un solide ionique, chaque ion a sa propre concentration : \\(\\ce{CaCl2}\\) à C donne \\([\\ce{Ca^2+}] = C\\) et \\([\\ce{Cl-}] = 2C\\)."
        ] },
      { h: "Dilution", p: "Lors d’une <b>dilution</b>, la quantité de soluté se conserve : \\(C_0 V_0 = C_1 V_1\\) (0 : solution mère ; 1 : solution fille). Le <b>facteur de dilution</b> vaut \\(F = \\dfrac{C_0}{C_1} = \\dfrac{V_1}{V_0}\\).",
        points: [
          "Exemple : 10,0 mL d’une solution à 1,0 mol·L⁻¹ introduits dans une fiole de 100,0 mL complétée à l’eau → \\(C_1 = 0{,}10\\) mol·L⁻¹ (F = 10).",
          "Matériel : pipette jaugée pour prélever \\(V_0\\), fiole jaugée pour \\(V_1\\).",
          "Attention : ajouter 90 mL d’eau à 10 mL donne un volume final de 100 mL (F = 10), pas de 90 mL."
        ] },
      { h: "Mélange de solutions", points: [
          "Sans réaction chimique, chaque soluté est dilué dans le volume total (on suppose les volumes additifs) : \\([\\ce{A}] = \\dfrac{C_1 V_1}{V_1 + V_2}\\).",
          "Si les deux solutions contiennent le même soluté : \\(C = \\dfrac{C_1 V_1 + C_2 V_2}{V_1 + V_2}\\).",
          "Exemple : 100 mL de NaCl à 0,10 mol·L⁻¹ + 300 mL de NaCl à 0,50 mol·L⁻¹ → \\(C = \\dfrac{0{,}010 + 0{,}150}{0{,}400} = 0{,}40\\) mol·L⁻¹.",
          "S’il y a une réaction (acide + base par exemple), il faut d’abord faire le bilan de matière."
        ] },
      { h: "Calculs de concentrations : les autres expressions", points: [
          "<b>Pourcentage massique</b> (titre massique) : \\(w = \\dfrac{m_{\\text{soluté}}}{m_{\\text{solution}}}\\).",
          "Avec la masse volumique \\(\\rho\\) de la solution : \\(C_m = w \\times \\rho\\) puis \\(C = \\dfrac{w \\times \\rho}{M}\\).",
          "Exemple : acide chlorhydrique commercial à 37 % en masse, \\(\\rho = 1{,}19\\) kg·L⁻¹ = 1 190 g·L⁻¹ : \\(C_m = 0{,}37 \\times 1\\,190 \\approx 440\\) g·L⁻¹, \\(C = 440 / 36{,}5 \\approx 12\\) mol·L⁻¹.",
          "Conversions médicales : une glycémie de 1,0 g·L⁻¹ = 100 mg·dL⁻¹ ≈ 5,6 mmol·L⁻¹."
        ] },
      { h: "Pièges classiques", points: [
          "Pour tout calcul de concentrations après dilution, utiliser le volume final et non le volume d’eau ajouté.",
          "Oublier le coefficient des ions (\\(\\ce{Na2SO4}\\) à C : \\([\\ce{Na+}] = 2C\\)).",
          "Oublier que le volume doit être en litres dans \\(n = C \\times V\\) quand C est en mol·L⁻¹.",
          "Vérification de cohérence : une solution fille est toujours <b>moins</b> concentrée que la solution mère ; un mélange a une concentration comprise entre celles des deux solutions (même soluté)."
        ] }
    ]
  },

  // ===================== Domaine 4 — Thermodynamique =====================
  {
    d: 4,
    o: ["4.1", "4.2"],
    title: "Système, variables d’état et premier principe",
    summary: "Système et état thermodynamique, variables d’état (T, P, V), travail, chaleur, énergie interne et enthalpie.",
    sections: [
      { h: "Système et état thermodynamique", p: "Le <b>système</b> est la partie de l’univers que l’on étudie ; le reste est le milieu extérieur.",
        points: [
          "Système <b>ouvert</b> : échange de la matière et de l’énergie (une cellule vivante). <b>Fermé</b> : échange de l’énergie mais pas de matière (un tube scellé). <b>Isolé</b> : aucun échange (idéalement, un calorimètre parfait).",
          "L’<b>état thermodynamique</b> d’un système est décrit par des <b>variables d’état</b> : <b>température</b> T, <b>pression</b> P, <b>volume</b> V, quantité de matière n.",
          "Variables <b>extensives</b> (proportionnelles à la taille du système, additives) : V, n, m, U, H, S, G. Variables <b>intensives</b> (indépendantes de la taille) : T, P, concentration.",
          "Une <b>fonction d’état</b> ne dépend que de l’état du système : sa variation entre deux états ne dépend pas du chemin suivi (U, H, S, G)."
        ] },
      { h: "Température, pression, volume", points: [
          "<b>Température</b> absolue en kelvins : \\(T(\\text{K}) = \\theta(°\\text{C}) + 273{,}15\\). 37 °C = 310 K. Toutes les formules de thermodynamique utilisent T en K.",
          "<b>Pression</b> en pascals : 1 bar = \\(10^5\\) Pa ; 1 atm = 101 325 Pa = 760 mmHg.",
          "<b>Volume</b> en m³ dans le Système international : 1 L = \\(10^{-3}\\) m³.",
          "Gaz parfait : \\(PV = nRT\\) avec \\(R = 8{,}314\\) J·mol⁻¹·K⁻¹.",
          "Transformations : isotherme (T constante), isobare (P constante), isochore (V constant), adiabatique (pas d’échange de chaleur)."
        ] },
      { h: "Travail et chaleur", p: "Le <b>travail</b> W et la <b>chaleur</b> Q sont deux modes de transfert d’énergie. Convention : une énergie <b>reçue</b> par le système est comptée <b>positivement</b>, une énergie cédée négativement.",
        points: [
          "Travail des forces de pression (pression extérieure constante) : \\(W = -P_{ext}\\,\\Delta V\\). Un gaz qui se détend (\\(\\Delta V \\gt 0\\)) fournit du travail : \\(W \\lt 0\\).",
          "Chaleur (transfert thermique) liée à un écart de température : \\(Q = m\\,c\\,\\Delta T\\), avec pour l’eau \\(c = 4{,}18\\) J·g⁻¹·K⁻¹.",
          "W et Q ne sont <b>pas</b> des fonctions d’état : ils dépendent du chemin suivi."
        ] },
      { h: "Énergie interne et enthalpie", points: [
          "<b>Énergie interne</b> U : énergie totale microscopique du système (fonction d’état). Premier principe : \\(\\Delta U = W + Q\\). Pour un système isolé, \\(\\Delta U = 0\\).",
          "À volume constant (pas de travail des forces de pression) : \\(\\Delta U = Q_V\\).",
          "<b>Enthalpie</b> : \\(H = U + PV\\). À pression constante : \\(\\Delta H = Q_P\\). C’est la grandeur adaptée à la chimie et au vivant, qui travaillent le plus souvent à pression atmosphérique.",
          "Pour une réaction mettant en jeu des gaz : \\(\\Delta H = \\Delta U + \\Delta n_{gaz} RT\\)."
        ] },
      { h: "Pièges classiques", points: [
          "Oublier de convertir les °C en K (sauf pour une différence : \\(\\Delta T\\) a la même valeur en °C et en K).",
          "Se tromper de signe : énergie cédée par le système = négative.",
          "Dire que le travail ou la chaleur sont des fonctions d’état.",
          "Appliquer \\(\\Delta H = Q\\) hors d’une transformation isobare."
        ] }
    ]
  },
  {
    d: 4,
    o: ["4.3"],
    title: "Thermochimie : enthalpies de réaction et loi de Hess",
    summary: "Réactions exothermiques et endothermiques, enthalpie standard de réaction et de formation, loi de Hess, énergies de liaison.",
    sections: [
      { h: "Réactions exothermiques et réactions endothermiques", points: [
          "<b>Réaction exothermique</b> : \\(\\Delta_r H \\lt 0\\), elle libère de la chaleur vers l’extérieur (combustions, neutralisation d’un acide fort par une base forte : \\(\\Delta_r H \\approx -57\\) kJ·mol⁻¹).",
          "<b>Réaction endothermique</b> : \\(\\Delta_r H \\gt 0\\), elle absorbe de la chaleur (fusion de la glace, dissolution du nitrate d’ammonium dans l’eau, utilisée dans les poches de froid instantané).",
          "Le signe de \\(\\Delta_r H\\) dit si la réaction dégage ou absorbe de la chaleur, pas si elle est spontanée."
        ] },
      { h: "Enthalpie de réaction et enthalpie standard de formation", p: "L’<b>enthalpie de réaction</b> \\(\\Delta_r H\\) (kJ·mol⁻¹) est la variation d’enthalpie pour un avancement d’une mole de la réaction telle qu’elle est écrite. L’état standard correspond à \\(P° = 1\\) bar, chaque constituant étant pur (ou à 1 mol·L⁻¹ pour un soluté) ; la température est précisée, souvent 298 K.",
        points: [
          "L’<b>enthalpie standard de formation</b> \\(\\Delta_f H°\\) d’un composé est l’enthalpie de la réaction qui forme 1 mol de ce composé à partir des corps simples dans leur état standard.",
          "\\(\\Delta_f H° = 0\\) pour un corps simple dans son état standard de référence : \\(\\ce{O2(g)}\\), \\(\\ce{H2(g)}\\), \\(\\ce{N2(g)}\\), C graphite. Mais \\(\\Delta_f H°(\\ce{O3}) \\ne 0\\).",
          "\\(\\Delta_r H° = \\sum \\nu_i\\,\\Delta_f H°(\\text{produits}) - \\sum \\nu_j\\,\\Delta_f H°(\\text{réactifs})\\)."
        ] },
      { h: "Loi de Hess", p: "L’enthalpie étant une fonction d’état, la <b>loi de Hess</b> dit que \\(\\Delta_r H\\) ne dépend pas du chemin : on peut combiner des équations connues pour obtenir celle qui nous intéresse.",
        points: [
          "Inverser une réaction change le signe de \\(\\Delta_r H\\) ; multiplier une équation par k multiplie \\(\\Delta_r H\\) par k.",
          "Exemple : \\(\\ce{C(gr) + O2 -> CO2}\\) : \\(\\Delta H_1 = -393{,}5\\) kJ·mol⁻¹ ; \\(\\ce{CO + 1/2 O2 -> CO2}\\) : \\(\\Delta H_2 = -283{,}0\\) kJ·mol⁻¹. Pour \\(\\ce{C(gr) + 1/2 O2 -> CO}\\) : \\(\\Delta H = \\Delta H_1 - \\Delta H_2 = -110{,}5\\) kJ·mol⁻¹.",
          "Avec les <b>énergies de liaison</b> (réactions en phase gazeuse) : \\(\\Delta_r H \\approx \\sum E(\\text{liaisons rompues}) - \\sum E(\\text{liaisons formées})\\). Pour \\(\\ce{H2 + Cl2 -> 2 HCl}\\) : \\(436 + 243 - 2 \\times 432 = -185\\) kJ·mol⁻¹."
        ] },
      { h: "Exemple résolu : combustion du méthane", p: "Données : \\(\\Delta_f H°(\\ce{CH4(g)}) = -74{,}8\\) ; \\(\\Delta_f H°(\\ce{CO2(g)}) = -393{,}5\\) ; \\(\\Delta_f H°(\\ce{H2O(l)}) = -285{,}8\\) kJ·mol⁻¹. Pour \\(\\ce{CH4 + 2 O2 -> CO2 + 2 H2O(l)}\\) : \\(\\Delta_r H° = [-393{,}5 + 2 \\times (-285{,}8)] - [-74{,}8 + 2 \\times 0] = -965{,}1 + 74{,}8 = -890{,}3\\) kJ·mol⁻¹. La réaction est fortement exothermique." },
      { h: "Pièges classiques", points: [
          "Oublier de multiplier les \\(\\Delta_f H°\\) par les coefficients stœchiométriques.",
          "Inverser l’ordre : avec les \\(\\Delta_f H°\\) c’est « produits − réactifs », avec les énergies de liaison c’est « rompues − formées ».",
          "Ne pas tenir compte de l’état physique : \\(\\Delta_f H°(\\ce{H2O(l)}) = -285{,}8\\) mais \\(\\Delta_f H°(\\ce{H2O(g)}) = -241{,}8\\) kJ·mol⁻¹.",
          "Oublier de changer le signe quand on inverse une équation dans un cycle de Hess."
        ] }
    ]
  },
  {
    d: 4,
    o: ["4.4"],
    title: "Spontanéité : entropie et énergie libre de Gibbs",
    summary: "Entropie, second principe, énergie libre de Gibbs ΔG = ΔH − TΔS et critères de spontanéité.",
    sections: [
      { h: "Entropie", p: "L’<b>entropie</b> S mesure le désordre d’un système, c’est-à-dire le nombre d’états microscopiques compatibles avec son état macroscopique (\\(S = k_B \\ln \\Omega\\)). Unité : J·K⁻¹ (J·K⁻¹·mol⁻¹ pour une entropie molaire).",
        points: [
          "\\(S(\\text{gaz}) \\gg S(\\text{liquide}) \\gt S(\\text{solide})\\) ; S augmente avec la température.",
          "Troisième principe : l’entropie d’un cristal parfait est nulle à 0 K. Les entropies molaires standard \\(S°\\) sont donc absolues et <b>positives</b>, même pour les corps simples (contrairement aux \\(\\Delta_f H°\\)).",
          "\\(\\Delta_r S° = \\sum \\nu_i S°(\\text{produits}) - \\sum \\nu_j S°(\\text{réactifs})\\). Si la réaction augmente le nombre de moles de gaz, \\(\\Delta_r S \\gt 0\\).",
          "Second principe : pour une transformation spontanée, l’entropie de l’univers (système + extérieur) augmente ; pour un système isolé, \\(\\Delta S \\gt 0\\)."
        ] },
      { h: "Énergie libre de Gibbs", p: "À température et pression constantes, on utilise l’<b>énergie libre de Gibbs</b> (enthalpie libre) \\(G = H - TS\\), d’où \\(\\Delta_r G = \\Delta_r H - T\\,\\Delta_r S\\).",
        points: [
          "Lien avec l’équilibre : \\(\\Delta_r G° = -RT \\ln K\\) et \\(\\Delta_r G = \\Delta_r G° + RT \\ln Q\\).",
          "En biologie, les réactions défavorables sont couplées à des réactions très favorables, comme l’hydrolyse de l’ATP (\\(\\Delta G°' \\approx -30{,}5\\) kJ·mol⁻¹)."
        ] },
      { h: "Critères de spontanéité", points: [
          "\\(\\Delta_r G \\lt 0\\) : réaction <b>spontanée</b> dans le sens écrit (exergonique).",
          "\\(\\Delta_r G \\gt 0\\) : réaction non spontanée dans le sens écrit (endergonique) ; la réaction inverse est spontanée.",
          "\\(\\Delta_r G = 0\\) : le système est à l’<b>équilibre</b>.",
          "Les quatre cas : \\(\\Delta H \\lt 0, \\Delta S \\gt 0\\) : toujours spontanée. \\(\\Delta H \\gt 0, \\Delta S \\lt 0\\) : jamais spontanée. \\(\\Delta H \\lt 0, \\Delta S \\lt 0\\) : spontanée à basse température (\\(T \\lt \\Delta H / \\Delta S\\)). \\(\\Delta H \\gt 0, \\Delta S \\gt 0\\) : spontanée à haute température (\\(T \\gt \\Delta H / \\Delta S\\))."
        ] },
      { h: "Exemple résolu", p: "Décomposition du calcaire : \\(\\ce{CaCO3(s) -> CaO(s) + CO2(g)}\\), \\(\\Delta_r H° = +178\\) kJ·mol⁻¹, \\(\\Delta_r S° = +161\\) J·K⁻¹·mol⁻¹. On convertit \\(\\Delta S\\) en kJ : 0,161 kJ·K⁻¹·mol⁻¹. \\(\\Delta_r G° \\lt 0\\) si \\(T \\gt \\dfrac{178}{0{,}161} \\approx 1\\,106\\) K, soit environ 833 °C. À 298 K : \\(\\Delta_r G° = 178 - 298 \\times 0{,}161 \\approx +130\\) kJ·mol⁻¹ : non spontanée." },
      { h: "Pièges classiques", points: [
          "Mélanger J et kJ : \\(\\Delta S\\) est souvent donné en J·K⁻¹·mol⁻¹, \\(\\Delta H\\) en kJ·mol⁻¹.",
          "Utiliser des °C dans \\(T\\Delta S\\).",
          "Spontané ne veut pas dire rapide : la transformation du diamant en graphite est spontanée mais infiniment lente (c’est la cinétique qui décide de la vitesse).",
          "Une réaction exothermique n’est pas forcément spontanée, et une réaction endothermique peut l’être (si \\(T\\Delta S\\) l’emporte)."
        ] }
    ]
  },

  // ===================== Domaine 5 — Équilibres et acido-basique =====================
  {
    d: 5,
    o: ["5.1", "5.2"],
    title: "Équilibre chimique et principe de Le Châtelier",
    summary: "Réactions réversibles, constante d’équilibre, quotient réactionnel, sens d’évolution et déplacements d’équilibre.",
    sections: [
      { h: "Réactions réversibles et état d’équilibre", p: "Une <b>réaction réversible</b> peut se faire dans les deux sens : \\(\\ce{A + B <=> C + D}\\). À l’<b>état d’équilibre</b>, les vitesses des réactions directe et inverse sont égales : la composition ne varie plus, mais les réactions continuent (équilibre <b>dynamique</b>).",
        points: [
          "Une réaction est <b>totale</b> si le réactif limitant disparaît ; elle est <b>limitée</b> si l’avancement final reste inférieur à l’avancement maximal (taux d’avancement \\(\\tau = x_f / x_{max} \\lt 1\\))."
        ] },
      { h: "Constante d’équilibre et quotient réactionnel", p: "Pour \\(a\\,\\ce{A} + b\\,\\ce{B} \\ce{<=>} c\\,\\ce{C} + d\\,\\ce{D}\\), le <b>quotient réactionnel</b> vaut \\(Q = \\dfrac{[\\ce{C}]^c\\,[\\ce{D}]^d}{[\\ce{A}]^a\\,[\\ce{B}]^b}\\) (concentrations divisées par \\(c° = 1\\) mol·L⁻¹, pressions partielles divisées par \\(P° = 1\\) bar). Le solvant (eau) et les solides purs ont une activité égale à 1 : ils n’apparaissent pas.",
        points: [
          "La <b>constante d’équilibre</b> K est la valeur de Q à l’équilibre. Elle est sans unité et ne dépend <b>que de la température</b>.",
          "\\(K \\gt 10^4\\) : réaction quasi totale ; \\(K \\lt 10^{-4}\\) : réaction quasi inexistante.",
          "Réaction inverse : \\(K' = 1/K\\). Équation multipliée par n : \\(K' = K^n\\). Somme de deux réactions : produit des constantes.",
          "Lien thermodynamique : \\(\\Delta_r G = RT \\ln(Q/K)\\)."
        ] },
      { h: "Sens d’évolution et déplacement d’équilibre", points: [
          "\\(Q \\lt K\\) : le système évolue dans le sens <b>direct</b> (formation des produits).",
          "\\(Q \\gt K\\) : évolution dans le sens <b>inverse</b>.",
          "\\(Q = K\\) : équilibre, pas d’évolution.",
          "Un <b>déplacement d’équilibre</b> est l’évolution du système, après une perturbation, vers un nouvel état d’équilibre."
        ] },
      { h: "Principe de Le Châtelier", p: "Si l’on perturbe un système à l’équilibre, il évolue dans le sens qui <b>s’oppose</b> (modère) la perturbation.",
        points: [
          "<b>Influence de la concentration</b> : ajouter un réactif ou retirer un produit déplace l’équilibre dans le sens direct (Q diminue, K inchangée).",
          "<b>Influence de la pression</b> (gaz) : une augmentation de pression par diminution du volume déplace l’équilibre dans le sens qui <b>diminue le nombre de moles de gaz</b>. Sans effet si \\(\\Delta n_{gaz} = 0\\). L’ajout d’un gaz inerte à volume constant ne change rien.",
          "<b>Influence de la température</b> : une élévation de T favorise le sens <b>endothermique</b>. C’est le seul facteur qui modifie K : si \\(\\Delta_r H° \\gt 0\\), K augmente avec T ; si \\(\\Delta_r H° \\lt 0\\), K diminue.",
          "Un <b>catalyseur</b> ne déplace pas l’équilibre : il permet seulement de l’atteindre plus vite.",
          "Exemples : synthèse de l’ammoniac \\(\\ce{N2 + 3 H2 <=> 2 NH3}\\) (\\(\\Delta_r H° \\approx -92\\) kJ·mol⁻¹) favorisée par une forte pression et une basse température ; \\(\\ce{CO2 + H2O <=> H2CO3 <=> HCO3- + H+}\\) : une hyperventilation élimine du \\(\\ce{CO2}\\), l’équilibre se déplace vers la gauche, \\([\\ce{H+}]\\) diminue et le pH augmente (alcalose respiratoire)."
        ] },
      { h: "Pièges classiques", points: [
          "Croire qu’une variation de concentration ou de pression modifie K : elle modifie Q, et le système évolue pour retrouver K.",
          "Mettre l’eau solvant ou un solide dans l’expression de K.",
          "Oublier que la pression n’agit que sur les équilibres où le nombre de moles de gaz change.",
          "Le principe de Le Châtelier dit dans quel sens le système évolue, pas qu’il annule complètement la perturbation."
        ] }
    ]
  },
  {
    d: 5,
    o: ["5.3", "5.4"],
    title: "Acides, bases et pH",
    summary: "Définitions de Brønsted, couples acide/base, réactions acido-basiques, produit ionique de l’eau, pH, pOH et pH des acides et bases forts.",
    sections: [
      { h: "Acides, bases et couples acide/base", points: [
          "<b>Définition d’un acide</b> (Brønsted) : espèce capable de <b>céder</b> un proton \\(\\ce{H+}\\).",
          "<b>Définition d’une base</b> : espèce capable de <b>capter</b> un proton.",
          "Un <b>couple acide/base</b> AH/A⁻ est relié par la demi-équation \\(\\ce{AH <=> A- + H+}\\). Exemples : \\(\\ce{CH3COOH}/\\ce{CH3COO-}\\) ; \\(\\ce{NH4+}/\\ce{NH3}\\) ; \\(\\ce{H3O+}/\\ce{H2O}\\) ; \\(\\ce{H2O}/\\ce{HO-}\\) ; \\(\\ce{H2CO3}/\\ce{HCO3-}\\) ; \\(\\ce{HCO3-}/\\ce{CO3^2-}\\).",
          "Une espèce qui est l’acide d’un couple et la base d’un autre est un <b>ampholyte</b> (amphotère) : \\(\\ce{H2O}\\), \\(\\ce{HCO3-}\\), les acides aminés."
        ] },
      { h: "Réactions acido-basiques et produit ionique de l’eau", p: "Une <b>réaction acido-basique</b> est un transfert de proton de l’acide d’un couple vers la base d’un autre couple : \\(\\ce{AH1 + A2- -> A1- + AH2}\\). Exemple : \\(\\ce{CH3COOH + HO- -> CH3COO- + H2O}\\).",
        points: [
          "Autoprotolyse de l’eau : \\(\\ce{2 H2O <=> H3O+ + HO-}\\).",
          "<b>Produit ionique de l’eau</b> : \\(K_e = [\\ce{H3O+}][\\ce{HO-}] = 10^{-14}\\) à 25 °C (\\(pK_e = 14\\)). Il augmente avec la température : à 37 °C, \\(pK_e \\approx 13{,}6\\) et le pH neutre vaut environ 6,8.",
          "Dans toute solution aqueuse, \\([\\ce{H3O+}]\\) et \\([\\ce{HO-}]\\) sont liées par \\(K_e\\)."
        ] },
      { h: "pH et pOH : définition", points: [
          "<b>Définition</b> : \\(\\mathrm{pH} = -\\log[\\ce{H3O+}]\\) (concentration en mol·L⁻¹), soit \\([\\ce{H3O+}] = 10^{-\\mathrm{pH}}\\).",
          "<b>pOH</b> \\(= -\\log[\\ce{HO-}]\\). À 25 °C : \\(\\mathrm{pH} + \\mathrm{pOH} = pK_e = 14\\).",
          "À 25 °C : solution neutre pH = 7, acide pH < 7, basique pH > 7.",
          "Une baisse d’une unité de pH correspond à une concentration en \\(\\ce{H3O+}\\) multipliée par 10.",
          "Repères : sang artériel 7,35 à 7,45 ; suc gastrique environ 1 à 3."
        ] },
      { h: "Calcul du pH des acides et bases forts", p: "Un acide fort (HCl, \\(\\ce{HNO3}\\)) ou une base forte (NaOH, KOH) réagit totalement avec l’eau.",
        points: [
          "Acide fort à la concentration C : \\(\\mathrm{pH} = -\\log C\\). HCl à \\(10^{-2}\\) mol·L⁻¹ : pH = 2.",
          "Base forte à la concentration C : \\([\\ce{HO-}] = C\\), \\(\\mathrm{pH} = 14 + \\log C\\). NaOH à \\(10^{-3}\\) mol·L⁻¹ : pH = 11.",
          "Validité : C supérieure à environ \\(10^{-6}\\) mol·L⁻¹ (sinon l’autoprotolyse de l’eau n’est plus négligeable). HCl à \\(10^{-8}\\) mol·L⁻¹ a un pH légèrement inférieur à 7, pas égal à 8 !",
          "Diluer 10 fois un acide fort augmente le pH d’une unité ; diluer 10 fois une base forte le diminue d’une unité.",
          "Base libérant deux \\(\\ce{HO-}\\) : \\(\\ce{Ba(OH)2}\\) à C donne \\([\\ce{HO-}] = 2C\\)."
        ] },
      { h: "Pièges classiques", points: [
          "L’échelle de pH est logarithmique : pH 3 est 100 fois plus acide (en \\(\\ce{H3O+}\\)) que pH 5, pas « un peu plus ».",
          "pH = 7 n’est neutre qu’à 25 °C.",
          "Diluer une solution acide la rapproche de 7 sans jamais la rendre basique.",
          "Ne pas confondre acide <b>fort</b> (totalement dissocié) et acide <b>concentré</b>."
        ] }
    ]
  },
  {
    d: 5,
    o: ["5.5"],
    title: "Acides et bases faibles",
    summary: "Constante d’acidité Ka, pKa, relation pH/pKa, domaines de prédominance et pH des solutions d’acides et de bases faibles.",
    sections: [
      { h: "Constante d’acidité Ka et pKa", p: "Un acide faible ne réagit que partiellement avec l’eau : \\(\\ce{AH + H2O <=> A- + H3O+}\\). La <b>constante d’acidité</b> vaut \\(K_a = \\dfrac{[\\ce{A-}][\\ce{H3O+}]}{[\\ce{AH}]}\\), et \\(pK_a = -\\log K_a\\).",
        points: [
          "Plus le Ka est grand (pKa petit), plus l’acide est fort et plus sa base conjuguée est faible.",
          "Pour la base conjuguée : \\(K_a \\times K_b = K_e\\), soit \\(pK_a + pK_b = 14\\) à 25 °C.",
          "Valeurs de pKa à 25 °C : \\(\\ce{CH3COOH}/\\ce{CH3COO-}\\) 4,8 ; acide lactique 3,9 ; \\(\\ce{H2CO3}/\\ce{HCO3-}\\) 6,4 ; \\(\\ce{H2PO4-}/\\ce{HPO4^2-}\\) 7,2 ; \\(\\ce{NH4+}/\\ce{NH3}\\) 9,2 ; \\(\\ce{HCO3-}/\\ce{CO3^2-}\\) 10,3."
        ] },
      { h: "Relation pH/pKa et domaines de prédominance", p: "En passant au logarithme : \\(\\mathrm{pH} = pK_a + \\log\\dfrac{[\\ce{A-}]}{[\\ce{AH}]}\\).",
        points: [
          "pH < pKa : la forme acide AH prédomine. pH > pKa : la forme basique A⁻ prédomine. pH = pKa : \\([\\ce{AH}] = [\\ce{A-}]\\).",
          "À pH = pKa − 1, \\([\\ce{AH}] = 10\\,[\\ce{A-}]\\) ; à pH = pKa + 2, \\([\\ce{A-}] = 100\\,[\\ce{AH}]\\).",
          "Application : au pH sanguin (7,4), l’acide lactique (pKa 3,9) est presque entièrement sous forme lactate."
        ] },
      { h: "pH d’un acide faible et d’une base faible", points: [
          "Acide faible de concentration C : \\(\\mathrm{pH} = \\tfrac{1}{2}(pK_a - \\log C)\\).",
          "Base faible de concentration C : \\(\\mathrm{pH} = 7 + \\tfrac{1}{2}(pK_a + \\log C)\\) (pKa du couple de la base).",
          "Exemple : acide éthanoïque à 0,10 mol·L⁻¹ (pKa 4,8) : \\(\\mathrm{pH} = \\tfrac{1}{2}(4{,}8 + 1) = 2{,}9\\). Ammoniac à 0,10 mol·L⁻¹ (pKa 9,2) : \\(\\mathrm{pH} = 7 + \\tfrac{1}{2}(9{,}2 - 1) = 11{,}1\\).",
          "Le coefficient de dissociation \\(\\alpha = [\\ce{A-}]/C\\) augmente quand on dilue (loi de dilution d’Ostwald)."
        ] },
      { h: "Approximation et domaines de validité", points: [
          "La formule de l’acide faible suppose que l’acide est <b>peu dissocié</b> : on vérifie a posteriori que \\(\\mathrm{pH} \\le pK_a - 1\\) (dans l’exemple : 2,9 ≤ 3,8, validé).",
          "Elle suppose aussi l’autoprotolyse de l’eau négligeable : pH ≤ 6,5.",
          "Pour une base faible, on vérifie \\(\\mathrm{pH} \\ge pK_a + 1\\) (11,1 ≥ 10,2, validé) et pH ≥ 7,5.",
          "Si l’approximation ne tient pas (acide assez fort ou très dilué), il faut résoudre l’équation du second degré complète."
        ] },
      { h: "Pièges classiques", points: [
          "Oublier le facteur ½ dans la formule du pH d’un acide faible.",
          "Utiliser le pKb au lieu du pKa dans la formule de la base faible.",
          "Appliquer la formule sans vérifier le domaine de validité.",
          "Confondre « acide faible » (partiellement dissocié) et « acide dilué » (peu concentré)."
        ] }
    ]
  },
  {
    d: 5,
    o: ["5.6"],
    title: "Solutions tampons",
    summary: "Définition et fonctionnement d’un tampon, équation de Henderson-Hasselbalch et tampons de l’organisme.",
    sections: [
      { h: "Définition", p: "Une <b>solution tampon</b> est une solution dont le pH varie peu lors de l’ajout modéré d’un acide, d’une base, ou lors d’une dilution modérée. Elle contient un <b>acide faible et sa base conjuguée</b> en quantités comparables (par exemple \\(\\ce{CH3COOH}\\) + \\(\\ce{CH3COONa}\\))." },
      { h: "Fonctionnement", points: [
          "Un ajout d’acide est consommé par la base du tampon : \\(\\ce{A- + H3O+ -> AH + H2O}\\).",
          "Un ajout de base est consommé par l’acide du tampon : \\(\\ce{AH + HO- -> A- + H2O}\\).",
          "Le rapport \\([\\ce{A-}]/[\\ce{AH}]\\) ne change que peu, donc le pH non plus.",
          "Le <b>pouvoir tampon</b> est maximal quand \\([\\ce{A-}] = [\\ce{AH}]\\), soit pH = pKa ; la zone efficace est pKa ± 1. Il augmente avec la concentration totale du tampon.",
          "On peut préparer un tampon en neutralisant partiellement un acide faible par une base forte (par exemple jusqu’à la demi-équivalence)."
        ] },
      { h: "Calcul du pH : équation de Henderson-Hasselbalch", p: "\\(\\mathrm{pH} = pK_a + \\log\\dfrac{[\\text{base}]}{[\\text{acide}]}\\). Comme acide et base sont dans le même volume, on peut utiliser directement les quantités de matière.",
        points: [
          "Exemple : 0,10 mol de \\(\\ce{CH3COOH}\\) + 0,10 mol de \\(\\ce{CH3COO-}\\) (pKa 4,8) → pH = 4,8.",
          "On ajoute 0,010 mol de HCl : acide 0,11 mol, base 0,09 mol → \\(\\mathrm{pH} = 4{,}8 + \\log(0{,}09/0{,}11) \\approx 4{,}8 - 0{,}09 = 4{,}71\\). Le même ajout dans 1 L d’eau pure aurait fait passer le pH de 7 à 2."
        ] },
      { h: "Tampons de l’organisme", points: [
          "<b>Tampon bicarbonate</b> (principal tampon du plasma) : \\(\\mathrm{pH} = 6{,}1 + \\log\\dfrac{[\\ce{HCO3-}]}{0{,}03 \\times P_{CO_2}}\\) avec \\(P_{CO_2}\\) en mmHg et \\([\\ce{HCO3-}]\\) en mmol·L⁻¹. Valeurs normales : 24 mmol·L⁻¹ et 40 mmHg → rapport 24/1,2 = 20 → pH = 6,1 + 1,3 = 7,4.",
          "Son efficacité vient de ce que le système est ouvert : les poumons régulent \\(P_{CO_2}\\), les reins régulent \\([\\ce{HCO3-}]\\).",
          "<b>Tampon phosphate</b> \\(\\ce{H2PO4-}/\\ce{HPO4^2-}\\) (pKa ≈ 7,2 en solution diluée, plus bas dans les conditions physiologiques), important dans les cellules et les urines.",
          "<b>Protéines</b> : groupes imidazole de l’histidine (hémoglobine notamment).",
          "pH sanguin < 7,35 : acidose ; > 7,45 : alcalose."
        ] },
      { h: "Pièges classiques", points: [
          "Un tampon n’est pas forcément neutre : son pH est voisin du pKa de son couple.",
          "Inverser le rapport : c’est base/acide dans le logarithme.",
          "Le pH d’un tampon dépend du <b>rapport</b> des concentrations, pas de leurs valeurs absolues ; c’est le pouvoir tampon qui dépend de la concentration.",
          "Un acide fort et sa base conjuguée (HCl + NaCl) ne forment pas un tampon."
        ] }
    ]
  },
  {
    d: 5,
    o: ["5.7"],
    title: "Dosages acido-basiques",
    summary: "Principe du dosage, équivalence, courbes de titrage, demi-équivalence et choix d’un indicateur coloré.",
    sections: [
      { h: "Dosage acido-basique : principe", p: "Un <b>dosage acido-basique</b> (titrage) détermine la concentration inconnue d’une solution (le titré) en la faisant réagir avec une solution de concentration connue (le titrant), versée à la burette. La réaction support doit être <b>totale, rapide et unique</b>. On suit le pH au pH-mètre, ou on repère un changement de couleur d’un indicateur." },
      { h: "Équivalence", p: "À l’<b>équivalence</b>, les réactifs ont été introduits dans les proportions stœchiométriques : le réactif titré et le réactif titrant sont tous deux entièrement consommés.",
        points: [
          "Pour une réaction 1 : 1 (\\(\\ce{AH + HO- -> A- + H2O}\\)) : \\(C_A V_A = C_B V_E\\).",
          "Pour un diacide totalement titré par la soude (\\(\\ce{H2SO4 + 2 HO- -> SO4^2- + 2 H2O}\\)) : \\(2\\,C_A V_A = C_B V_E\\).",
          "Exemple : 20,0 mL d’acide éthanoïque titrés par NaOH à 0,100 mol·L⁻¹, \\(V_E = 16{,}0\\) mL → \\(C_A = 0{,}100 \\times 16{,}0 / 20{,}0 = 0{,}0800\\) mol·L⁻¹."
        ] },
      { h: "Courbes de titrage", points: [
          "<b>Acide fort par base forte</b> : pH initial = −log C ; grand saut de pH ; pH à l’équivalence = 7 (solution de NaCl, neutre).",
          "<b>Acide faible par base forte</b> : pH initial plus élevé ; zone tampon où le pH varie lentement ; à la <b>demi-équivalence</b> (\\(V = V_E/2\\)), \\([\\ce{AH}] = [\\ce{A-}]\\) donc <b>pH = pKa</b> ; pH à l’équivalence > 7 (la base conjuguée est présente seule).",
          "<b>Base faible par acide fort</b> (\\(\\ce{NH3}\\) par HCl) : pH à l’équivalence < 7 ; à la demi-équivalence, pH = pKa (9,2).",
          "Repérage de l’équivalence : méthode des tangentes parallèles, ou maximum de la dérivée \\(\\mathrm{d}pH/\\mathrm{d}V\\)."
        ] },
      { h: "Interprétation et indicateurs colorés", points: [
          "Un indicateur coloré est un couple acide/base dont les deux formes ont des couleurs différentes ; sa <b>zone de virage</b> vaut environ \\(pK_{a,ind} \\pm 1\\).",
          "On choisit un indicateur dont la zone de virage contient le pH à l’équivalence : hélianthine (3,1 à 4,4), bleu de bromothymol (6,0 à 7,6), phénolphtaléine (8,2 à 10, incolore → rose).",
          "Acide éthanoïque titré par la soude : pH à l’équivalence ≈ 8 à 9 → phénolphtaléine.",
          "Un polyacide donne plusieurs sauts de pH si ses pKa sont suffisamment éloignés (écart d’environ 4 unités ou plus).",
          "La courbe permet de lire : \\(V_E\\) (donc la concentration), le pKa (à la demi-équivalence), la force de l’acide (pH initial et pH à l’équivalence)."
        ] },
      { h: "Pièges classiques", points: [
          "pH = 7 à l’équivalence seulement pour un titrage fort/fort.",
          "pH = pKa à la <b>demi</b>-équivalence, pas à l’équivalence.",
          "Oublier les coefficients stœchiométriques pour un polyacide ou une polybase.",
          "Le volume équivalent ne dépend pas de la force de l’acide, seulement de sa quantité : un acide faible et un acide fort de même concentration et même volume donnent le même \\(V_E\\)."
        ] }
    ]
  },

  // ===================== Domaine 6 — Oxydo-réduction =====================
  {
    d: 6,
    o: ["6.1", "6.2"],
    title: "Réactions d’oxydoréduction et nombres d’oxydation",
    summary: "Oxydation, réduction, oxydant, réducteur, couples redox ; détermination et évolution des nombres d’oxydation.",
    sections: [
      { h: "Oxydation, réduction, oxydant, réducteur", points: [
          "<b>Oxydation</b> : perte d’électrons. <b>Réduction</b> : gain d’électrons.",
          "<b>Oxydant</b> : espèce capable de <b>capter</b> des électrons ; au cours de la réaction, il est <b>réduit</b>.",
          "<b>Réducteur</b> : espèce capable de <b>céder</b> des électrons ; au cours de la réaction, il est <b>oxydé</b>.",
          "Moyen mnémotechnique : « l’oxydant est réduit, le réducteur est oxydé »."
        ] },
      { h: "Couples redox et réactions d’oxydoréduction", p: "Un <b>couple redox</b> Ox/Red est défini par la demi-équation \\(\\ce{Ox + n e- <=> Red}\\). Une réaction d’oxydoréduction est un <b>transfert d’électrons</b> du réducteur d’un couple vers l’oxydant d’un autre couple.",
        points: [
          "Couples classiques : \\(\\ce{Cu^2+}/\\ce{Cu}\\), \\(\\ce{Zn^2+}/\\ce{Zn}\\), \\(\\ce{Fe^3+}/\\ce{Fe^2+}\\), \\(\\ce{MnO4-}/\\ce{Mn^2+}\\), \\(\\ce{Cr2O7^2-}/\\ce{Cr^3+}\\), \\(\\ce{I2}/\\ce{I-}\\), \\(\\ce{O2}/\\ce{H2O}\\), \\(\\ce{H+}/\\ce{H2}\\), \\(\\ce{NAD+}/\\ce{NADH}\\).",
          "Exemple : \\(\\ce{Zn + Cu^2+ -> Zn^2+ + Cu}\\) : le zinc est oxydé (réducteur), les ions cuivre(II) sont réduits (oxydant).",
          "<b>Dismutation</b> : une même espèce est à la fois oxydée et réduite, par exemple \\(\\ce{2 H2O2 -> 2 H2O + O2}\\)."
        ] },
      { h: "Nombres d’oxydation : détermination", p: "Le <b>nombre d’oxydation</b> (n.o., en chiffres romains) est la charge fictive que porterait un atome si les électrons de chaque liaison étaient attribués à l’atome le plus électronégatif. Règles de <b>détermination</b> :",
        points: [
          "Corps simple : n.o. = 0 (\\(\\ce{O2}\\), \\(\\ce{Fe}\\), \\(\\ce{H2}\\)). Ion monoatomique : n.o. = charge de l’ion.",
          "La somme des n.o. est égale à la charge globale de l’espèce (0 pour une molécule neutre).",
          "O : −II (sauf peroxydes comme \\(\\ce{H2O2}\\) : −I). H : +I (sauf hydrures métalliques comme NaH : −I). F : −I. Alcalins : +I ; alcalino-terreux : +II.",
          "Exemples : Mn dans \\(\\ce{MnO4-}\\) : \\(x + 4(-2) = -1\\) → +VII. Cr dans \\(\\ce{Cr2O7^2-}\\) : \\(2x - 14 = -2\\) → +VI. S dans \\(\\ce{SO4^2-}\\) : +VI. N dans \\(\\ce{NH3}\\) : −III ; dans \\(\\ce{NO3-}\\) : +V.",
          "Carbone : −IV dans \\(\\ce{CH4}\\), −II dans \\(\\ce{CH3OH}\\), 0 dans \\(\\ce{HCHO}\\), +II dans \\(\\ce{HCOOH}\\), +IV dans \\(\\ce{CO2}\\)."
        ] },
      { h: "Évolution lors d’une réaction", points: [
          "Le n.o. de l’élément <b>oxydé augmente</b> ; celui de l’élément <b>réduit diminue</b>.",
          "La variation totale des n.o. à la hausse est égale à la variation totale à la baisse (conservation des électrons échangés).",
          "Une réaction acido-basique ne modifie aucun n.o. : c’est un moyen de la distinguer d’une réaction redox.",
          "En chimie organique, le passage alcool → aldéhyde → acide carboxylique correspond à une augmentation du n.o. du carbone fonctionnel : ce sont des oxydations."
        ] },
      { h: "Pièges classiques", points: [
          "Dire que l’oxydant « s’oxyde » : c’est l’inverse.",
          "Oublier les exceptions de l’oxygène (peroxydes) et de l’hydrogène (hydrures).",
          "Oublier de tenir compte de la charge de l’ion dans la somme des n.o.",
          "Dans \\(\\ce{Cr2O7^2-}\\), le n.o. +VI est celui de <b>chaque</b> atome de chrome."
        ] }
    ]
  },
  {
    d: 6,
    o: ["6.3"],
    title: "Équilibrer les réactions d’oxydoréduction",
    summary: "Méthode des demi-équations électroniques en milieu acide et basique, puis combinaison en équation bilan.",
    sections: [
      { h: "Demi-équations électroniques en milieu acide", p: "Méthode pour écrire la <b>demi-équation électronique</b> d’un couple Ox/Red :",
        points: [
          "1. Écrire Ox et Red de part et d’autre du signe =.",
          "2. Équilibrer l’élément principal (autre que O et H).",
          "3. Équilibrer O en ajoutant des molécules \\(\\ce{H2O}\\).",
          "4. Équilibrer H en ajoutant des ions \\(\\ce{H+}\\).",
          "5. Équilibrer les charges en ajoutant des électrons \\(\\ce{e-}\\) du côté de l’oxydant.",
          "Exemple : \\(\\ce{MnO4- + 8 H+ + 5 e- = Mn^2+ + 4 H2O}\\). Vérification : charges à gauche −1 + 8 − 5 = +2, à droite +2 ; le n.o. de Mn passe de +VII à +II, soit 5 électrons."
        ] },
      { h: "Demi-équations à connaître", points: [
          "\\(\\ce{Cr2O7^2- + 14 H+ + 6 e- = 2 Cr^3+ + 7 H2O}\\)",
          "\\(\\ce{O2 + 4 H+ + 4 e- = 2 H2O}\\)",
          "\\(\\ce{Fe^3+ + e- = Fe^2+}\\) ; \\(\\ce{I2 + 2 e- = 2 I-}\\) ; \\(\\ce{Cu^2+ + 2 e- = Cu}\\)",
          "\\(\\ce{H2O2 + 2 H+ + 2 e- = 2 H2O}\\)",
          "\\(\\ce{NAD+ + H+ + 2 e- = NADH}\\)",
          "\\(\\ce{CH3COOH + 4 H+ + 4 e- = CH3CH2OH + H2O}\\)",
          "En milieu basique : on écrit d’abord la demi-équation en milieu acide, puis on ajoute autant de \\(\\ce{HO-}\\) que de \\(\\ce{H+}\\) des deux côtés (\\(\\ce{H+ + HO- -> H2O}\\))."
        ] },
      { h: "Équations d’oxydoréduction", p: "Pour obtenir l’<b>équation d’oxydoréduction</b> bilan : on multiplie chaque demi-équation pour que le nombre d’électrons cédés soit égal au nombre d’électrons captés, on additionne, puis on simplifie (\\(\\ce{H+}\\), \\(\\ce{H2O}\\)). Les électrons n’apparaissent jamais dans le bilan.",
        points: [
          "\\(\\ce{MnO4- + 5 Fe^2+ + 8 H+ -> Mn^2+ + 5 Fe^3+ + 4 H2O}\\) (charges : +17 de chaque côté).",
          "\\(\\ce{Cr2O7^2- + 6 I- + 14 H+ -> 2 Cr^3+ + 3 I2 + 7 H2O}\\) (charges : +6 de chaque côté).",
          "Éthylotest chimique : \\(\\ce{2 Cr2O7^2- + 3 CH3CH2OH + 16 H+ -> 4 Cr^3+ + 3 CH3COOH + 11 H2O}\\) (12 électrons échangés)."
        ] },
      { h: "Exemple résolu : dosage des ions fer(II)", p: "10,0 mL d’une solution de \\(\\ce{Fe^2+}\\) sont titrés en milieu acide par du permanganate de potassium à 0,020 mol·L⁻¹ ; l’équivalence est obtenue pour 12,5 mL. D’après l’équation, à l’équivalence \\(n(\\ce{Fe^2+}) = 5\\,n(\\ce{MnO4-})\\). \\(n(\\ce{MnO4-}) = 0{,}020 \\times 12{,}5 \\times 10^{-3} = 2{,}5 \\times 10^{-4}\\) mol, donc \\(n(\\ce{Fe^2+}) = 1{,}25 \\times 10^{-3}\\) mol et \\(C = 1{,}25 \\times 10^{-3} / 0{,}0100 = 0{,}125\\) mol·L⁻¹." },
      { h: "Pièges classiques", points: [
          "Ajouter des électrons du côté du réducteur : ils sont toujours du côté de l’oxydant.",
          "Oublier de vérifier la conservation des charges.",
          "Laisser des \\(\\ce{H+}\\) dans une équation en milieu basique.",
          "Oublier le rapport stœchiométrique à l’équivalence d’un dosage redox (1 \\(\\ce{MnO4-}\\) pour 5 \\(\\ce{Fe^2+}\\))."
        ] }
    ]
  },
  {
    d: 6,
    o: ["6.4"],
    title: "Électrochimie : piles, potentiels et équation de Nernst",
    summary: "Fonctionnement d’une pile, potentiel d’électrode, force électromotrice, équation de Nernst et applications biologiques.",
    sections: [
      { h: "Les piles", p: "Une <b>pile</b> convertit l’énergie d’une réaction d’oxydoréduction spontanée en énergie électrique, en séparant les deux couples dans deux demi-piles reliées par un pont salin. Exemple : pile Daniell \\(\\ce{Zn | Zn^2+ || Cu^2+ | Cu}\\).",
        points: [
          "<b>Anode</b> : électrode où se produit l’<b>oxydation</b> (pôle − d’une pile). <b>Cathode</b> : électrode où se produit la <b>réduction</b> (pôle + d’une pile). Moyen mnémotechnique : anode/oxydation (deux voyelles), cathode/réduction (deux consonnes).",
          "Dans le circuit extérieur, les électrons circulent de l’anode (−) vers la cathode (+) ; le courant conventionnel circule en sens inverse.",
          "Le pont salin assure la neutralité électrique des solutions (conduction par les ions)."
        ] },
      { h: "Potentiel d’électrode", p: "Chaque couple a un <b>potentiel d’électrode</b> E, mesuré par rapport à l’électrode standard à hydrogène (ESH, \\(E° = 0{,}00\\) V). Le <b>potentiel standard</b> \\(E°\\) correspond aux conditions standard (concentrations 1 mol·L⁻¹, 1 bar).",
        points: [
          "Plus \\(E°\\) est élevé, plus l’oxydant du couple est fort ; plus \\(E°\\) est bas, plus le réducteur est fort.",
          "Valeurs (V) : \\(\\ce{F2}/\\ce{F-}\\) +2,87 ; \\(\\ce{MnO4-}/\\ce{Mn^2+}\\) +1,51 ; \\(\\ce{Cl2}/\\ce{Cl-}\\) +1,36 ; \\(\\ce{O2}/\\ce{H2O}\\) +1,23 ; \\(\\ce{Ag+}/\\ce{Ag}\\) +0,80 ; \\(\\ce{Fe^3+}/\\ce{Fe^2+}\\) +0,77 ; \\(\\ce{I2}/\\ce{I-}\\) +0,54 ; \\(\\ce{Cu^2+}/\\ce{Cu}\\) +0,34 ; \\(\\ce{H+}/\\ce{H2}\\) 0,00 ; \\(\\ce{Fe^2+}/\\ce{Fe}\\) −0,44 ; \\(\\ce{Zn^2+}/\\ce{Zn}\\) −0,76 ; \\(\\ce{Na+}/\\ce{Na}\\) −2,71.",
          "Règle du gamma : la réaction spontanée a lieu entre l’oxydant le plus fort et le réducteur le plus fort."
        ] },
      { h: "Force électromotrice", points: [
          "<b>Force électromotrice</b> (fem) d’une pile : \\(e = E_{cathode} - E_{anode} = E_+ - E_-\\), toujours positive pour une pile qui débite.",
          "Pile Daniell standard : \\(e° = 0{,}34 - (-0{,}76) = 1{,}10\\) V.",
          "Lien avec la thermodynamique : \\(\\Delta_r G = -nF e\\) et \\(\\Delta_r G° = -nF e°\\), avec \\(F = 96\\,485\\) C·mol⁻¹ (constante de Faraday). Une fem positive correspond à \\(\\Delta_r G \\lt 0\\) : réaction spontanée.",
          "Quand la pile est « usée », le système a atteint l’équilibre : e = 0."
        ] },
      { h: "Équation de Nernst", p: "Pour \\(\\ce{Ox + n e- <=> Red}\\) : \\(E = E° + \\dfrac{RT}{nF}\\ln\\dfrac{[\\ce{Ox}]}{[\\ce{Red}]}\\), soit à 25 °C : \\(E = E° + \\dfrac{0{,}059}{n}\\log\\dfrac{[\\ce{Ox}]}{[\\ce{Red}]}\\) (souvent arrondi à 0,06).",
        points: [
          "Les solides et l’eau n’apparaissent pas ; les \\(\\ce{H+}\\) apparaissent avec leur coefficient : le potentiel de \\(\\ce{MnO4-}/\\ce{Mn^2+}\\) dépend du pH : \\(E = E° + \\dfrac{0{,}059}{5}\\log\\dfrac{[\\ce{MnO4-}][\\ce{H+}]^8}{[\\ce{Mn^2+}]}\\).",
          "Exemple : \\(\\ce{Cu^2+}/\\ce{Cu}\\) avec \\([\\ce{Cu^2+}] = 0{,}010\\) mol·L⁻¹ : \\(E = 0{,}34 + \\dfrac{0{,}059}{2}\\log(10^{-2}) \\approx 0{,}34 - 0{,}06 = 0{,}28\\) V.",
          "Une concentration d’oxydant 10 fois plus grande augmente E de \\(0{,}059/n\\) V."
        ] },
      { h: "Applications biologiques et médicales", points: [
          "<b>Chaîne respiratoire</b> : les électrons passent du NADH (\\(E°' = -0{,}32\\) V à pH 7) au dioxygène (\\(E°' = +0{,}82\\) V). \\(\\Delta E°' = 1{,}14\\) V, d’où \\(\\Delta G°' = -2 \\times 96\\,485 \\times 1{,}14 \\approx -220\\) kJ·mol⁻¹, énergie utilisée pour synthétiser l’ATP.",
          "<b>Potentiel de membrane</b> : l’équation de Nernst appliquée à un ion donne son potentiel d’équilibre de part et d’autre de la membrane, \\(E_{ion} = \\dfrac{RT}{zF}\\ln\\dfrac{[\\text{ion}]_{ext}}{[\\text{ion}]_{int}}\\) (environ −90 mV pour \\(\\ce{K+}\\)).",
          "Capteurs : électrode de verre du pH-mètre, glucomètres à électrode enzymatique (glucose oxydase), piles lithium-iode des stimulateurs cardiaques.",
          "Antioxydants : la vitamine C (acide ascorbique) est un réducteur qui neutralise des espèces oxydantes."
        ] }
    ]
  },

  // ===================== Domaine 7 — Chimie organique =====================
  {
    d: 7,
    o: ["7.1"],
    title: "Le carbone : hybridation, liaisons et représentations",
    summary: "Carbone tétravalent, hybridations sp³, sp² et sp, liaisons simples et multiples, représentations moléculaires.",
    sections: [
      { h: "Le carbone tétravalent", p: "Le carbone (Z = 6, \\(\\mathrm{1s^2\\,2s^2\\,2p^2}\\)) possède 4 électrons de valence : dans les molécules organiques, il forme <b>4 liaisons covalentes</b>. On dit qu’il est <b>tétravalent</b>. Il peut se lier à d’autres carbones (chaînes linéaires, ramifiées, cycles) et à H, O, N, S, halogènes. Il ne porte pas de doublet non liant dans les molécules neutres usuelles." },
      { h: "Hybridation", p: "L’<b>hybridation</b> combine les orbitales 2s et 2p du carbone en orbitales hybrides équivalentes qui expliquent la géométrie observée.",
        points: [
          "<b>sp³</b> : 4 orbitales hybrides, géométrie tétraédrique, angles de 109,5° ; 4 liaisons σ. Carbone d’un alcane (\\(\\ce{CH4}\\), \\(\\ce{C2H6}\\)).",
          "<b>sp²</b> : 3 orbitales hybrides + 1 orbitale p non hybridée ; géométrie trigonale plane, 120°. Carbone engagé dans une double liaison (éthène, C=O, benzène).",
          "<b>sp</b> : 2 orbitales hybrides + 2 orbitales p ; géométrie linéaire, 180°. Carbone d’une triple liaison (éthyne) ou portant deux doubles liaisons (carbone central de \\(\\ce{CO2}\\)).",
          "Astuce : compter les « domaines » (liaisons σ + doublets non liants) autour de l’atome : 4 → sp³, 3 → sp², 2 → sp. L’oxygène de l’eau et l’azote de l’ammoniac sont décrits comme sp³."
        ] },
      { h: "Liaisons simples et multiples", points: [
          "<b>Liaison simple</b> : une liaison σ (recouvrement axial). <b>Libre rotation</b> autour de l’axe → conformations.",
          "<b>Liaison double</b> : une σ + une π (recouvrement latéral des orbitales p). La liaison π <b>bloque la rotation</b> : c’est l’origine de l’isomérie Z/E.",
          "<b>Liaison triple</b> : une σ + deux π.",
          "Longueurs : C–C 154 pm > C=C 134 pm > C≡C 120 pm. Énergies : C–C ≈ 347, C=C ≈ 614, C≡C ≈ 839 kJ·mol⁻¹. Une double liaison est plus forte qu’une simple mais moins de deux fois plus forte : la liaison π est plus faible que la σ, donc plus réactive."
        ] },
      { h: "Représentations moléculaires", points: [
          "<b>Formule topologique</b> : la chaîne carbonée est un zigzag ; chaque sommet et chaque extrémité est un carbone ; les H portés par les C ne sont pas dessinés ; les hétéroatomes (O, N…) et leurs H sont écrits.",
          "<b>Représentation de Cram</b> : traits pleins dans le plan, triangle plein vers l’avant, triangle hachuré vers l’arrière.",
          "<b>Projection de Newman</b> : on regarde selon l’axe d’une liaison C–C ; elle montre les <b>conformations</b> (décalée, la plus stable ; éclipsée).",
          "<b>Projection de Fischer</b> : chaîne carbonée verticale, carbone le plus oxydé en haut ; les liaisons horizontales pointent vers l’avant, les verticales vers l’arrière. Utilisée pour les oses et les acides aminés.",
          "Conformations (par simple rotation, interconvertibles) ≠ configurations (il faut rompre une liaison pour passer de l’une à l’autre)."
        ] },
      { h: "Pièges classiques", points: [
          "Un carbone sp² n’est pas forcément lié à un autre carbone par la double liaison : le carbone d’un groupe C=O est aussi sp².",
          "Dans une formule topologique, oublier les H implicites : chaque carbone en a autant qu’il faut pour avoir 4 liaisons.",
          "En Fischer, les traits horizontaux viennent vers l’observateur.",
          "Une double liaison n’est pas « deux fois une simple » : σ + π."
        ] }
    ]
  },
  {
    d: 7,
    o: ["7.2"],
    title: "Les fonctions organiques",
    summary: "Hydrocarbures (alcane, alcène, alcyne) et groupes caractéristiques : alcool, éther, aldéhyde, cétone, acide carboxylique, ester, amine, amide.",
    sections: [
      { h: "Hydrocarbures", points: [
          "<b>Alcane</b> : uniquement des liaisons simples, formule générale \\(\\ce{C_nH_{2n+2}}\\) (chaîne ouverte). Carbones sp³, peu réactifs. Exemple : propane \\(\\ce{C3H8}\\).",
          "<b>Alcène</b> : au moins une double liaison C=C, \\(\\ce{C_nH_{2n}}\\) (une seule C=C, chaîne ouverte). Exemple : éthène \\(\\ce{CH2=CH2}\\). Un cycloalcane a la même formule générale \\(\\ce{C_nH_{2n}}\\).",
          "<b>Alcyne</b> : une triple liaison C≡C, \\(\\ce{C_nH_{2n-2}}\\). Exemple : éthyne \\(\\ce{HC#CH}\\).",
          "Les alcènes et alcynes sont dits <b>insaturés</b>."
        ] },
      { h: "Fonctions oxygénées", points: [
          "<b>Alcool</b> R–OH, groupe hydroxyle sur un carbone sp³. Classe selon le nombre de carbones liés au carbone porteur du OH : <b>primaire</b> (1), <b>secondaire</b> (2), <b>tertiaire</b> (3). Éthanol : primaire ; propan-2-ol : secondaire ; 2-méthylpropan-2-ol : tertiaire.",
          "<b>Éther</b> R–O–R′ : un oxygène entre deux carbones (méthoxyméthane \\(\\ce{CH3-O-CH3}\\)).",
          "<b>Aldéhyde</b> R–CHO : groupe carbonyle C=O en <b>bout de chaîne</b> (le carbone porte un H). Exemple : éthanal \\(\\ce{CH3CHO}\\).",
          "<b>Cétone</b> R–CO–R′ : groupe carbonyle <b>entre deux carbones</b>. Exemple : propanone (acétone) \\(\\ce{CH3COCH3}\\).",
          "<b>Acide carboxylique</b> R–COOH : groupe carboxyle ; acide faible (pKa ≈ 4 à 5). Exemple : acide éthanoïque (acétique) \\(\\ce{CH3COOH}\\).",
          "<b>Ester</b> R–COO–R′ : dérivé d’un acide et d’un alcool. Exemple : éthanoate d’éthyle \\(\\ce{CH3COOCH2CH3}\\)."
        ] },
      { h: "Fonctions azotées", points: [
          "<b>Amine</b> : dérivée de \\(\\ce{NH3}\\). Classe selon le nombre de carbones liés à <b>l’azote</b> : primaire R–NH₂, secondaire R₂NH, tertiaire R₃N. Les amines sont <b>basiques</b> (doublet non liant de N ; pKa de \\(\\ce{R-NH3+}/\\ce{R-NH2}\\) ≈ 10 à 11).",
          "<b>Amide</b> R–CO–NH₂ (ou –CO–NHR, –CO–NR₂) : carbonyle lié à un azote. Le doublet de N est délocalisé vers C=O : un amide n’est <b>pas basique</b>. La liaison peptidique est une fonction amide.",
          "Attention : la classe d’une amine se lit sur l’azote, celle d’un alcool sur le carbone porteur du OH."
        ] },
      { h: "Tableau de reconnaissance", points: [
          "C=O présent dans : aldéhyde, cétone, acide carboxylique, ester, amide.",
          "C=O avec H → aldéhyde ; C=O entre deux C → cétone ; C=O + OH → acide ; C=O + O–C → ester ; C=O + N → amide.",
          "O simple : entre C et H → alcool ; entre deux C → éther.",
          "N sans C=O voisin → amine.",
          "Propriétés : alcools, acides carboxyliques, amines primaires et amides peuvent former des liaisons hydrogène entre eux ; les éthers, esters, aldéhydes et cétones seulement avec l’eau (accepteurs)."
        ] },
      { h: "Pièges classiques", points: [
          "Confondre ester (R–COO–R′) et éther (R–O–R′).",
          "Confondre amine (basique) et amide (non basique).",
          "Appliquer la classe « par l’azote » aux alcools : \\(\\ce{(CH3)3C-NH2}\\) est une amine <b>primaire</b> (un seul C sur N) alors que \\(\\ce{(CH3)3C-OH}\\) est un alcool <b>tertiaire</b>.",
          "Un carbonyle en bout de chaîne est un aldéhyde, pas une cétone."
        ] }
    ]
  },
  {
    d: 7,
    o: ["7.3"],
    title: "Nomenclature des composés organiques",
    summary: "Chaîne principale, substituants, numérotation et noms des principales fonctions selon l’IUPAC.",
    sections: [
      { h: "Chaîne principale", p: "La <b>chaîne principale</b> est la plus longue chaîne carbonée continue qui porte le groupe caractéristique principal. Attention : elle n’est pas forcément dessinée en ligne droite. Son nombre de carbones donne la racine :",
        points: [
          "1 méth- ; 2 éth- ; 3 prop- ; 4 but- ; 5 pent- ; 6 hex- ; 7 hept- ; 8 oct- ; 9 non- ; 10 déc-.",
          "Le suffixe indique la saturation et la fonction principale : -ane, -ène, -yne, -ol, -al, -one, acide …-oïque, etc."
        ] },
      { h: "Substituants", points: [
          "Les <b>substituants</b> sont les groupes greffés sur la chaîne principale, nommés en préfixe : méthyl, éthyl, propyl, isopropyl (1-méthyléthyl) ; fluoro, chloro, bromo, iodo ; hydroxy, amino, oxo (quand la fonction n’est pas principale).",
          "Préfixes multiplicatifs : di-, tri-, tétra- (2,2-diméthylpropane).",
          "Ordre <b>alphabétique</b> des substituants, sans tenir compte des préfixes multiplicatifs : 3-éthyl-2-méthylhexane (é avant m)."
        ] },
      { h: "Numérotation", points: [
          "On numérote la chaîne principale de façon à donner le plus petit indice : 1) au groupe caractéristique principal ; 2) aux liaisons multiples ; 3) à l’ensemble des substituants (au premier point de différence).",
          "Exemples : \\(\\ce{CH3-CH(CH3)-CH2-CH3}\\) → 2-méthylbutane (et non 3-méthylbutane) ; \\(\\ce{CH3-CH(OH)-CH2-CH3}\\) → butan-2-ol ; \\(\\ce{CH2=CH-CH2-CH3}\\) → but-1-ène.",
          "L’indice se place juste devant la terminaison qu’il concerne : pent-2-ène, propan-2-ol."
        ] },
      { h: "Nomenclature des principales fonctions", points: [
          "Alcool : suffixe <b>-ol</b> (préfixe hydroxy-). Éthanol, propan-2-ol.",
          "Aldéhyde : suffixe <b>-al</b>, le carbone fonctionnel est toujours C1 (pas d’indice). Méthanal (formaldéhyde), éthanal, propanal \\(\\ce{CH3CH2CHO}\\).",
          "Cétone : suffixe <b>-one</b> (préfixe oxo-). Propanone (acétone), butanone \\(\\ce{CH3COCH2CH3}\\), pentan-3-one.",
          "Acide carboxylique : <b>acide …-oïque</b> (C1 = carbone du COOH). Acide méthanoïque (formique), acide éthanoïque (acétique).",
          "Ester : <b>…-oate de …-yle</b> : la partie acide donne le « -oate », la partie alcool le « -yle ». \\(\\ce{CH3COOCH2CH3}\\) : éthanoate d’éthyle.",
          "Amine : suffixe <b>-amine</b> (préfixe amino-). \\(\\ce{CH3CH2NH2}\\) : éthanamine. Amide : suffixe <b>-amide</b>. \\(\\ce{CH3CONH2}\\) : éthanamide.",
          "Éther : alcoxyalcane. \\(\\ce{CH3OCH3}\\) : méthoxyméthane ; \\(\\ce{CH3OCH2CH3}\\) : méthoxyéthane.",
          "Ordre de priorité pour choisir la fonction principale : acide carboxylique > ester > amide > aldéhyde > cétone > alcool > amine. Exemple : \\(\\ce{HO-CH2-CH2-COOH}\\) est l’acide 3-hydroxypropanoïque."
        ] },
      { h: "Pièges classiques", points: [
          "Choisir la chaîne dessinée horizontalement au lieu de la plus longue.",
          "Inverser les deux parties du nom d’un ester : dans « éthanoate de méthyle » \\(\\ce{CH3COOCH3}\\), l’acide est l’acide éthanoïque et l’alcool le méthanol.",
          "Mettre un indice à un aldéhyde (« propan-1-al ») : inutile, il est toujours en position 1.",
          "Classer les substituants par ordre de position au lieu de l’ordre alphabétique."
        ] }
    ]
  },
  {
    d: 7,
    o: ["7.4"],
    title: "Isomérie de constitution, chiralité et énantiomères",
    summary: "Isomères de constitution, stéréoisomérie, conformations et configurations, chiralité, carbone asymétrique, énantiomères.",
    sections: [
      { h: "Isomérie de constitution", p: "Des <b>isomères</b> ont la même formule brute mais des structures différentes. Des <b>isomères de constitution</b> diffèrent par l’enchaînement de leurs atomes :",
        points: [
          "<b>De chaîne</b> : squelette carboné différent (butane et 2-méthylpropane, \\(\\ce{C4H10}\\)).",
          "<b>De position</b> : même fonction à une place différente (propan-1-ol et propan-2-ol).",
          "<b>De fonction</b> : fonctions différentes (éthanol et méthoxyméthane, \\(\\ce{C2H6O}\\) ; propanal et propanone, \\(\\ce{C3H6O}\\))."
        ] },
      { h: "Stéréoisomérie", p: "Des <b>stéréoisomères</b> ont le même enchaînement mais une disposition différente des atomes dans l’espace.",
        points: [
          "Les <b>conformations</b> s’obtiennent par simple rotation autour de liaisons simples ; elles s’interconvertissent très vite à température ambiante et ne sont pas des isomères isolables.",
          "Les <b>configurations</b> ne peuvent s’interconvertir qu’en rompant des liaisons : ce sont de vrais stéréoisomères, <b>énantiomères</b> ou <b>diastéréoisomères</b>."
        ] },
      { h: "Chiralité et carbone asymétrique", points: [
          "Un objet est <b>chiral</b> s’il n’est pas superposable à son image dans un miroir (comme nos mains).",
          "Un <b>carbone asymétrique</b> (noté C*) est un carbone tétraédrique (sp³) lié à <b>quatre substituants tous différents</b>. Un carbone sp², un \\(\\ce{CH2}\\) ou un \\(\\ce{CH3}\\) ne peuvent pas être asymétriques.",
          "Une molécule qui possède <b>un seul</b> C* est toujours chirale.",
          "Une molécule qui possède un plan ou un centre de symétrie est achirale.",
          "Une molécule à n carbones asymétriques possède au plus \\(2^n\\) stéréoisomères de configuration."
        ] },
      { h: "Énantiomères", p: "Deux <b>énantiomères</b> sont images l’un de l’autre dans un miroir et non superposables.",
        points: [
          "Ils ont les mêmes propriétés physiques (températures de fusion et d’ébullition, solubilité) et chimiques vis-à-vis de réactifs non chiraux.",
          "Ils ont un <b>pouvoir rotatoire</b> opposé : l’un est dextrogyre (+), l’autre lévogyre (−). Un <b>mélange racémique</b> (50/50) est optiquement inactif.",
          "Ils peuvent avoir des <b>propriétés biologiques très différentes</b>, car récepteurs et enzymes sont chiraux : l’ibuprofène actif est l’énantiomère (S) ; pour la thalidomide, un énantiomère est sédatif et l’autre tératogène (et ils s’interconvertissent dans l’organisme).",
          "Série D/L (projection de Fischer) : les acides aminés des protéines sont de la série L, les oses naturels de la série D."
        ] },
      { h: "Pièges classiques", points: [
          "Le signe (+) ou (−) du pouvoir rotatoire n’a <b>aucun lien</b> avec les descripteurs R/S ou D/L : il se mesure, il ne se déduit pas de la formule.",
          "Deux conformations ne sont pas deux isomères.",
          "Un carbone lié à deux groupes identiques (deux \\(\\ce{CH3}\\) par exemple) n’est pas asymétrique.",
          "Butan-2-ol possède un C* (C2 : H, OH, \\(\\ce{CH3}\\), \\(\\ce{C2H5}\\)) ; propan-2-ol n’en a pas (deux \\(\\ce{CH3}\\))."
        ] }
    ]
  },
  {
    d: 7,
    o: ["7.4"],
    title: "Diastéréoisomères et configurations R/S et Z/E",
    summary: "Règles de Cahn-Ingold-Prelog, configuration R/S, diastéréoisomères, composés méso, épimères et isomérie Z/E.",
    sections: [
      { h: "Règles de priorité de Cahn-Ingold-Prelog (CIP)", points: [
          "On classe les substituants par <b>numéro atomique décroissant</b> de l’atome directement lié au centre étudié.",
          "En cas d’égalité, on compare les atomes de la sphère suivante (ensemble des trois atomes liés), et ainsi de suite.",
          "Une liaison double compte comme deux liaisons simples (atome dupliqué).",
          "Exemples : –SH > –OH > –NH₂ > –COOH > –CHO > –CH₂OH > –CH₃ > –H. Pour les groupes carbonés : COOH (O,O,O) > CHO (O,O,H) > CH₂OH (O,H,H) > CH₃ (H,H,H)."
        ] },
      { h: "Configuration R/S", points: [
          "On oriente la molécule pour que le substituant de priorité 4 (le plus faible, souvent H) soit <b>vers l’arrière</b>.",
          "On parcourt 1 → 2 → 3 : sens horaire → <b>R</b> (rectus) ; sens antihoraire → <b>S</b> (sinister).",
          "Si le groupe 4 est dirigé vers l’avant (trait horizontal en Fischer, triangle plein en Cram), on lit le sens puis on <b>inverse</b> le résultat.",
          "Échanger deux substituants inverse la configuration.",
          "Application : les acides aminés L des protéines sont de configuration S, sauf la L-cystéine qui est R (le groupe \\(\\ce{CH2SH}\\) est prioritaire sur COOH à cause du soufre). La glycine n’a pas de C*."
        ] },
      { h: "Diastéréoisomères", p: "Des <b>diastéréoisomères</b> sont des stéréoisomères qui ne sont <b>pas</b> énantiomères. Contrairement aux énantiomères, ils ont des propriétés physiques et chimiques <b>différentes</b> et sont séparables par les méthodes usuelles.",
        points: [
          "Molécule à deux C* : (2R,3R) et (2S,3S) sont énantiomères ; (2R,3R) et (2R,3S) sont diastéréoisomères.",
          "<b>Composé méso</b> : molécule possédant des C* mais aussi un plan de symétrie interne, donc achirale. L’acide tartrique n’a que 3 stéréoisomères (deux énantiomères et une forme méso) au lieu de \\(2^2 = 4\\).",
          "<b>Épimères</b> : diastéréoisomères qui ne diffèrent que par la configuration d’un seul C* parmi plusieurs. D-glucose et D-galactose (épimères en C4) ; D-glucose et D-mannose (en C2)."
        ] },
      { h: "Isomérie Z/E", p: "Une double liaison C=C bloque la rotation. Si <b>chaque</b> carbone de la double liaison porte deux substituants différents, il existe deux diastéréoisomères :",
        points: [
          "<b>Z</b> (zusammen, ensemble) : les deux substituants prioritaires (règles CIP) sont du même côté ; <b>E</b> (entgegen, opposés) : de part et d’autre.",
          "Exemple : (Z)-but-2-ène et (E)-but-2-ène. Le but-1-ène n’a pas d’isomérie Z/E (le C1 porte deux H).",
          "En biologie : les acides gras insaturés naturels sont surtout de configuration <b>cis (Z)</b> ; le fumarate du cycle de Krebs est l’isomère E, le maléate l’isomère Z.",
          "Cis/trans et Z/E coïncident souvent mais pas toujours : Z/E se fonde sur les priorités CIP."
        ] },
      { h: "Pièges classiques", points: [
          "Oublier d’inverser quand le groupe de priorité 4 pointe vers l’observateur.",
          "Compter 4 stéréoisomères pour une molécule qui a une forme méso.",
          "Penser que des diastéréoisomères ont les mêmes propriétés physiques : c’est vrai des énantiomères seulement.",
          "Classer par masse du groupe au lieu du numéro atomique du premier atome : –CH₂Cl (Cl, H, H) est prioritaire sur –CH(CH₃)₂ (C, C, H)."
        ] }
    ]
  },
  {
    d: 7,
    o: ["7.5"],
    title: "Réactivité en chimie organique",
    summary: "Nucléophiles et électrophiles ; additions, substitutions, éliminations ; oxydation, réduction, hydrolyse et estérification.",
    sections: [
      { h: "Nucléophile et électrophile", points: [
          "Un <b>nucléophile</b> est une espèce <b>riche en électrons</b> (doublet non liant, charge négative ou liaison π) qui attaque un site pauvre en électrons : \\(\\ce{HO-}\\), \\(\\ce{H2O}\\), \\(\\ce{NH3}\\), amines, alcools, \\(\\ce{CN-}\\), halogénures.",
          "Un <b>électrophile</b> est une espèce <b>pauvre en électrons</b> (lacune, charge +, charge partielle δ+) : \\(\\ce{H+}\\), carbocations, carbone δ+ d’un groupe C=O, carbone lié à un halogène.",
          "Ces sites s’expliquent par la polarisation des liaisons : dans C=O et C–X (X = halogène), le carbone porte δ+.",
          "Dans un mécanisme, une flèche courbe part du doublet (nucléophile) et va vers l’atome qui le reçoit (électrophile)."
        ] },
      { h: "Réactions d’addition", p: "Une <b>réaction d’addition</b> ajoute des atomes sur une liaison multiple, qui devient simple.",
        points: [
          "Alcène + HBr → bromoalcane. <b>Règle de Markovnikov</b> : H se fixe sur le carbone le plus hydrogéné de la double liaison, via le carbocation le plus stable (propène + HBr → 2-bromopropane majoritaire).",
          "Hydratation d’un alcène (eau, catalyse acide) → alcool. Hydrogénation (H₂, catalyseur Ni, Pd ou Pt) → alcane. Addition de dibrome : décoloration de l’eau de brome, test des doubles liaisons.",
          "Addition nucléophile sur un groupe C=O : un alcool s’additionne sur un aldéhyde pour donner un hémiacétal (cyclisation du glucose)."
        ] },
      { h: "Réactions de substitution et réactions d’élimination", points: [
          "<b>Réaction de substitution</b> : un atome ou groupe est remplacé par un autre. Substitution nucléophile d’un halogénoalcane : \\(\\ce{R-Br + HO- -> R-OH + Br-}\\).",
          "<b>SN2</b> : une seule étape, \\(v = k[\\ce{RX}][\\ce{Nu}]\\), inversion de configuration (Walden), favorisée sur un carbone primaire. <b>SN1</b> : deux étapes via un carbocation, \\(v = k[\\ce{RX}]\\), racémisation, favorisée sur un carbone tertiaire.",
          "<b>Réaction d’élimination</b> : départ de deux atomes ou groupes portés par deux carbones voisins, avec formation d’une double liaison. Déshydratation d’un alcool (acide, chauffage) → alcène ; halogénoalcane + base forte à chaud → alcène.",
          "<b>Règle de Zaïtsev</b> : l’alcène le plus substitué (le plus stable) est majoritaire. Le butan-2-ol déshydraté donne surtout du but-2-ène.",
          "Substitution et élimination sont en compétition ; une température élevée et une base forte encombrée favorisent l’élimination."
        ] },
      { h: "Oxydation et réduction", points: [
          "<b>Oxydation</b> ménagée des alcools (permanganate, dichromate en milieu acide) : alcool primaire → aldéhyde → acide carboxylique ; alcool secondaire → cétone ; alcool tertiaire → pas d’oxydation ménagée.",
          "Dans le foie : éthanol → éthanal (alcool déshydrogénase, avec \\(\\ce{NAD+}\\)) → acide acétique.",
          "<b>Réduction</b> : aldéhyde → alcool primaire ; cétone → alcool secondaire (réducteurs \\(\\ce{NaBH4}\\), \\(\\ce{LiAlH4}\\) ; en biologie NADH). L’hydrogénation d’un alcène est aussi une réduction."
        ] },
      { h: "Estérification et hydrolyse", points: [
          "<b>Estérification</b> : acide carboxylique + alcool ⇌ ester + eau. Réaction <b>lente</b>, <b>limitée</b> (≈ 67 % d’ester pour un mélange équimolaire acide + alcool primaire), quasi athermique, catalysée par \\(\\ce{H+}\\).",
          "Pour améliorer le rendement : excès d’un réactif, ou élimination de l’eau (ou de l’ester) au fur et à mesure. Le catalyseur accélère mais ne change pas le rendement.",
          "<b>Hydrolyse</b> d’un ester : ester + eau ⇌ acide + alcool, réaction inverse de l’estérification, lente et limitée.",
          "<b>Saponification</b> : ester + \\(\\ce{HO-}\\) → ion carboxylate + alcool, réaction <b>totale</b> ; appliquée aux triglycérides, elle donne des savons.",
          "Autres hydrolyses importantes : liaisons amide (peptidiques) et liaisons glycosidiques, catalysées in vivo par des enzymes."
        ] }
    ]
  },

  // ===================== Domaine 8 — Chimie du vivant =====================
  {
    d: 8,
    o: ["8.1"],
    title: "Les acides aminés",
    summary: "Structure générale, classification, propriétés acido-basiques, forme zwitterionique, point isoélectrique et liaison peptidique.",
    sections: [
      { h: "Structure générale", p: "Un <b>α-acide aminé</b> possède, sur un même carbone (le carbone α), un groupe carboxyle –COOH, un groupe amine –NH₂, un hydrogène et une <b>chaîne latérale R</b> qui le caractérise.",
        points: [
          "20 acides aminés standard sont codés par le code génétique et entrent dans la composition des protéines.",
          "Tous sont chiraux (carbone α asymétrique) sauf la <b>glycine</b> (R = H). Ceux des protéines appartiennent à la série <b>L</b>.",
          "La proline est particulière : son azote est engagé dans un cycle (amine secondaire)."
        ] },
      { h: "Classification", p: "La <b>classification</b> la plus utilisée repose sur la chaîne latérale (elle varie un peu selon les manuels) :",
        points: [
          "<b>Apolaires (hydrophobes)</b> : glycine, alanine, valine, leucine, isoleucine, méthionine, proline, phénylalanine, tryptophane.",
          "<b>Polaires non chargés</b> : sérine, thréonine, cystéine, asparagine, glutamine, tyrosine.",
          "<b>Acides</b> (chargés − à pH 7) : aspartate, glutamate. <b>Basiques</b> (chargés + à pH 7) : lysine, arginine, histidine (partiellement protonée).",
          "Autres familles : aromatiques (Phe, Tyr, Trp, qui absorbent vers 280 nm pour Trp et Tyr) ; soufrés (Cys, Met) ; hydroxylés (Ser, Thr, Tyr).",
          "Acides aminés <b>essentiels</b> chez l’adulte (non synthétisés, apportés par l’alimentation) : His, Ile, Leu, Lys, Met, Phe, Thr, Trp, Val."
        ] },
      { h: "Propriétés acido-basiques et forme zwitterionique", points: [
          "Le groupe α-COOH a un pKa d’environ 2 ; le groupe α-NH₃⁺ un pKa d’environ 9 à 10.",
          "Aux pH intermédiaires (dont le pH physiologique), l’acide aminé existe sous <b>forme zwitterionique</b> (amphion) : \\(\\ce{H3N+-CHR-COO-}\\), de charge nette nulle pour un acide aminé à chaîne latérale neutre.",
          "En milieu très acide (pH < 2) : forme cationique \\(\\ce{H3N+-CHR-COOH}\\) (charge +1). En milieu très basique (pH > 10) : forme anionique \\(\\ce{H2N-CHR-COO-}\\) (charge −1).",
          "Les acides aminés sont des ampholytes ; à l’état solide, ce sont des solides ioniques à température de fusion élevée, solubles dans l’eau."
        ] },
      { h: "Point isoélectrique", p: "Le <b>point isoélectrique</b> (pHi) est le pH où la charge nette moyenne de la molécule est nulle.",
        points: [
          "Acide aminé à chaîne latérale non ionisable : \\(\\mathrm{pHi} = \\dfrac{pK_{a1} + pK_{a2}}{2}\\). Glycine (2,34 et 9,60) : pHi ≈ 5,97.",
          "Acide aminé acide : moyenne des deux pKa les plus bas. Acide aspartique (1,88 ; 3,65 ; 9,60) : pHi ≈ 2,77.",
          "Acide aminé basique : moyenne des deux pKa les plus hauts. Lysine (2,18 ; 8,95 ; 10,53) : pHi ≈ 9,74.",
          "Électrophorèse : à pH > pHi, la molécule est globalement négative et migre vers l’anode (+) ; à pH < pHi, positive, elle migre vers la cathode (−) ; à pH = pHi, elle ne migre pas."
        ] },
      { h: "Liaison peptidique", points: [
          "La <b>liaison peptidique</b> se forme par condensation du –COOH d’un acide aminé avec le –NH₂ du suivant, avec élimination d’une molécule d’eau : c’est une fonction <b>amide</b> –CO–NH–.",
          "Elle est <b>plane et rigide</b> (caractère partiel de double liaison par délocalisation du doublet de N), généralement en configuration trans. La rotation reste possible autour des liaisons Cα–N et Cα–C.",
          "Un peptide s’écrit de l’extrémité <b>N-terminale</b> (à gauche) vers l’extrémité C-terminale. n acides aminés sont reliés par n − 1 liaisons peptidiques.",
          "Avec deux acides aminés différents A et B, on peut former deux dipeptides : A-B et B-A."
        ] }
    ]
  },
  {
    d: 8,
    o: ["8.2"],
    title: "Peptides et protéines : structure et dénaturation",
    summary: "Structures primaire, secondaire, tertiaire et quaternaire ; interactions stabilisatrices ; dénaturation.",
    sections: [
      { h: "Structure primaire", p: "La <b>structure primaire</b> est la <b>séquence</b> des acides aminés, de l’extrémité N-terminale à l’extrémité C-terminale, reliés par des liaisons peptidiques covalentes. Elle est déterminée par le gène et contient l’information qui dicte le repliement de la protéine." },
      { h: "Structure secondaire", p: "La <b>structure secondaire</b> désigne les repliements locaux de la chaîne principale, stabilisés par des <b>liaisons hydrogène entre les groupes C=O et N–H du squelette</b> (pas des chaînes latérales).",
        points: [
          "<b>Hélice α</b> : hélice droite, 3,6 résidus par tour ; liaison H entre le C=O du résidu n et le N–H du résidu n + 4 ; chaînes latérales tournées vers l’extérieur. La proline la déstabilise.",
          "<b>Feuillet β</b> : brins étendus côte à côte, parallèles ou antiparallèles, reliés par des liaisons H entre brins.",
          "Coudes et boucles relient ces éléments."
        ] },
      { h: "Structures tertiaire et quaternaire", points: [
          "<b>Structure tertiaire</b> : repliement tridimensionnel complet d’une chaîne polypeptidique, dû aux interactions entre chaînes latérales parfois très éloignées dans la séquence. Les résidus hydrophobes sont regroupés au cœur de la protéine, les résidus polaires en surface.",
          "<b>Structure quaternaire</b> : association de plusieurs chaînes polypeptidiques (sous-unités). L’hémoglobine est un tétramère \\(\\alpha_2\\beta_2\\) ; la myoglobine, formée d’une seule chaîne, n’a pas de structure quaternaire."
        ] },
      { h: "Interactions stabilisatrices", points: [
          "<b>Liaisons hydrogène</b> (squelette et chaînes latérales).",
          "<b>Interactions hydrophobes</b> (effet hydrophobe) entre chaînes latérales apolaires.",
          "<b>Liaisons ioniques</b> (ponts salins) entre chaînes chargées, par exemple Lys⁺ et Asp⁻.",
          "<b>Forces de Van der Waals</b>.",
          "<b>Ponts disulfure</b> –S–S– entre deux cystéines : seule interaction <b>covalente</b> parmi elles (formation par oxydation, rupture par réduction)."
        ] },
      { h: "Dénaturation", points: [
          "La <b>dénaturation</b> est la perte des structures secondaire, tertiaire et quaternaire <b>sans rupture des liaisons peptidiques</b> : la structure primaire est conservée. La protéine perd sa fonction biologique.",
          "Agents dénaturants : chaleur, pH extrêmes, urée, détergents (SDS), solvants organiques ; les agents réducteurs (β-mercaptoéthanol) rompent en plus les ponts disulfure.",
          "Elle peut être réversible : dans l’expérience d’Anfinsen, la ribonucléase dénaturée retrouve sa structure et son activité quand on retire l’urée et le réducteur, ce qui montre que la séquence détermine le repliement.",
          "Ne pas confondre avec l’<b>hydrolyse</b>, qui coupe les liaisons peptidiques."
        ] }
    ]
  },
  {
    d: 8,
    o: ["8.3"],
    title: "Les glucides",
    summary: "Monosaccharides (glucose, fructose), cyclisation et anomérie, liaison glycosidique, disaccharides et polysaccharides.",
    sections: [
      { h: "Monosaccharides", p: "Les <b>monosaccharides</b> (oses) sont des polyhydroxyaldéhydes (<b>aldoses</b>) ou des polyhydroxycétones (<b>cétoses</b>), de formule \\(\\ce{(CH2O)_n}\\) avec n ≥ 3.",
        points: [
          "Selon le nombre de carbones : trioses (glycéraldéhyde, dihydroxyacétone), pentoses (ribose, désoxyribose), hexoses (glucose, galactose, mannose, fructose).",
          "Série <b>D ou L</b> : configuration du carbone asymétrique le plus éloigné du carbonyle ; OH à droite en projection de Fischer → D. Les oses naturels sont en majorité de la série D.",
          "<b>Glucose</b> : aldohexose \\(\\ce{C6H12O6}\\), 4 carbones asymétriques (C2 à C5) → \\(2^4 = 16\\) aldohexoses stéréoisomères. Principal carburant cellulaire ; glycémie à jeun ≈ 0,7 à 1,1 g·L⁻¹.",
          "<b>Fructose</b> : cétohexose \\(\\ce{C6H12O6}\\) (isomère de fonction du glucose), carbonyle en C2, 3 carbones asymétriques. Sucre des fruits et du miel."
        ] },
      { h: "Cyclisation et anomérie", points: [
          "En solution, les oses se cyclisent : un OH de la chaîne s’additionne sur le carbonyle (addition nucléophile) pour former un <b>hémiacétal</b> cyclique.",
          "Glucose : OH du C5 sur C1 → cycle à 6 (<b>pyranose</b>). Fructose : OH du C5 sur C2 → cycle à 5 (<b>furanose</b>, forme présente dans le saccharose).",
          "La cyclisation crée un nouveau carbone asymétrique, le <b>carbone anomérique</b> (C1 du glucose, C2 du fructose) : deux <b>anomères</b>, α et β. En représentation de Haworth pour un ose D : α = OH anomérique en bas, β = en haut.",
          "<b>Mutarotation</b> : dans l’eau, les deux anomères s’interconvertissent via la forme ouverte ; à l’équilibre, le D-glucose est à environ 36 % α et 64 % β.",
          "Un ose dont l’OH anomérique est libre est <b>réducteur</b> (il peut repasser sous forme ouverte)."
        ] },
      { h: "Liaison glycosidique et disaccharides", p: "La <b>liaison glycosidique</b> unit l’OH anomérique d’un ose à un OH d’un autre ose, avec élimination d’eau (formation d’un acétal). On précise l’anomère et les carbones reliés.",
        points: [
          "<b>Maltose</b> : Glc α(1→4) Glc, réducteur (issu de l’hydrolyse de l’amidon).",
          "<b>Lactose</b> : Gal β(1→4) Glc, réducteur (sucre du lait, hydrolysé par la lactase).",
          "<b>Saccharose</b> : Glc α(1→2)β Fru, <b>non réducteur</b> car les deux OH anomériques sont engagés dans la liaison.",
          "Les <b>disaccharides</b> sont hydrolysés par des enzymes spécifiques (maltase, lactase, saccharase) ou en milieu acide."
        ] },
      { h: "Polysaccharides", points: [
          "<b>Amidon</b> (réserve végétale) : amylose (Glc α(1→4), chaîne linéaire enroulée en hélice) + amylopectine (α(1→4) avec ramifications α(1→6)).",
          "<b>Glycogène</b> (réserve animale, foie et muscles) : α(1→4) avec ramifications α(1→6) plus fréquentes que dans l’amylopectine : structure très compacte, mobilisation rapide.",
          "<b>Cellulose</b> (structure des parois végétales) : Glc β(1→4), chaînes linéaires associées par liaisons H en fibres. L’être humain n’a pas d’enzyme capable d’hydrolyser la liaison β(1→4) du glucose : c’est une fibre alimentaire.",
          "Ces trois <b>polysaccharides</b> sont des homopolymères du glucose : ce qui les distingue est le type de liaison glycosidique."
        ] },
      { h: "Pièges classiques", points: [
          "D/L ne dit rien du pouvoir rotatoire : le D-fructose est lévogyre.",
          "Le fructose est un cétose mais il est réducteur (il s’isomérise en milieu basique) ; le saccharose, lui, n’est pas réducteur.",
          "Glucose et fructose ont la même formule brute : ce sont des isomères de fonction, pas des épimères.",
          "Amidon et cellulose sont faits de glucose : seule la liaison (α ou β) change, et elle change tout."
        ] }
    ]
  },
  {
    d: 8,
    o: ["8.4"],
    title: "Les lipides et les membranes biologiques",
    summary: "Acides gras saturés et insaturés, triglycérides, phospholipides et organisation des membranes biologiques.",
    sections: [
      { h: "Acides gras", p: "Les <b>acides gras</b> sont des acides carboxyliques à longue chaîne hydrocarbonée, généralement non ramifiée et à <b>nombre pair</b> de carbones (le plus souvent 16 ou 18 chez l’être humain). Ils sont <b>amphiphiles</b> : tête carboxyle polaire, longue queue hydrophobe.",
        points: [
          "Notation Cn:m (n carbones, m doubles liaisons) avec la position des doubles liaisons repérée depuis le carbone du COOH (Δ) ou depuis le méthyle terminal (ω, ou n-).",
          "Acide palmitique C16:0 ; acide stéarique C18:0 ; acide oléique C18:1 cis-Δ9 (ω9) ; acide linoléique C18:2 cis-Δ9,12 (ω6) ; acide α-linolénique C18:3 cis-Δ9,12,15 (ω3) ; acide arachidonique C20:4 (ω6).",
          "Les acides linoléique et α-linolénique sont <b>indispensables</b> (essentiels) : l’organisme ne sait pas les synthétiser."
        ] },
      { h: "Saturés et insaturés", points: [
          "Acides gras <b>saturés</b> : aucune double liaison ; chaînes droites qui s’empilent bien → température de fusion élevée (graisses animales solides comme le beurre).",
          "Acides gras <b>insaturés</b> : une (mono-) ou plusieurs (poly-) doubles liaisons, naturellement <b>cis</b> (Z), qui créent un coude → empilement difficile → température de fusion plus basse (huiles végétales liquides).",
          "La température de fusion augmente avec la longueur de la chaîne et diminue avec le nombre de doubles liaisons.",
          "Les acides gras <b>trans</b> (hydrogénation partielle industrielle) ont une chaîne plus droite et se comportent davantage comme des saturés."
        ] },
      { h: "Triglycérides", points: [
          "Les <b>triglycérides</b> (triacylglycérols) sont des triesters du <b>glycérol</b> (propane-1,2,3-triol) et de trois acides gras.",
          "Ce sont des lipides <b>neutres</b>, très hydrophobes, stockés dans le tissu adipeux : principale réserve d’énergie de l’organisme (environ 9 kcal·g⁻¹, soit 37 kJ·g⁻¹, contre environ 4 kcal·g⁻¹ pour les glucides et les protéines).",
          "Leur hydrolyse par les lipases libère glycérol et acides gras ; leur <b>saponification</b> par une base forte donne du glycérol et des carboxylates (savons)."
        ] },
      { h: "Phospholipides", points: [
          "Les <b>phospholipides</b> (glycérophospholipides) : glycérol estérifié en positions 1 et 2 par deux acides gras, et en position 3 par un acide phosphorique lui-même lié à un alcool (choline → phosphatidylcholine ou lécithine ; éthanolamine ; sérine ; inositol).",
          "Ils sont <b>amphiphiles</b> : tête polaire (phosphate + alcool) et deux queues hydrophobes.",
          "Dans l’eau, ils s’organisent spontanément en <b>bicouches</b> (et en liposomes, vésicules fermées) ; les acides gras isolés et les savons forment plutôt des micelles.",
          "Les sphingolipides (sphingomyéline) sont une autre famille de lipides membranaires."
        ] },
      { h: "Membranes biologiques", points: [
          "Les <b>membranes biologiques</b> sont des bicouches de phospholipides : têtes polaires tournées vers l’eau, queues hydrophobes au centre.",
          "Modèle de la <b>mosaïque fluide</b> (Singer et Nicolson, 1972) : lipides et protéines (intrinsèques et extrinsèques) diffusent latéralement dans le plan de la membrane.",
          "La fluidité augmente avec la température et avec la proportion d’acides gras insaturés ; le cholestérol la module.",
          "La bicouche laisse passer les petites molécules apolaires (\\(\\ce{O2}\\), \\(\\ce{CO2}\\)) mais est imperméable aux ions, qui passent par des canaux et des transporteurs.",
          "Les deux feuillets n’ont pas la même composition (asymétrie membranaire)."
        ] }
    ]
  },
  {
    d: 8,
    o: ["8.5"],
    title: "Nucléotides, ADN et ARN",
    summary: "Bases azotées, nucléosides et nucléotides ; structure de l’ADN et de l’ARN.",
    sections: [
      { h: "Bases azotées", points: [
          "<b>Bases puriques</b> (deux cycles accolés) : adénine (A) et guanine (G).",
          "<b>Bases pyrimidiques</b> (un seul cycle) : cytosine (C), thymine (T, dans l’ADN) et uracile (U, dans l’ARN).",
          "Moyen mnémotechnique : les purines sont les plus grosses mais ont le nom le plus court (A, G)."
        ] },
      { h: "Nucléosides et nucléotides", points: [
          "<b>Nucléoside</b> = base azotée + pentose, reliés par une liaison N-glycosidique (sur le C1′ du sucre). Le pentose est le <b>ribose</b> dans l’ARN et le <b>2′-désoxyribose</b> (sans OH en 2′) dans l’ADN. Exemples : adénosine, guanosine, cytidine, uridine, thymidine.",
          "<b>Nucléotide</b> = nucléoside + un à trois groupes phosphate estérifiant le OH en 5′ du sucre : AMP, ADP, ATP.",
          "Rôles : monomères des acides nucléiques ; ATP, monnaie énergétique de la cellule (liaisons phosphoanhydride) ; AMPc, second messager ; constituants de coenzymes (\\(\\ce{NAD+}\\), FAD, coenzyme A)."
        ] },
      { h: "ADN", points: [
          "L’<b>ADN</b> est un polymère de désoxyribonucléotides reliés par des liaisons <b>phosphodiester</b> entre le OH en 3′ d’un nucléotide et le phosphate en 5′ du suivant. Chaque brin est orienté 5′ → 3′.",
          "<b>Double hélice</b> (Watson et Crick, 1953) : deux brins <b>antiparallèles</b> et <b>complémentaires</b>, enroulés en hélice droite (forme B, environ 10,5 paires de bases par tour).",
          "Appariements : A=T (2 liaisons hydrogène) et G≡C (3 liaisons hydrogène). Règles de Chargaff : %A = %T, %G = %C, purines = pyrimidines.",
          "Le squelette sucre-phosphate, chargé négativement, est à l’extérieur ; les bases, empilées, sont à l’intérieur.",
          "La température de fusion (séparation des brins) augmente avec la proportion de paires G–C."
        ] },
      { h: "ARN", points: [
          "L’<b>ARN</b> est un polymère de ribonucléotides : ribose (OH en 2′) et <b>uracile</b> à la place de la thymine.",
          "Il est généralement <b>simple brin</b>, mais peut former des structures secondaires par appariements internes (tiges-boucles de l’ARNt).",
          "Principaux types : ARN messager (ARNm), ARN de transfert (ARNt), ARN ribosomique (ARNr).",
          "Le OH en 2′ rend l’ARN plus facilement hydrolysable que l’ADN, notamment en milieu basique."
        ] },
      { h: "Exemple et pièges", p: "Un ADN double brin contient 30 % d’adénine. D’après Chargaff : T = 30 %, donc G + C = 40 %, soit G = C = 20 %.",
        points: [
          "Nucléoside ≠ nucléotide : le nucléotide porte au moins un phosphate.",
          "Le désoxyribose n’a pas de OH en 2′ (et non en 3′, qui sert à l’allongement).",
          "Les règles de Chargaff ne s’appliquent pas à un ARN simple brin.",
          "Une purine s’apparie toujours avec une pyrimidine."
        ] }
    ]
  },

  // ===================== Domaine 9 — Cinétique =====================
  {
    d: 9,
    o: ["9.1", "9.2", "9.3"],
    title: "Vitesse de réaction, ordres et demi-vie",
    summary: "Vitesses de disparition et de formation, facteurs cinétiques, lois de vitesse d’ordre 0, 1 et 2, temps de demi-réaction et applications.",
    sections: [
      { h: "Vitesse de réaction", p: "Pour \\(a\\,\\ce{A} + b\\,\\ce{B} \\ce{->} c\\,\\ce{C}\\), la <b>vitesse de disparition</b> de A est \\(-\\dfrac{\\mathrm{d}[\\ce{A}]}{\\mathrm{d}t}\\), la <b>vitesse de formation</b> de C est \\(\\dfrac{\\mathrm{d}[\\ce{C}]}{\\mathrm{d}t}\\) (en mol·L⁻¹·s⁻¹). La vitesse de la réaction, indépendante de l’espèce choisie, vaut \\(v = -\\dfrac{1}{a}\\dfrac{\\mathrm{d}[\\ce{A}]}{\\mathrm{d}t} = -\\dfrac{1}{b}\\dfrac{\\mathrm{d}[\\ce{B}]}{\\mathrm{d}t} = \\dfrac{1}{c}\\dfrac{\\mathrm{d}[\\ce{C}]}{\\mathrm{d}t}\\).",
        points: [
          "Graphiquement, la vitesse à un instant t est la pente de la tangente à la courbe [X] = f(t) (en valeur absolue pour un réactif).",
          "La vitesse diminue en général au cours du temps, car les réactifs sont consommés."
        ] },
      { h: "Facteurs influençant la vitesse", points: [
          "<b>Concentration des réactifs</b> : en général, plus elle est élevée, plus la réaction est rapide.",
          "<b>Température</b> : son élévation accélère presque toujours la réaction. Loi d’Arrhenius : \\(k = A\\,e^{-E_a/RT}\\), où \\(E_a\\) est l’énergie d’activation.",
          "<b>Catalyseur</b> : abaisse l’énergie d’activation (voir module suivant).",
          "Surface de contact (état de division d’un solide), nature du solvant, lumière pour certaines réactions."
        ] },
      { h: "Ordre des réactions", p: "Loi de vitesse : \\(v = k[\\ce{A}]^\\alpha[\\ce{B}]^\\beta\\) ; α et β sont les ordres partiels, \\(\\alpha + \\beta\\) l’ordre global. Les ordres se déterminent <b>expérimentalement</b> : ils ne sont égaux aux coefficients stœchiométriques que pour un acte élémentaire.",
        points: [
          "<b>Réactions d’ordre 0</b> : \\(v = k\\) ; \\([\\ce{A}] = [\\ce{A}]_0 - kt\\) (droite) ; k en mol·L⁻¹·s⁻¹. Exemple : élimination de l’éthanol par le foie, enzyme saturée (environ 0,10 à 0,15 g·L⁻¹ par heure).",
          "<b>Réactions d’ordre 1</b> : \\(v = k[\\ce{A}]\\) ; \\([\\ce{A}] = [\\ce{A}]_0\\,e^{-kt}\\), soit \\(\\ln[\\ce{A}] = \\ln[\\ce{A}]_0 - kt\\) ; k en s⁻¹. Exemples : désintégration radioactive, élimination de la plupart des médicaments.",
          "<b>Réactions d’ordre 2</b> (un seul réactif) : \\(v = k[\\ce{A}]^2\\) ; \\(\\dfrac{1}{[\\ce{A}]} = \\dfrac{1}{[\\ce{A}]_0} + kt\\) ; k en L·mol⁻¹·s⁻¹.",
          "Identification graphique : droite en traçant [A] (ordre 0), ln[A] (ordre 1) ou 1/[A] (ordre 2) en fonction du temps."
        ] },
      { h: "Demi-vie", p: "Le <b>temps de demi-réaction</b> \\(t_{1/2}\\) est la durée au bout de laquelle la moitié du réactif limitant a été consommée.",
        points: [
          "Ordre 0 : \\(t_{1/2} = \\dfrac{[\\ce{A}]_0}{2k}\\) (proportionnel à la concentration initiale).",
          "Ordre 1 : \\(t_{1/2} = \\dfrac{\\ln 2}{k} \\approx \\dfrac{0{,}693}{k}\\), <b>indépendant de la concentration initiale</b>. Après n demi-vies, il reste \\([\\ce{A}]_0 / 2^n\\).",
          "Ordre 2 : \\(t_{1/2} = \\dfrac{1}{k[\\ce{A}]_0}\\)."
        ] },
      { h: "Applications", points: [
          "<b>Pharmacocinétique</b> : pour une élimination d’ordre 1, après 5 demi-vies il reste \\(1/32 \\approx 3\\) % du médicament (≈ 97 % éliminé) ; l’état d’équilibre d’un traitement répété est atteint en 4 à 5 demi-vies.",
          "Exemple : C₀ = 80 mg·L⁻¹, \\(t_{1/2}\\) = 4 h. Au bout de 12 h (3 demi-vies) : 80 / 8 = 10 mg·L⁻¹.",
          "<b>Radioactivité</b> : carbone 14 (\\(t_{1/2}\\) ≈ 5 730 ans, datation) ; iode 131 (≈ 8 jours) ; technétium 99m (≈ 6 h, imagerie).",
          "Pièges : la demi-vie n’est constante que pour l’ordre 1 ; ne pas confondre ln et log ; au bout de deux demi-vies il reste un quart, pas zéro."
        ] }
    ]
  },
  {
    d: 9,
    o: ["9.4"],
    title: "La catalyse",
    summary: "Rôle et propriétés d’un catalyseur, catalyses homogène, hétérogène et enzymatique.",
    sections: [
      { h: "Le catalyseur", p: "Un <b>catalyseur</b> est une espèce qui <b>augmente la vitesse</b> d’une réaction sans être consommée : il participe au mécanisme mais est régénéré, et n’apparaît pas dans l’équation bilan. Il agit en ouvrant un autre chemin réactionnel, d’<b>énergie d’activation plus faible</b>." },
      { h: "Influence d’un catalyseur", points: [
          "Il ne modifie ni \\(\\Delta_r H\\), ni \\(\\Delta_r G\\), ni la constante d’équilibre K, ni la composition finale à l’équilibre.",
          "Il accélère <b>autant</b> la réaction directe que la réaction inverse : l’équilibre est atteint plus vite.",
          "Il ne rend pas possible une réaction thermodynamiquement défavorable (\\(\\Delta_r G \\gt 0\\)).",
          "Il peut être sélectif : orienter vers un produit parmi plusieurs possibles.",
          "Sur un profil énergétique, il abaisse le sommet (état de transition) sans changer les niveaux des réactifs et des produits."
        ] },
      { h: "Catalyse homogène et hétérogène", points: [
          "<b>Catalyse homogène</b> : catalyseur et réactifs dans la même phase. Exemples : ions \\(\\ce{H+}\\) en solution pour l’estérification ; ions iodure pour la décomposition de l’eau oxygénée.",
          "<b>Catalyse hétérogène</b> : phases différentes, le plus souvent un catalyseur solide et des réactifs gazeux ou liquides, qui réagissent à sa surface (adsorption). Exemples : platine, palladium et rhodium des pots catalytiques ; nickel pour l’hydrogénation ; fer pour la synthèse de l’ammoniac.",
          "En catalyse hétérogène, l’efficacité augmente avec la surface du catalyseur (catalyseur finement divisé ou poreux)."
        ] },
      { h: "Catalyse enzymatique", points: [
          "Les <b>enzymes</b> sont des catalyseurs biologiques, presque toujours des protéines (il existe aussi des ARN catalytiques, les ribozymes).",
          "Elles sont très <b>efficaces</b> (accélérations considérables, souvent de plusieurs ordres de grandeur) et très <b>spécifiques</b> de leur substrat, grâce à leur site actif (modèles clé-serrure et ajustement induit).",
          "Elles fonctionnent dans des conditions douces et ont une température optimale (≈ 37 °C chez l’être humain, dénaturation au-delà) et un pH optimal (pepsine gastrique ≈ 2, trypsine intestinale ≈ 8).",
          "La vitesse augmente avec la concentration en substrat puis atteint un plateau (\\(V_{max}\\)) quand l’enzyme est saturée : la réaction devient alors d’ordre 0 par rapport au substrat (équation de Michaelis-Menten \\(v = \\dfrac{V_{max}[S]}{K_M + [S]}\\)).",
          "Exemple : la catalase décompose l’eau oxygénée \\(\\ce{2 H2O2 -> 2 H2O + O2}\\), beaucoup plus vite que le platine ou les ions fer."
        ] },
      { h: "Pièges classiques", points: [
          "Un catalyseur ne « déplace » pas l’équilibre et n’augmente pas le rendement final.",
          "Il est régénéré mais il participe bien à la réaction (formation d’intermédiaires).",
          "Une enzyme dénaturée par la chaleur perd son activité : au-delà de l’optimum, la vitesse chute.",
          "Homogène/hétérogène se juge sur les <b>phases</b>, pas sur la nature chimique du catalyseur."
        ] }
    ]
  }
];
