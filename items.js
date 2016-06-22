// <div class="chap">
//
//     <div class="chapL1">
//         <button class="mdl-button mdl-js-button mdl-button--icon">
//             <i class="material-icons">expand_more</i>
//         </button>
//         <h4>5. Matrices</h4>
//     </div>
//
//     <ul class="chap-list-item mdl-list">
//         <li class="mdl-list__item">
//             <span class="mdl-list__item-primary-content">
//           <i class="material-icons mdl-list__item-icon" onclick="window.open('a.pdf', '_self');">file_download</i>
//           Bryan Cranston
//         </span>
//         </li>
//         <li class="mdl-list__item">
//             <span class="mdl-list__item-primary-content">
//               <i class="material-icons mdl-list__item-icon" onclick="window.open('a.pdf', '_self');">file_download</i>
//           Aaron Paul
//         </span>
//         </li>
//         <li class="mdl-list__item">
//             <span class="mdl-list__item-primary-content">
//               <i class="material-icons mdl-list__item-icon" onclick="window.open('a.pdf', '_self');">file_download</i>
//           Bob Odenkirk
//         </span>
//         </li>
//     </ul>
// </div>
var chapitres = [
    // Activé, En ce moment, Titre du chapitre, nom du dossier
    [1, 1, "Langage mathématique", "LangageMathematique"],
    [1, 0, "Fonctions", "Fonctions"],
    [1, 1, "Outils", "Outils"],
    [1, 0, "Relations", "Relations"],
    [0, 0, "Nombres", "Nombres"],
    [0, 0, "Trigonométrie", "Trigonometrie"],
    [0, 0, "Applications", "Applications"],
    [0, 0, "Sommes et produits", "SommesProduits"],
    [0, 0, "Dénombrement", "Denombrement"],
    [0, 0, "Structures algébriques", "StructuresAlgebriques"],
    [0, 0, "Suites", "Suites"],
    [0, 0, "Arithmétique", "Arithmetique"],
    [0, 0, "Suites", "Suites"],
    [0, 0, "La droite réelle", "DroiteReelle"],
    [0, 0, "Limite d'une suite", "LimiteSuite"],
    [0, 0, "Matrices", "Matrices"],
    [0, 0, "Limite d'une fonction", "LimiteFonction"],
    [0, 0, "Continuité", "Continuite"],
    [0, 0, "Polynômes", "Polynomes"],
    [0, 0, "Dérivation", "Derivation"],
    [0, 0, "Arcfonctions", "Arcfonctions"],
    [0, 0, "Equations différentielles", "EquationsDifferentielles"],
    [0, 0, "Fractions rationnelles", "FractionsRationnelles"],
    [0, 0, "Espaces vectoriels", "EspacesVectoriels"],
    [0, 0, "Developpements limités", "DeveloppementsLimites"],
    [0, 0, "Convexité", "Convexite"],
    [0, 0, "Applications linéaires", "ApplicationsLineaires"],
    [0, 0, "Probabilités finies", "ProbabilitesFinies"],
    [0, 0, "Dimension finie", "DimensionFinie"],
    [0, 0, "Variables aléatoires finies", "VariablesAleatoiresFinies"],
    [0, 0, "Groupe symétrique", "GroupeSymetrique"],
    [0, 0, "Vecteurs aléatoires", "VecteursAleatoires"],
    [0, 0, "Déterminants", "Determinants"],
    [0, 0, "Espaces euclidiens", "EspacesEuclidiens"],
    [0, 0, "Intégration", "Integration"],
    [0, 0, "Séries", "Series"],
    [0, 0, "Isométries vectorielles", "IsometriesVectorielles"],
    [0, 0, "Diagonalisation", "Diagonalisation"],
    [0, 0, "Integrales impropres", "IntegralesImpropres"],
];

for (var i = 0; i < chapitres.length; i++) {
    if (i+1 < 10) {
        chapitres[i][3] = "0" + (i+1) + "-" + chapitres[i][3];
    } else {
        chapitres[i][3] = (i+1) + "-" + chapitres[i][3];
    }
}

console.log(chapitres);
