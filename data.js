/* ============================================================
   Données — Le Labo des Chiffres
   2 grands chapitres : Traitement de données + Résolution de problèmes
   Niveau : 3e primaire (Belgique)
   ============================================================ */
const CHAPITRES = [

/* ====================================================================
   CHAPITRE 1 — TRAITEMENT DE DONNÉES (lire tableaux & graphiques)
   ==================================================================== */
{
  id: "donnees",
  titre: "Lire les tableaux et les graphiques",
  emoji: "📊",
  couleur: "#5aa9e6",
  lecon: [
    { t: "Le tableau", c: "Un tableau range des informations en lignes et en colonnes. Pour lire une donnée, je croise la bonne ligne et la bonne colonne avec mon doigt." },
    { t: "Le diagramme en bâtons", c: "Chaque barre représente une quantité. Plus la barre est haute, plus la quantité est grande. Je lis la hauteur sur l'axe vertical (les nombres à gauche)." },
    { t: "Le graphique en ligne (courbe)", c: "Les points sont reliés par des traits. Quand la ligne monte, ça augmente ; quand elle descend, ça diminue. Le point le plus haut est le plus grand nombre." },
    { t: "Le diagramme à bandes", c: "Comme les bâtons mais couchés. Chaque bande horizontale montre une quantité : la plus longue est la plus grande." },
    { t: "Les ensembles", c: "Un ensemble regroupe des choses qui vont ensemble. Quand deux ensembles se croisent (zone du milieu), les éléments sont DANS LES DEUX à la fois. En dehors des deux ronds : ils ne sont dans aucun." },
    { t: "Les mots-questions", c: "« le plus grand / le plus » → je cherche le maximum. « le plus petit / le moins » → je cherche le minimum. « en tout / au total » → j'additionne." },
  ],
  // ---- chaque exercice : type + énoncé + données + correction ----
  exos: {
    // -------- TABLEAU : lecture directe + questions max/min/total --------
    tableau: [
      {
        titre: "La recette de Crapouillote",
        intro: "Voici la recette du filtre d'amour. Observe le tableau.",
        lignes: [["Yeux de crapaud",30],["Langues de vipère",19],["Queue de rat",22],["Cafards rôtis",24],["Mouches écrasées",27],["Cheveux de vampire",42],["Ongles de sorcière",45],["Araignées velues",17]],
        unite:"",
        q:[
          {texte:"Combien de cheveux de vampire contient la recette ?", rep:42, type:"lire", cible:"Cheveux de vampire"},
          {texte:"Combien de langues de vipère y a-t-il ?", rep:19, type:"lire", cible:"Langues de vipère"},
          {texte:"Quel ingrédient faut-il en plus grande quantité ?", rep:"Ongles de sorcière", type:"max"},
          {texte:"Quel ingrédient faut-il en plus petite quantité ?", rep:"Araignées velues", type:"min"},
          {texte:"Combien d'ingrédients différents faut-il en tout ?", rep:8, type:"compterLignes"},
        ]
      },
      {
        titre: "Les bonbons d'Halloween",
        intro: "Léa a compté ses bonbons par sorte.",
        lignes: [["Caramels",12],["Réglisses",7],["Chocolats",20],["Sucettes",15],["Guimauves",9]],
        unite:"",
        q:[
          {texte:"Combien de chocolats Léa a-t-elle ?", rep:20, type:"lire", cible:"Chocolats"},
          {texte:"De quelle sorte a-t-elle le moins ?", rep:"Réglisses", type:"min"},
          {texte:"De quelle sorte a-t-elle le plus ?", rep:"Chocolats", type:"max"},
          {texte:"Combien de sucettes et de guimauves ensemble ? (15 + 9)", rep:24, type:"calc"},
        ]
      },
      {
        titre: "La bibliothèque de la classe",
        intro: "Voici le nombre de livres par rayon.",
        lignes: [["Aventure",16],["Animaux",11],["Sciences",8],["BD",25],["Contes",14]],
        unite:"",
        q:[
          {texte:"Combien de BD y a-t-il ?", rep:25, type:"lire", cible:"BD"},
          {texte:"Quel rayon a le moins de livres ?", rep:"Sciences", type:"min"},
          {texte:"Combien de livres d'aventure et d'animaux ensemble ? (16 + 11)", rep:27, type:"calc"},
          {texte:"Combien de rayons différents ?", rep:5, type:"compterLignes"},
        ]
      },
    ],

    // -------- TABLEAU À COMPLÉTER (filles + garçons = total) --------
    tableauComplet: [
      {
        titre: "L'ogre de la ville fantôme",
        intro: "Un ogre a mangé des enfants. Calcule les totaux qui manquent (filles + garçons).",
        cols: ["Lundi","Mardi","Mercredi","Jeudi","Vendredi"],
        filles: [7,5,11,6,9],
        garcons:[12,13,8,12,14],
        // total à compléter = filles+garcons ; on demande aussi le jour max
        qMax:"Quel jour a-t-il mangé le plus d'enfants ?",
        repMax:"Vendredi"
      },
      {
        titre: "Les gâteaux vendus",
        intro: "La boulangerie note ses ventes. Complète les totaux (matin + après-midi).",
        cols: ["Lun","Mar","Mer","Jeu","Ven"],
        filles: [10,8,15,6,12],   // matin
        garcons:[5,9,4,11,7],     // après-midi
        labelA:"Matin", labelB:"Après-midi",
        qMax:"Quel jour a-t-on vendu le plus de gâteaux ?",
        repMax:"Mercredi"
      },
    ],

    // -------- DIAGRAMME EN BÂTONS --------
    batons: [
      {
        titre: "Températures de la ville fantôme",
        intro: "Le Maire monstrueux a relevé les températures de la semaine d'Halloween.",
        labels:["Lun","Mar","Mer","Jeu","Ven","Sam","Dim"],
        vals:[17,13,14,17,21,16,16],
        unite:"°C",
        q:[
          {texte:"Combien de degrés faisait-il vendredi ?", rep:21, type:"lire", idx:4},
          {texte:"Quelle température faisait-il samedi ?", rep:16, type:"lire", idx:5},
          {texte:"Quel était le jour le plus chaud ?", rep:"Ven", type:"max"},
          {texte:"Quel était le jour le plus frais ?", rep:"Mar", type:"min"},
        ]
      },
      {
        titre: "Élèves à la cantine",
        intro: "Nombre d'élèves qui mangent à la cantine chaque jour.",
        labels:["Lun","Mar","Mer","Jeu","Ven"],
        vals:[20,15,10,18,12],
        unite:"",
        q:[
          {texte:"Combien d'élèves mangent le jeudi ?", rep:18, type:"lire", idx:3},
          {texte:"Combien mangent le vendredi ?", rep:12, type:"lire", idx:4},
          {texte:"Quel est le jour le plus fréquenté ?", rep:"Lun", type:"max"},
          {texte:"Quel est le jour le moins fréquenté ?", rep:"Mer", type:"min"},
        ]
      },
      {
        titre: "Les animaux du zoo",
        intro: "Nombre d'animaux par enclos.",
        labels:["Lions","Singes","Zèbres","Ours","Loups"],
        vals:[6,22,14,8,11],
        unite:"",
        q:[
          {texte:"Combien de singes y a-t-il ?", rep:22, type:"lire", idx:1},
          {texte:"De quel animal y en a-t-il le moins ?", rep:"Lions", type:"min"},
          {texte:"De quel animal y en a-t-il le plus ?", rep:"Singes", type:"max"},
        ]
      },
    ],

    // -------- COURBE (graphique en ligne) : température journalière --------
    courbe: [
      {
        titre: "La fièvre de la petite Momie",
        intro: "Relevé de la température de la petite sœur Momie pendant 5 jours.",
        labels:["Jour 1","Jour 2","Jour 3","Jour 4","Jour 5"],
        vals:[39,38.5,40.5,39.5,38.5],
        ymin:38, ymax:41, unite:"°C",
        q:[
          {texte:"Quel jour a-t-elle eu le plus de fièvre ?", rep:"Jour 3", type:"max"},
          {texte:"Quel jour a-t-elle eu 39°C ?", rep:"Jour 1", type:"lireJour", val:39},
          {texte:"Quel jour a-t-elle été guérie (température la plus basse) ?", rep:"Jour 2", type:"min"},
        ]
      },
      {
        titre: "La taille de la plante",
        intro: "On mesure une plante chaque semaine (en cm).",
        labels:["S1","S2","S3","S4","S5"],
        vals:[2,5,5,9,14],
        ymin:0, ymax:16, unite:"cm",
        q:[
          {texte:"Quelle semaine la plante est-elle la plus grande ?", rep:"S5", type:"max"},
          {texte:"Quelle semaine mesure-t-elle 9 cm ?", rep:"S4", type:"lireJour", val:9},
          {texte:"Entre quelles semaines n'a-t-elle pas grandi ? (réponds S2)", rep:"S2", type:"plat"},
        ]
      },
    ],

    // -------- ENSEMBLES (diagramme de Venn) --------
    ensembles: [
      {
        titre: "Foot et tennis",
        gauche:"foot", droite:"tennis",
        seulGauche:["Lucas","Rachel","Louka","Mélina"],   // 4
        milieu:["Léo","Clara","Enzo"],                    // 3
        seulDroite:["Victor","Malik","Ylias","Lukas","Tess","Yliano"], // 6
        dehors:["Yacemine","Kassandra"],                  // 2
        q:[
          {texte:"Combien d'enfants font du tennis (en tout : milieu + tennis seul) ?", rep:9, type:"calc"},
          {texte:"Rachel fait-elle du tennis ? (oui/non)", rep:"non", type:"ouinon"},
          {texte:"Léo fait quel(s) sport(s) ? (réponds : les deux)", rep:"les deux", type:"choix", choix:["foot seulement","tennis seulement","les deux","aucun"], bon:2},
          {texte:"Combien d'enfants ne font ni foot ni tennis ?", rep:2, type:"calc"},
        ]
      },
      {
        titre: "Chien et chat",
        gauche:"a un chien", droite:"a un chat",
        seulGauche:["Tom","Léa","Sami","Nora","Inès"],     // 5
        milieu:["Adam","Lina"],                            // 2
        seulDroite:["Eva","Hugo","Maya"],                  // 3
        dehors:["Paul","Zoé"],                             // 2
        q:[
          {texte:"Combien d'enfants ont un chat (milieu + chat seul) ?", rep:5, type:"calc"},
          {texte:"Adam a-t-il un chien ? (oui/non)", rep:"oui", type:"ouinon"},
          {texte:"Combien d'enfants ont les deux animaux ?", rep:2, type:"calc"},
          {texte:"Combien d'enfants n'ont aucun de ces deux animaux ?", rep:2, type:"calc"},
        ]
      },
    ],
  }
},

/* ====================================================================
   CHAPITRE 2 — RÉSOLUTION DE PROBLÈMES
   ==================================================================== */
{
  id: "problemes",
  titre: "Résoudre des problèmes",
  emoji: "🧩",
  couleur: "#f4978e",
  lecon: [
    { t:"Étape 1 : Que me demande-t-on ?", c:"Avant de calculer, je cherche CE QUE je dois trouver : un prix (€), une durée, une longueur, une masse (kg/g), un nombre d'objets, une date, une heure, un prénom… ou parfois RIEN (la réponse est déjà dans l'énoncé !)." },
    { t:"Étape 2 : Quelle opération ?", c:"Les mots de l'énoncé sont des indices." },
    { t:"➕ Addition", c:"« en tout, ensemble, au total, ajouter, de plus, il reçoit » → on met ensemble. Ex : 3 + 2 = 5." },
    { t:"➖ Soustraction", c:"« il reste, enlever, retirer, de moins, la différence, on rend » → on enlève. Ex : 10 − 3 = 7." },
    { t:"✖️ Multiplication", c:"« des paquets identiques, X fois, rangées de…, le même nombre dans chaque » → on rassemble des paquets égaux. Ex : 3 × 2 = 6." },
    { t:"➗ Division", c:"« partager équitablement, séparer en groupes égaux, combien dans chaque » → on partage. Ex : 18 : 3 = 6." },
  ],
  exos: {
    // -------- QUE ME DEMANDE-T-ON ? (classer la question) --------
    quoi: [
      {e:"J'ai 10 pommes, 6 oranges, 8 kiwis. J'utilise la moitié des fruits. Combien m'en reste-t-il ?", bon:"nombre"},
      {e:"J'ai utilisé 250 g de farine. Quelle quantité me reste-t-il d'1 kg ?", bon:"masse"},
      {e:"J'arrive à la danse à 16h et le cours dure 1h30. À quelle heure papa doit-il venir me chercher ?", bon:"heure"},
      {e:"J'achète un pull, je donne 20 €. Quel est le prix du pull ?", bon:"prix"},
      {e:"Julien a 7 billes, Marc en a gagné 3 de plus. Qui en a gagné le plus ?", bon:"prenom"},
      {e:"Il me reste 1 m de ficelle, j'ai besoin de 35 cm pour emballer. Combien me reste-t-il de ficelle ?", bon:"longueur"},
      {e:"Il est 9h, je vous donne un exercice à rendre à 9h10. Combien de temps avez-vous ?", bon:"duree"},
      {e:"Martin fête ses 10 ans le 7 juillet. Louis fêtera son anniversaire 7 jours après. Quel jour le fêtera-t-il ?", bon:"date"},
      {e:"On part en voyage : au moins 10h de route, 7 valises, j'espère qu'il y aura du soleil !", bon:"rien"},
      {e:"Le bricolage commence à 13h50 et se termine à 15h40. Pendant combien de temps bricolons-nous ?", bon:"duree"},
      {e:"Julie pèse 4 kg de plus que Maeva qui pèse 5 kg de moins que Zoé. Qui pèse le moins lourd ?", bon:"prenom"},
      {e:"Une danse commence à 17h10, le cours dure 1h45. À quelle heure maman doit-elle venir ?", bon:"heure"},
    ],
    quoiChoix: ["prix","duree","longueur","nombre","masse","heure","date","prenom","rien"],
    quoiLabels: {prix:"un prix 💶", duree:"une durée ⏳", longueur:"une longueur 📏", nombre:"un nombre d'objets 🔢", masse:"une masse ⚖️", heure:"une heure précise 🕐", date:"une date 📅", prenom:"un prénom 🙂", rien:"RIEN ! 🚫"},

    // -------- QUELLE OPÉRATION ? (choisir +, −, ×, :) --------
    operation: [
      {e:"Liam a 20 €. Il achète une glace au chocolat à 3 €. Combien d'argent lui reste-t-il ?", bon:"-"},
      {e:"Hier, le jardinier a ramassé 57 potirons. Aujourd'hui il en a ramassé 62 de plus. Combien en a-t-il en tout ?", bon:"+"},
      {e:"Ce week-end, nous avons ramassé 72 châtaignes. Maman fait 4 assiettes avec le même nombre dans chaque. Combien dans chaque assiette ?", bon:":"},
      {e:"Maxime veut un jeu vidéo à 25 €. Il a 50 € dans sa tirelire. Combien lui restera-t-il après l'achat ?", bon:"-"},
      {e:"Marie a 20 perles dans 3 boîtes différentes. Elle met le même nombre dans chaque boîte. Combien de perles par boîte ?", bon:":"},
      {e:"Sur ma tablette de chocolat, je compte 7 rangées de 5 carrés. Combien de carrés en tout ?", bon:"×"},
      {e:"Théo possède 100 €. Pour son anniversaire, il reçoit un billet de 50 €. Combien a-t-il maintenant ?", bon:"+"},
      {e:"En 3PB il y a 24 élèves. Nathalie vient chercher 12 élèves pour la bibliothèque. Combien reste-t-il en classe ?", bon:"-"},
      {e:"Julia a 15 billes et Anissa 8 billes. Avec combien de billes jouent-elles au total ?", bon:"+"},
      {e:"Marc marque 3 buts. Son copain marque 3 buts aussi. Combien de buts l'équipe a-t-elle marqués ?", bon:"+"},
      {e:"Maman achète 5 glaces. Papa en rapporte encore 10. Combien de glaces avons-nous ?", bon:"+"},
      {e:"Tom a 7 ans. Son frère a 3 ans de plus. Quel âge a le grand frère ?", bon:"+"},
      {e:"Léo utilise 4 œufs pour des crêpes. Dans la boîte il y avait 10 œufs. Combien d'œufs reste-t-il ?", bon:"-"},
      {e:"5 petits chiots jouent. Combien de pattes cela fait-il en tout ?", bon:"×"},
      {e:"Alice achète 4 bagues à 10 € chacune. Combien va-t-elle payer ?", bon:"×"},
      {e:"Chris achète 3 stylos à 5 € pièce. Que va-t-il payer ?", bon:"×"},
      {e:"J'ai 15 bonbons. J'en donne 5 à Luc et 5 à Léa. Combien m'en reste-t-il ?", bon:"-"},
      {e:"Michel a 8 livres. Sa sœur en a le double. Combien a-t-elle de livres ?", bon:"×"},
      {e:"Sophie et Aline se partagent 14 sucettes équitablement. Combien de sucettes pour chacune ?", bon:":"},
      {e:"En classe nous sommes 13 élèves. 2 rentrent manger à la maison. Combien mangent à la cantine ?", bon:"-"},
    ],
    operationChoix: ["+","-","×",":"],
    operationLabels: {"+":"une addition","-":"une soustraction","×":"une multiplication",":":"une division"},

    // -------- RELIER : mot-indice → opération --------
    indices: [
      {mot:"Enlever, retirer, perdre, donner", bon:"-"},
      {mot:"Rassembler, ajouter, gagner, en plus", bon:"+"},
      {mot:"Partager, séparer, faire des groupes égaux", bon:":"},
      {mot:"Des paquets identiques, des rangées de…", bon:"×"},
    ],

    // -------- PROBLÈMES À 2 OPÉRATIONS (choisir les 2 opérations dans l'ordre) --------
    double: [
      {
        e:"Hier, 15 garçons et 20 filles sont allés à la patinoire. Aujourd'hui, 14 autres garçons sont allés skier. Combien d'enfants sont allés patiner en tout ?",
        ops:["+","+"],
        aide:"D'abord les enfants à la patinoire (15 + 20), puis on ne compte QUE les patineurs."
      },
      {
        e:"Alex apporte des biscuits : 15 en forme de cœur, 20 en forme de lapin et 18 en forme d'ours. Combien de biscuits en forme d'animaux ?",
        ops:["+","+"],
        aide:"Les animaux = lapins + ours (le cœur n'est pas un animal). On additionne deux fois."
      },
      {
        e:"Gina achète 7 perles rondes rouges, 3 ovales bleues et 20 perles rondes blanches. Combien de perles RONDES a-t-elle ?",
        ops:["+","-"],
        aide:"Les rondes = rouges + blanches. On peut aussi enlever les ovales du total."
      },
      {
        e:"Au camp, le matin il y a 18 animateurs. L'après-midi, 10 s'ajoutent mais 5 partent. Combien d'animateurs l'après-midi ?",
        ops:["+","-"],
        aide:"On ajoute les nouveaux (+10) puis on enlève ceux qui partent (−5)."
      },
      {
        e:"Tom a 20 € dans sa tirelire. Il reçoit 30 € de son parrain et 20 € de sa marraine. Combien a-t-il maintenant ?",
        ops:["+","+"],
        aide:"On ajoute les deux cadeaux à ce qu'il avait déjà."
      },
      {
        e:"J'achète 3 bagues à 10 € chacune. Je donne un billet de 50 €. Combien la vendeuse me rend-elle ?",
        ops:["×","-"],
        aide:"D'abord le prix des bagues (3 × 10), puis on enlève du billet de 50 €."
      },
      {
        e:"Marie a 20 € et reçoit 10 €. Elle partage tout en parts égales entre ses 2 enfants. Combien chacun reçoit-il ?",
        ops:["+",":"],
        aide:"On rassemble l'argent (+10) puis on partage en 2 (÷2)."
      },
      {
        e:"J'ai 15 bonbons. J'en donne 5 à Luc et 5 à Léa. Combien m'en reste-t-il ?",
        ops:["-","-"],
        aide:"On enlève une fois pour Luc, une fois pour Léa."
      },
    ],

    // -------- RELIER DES PAIRES (explication ↔ opération) --------
    relier: [
      {
        titre:"Relie chaque explication à son opération",
        gauche:[
          {id:"g1", t:"Enlever, retirer, perdre"},
          {id:"g2", t:"Rassembler, ajouter, gagner"},
          {id:"g3", t:"Partager, faire des groupes égaux"},
          {id:"g4", t:"Des paquets identiques, des rangées"},
        ],
        droite:[
          {id:"d1", t:"une soustraction", lie:"g1"},
          {id:"d2", t:"une addition", lie:"g2"},
          {id:"d3", t:"une division", lie:"g3"},
          {id:"d4", t:"une multiplication", lie:"g4"},
        ]
      },
      {
        titre:"Relie chaque opération à son symbole",
        gauche:[
          {id:"o1", t:"une soustraction"},
          {id:"o2", t:"une addition"},
          {id:"o3", t:"une multiplication"},
          {id:"o4", t:"une division"},
        ],
        droite:[
          {id:"s1", t:"−", lie:"o1"},
          {id:"s2", t:"+", lie:"o2"},
          {id:"s3", t:"×", lie:"o3"},
          {id:"s4", t:":", lie:"o4"},
        ]
      },
    ],

    // -------- GLISSER-DÉPOSER : ranger les étiquettes dans la bonne case --------
    glisser: [
      {
        titre:"Range chaque problème dans la bonne opération",
        cases:["+","−","×",":"],
        etiquettes:[
          {t:"Marc marque 3 buts, son copain 3 aussi.", bon:"+"},
          {t:"Lucie a 20 €, elle achète un livre à 8 €.", bon:"−"},
          {t:"7 rangées de 5 carrés de chocolat.", bon:"×"},
          {t:"14 sucettes partagées entre 2 filles.", bon:":"},
          {t:"5 chiots : combien de pattes en tout ?", bon:"×"},
          {t:"24 élèves, 12 partent à la bibliothèque.", bon:"−"},
          {t:"20 perles partagées dans 4 boîtes.", bon:":"},
          {t:"15 billes + 8 billes ensemble.", bon:"+"},
        ]
      },
      {
        titre:"Range chaque mot-indice dans la bonne opération",
        cases:["+","−","×",":"],
        etiquettes:[
          {t:"de plus, en tout, ensemble", bon:"+"},
          {t:"il reste, de moins, on rend", bon:"−"},
          {t:"des rangées de, le double", bon:"×"},
          {t:"partager en parts égales", bon:":"},
          {t:"gagner, ajouter", bon:"+"},
          {t:"enlever, retirer", bon:"−"},
        ]
      },
    ],
  }
},

];
