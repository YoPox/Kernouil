# Site de la HX3

---

## Activer un chapitre, chapitres du moment

Dans items.js, on peut indiquer par un 0 ou un 1 si on veut permettre d'accéder aux fichiers d'un chapitre et si on veut "épingler" un chapitre tout en haut de la page.

#### Exemples :

```javascript
// Chapitre sur les suites accessible et non épinglé
[1, 0, "Suites", "Suites", ""],

// Chapitre sur le groupe symétrique non accessible (grisé)
[0, 0, "Groupe symétrique", "GroupeSymetrique", ""],

// Chapitre sur les séries accessible et épinglé en haut
[1, 1, "Séries", "Series", ""],
```

## Ajouter un chapitre

Pour ajouter un chapitre, il ne faut pas toucher à index.html.
Les chapitres sont ajoutés automatiquement par items.js.

Supposons que l'on veuille créer le chapitre 40.

Il faut créer le dossier 40-NomDuChapitre qui contiendra par exemple NomDuChapitreCours.pdf, NomDuChapitreExos1.pdf, …

Ensuite il faut indiquer à items.js que l'on a ajouté un chapitre !

#### Exemple :

```javascript
// On rajoute cette ligne à la fin de chapitres
[1, 0, "Nom du chapitre", "NomDuChapitre", ""],

// On rajoute cette ligne à la fin de fichiersChapitres
["Cours", "Exos1"]
```

## Ajouter un PDF

Il faut bien nommer le PDF : NomDuChapitreNomDuPDF.pdf et le placer dans le bon dossier.

Il suffit ensuite d'ajouter "NomDuPDF" à fichiersChapitres dans items.js.

#### Exemple :
On veut rajouter "DiagonalisationExecicesBonus.pdf" :

```javascript
// Diagonalisation
["Cours", "Devoir", "DevoirCorrection", "ExercicesBonus"],
```

## Ajouter un DS

Il faut rajouter du code HTML dans ds.html dans une balise ```<ul>```.

#### Exemple :
On veut rajouter "DS3 (2016-2017).pdf" :

```html
    <!-- Pour avoir une jolie ligne de séparation -->
    <div class="sep"></div>

    <!-- Ligne avec le bouton télécharger et le nom du DS -->
    <!-- Il faut modifier le nom du fichier dans onclick -->
    <li class='mdl-list__item' onclick='window.open("00-DS/DS3 (2016-2017)")'>
        <span class='mdl-list__item-primary-content'>
            <button class='mdl-button mdl-js-button mdl-button--icon mdl-list__item-icon'>
                <i class='material-icons'>open_in_browser</i>
            </button>
            <!-- Nom du DS -->
            DS 3
        </span>
    </li>
```
