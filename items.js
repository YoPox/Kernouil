var chapitres = [
    // Activé, En ce moment, Titre du chapitre, nom du dossier, fichiers dispo
    [1, 1, "Langage mathématique", "LangageMathematique", ""],
    [1, 0, "Fonctions", "Fonctions", ""],
    [1, 0, "Outils", "Outils", ""],
    [1, 0, "Relations", "Relations", ""],
    [1, 0, "Nombres", "Nombres", ""],
    [1, 0, "Trigonométrie", "Trigonometrie", ""],
    [1, 0, "Théorie des applications", "Applications", ""],
    [1, 0, "Sommes et produits", "SommesProduits", ""],
    [1, 0, "Dénombrement", "Denombrement", ""],
    [1, 0, "Structures algébriques", "StructuresAlgebriques", ""],
    [1, 0, "Suites", "Suites", ""],
    [1, 0, "Arithmétique", "Arithmetique", ""],
    [1, 0, "Systèmes", "Systemes", ""],
    [1, 0, "La droite réelle", "DroiteReelle", ""],
    [1, 0, "Limite d'une suite", "LimiteSuite", ""],
    [1, 0, "Matrices", "Matrices", ""],
    [1, 0, "Limite d'une fonction", "LimiteFonction", ""],
    [1, 0, "Continuité", "Continuite", ""],
    [1, 0, "Polynômes", "Polynomes", ""],
    [1, 0, "Dérivation", "Derivation", ""],
    [1, 0, "Arcfonctions", "Arcfonctions", ""],
    [1, 0, "Equations différentielles", "EquationsDifferentielles", ""],
    [1, 0, "Fractions rationnelles", "FractionsRationnelles", ""],
    [1, 0, "Espaces vectoriels", "EspacesVectoriels", ""],
    [1, 0, "Developpements limités", "DeveloppementsLimites", ""],
    [1, 0, "Convexité", "Convexite", ""],
    [1, 0, "Applications linéaires", "ApplicationsLineaires", ""],
    [1, 0, "Probabilités finies", "ProbabilitesFinies", ""],
    [1, 0, "Dimension finie", "DimensionFinie", ""],
    [1, 0, "Variables aléatoires finies", "VariablesAleatoiresFinies", ""],
    [1, 0, "Groupe symétrique", "GroupeSymetrique", ""],
    [1, 0, "Vecteurs aléatoires", "VecteursAleatoires", ""],
    [1, 0, "Déterminants", "Determinants", ""],
    [1, 0, "Espaces euclidiens", "EspacesEuclidiens", ""],
    [1, 0, "Intégration", "Integration", ""],
    [1, 0, "Séries", "Series", ""],
    [1, 0, "Isométries vectorielles", "IsometriesVectorielles", ""],
    [1, 0, "Diagonalisation", "Diagonalisation", ""],
    [1, 0, "Integrales impropres", "IntegralesImpropres", ""],
];

var fichiersChapitres = [
    // Langage mathématique
    ["Cours", "Exos1", "Exos1Corriges", "Exos2", "Exos2Corriges"],
    // Fonctions
    ["Cours", "Exos1", "Exos1Corriges", "Programme"],
    // Outils
    ["Cours", "Devoir", "DevoirCorrection", "Exos", "ExosCorriges", "Programme"],
    // Relations
    ["Cours", "Devoir", "DevoirCorrection", "Exos1", "Exos1Corriges", "Exos2", "Exos2Corriges", "Programme"],
    // Nombres
    ["Cours", "Devoir", "DevoirCorrection", "DiaporamaComplexes", "DiaporamaRecurrence", "Exos1", "Exos1Corriges", "Exos2", "Exos2Corriges", "Programme"],
    // Trigonométrie
    ["Cours", "Exos", "ExosCorriges", "Programme"],
    // Applications
    ["Cours", "Exos1", "Exos1Corriges", "Exos2", "Exos2Corriges", "Programme"],
    // Sommes et produits
    ["Cours", "Devoir", "DevoirCorrection", "Exos1", "Exos1Corriges", "Exos2", "Exos2Corriges", "Programme"],
    // Dénombrement
    ["Cours", "Devoir", "DevoirCorrection", "Exos1", "Exos1Corriges", "Exos2", "Exos2Corriges", "Fiche", "Programme", "Transparents"],
    // Structures algébriques
    ["Cours", "Devoir", "DevoirCorrection", "Exos1", "Exos1Corriges", "Exos2", "Exos2Corriges", "FractionsAnnexe", "Programme"],
    // Suites
    ["Cours", "Devoir", "DevoirCorrection", "Exos1", "Exos1Corriges", "Exos2", "Exos2Corriges", "Programme"],
    // Arithmétique
    ["Cours", "Devoir", "DevoirCorrection", "Exos1", "Exos1Corriges", "Exos2", "Exos2Corriges", "Programme"],
    // Systèmes
    ["Cours", "Diaporama", "Exos1", "Exos1Corriges", "Exos2", "Exos2Corriges", "Programme"],
    // La droite réelle
    ["Cours", "Exos1", "Exos1Corriges", "Exos2", "Exos2Corriges", "Programme"],
    // Limite d'une suite
    ["Cours", "Devoir", "DevoirCorrection", "DevoirFacultatif", "DevoirFacultatifCorrection", "DiaporamaSuitesRecurrentes", "Exos1", "Exos1Corriges", "Exos2", "Exos2Corriges", "Programme"],
    // Matrices
    ["Cours", "Diaporama", "Exos1", "Exos1Corriges", "Exos2", "Exos2Corriges", "Programme"],
    // Limite d'une fonction
    ["Cours", "Diaporama", "Exos1", "Exos1Corriges", "Exos2", "Exos2Corriges", "Programme"],
    // Continuité
    ["Cours", "Devoir", "DevoirCorrection", "Diaporama", "Exos1", "Exos1Corriges", "Exos2", "Exos2Corriges", "Programme"],
    // Polynômes
    ["Cours", "CaracteristiqueAnnexe", "Devoir", "DevoirCorrection", "Diaporama", "Exos1", "Exos1Corriges", "Exos2", "Exos2Corriges", "Programme"],
    // Dérivation
    ["Cours", "Devoir", "DevoirCorrection", "DevoirFacultatif", "DevoirFacultatifCorrection", "Exos1", "Exos1Corriges", "Exos2", "Exos2Corriges", "Programme", "NewtonAnnexe", "SuitesEtTafAnnexe"],
    // Arcfonctions
    ["Cours", "Diaporama", "Devoir", "DevoirCorrection", "Exos1", "Exos1Corriges", "Exos2", "Exos2Corriges", "Programme"],
    // Equations différentielles
    ["Cours", "Devoir", "DevoirCorrection", "Exos1", "Exos1Corriges", "Exos2", "Exos2Corriges", "DynamiqueDesPopulationsAnnexe", "EulerAnnexe", "Programme"],
    // Fractions rationnelles
    ["Cours", "Devoir", "DevoirCorrection", "ElementsSimplesExos", "ElementsSimplesExosCorriges", "Exos1", "Exos1Corriges", "Exos2", "Exos2Corriges", "Fiche", "Programme", "Annexe"],
    // Espaces vectoriels
    ["Cours", "Exos1", "Exos1Corriges", "Exos2", "Exos2Corriges", "Programme"],
    // Developpements limités
    ["Cours", "Exos1", "Exos1Corriges", "Exos2", "Exos2Corriges", "Fiche", "Programme"],
    // Convexité
    ["Cours", "Exos1", "Exos1Corriges", "Programme"],
    // Applications linéaires
    ["Cours", "Devoir", "DevoirCorrection", "Exos1", "Exos1Corriges", "Exos2", "Exos2Corriges", "Programme"],
    // Probabilités finies
    ["Cours", "Devoir", "DevoirCorrection", "Exos1", "Exos1Corriges", "Exos2", "Exos2Corriges", "Programme"],
    // Dimension finie
    ["Cours", "Devoir", "DevoirCorrection", "Exos1", "Exos1Corriges", "Exos2", "Exos2Corriges", "AnnexeGaussJordan", "AnnexePivot", "QCM", "Programme"],
    // Variables aléatoires finies
    ["Cours", "Devoir", "DevoirCorrection", "Exos1", "Exos1Corriges", "Exos2", "Exos2Corriges", "Test", "Programme"],
    // Groupe symétrique
    ["Cours", "DevoirFacultatif", "DevoirFacultatifCorrection", "Exos1", "Exos1Corriges", "Exos2", "Exos2Corriges", "Annexe", "Programme"],
    // Vecteurs aléatoires
    ["Cours", "Exos1", "Exos1Corriges", "Exos2", "Exos2Corriges", "Programme"],
    // Déterminants
    ["Cours", "Devoir", "DevoirCorrection", "Exos1", "Exos1Corriges", "Exos2", "Exos2Corriges", "Programme"],
    // Espaces euclidiens
    ["Cours", "Devoir", "DevoirCorrection", "Exos1", "Exos1Corriges", "Exos2", "Exos2Corriges", "Programme"],
    // Intégration
    ["Cours", "Devoir", "DevoirCorrection", "Exos1", "Exos1Corriges", "Exos2", "Exos2Corriges", "Annexe", "Programme"],
    // Séries
    ["Cours", "Exos1", "Exos1Corriges", "Exos2", "Exos2Corriges", "Annexe", "Programme"],
    // Isométries vectorielles
    ["Exos1", "Exos1Corriges"],
    // Diagonalisation
    ["Cours", "Devoir", "DevoirCorrection"],
    // Integrales impropres
    ["Cours", "Exos1", "Exos1Corriges"]
];

for (var i = 0; i < chapitres.length; i++) {
    if (i + 1 < 10) {
        chapitres[i][4] = "0" + (i + 1) + "-" + chapitres[i][3];
    } else {
        chapitres[i][4] = (i + 1) + "-" + chapitres[i][3];
    }
}

console.log(chapitres);

// En ce moment
var mom = 0;
for (var i = 0; i < chapitres.length; i++) {
    if (chapitres[i][1]) {
        addChap('moment', i);
    }
}

// Tous les chapitres
for (var i = 0; i < chapitres.length; i++) {
    addChap('chapitres', i);
}

function disp(a, i) {
    switch (document.getElementById("i" + a + i).innerText) {
        case "expand_less":
            document.getElementById("i" + a + i).innerText = "expand_more";
            document.getElementById(a + i).style.display = "none";
            break;
        default:
            document.getElementById("i" + a + i).innerText = "expand_less";
            document.getElementById(a + i).style.display = "block";
            break;

    }
}

// Ajoute un chapitre sur la page
function addChap(source, i) {
    if (document.getElementById(source).innerHTML.length) {
        document.getElementById(source).innerHTML += "<div class='sep'></div>";
    }

    var li = "";

    for (item of fichiersChapitres[i]) {
        li += "<li class='mdl-list__item' onclick='window.open(\"" + chapitres[i][4] + "/" + chapitres[i][3] + item + ".pdf\")'> \
                <span class='mdl-list__item-primary-content'> \
                <button class='mdl-button mdl-js-button mdl-button--icon mdl-list__item-icon'> \
                  <i class='material-icons'>open_in_browser</i> \
                </button> \
                " + beautify(item) + " \
                </span> \
              </li>";
    }

    document.getElementById(source).innerHTML +=
        "<div class='chap'> \
            \
            <div class='chapL1 " + (!chapitres[i][0] ? "disabled'" : "' onclick='disp(\"" + source + "\", " + i + ")'") + "> \
                <button class='mdl-button mdl-js-button mdl-button--icon'" + (!chapitres[i][0] ? "disabled" : "") + "> \
                    <i class='material-icons' id='i" + source + i + "'>expand_more</i> \
                </button> \
                <h4>" + (i + 1) + ". " + chapitres[i][2] + "</h4> \
            </div>\
            \
            <ul class='chap-list-item mdl-list' id='" + source + i + "' style='display: none;'>" + li + "</ul></div>";

}

// Permet de convertir un nom de fichier en sa description lisible
function beautify(item) {
    switch (item) {
        case "Exos1":
            return "Exercices 1";
            break;
        case "Cours":
            return item;
            break;
        case "Exos":
            return "Exercices";
            break;
        case "ExosCorriges":
            return "Exercices corrigés";
            break;
        case "Exos1":
            return "Exercices 1";
            break;
        case "Exos1Corriges":
            return "Exercices corrigés 1";
            break;
        case "Exos2":
            return "Exercices 2";
            break;
        case "Exos2Corriges":
            return "Exercices corrigés 2";
            break;
        case "Exos1":
            return "Exercices 1";
            break;
        case "Programme":
            return "Programme de colle";
            break;
        case "Devoir":
            return "Devoir maison";
            break;
        case "DevoirCorrection":
            return "Correction du devoir maison";
            break;
        case "DevoirFacultatif":
            return "Devoir maison facultatif";
            break;
        case "DevoirFacultatifCorrection":
            return "Correction du devoir maison facultatif";
            break;
        case "FractionsAnnexe":
            return "Annexe sur les fractions";
            break;
        case "CaracteristiqueAnnexe":
            return "Annexe sur la caractéristique";
            break;
        case "ElementsSimplesExos":
            return "Exercices sur les éléments simples";
            break;
        case "ElementsSimplesExosCorriges":
            return "Exercices corrigés sur les éléments simples";
            break;
        default:
            return item;
    }
}
