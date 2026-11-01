/*
  CATALOGUE DES PRODUITS
  ----------------------
  Modifiez ce fichier pour ajouter, retirer ou changer vos produits.
  Chaque catégorie contient la liste de TOUS ses produits.

  Un produit = { nom, description, prix, image }
    - image : nom du fichier (ex. "produits/coffret-1.jpg"). Laissez "" si pas encore d'image.
    - prix  : texte libre (ex. "45 DT", "Sur devis"). Laissez "" pour ne rien afficher.
*/

const CATEGORIES = {
  entreprise: {
    titre: "Cadeaux entreprise",
    intro: "[Présentez en une phrase vos cadeaux pour entreprises.]",
    produits: [
      { nom: "[Nom du produit 1]", description: "[Courte description]", prix: "[Prix]", image: "" },
      { nom: "[Nom du produit 2]", description: "[Courte description]", prix: "[Prix]", image: "" },
      { nom: "[Nom du produit 3]", description: "[Courte description]", prix: "[Prix]", image: "" },
      { nom: "[Nom du produit 4]", description: "[Courte description]", prix: "[Prix]", image: "" },
      { nom: "[Nom du produit 5]", description: "[Courte description]", prix: "[Prix]", image: "" },
      { nom: "[Nom du produit 6]", description: "[Courte description]", prix: "[Prix]", image: "" }
    ]
  },
  maison: {
    titre: "Cadeaux maison",
    intro: "[Présentez en une phrase vos cadeaux pour la maison.]",
    produits: [
      { nom: "[Nom du produit 1]", description: "[Courte description]", prix: "[Prix]", image: "" },
      { nom: "[Nom du produit 2]", description: "[Courte description]", prix: "[Prix]", image: "" },
      { nom: "[Nom du produit 3]", description: "[Courte description]", prix: "[Prix]", image: "" },
      { nom: "[Nom du produit 4]", description: "[Courte description]", prix: "[Prix]", image: "" },
      { nom: "[Nom du produit 5]", description: "[Courte description]", prix: "[Prix]", image: "" },
      { nom: "[Nom du produit 6]", description: "[Courte description]", prix: "[Prix]", image: "" }
    ]
  },
  personnalise: {
    titre: "Cadeaux personnalisés",
    intro: "[Présentez en une phrase vos cadeaux personnalisables.]",
    produits: [
      { nom: "[Nom du produit 1]", description: "[Courte description]", prix: "[Prix]", image: "" },
      { nom: "[Nom du produit 2]", description: "[Courte description]", prix: "[Prix]", image: "" },
      { nom: "[Nom du produit 3]", description: "[Courte description]", prix: "[Prix]", image: "" },
      { nom: "[Nom du produit 4]", description: "[Courte description]", prix: "[Prix]", image: "" },
      { nom: "[Nom du produit 5]", description: "[Courte description]", prix: "[Prix]", image: "" },
      { nom: "[Nom du produit 6]", description: "[Courte description]", prix: "[Prix]", image: "" }
    ]
  },
  evenement: {
    titre: "Événements",
    intro: "[Présentez en une phrase vos offres pour les événements.]",
    produits: [
      { nom: "[Nom du produit 1]", description: "[Courte description]", prix: "[Prix]", image: "" },
      { nom: "[Nom du produit 2]", description: "[Courte description]", prix: "[Prix]", image: "" },
      { nom: "[Nom du produit 3]", description: "[Courte description]", prix: "[Prix]", image: "" },
      { nom: "[Nom du produit 4]", description: "[Courte description]", prix: "[Prix]", image: "" },
      { nom: "[Nom du produit 5]", description: "[Courte description]", prix: "[Prix]", image: "" },
      { nom: "[Nom du produit 6]", description: "[Courte description]", prix: "[Prix]", image: "" }
    ]
  }
};

// Adresse e-mail qui reçoit les demandes (bouton « Demander »)
const EMAIL_CONTACT = "contact@exemple.com";
