-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 17 juin 2021 à 04:03
-- Version du serveur :  10.4.14-MariaDB
-- Version de PHP : 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `gestioninscription`
--

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `mail` varchar(255) DEFAULT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `specialite` varchar(255) DEFAULT NULL,
  `fonction` varchar(255) DEFAULT NULL,
  `password` text NOT NULL,
  `access_token` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `admin`
--

INSERT INTO `admin` (`id`, `nom`, `mail`, `adresse`, `tel`, `specialite`, `fonction`, `password`, `access_token`) VALUES
(14, 'JEAN', 'jvp@gmail.com', 'Dakar', '77 889 32 14', 'JAVASCRIPT', 'directeur des etudes', 'asd123', 'sdwasdA5'),
(15, 'Paul', 'jeanpaul@gmail.com', 'thies', '7799685213', 'securite', 'proffesseur', 'zBest1122', 'Qwreas63');

-- --------------------------------------------------------

--
-- Structure de la table `etudiant`
--

CREATE TABLE `etudiant` (
  `id_etudiant` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `sexe` varchar(25) DEFAULT NULL,
  `date_naissance` varchar(255) DEFAULT NULL,
  `mail` varchar(255) DEFAULT NULL,
  `status` varchar(25) NOT NULL DEFAULT 'attente',
  `password` varchar(255) DEFAULT NULL,
  `access_token` varchar(255) DEFAULT NULL,
  `matricule` int(11) DEFAULT NULL,
  `id_groupe` int(11) DEFAULT NULL,
  `annee_inscription` varchar(25) DEFAULT NULL,
  `filiere_choisi` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `etudiant`
--

INSERT INTO `etudiant` (`id_etudiant`, `nom`, `sexe`, `date_naissance`, `mail`, `status`, `password`, `access_token`, `matricule`, `id_groupe`, `annee_inscription`, `filiere_choisi`) VALUES
(3, 'George Likemba', 'M', '18-06-2001', 'georgelikemba@gmail.com', 'rejeter', 'kata2021', 'qwe123', 9874, 315, 'License 2', ''),
(4, 'Pata Mata', 'M', '24-06-2021', 'patamata@gmail.com', 'inscrit', 'asd123', 'azsx123', 9632, 685, 'L3', 'Machine learning'),
(21, 'san lamamba', 'homme', '06-08-2004', 'san@gmail.com', 'inscrit', 'asd123', ' GkG6A5ct', 44625, 685, 'M1', 'IOT'),
(22, 'draxx', 'homme', '05-03-2000', 'da@gmail.com', 'attente', 'asd123', ' yAZIQ0Rx', NULL, NULL, 'L2', 'Machine Learning'),
(23, 'Geraud', 'homme', '06-05-2000', 'draxx@gmail.com', 'attente', 'asd123', ' qgoUw1uX', NULL, NULL, 'M1', 'Dev Appli'),
(24, 'Aziz', 'femme', '02-03-2000', 'zizi@gmail.com', 'rejeter', 'asd123', ' r2QcnpZV', NULL, NULL, 'L2', 'IA'),
(25, 'SAN Lamamba Popoda', 'homme', '26-05-2001', 'lamamba@gmail.com', 'inscrit', 'thepassword1234', ' 63jc3t6C', 49238, 45687, 'L2', 'Machine Learning');

-- --------------------------------------------------------

--
-- Structure de la table `filiere`
--

CREATE TABLE `filiere` (
  `id_filiere_TB` int(11) NOT NULL,
  `nom_filiere_TB` varchar(255) DEFAULT NULL,
  `duree_filiere_TB` varchar(25) DEFAULT NULL,
  `date_debut_filiere_TB` varchar(255) DEFAULT NULL,
  `img_filiere_TB` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `filiere`
--

INSERT INTO `filiere` (`id_filiere_TB`, `nom_filiere_TB`, `duree_filiere_TB`, `date_debut_filiere_TB`, `img_filiere_TB`) VALUES
(1, 'Dev Web', '3 ans', '20 novembre 2021', 'web_fil.png'),
(2, 'Dev Appli', '3 ans', '28 Septembre 2021', 'appli_dev.png'),
(3, 'IA', '3 ans', '24 novembre 2021', 'ia_fil.png'),
(4, 'IOT', '3 ans', '25 Novembre 2021', 'iot_fil.png'),
(5, 'Machine Learning', '2 ans', '25 juillet 2020', 'ml_fil.png'),
(6, 'Infographe', '3 ans', '18 Novembre 2021', 'info_fil.png');

-- --------------------------------------------------------

--
-- Structure de la table `groupe`
--

CREATE TABLE `groupe` (
  `id` int(11) NOT NULL,
  `label` varchar(255) NOT NULL,
  `initial` varchar(25) NOT NULL,
  `id_filiere` int(11) NOT NULL,
  `annee_en_cours` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `groupe`
--

INSERT INTO `groupe` (`id`, `label`, `initial`, `id_filiere`, `annee_en_cours`) VALUES
(315, 'Dev Appli 2022', 'DA', 2, 2022),
(685, 'IOT 2022', 'iot', 4, 2022),
(963, 'Web 2022', 'web', 1, 2022),
(2365, 'IA 2022', 'ia', 3, 2022),
(36521, 'Infographe 2022', 'inf', 6, 2022),
(45678, 'IOT 2022', 'iot', 4, 2022),
(45687, 'Machine Learning', 'ML', 5, 2022);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `etudiant`
--
ALTER TABLE `etudiant`
  ADD PRIMARY KEY (`id_etudiant`);

--
-- Index pour la table `filiere`
--
ALTER TABLE `filiere`
  ADD PRIMARY KEY (`id_filiere_TB`);

--
-- Index pour la table `groupe`
--
ALTER TABLE `groupe`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT pour la table `etudiant`
--
ALTER TABLE `etudiant`
  MODIFY `id_etudiant` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT pour la table `filiere`
--
ALTER TABLE `filiere`
  MODIFY `id_filiere_TB` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `groupe`
--
ALTER TABLE `groupe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45688;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
