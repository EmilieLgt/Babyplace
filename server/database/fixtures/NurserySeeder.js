const AbstractSeeder = require("./AbstractSeeder");

class NurserySeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "nursery", truncate: true });
  }

  run() {
    const nurseries = [
      {
        nursery_name: "Lillomomes",
        nursery_street: "rue Courmont",
        nursery_street_number: 27,
        latitude: 50.619581,
        longitude: 3.06647,
        city: "Lille",
        capacity: 37,
        price: 10,
        nursery_phone: "03 20 85 96 41",
        nursery_mail: "contact@lillomomes.fr",
        image1: "../../public/assets/images/nurseriesImages/0101.jpg",
        image2: "../../public/assets/images/nurseriesImages/0102.jpg",
        image3: "../../public/assets/images/nurseriesImages/0103.jpg",
        activity1: "Activités sensorielles",
        activity2: "Sorties nature",
        activity3: "",
        certification1: "Crèche à Vocation d’Insertion Professionnelle",
        certification2: "Pédagogie Montessori",
        certification3: "Repas Bio",
        nursery_password:
          "$argon2id$v=19$m=19456,t=2,p=1$464AEPDzjYRojvO3uiagpQ$7ijvm6sq926t0cjlqCldX4bWjcq/dKthC77pflfnQr0",
        about:
          "Lillomômes, créée en 2018, a pour objet la création et l’exploitation d’une crèche à Vocation d’Insertion Professionnelle. Elle accueille au minimum 30% d’enfants de moins de trois ans dont les parents sont demandeurs d’emploi, volontaires pour s’engager dans une démarche de recherche d’emploi intensive, et/ou pour s’inscrire dans un parcours de formation en vue d’une insertion professionnelle durable sur le marché du travail. La garde d’enfants, en particulier pour les mères élevant seules leurs enfants, les demandeurs d’emploi ainsi que les salariés en parcours d’insertion, constitue un frein majeur de retour à l’emploi. Face à cette situation, la crèche à Vocation d’Insertion Professionnelle est une solution d’accueil aux enfants afin que leurs parents puissent bénéficier d’un accompagnement intensif à la recherche d’un emploi.",
      },
      {
        nursery_name: "Les Minilions",
        nursery_street: "Rue Saint-Sébastien",
        nursery_street_number: 27,
        latitude: 50.646742,
        longitude: 3.05705,
        city: "Lille",
        capacity: 10,
        price: 20,
        nursery_phone: "03 20 85 96 41",
        nursery_mail: " contact@minilions.fr",
        image1: "../../public/assets/images/nurseriesImages/0201.jpg",
        image2: "../../public/assets/images/nurseriesImages/0202.jpg",
        image3: "../../public/assets/images/nurseriesImages/0203.jpg",
        activity1: "Éveil sensoriel",
        activity2: "Ateliers peinture",
        activity3: "",
        certification1: "Habilitation PMI ",
        certification2: "",
        certification3: "",
        nursery_password: "",
        about:
          "Le programme pédagogique développé au sein des micro-crèches Minilions s’articule autour de trois valeurs essentielles pour l’enfant : éveil, bien-être et épanouissement",
      },
      {
        nursery_name: "Tambourin et Castagnettes - Liberté",
        nursery_street: "rue d'Hazebrouck",
        nursery_street_number: 27,
        latitude: 50.629234,
        longitude: 3.06706,
        city: "Lille",
        capacity: 10,
        price: 20,
        nursery_phone: "03 20 75 92 76",
        nursery_mail: "hello@tambourin-et-castagnettes.com",
        image1: "../../public/assets/images/nurseriesImages/0301.jpg",
        image2: "../../public/assets/images/nurseriesImages/0302.jpg",
        image3: "../../public/assets/images/nurseriesImages/0303.jpg",
        activity1: "Éveil musical",
        activity2: "Langue des signes",
        activity3: "",
        certification1: "Ecocert",
        certification2: "",
        certification3: "",
        nursery_password: "",
        about:
          "Située en plein cœur de Lille sur le boulevard de la Liberté et proche du parc Jean Baptiste Lebas, notre crèche, claire et spacieuse bénéficie d’une très grande terrasse aménagée de 80m2 .",
      },
      {
        nursery_name: "Chlorophylle",
        nursery_street: "rue Fourrier",
        nursery_street_number: 27,
        longitude: 3.01932,
        latitude: 50.634505,
        city: "Lille",
        capacity: 12,
        price: 20,
        nursery_phone: "06 51 99 48 67",
        nursery_mail: "hello@chlorophylle.com",
        image1: "../../public/assets/images/nurseriesImages/0401.jpg",
        image2: "../../public/assets/images/nurseriesImages/0402.jpg",
        image3: "../../public/assets/images/nurseriesImages/0403.jpg",
        activity1: "Jardinage",
        activity2: "Arts plastiques",
        activity3: "",
        certification1: "Bilingue anglais",
        certification2: "Repas Bio",
        certification3: "",
        nursery_password: "",
        about:
          "A la crèche Chlorophylle, une professionnelle native parle tous les jours anglais aux enfants. L’atmosphère conviviale de la crèche est un vrai plus pour les parents qui aiment participer aux animations organisées pour les familles.",
      },
      {
        nursery_name: "Le Royaume des Petits Lutins",
        nursery_street: "rue Pierre Curie",
        nursery_street_number: 27,
        latitude: 50.646742,
        longitude: 3.05705,
        city: "Lille",
        capacity: 12,
        price: 20,
        nursery_phone: "09 50 09 81 14",
        nursery_mail: "hello@royaumepetitslutins.com",
        image1: "../../public/assets/images/nurseriesImages/0501.jpg",
        image2: "../../public/assets/images/nurseriesImages/0502.jpg",
        image3: "../../public/assets/images/nurseriesImages/0503.jpg",
        activity1: "Découverte de la nature",
        activity2: "Relaxation",
        activity3: "Langage des signes",
        certification1: "Repas Bio",
        certification2: "",
        certification3: "",
        nursery_password: "",
        about:
          "La crèche 'Le Royaume des Petits Lutins' propose un projet pédagogique dédié à l’éveil, l’épanouissement et le bien-être des tout-petits.",
      },
      {
        nursery_name: "Harmonie",
        nursery_street: "rue des Eaux",
        nursery_street_number: 27,
        latitude: 50.656532,
        longitude: 3.08612,
        city: "Lille",
        capacity: 12,
        price: 20,
        nursery_phone: "03 28 14 44 56",
        nursery_mail: "hello@harmonie.com",
        image1: "../../public/assets/images/nurseriesImages/0601.jpg",
        image2: "../../public/assets/images/nurseriesImages/0602.jpg",
        image3: "../../public/assets/images/nurseriesImages/0603.jpg",
        activity1: "Jardinage",
        activity2: "Découverte langues étrangères",
        activity3: "",
        certification1: "Repas Bio",
        certification2: "",
        certification3: "",
        nursery_password: "",
        about:
          "Pour le bien-être et l’éveil des tout-petits, nos équipes de passionnés de la petite enfance ont mis en place des animations pédagogiques et ludiques axées sur la découverte de la faune et de la flore. D’autres ateliers permettent de découvrir le jardinage et les matériaux naturels. Des temps calmes sont également organisés pour stimuler l’imagination de bébé.",
      },
      {
        nursery_name: "Tilleul",
        nursery_street: "Square Dutilleul",
        nursery_street_number: 27,
        latitude: 50.636741,
        longitude: 3.05475,
        city: "Lille",
        capacity: 15,
        price: 20,
        nursery_phone: "07 82 27 21 40",
        nursery_mail: "hello@tilleul.com",
        image1: "../../public/assets/images/nurseriesImages/0701.jpg",
        image2: "../../public/assets/images/nurseriesImages/0702.jpg",
        image3: "../../public/assets/images/nurseriesImages/0703.jpg",
        activity1: "Visites hors les murs",
        activity2: "Jardinage",
        activity3: "Relaxation",
        certification1: "Bilingue anglais",
        certification2: "Repas Bio",
        certification3: "",
        nursery_password: "",
        about:
          "La crèche Tilleul propose un projet pédagogique tourné vers le bien-être, l'éveil et l'épanouissement des enfant. Tous les jours, nous organisons des ateliers ludiques et pédagogiques pour encourager l’imagination et la motricité. Au programme, jardinage, manipulation de matériaux naturels, sensibilisation au vivant mais aussi temps calme avec lecture, relaxation et découverte des langues.",
      },
      {
        nursery_name: "Les petits soleils",
        nursery_street: "rue des Cannoniers",
        nursery_street_number: 27,
        latitude: 50.639378,
        longitude: 3.06989,
        city: "Lille",
        capacity: 13,
        price: 20,
        nursery_phone: "09 50 15 28 89",
        nursery_mail: "hello@petitssoleils.com",
        image1: "../../public/assets/images/nurseriesImages/0801.jpg",
        image2: "../../public/assets/images/nurseriesImages/0802.jpg",
        image3: "../../public/assets/images/nurseriesImages/0803.jpg",
        activity1: "Jardinage",
        activity2: "Langues étrangères",
        activity3: "",
        certification1: "Repas Bio",
        certification2: "",
        certification3: "",
        nursery_password: "",
        about:
          "Chez 'Les Petits Soleils', la nature est un terrain de jeu familier : jardinage, manipulation de matériaux naturels, sensibilisation au vivant… font partie du quotidien. Des temps de lecture, des activités variées suscitant l’imagination, et des séances de découverte des langues étrangères sont prévus chaque jour.",
      },
      {
        nursery_name: "Babilou Lille Le Plat",
        nursery_street: "rue du Plat",
        nursery_street_number: 33,
        latitude: 50.656532,
        longitude: 3.08612,
        city: "Lille",
        capacity: 12,
        price: 20,
        nursery_phone: "03 28 14 44 56",
        nursery_mail: "hello@lilleleplat.com",
        image1: "../../public/assets/images/nurseriesImages/0901.jpg",
        image2: "../../public/assets/images/nurseriesImages/0902.jpg",
        image3: "../../public/assets/images/nurseriesImages/0903.jpg",
        activity1: "Langue des signes",
        activity2: "",
        activity3: "",
        certification1: "Agrément PMI",
        certification2: "",
        certification3: "",
        nursery_password: "",
        about:
          "Notre projet porte sur la motricité libre qui permet à l'enfant d'évoluer par lui même et à son propre rythme. Nous veillons à laisser aux enfants un maximum d'autonomie. Nous leur proposons également une crèche végétalisée pour compenser l'absence de jardin. Les professionnels proposent aussi des ateliers autour de la nature et des éléments naturels. ",
      },
      {
        nursery_name: "Les Petits Chaperons Rouges - Rennes Paris",
        nursery_street: "rue de Paris",
        nursery_street_number: 74,
        latitude: 48.113054,
        longitude: -1.66239,
        city: "Rennes",
        capacity: 26,
        price: 15,
        nursery_phone: "02 56 85 41 00",
        nursery_mail: "contact@lespetitschaperons.fr",
        image1: "../../public/assets/images/nurseriesImages/1001.jpg",
        image2: "../../public/assets/images/nurseriesImages/1002.jpg",
        image3: "../../public/assets/images/nurseriesImages/1003.jpg",
        activity1: "Motricité",
        activity2: "Éveil sensoriel",
        activity3: "",
        certification1: "Agrément PMI",
        certification2: "Crèch'EXPERT",
        certification3: "",
        nursery_password: "",
        about:
          "La crèche accueille les enfants de l’âge de 2 mois à 4 ans au sein d’une structure organisée en différentes sections, des bébés aux plus grands, afin de respecter le rythme naturel des enfants.",
      },
      {
        nursery_name: "Crèche'n'do",
        nursery_street: "Rue du Sous-Lieutenant Lay",
        nursery_street_number: 8,
        latitude: 48.109371,
        longitude: -1.653964,
        city: "Rennes",
        capacity: 33,
        price: 10,
        nursery_phone: "0756918073",
        nursery_mail: "contact@crechendo-creches.com",
        image1: "../../public/assets/images/nurseriesImages/1101.jpg",
        image2: "../../public/assets/images/nurseriesImages/1102.jpg",
        image3: "../../public/assets/images/nurseriesImages/1103.jpg",
        activity1: "Relaxation",
        activity2: "Éveil musical",
        activity3: "Ateliers musicaux",
        certification1: "Agrément PMI",
        certification2: "",
        certification3: "",
        nursery_password: "",
        about:
          "Elle est facilement accessible par les transports en commun, la crèche dispose d’un espace Snoezelen dédié à l’éveil des sens et à la relaxation et d’un petit parc situé à moins de 100m.",
      },

      {
        nursery_name: "Au Clair de la Lune",
        nursery_street: "rue Pierre-Jean Gineste",
        nursery_street_number: 3,
        latitude: 48.119119,
        longitude: -1.699445,
        city: "Rennes",
        capacity: 15,
        price: 13,
        nursery_phone: "02 99 14 14 71",
        nursery_mail: "contact@clair-de-lune.fr",
        image1: "../../public/assets/images/nurseriesImages/1201.jpg",
        image2: "../../public/assets/images/nurseriesImages/1202.jpg",
        image3: "../../public/assets/images/nurseriesImages/1203.jpg",
        activity1: "Sortie bibliothèque",
        activity2: "Jardin",
        activity3: "",
        certification1: "Agrément PMI",
        certification2: "",
        certification3: "",
        nursery_password: "",
        about:
          "Crèche parentale réservée aux étudiants et enseignants de l'Université Rennes 2 et résidants sur Rennes.",
      },

      {
        nursery_name: "Piccolino",
        nursery_street: "Rue Gina Pane",
        nursery_street_number: 17,
        latitude: 48.134424,
        longitude: -1.697128,
        city: "Rennes",
        capacity: 22,
        price: 7,
        nursery_phone: "02 99 13 24 72",
        nursery_mail: "contact@piccolino.fr",
        image1: "../../public/assets/images/nurseriesImages/1301.jpg",
        image2: "../../public/assets/images/nurseriesImages/1302.jpg",
        image3: "../../public/assets/images/nurseriesImages/1303.jpg",
        activity1: "Bilingue anglais",
        activity2: "Acitivités sensorielles",
        activity3: "Language des signes",
        certification1: "Repas Bio",
        certification2: "",
        certification3: "",
        nursery_password: "",
        about:
          "La crèche piccolino Eurorennes, d'une superficie de 150 m2, est un univers dédié au développement moteur et cognitif de l'enfant.",
      },

      {
        nursery_name: "Les Petits Merlins",
        nursery_street: "Av. De Pologne",
        nursery_street_number: 12,
        latitude: 48.087106,
        longitude: -1.650957,
        city: "Rennes",
        capacity: 40,
        price: 15,
        nursery_phone: "02 68 82 52 34",
        nursery_mail: "contact@petits-merlins.fr",
        image1: "../../public/assets/images/nurseriesImages/1401.jpg",
        image2: "../../public/assets/images/nurseriesImages/1402.jpg",
        image3: "../../public/assets/images/nurseriesImages/1403.jpg",
        activity1: "Atelier massages",
        activity2: "",
        activity3: "",
        certification1: "Lieu d'Accueil Enfant-Parent",
        certification2: "",
        certification3: "",
        nursery_password: "",
        about:
          "Les projets de l’Association et du multi-accueil Les petits Merlins se fondent sur la participation des familles et sur des valeurs de non-discrimination. Favorise l’accès à la collectivité pour des enfants de moins de 6 ans, qu'ils soient valides, en situation de handicap ou atteints de maladies chroniques",
      },
    ];

    nurseries.forEach((nursery) => {
      const nurseryWithRefName = {
        ...nursery,
        refName: `nursery_${nursery.nursery_mail}`,
      };

      this.insert(nurseryWithRefName);
    });
  }
}

module.exports = NurserySeeder;
