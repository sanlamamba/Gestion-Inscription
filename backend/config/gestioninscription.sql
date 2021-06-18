-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 18 juin 2021 à 02:05
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
-- Base de données : `appligestion`
--
CREATE DATABASE IF NOT EXISTS `appligestion` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `appligestion`;

-- --------------------------------------------------------

--
-- Structure de la table `etudiant`
--

CREATE TABLE `etudiant` (
  `id` int(11) NOT NULL,
  `nom` text NOT NULL,
  `prenom` text NOT NULL,
  `adresse` text NOT NULL DEFAULT 'Dakar',
  `sexe` text NOT NULL,
  `mail` text NOT NULL,
  `mdp` text NOT NULL,
  `date_naissance` text NOT NULL,
  `filiere` text NOT NULL,
  `annee_inscrip` text NOT NULL DEFAULT 'Licence 1',
  `status` text NOT NULL DEFAULT 'attente'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `etudiant`
--

INSERT INTO `etudiant` (`id`, `nom`, `prenom`, `adresse`, `sexe`, `mail`, `mdp`, `date_naissance`, `filiere`, `annee_inscrip`, `status`) VALUES
(1, 'fatima', 'barry', 'Dakar', 'femme', 'fatima@gmail.com', 'asd123', '01-01-2000', 'web', 'Licence1', 'attente'),
(3, 'qsd', 'wd', 'Dakar', 'femme', 'draxx@gmail.com', 'asd123', '30-04-2004', 'Cybersecurite', 'Licence 2', 'attente'),
(4, 'Aziz', 'Ndiaye', 'Dakar', 'homme', 'ziz@gmail.com', 'fgh123', '05-03-2006', 'Web', 'Licence 1', 'attente');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `id` int(11) NOT NULL,
  `nom` text NOT NULL,
  `prenom` text NOT NULL,
  `mail` text NOT NULL,
  `mdp` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id`, `nom`, `prenom`, `mail`, `mdp`) VALUES
(1, 'Ousmane', 'Cisse', 'ousmane@gmail.com', 'asd123');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `etudiant`
--
ALTER TABLE `etudiant`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `etudiant`
--
ALTER TABLE `etudiant`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Base de données : `etatcivil`
--
CREATE DATABASE IF NOT EXISTS `etatcivil` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `etatcivil`;

-- --------------------------------------------------------

--
-- Structure de la table `cin_mere`
--

CREATE TABLE `cin_mere` (
  `id_cin` int(64) NOT NULL,
  `id_cin_naissance_mere` int(64) NOT NULL,
  `id_cin_naissance_enfant` int(64) NOT NULL,
  `id_cin_naissance_partenaire` int(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `cin_pere`
--

CREATE TABLE `cin_pere` (
  `id_cin` int(64) NOT NULL,
  `id_cin_naissance_pere` int(64) NOT NULL,
  `id_cin_naissance_enfant` int(64) NOT NULL,
  `id_cin_naissance_partenaire` int(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `deces`
--

CREATE TABLE `deces` (
  `id_deces` int(64) NOT NULL,
  `nom_deces` varchar(255) COLLATE utf8_bin NOT NULL,
  `prenom_deces` varchar(255) COLLATE utf8_bin NOT NULL,
  `sexe_deces` varchar(255) COLLATE utf8_bin NOT NULL,
  `adresse_deces` varchar(255) COLLATE utf8_bin NOT NULL,
  `date_deces` varchar(255) COLLATE utf8_bin NOT NULL,
  `lieu_deces` varchar(255) COLLATE utf8_bin NOT NULL,
  `id_naissance` int(64) NOT NULL,
  `photo_deces` varchar(255) COLLATE utf8_bin NOT NULL,
  `id_declarant` int(64) NOT NULL,
  `date_declaration_deces` date NOT NULL DEFAULT current_timestamp(),
  `heure_deces` int(25) NOT NULL,
  `minute_deces` int(25) NOT NULL,
  `age_deces` varchar(255) COLLATE utf8_bin NOT NULL,
  `profession_deces` varchar(255) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `deces`
--

INSERT INTO `deces` (`id_deces`, `nom_deces`, `prenom_deces`, `sexe_deces`, `adresse_deces`, `date_deces`, `lieu_deces`, `id_naissance`, `photo_deces`, `id_declarant`, `date_declaration_deces`, `heure_deces`, `minute_deces`, `age_deces`, `profession_deces`) VALUES
(1, 'Mikal', 'Jakson', 'homme', 'Oasis 6325', '25-05-2015', 'Kimaljaro', 69845, 'image.jpg', 47852, '0000-00-00', 23, 54, '68', 'Menuisier'),
(6, 'Mikal', 'Jakson', 'homme', 'Oasis 6325', '25-05-2015', 'Kimaljaro', 69845, 'image.jpg', 47852, '0000-00-00', 23, 54, '68', 'Menuisier'),
(7, 'Biko', 'Brown', 'homme', 'Mer sud ', '03-05-2019', 'everest', 6321, 'img.png', 7458, '0000-00-00', 11, 35, '45', 'Charbonier'),
(8, 'Nicolas', 'Frost', 'homme', 'South pole', '06-07-2019', 'Igloo', 6325, 'zsxcd.png', 65478, '0000-00-00', 17, 43, '69', 'Apriculteur'),
(9, 'Nicolas', 'Frost', 'homme', 'South pole', '06-07-2019', 'Igloo', 6325, 'zsxcd.png', 65478, '0000-00-00', 17, 43, '69', 'Apriculteur');

-- --------------------------------------------------------

--
-- Structure de la table `declarant_deces`
--

CREATE TABLE `declarant_deces` (
  `id_declarant` int(11) NOT NULL,
  `nom_declarant` varchar(255) COLLATE utf8_bin NOT NULL,
  `prenom_declarant` varchar(255) COLLATE utf8_bin NOT NULL,
  `adresse_declarant` varchar(255) COLLATE utf8_bin NOT NULL,
  `id_naissance_declarant` int(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `naissance`
--

CREATE TABLE `naissance` (
  `id_naissance` int(64) NOT NULL,
  `nom_naissance` varchar(255) COLLATE utf8_bin NOT NULL,
  `prenom_naissance` varchar(255) COLLATE utf8_bin NOT NULL,
  `sexe_naissance` varchar(255) COLLATE utf8_bin NOT NULL,
  `adresse_parent` varchar(255) COLLATE utf8_bin NOT NULL,
  `date_naissance` varchar(255) COLLATE utf8_bin NOT NULL,
  `lieu_naissance` varchar(255) COLLATE utf8_bin NOT NULL,
  `id_naissance_pere` int(64) NOT NULL,
  `id_naissance_mere` int(64) NOT NULL,
  `id_centre_naissance` int(11) NOT NULL,
  `photo_naissance` varchar(255) COLLATE utf8_bin NOT NULL,
  `date_declaration_naissance` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `id_utilisateur` int(64) NOT NULL,
  `nom_utilisateur` varchar(255) COLLATE utf8_bin NOT NULL,
  `prenom_utilisateur` varchar(255) COLLATE utf8_bin NOT NULL,
  `pseudo_utilisateur` varchar(255) COLLATE utf8_bin NOT NULL,
  `mdp_utilisateur` varchar(255) COLLATE utf8_bin NOT NULL,
  `mail_utilisateur` varchar(255) COLLATE utf8_bin NOT NULL,
  `fonction_utilisateur` varchar(255) COLLATE utf8_bin NOT NULL,
  `role` varchar(25) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id_utilisateur`, `nom_utilisateur`, `prenom_utilisateur`, `pseudo_utilisateur`, `mdp_utilisateur`, `mail_utilisateur`, `fonction_utilisateur`, `role`) VALUES
(3, 'Ibrahima', 'Ly', 'Ibou', 'asd123', 'ibrahima@yahoo.fr', 'Directeur de centre', 'admin'),
(4, 'San Lamamba', 'Popoda', 'lamamba', 'zxc123', 'lamamba@gmail.com', 'Chef de departement', 'Utilisateur');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `cin_mere`
--
ALTER TABLE `cin_mere`
  ADD PRIMARY KEY (`id_cin`);

--
-- Index pour la table `cin_pere`
--
ALTER TABLE `cin_pere`
  ADD PRIMARY KEY (`id_cin`);

--
-- Index pour la table `deces`
--
ALTER TABLE `deces`
  ADD PRIMARY KEY (`id_deces`);

--
-- Index pour la table `naissance`
--
ALTER TABLE `naissance`
  ADD PRIMARY KEY (`id_naissance`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`id_utilisateur`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `cin_mere`
--
ALTER TABLE `cin_mere`
  MODIFY `id_cin` int(64) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `cin_pere`
--
ALTER TABLE `cin_pere`
  MODIFY `id_cin` int(64) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `deces`
--
ALTER TABLE `deces`
  MODIFY `id_deces` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `naissance`
--
ALTER TABLE `naissance`
  MODIFY `id_naissance` int(64) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `id_utilisateur` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- Base de données : `gestioninscription`
--
CREATE DATABASE IF NOT EXISTS `gestioninscription` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `gestioninscription`;

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
(1, 'Dev Web', '3 ans', '20 novembre 2021', 'web_fil.jpg'),
(2, 'Dev Appli', '3 ans', '28 Septembre 2021', 'appli_fil.jpg'),
(3, 'IA', '3 ans', '24 novembre 2021', 'ia_fil.jpg'),
(4, 'IOT', '3 ans', '25 Novembre 2021', 'iot_fil.jpg'),
(5, 'Machine Learning', '2 ans', '25 juillet 2020', 'ml_fil.jpg'),
(6, 'Infographe', '3 ans', '18 Novembre 2021', 'info_fil.jpg');

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
--
-- Base de données : `mabase`
--
CREATE DATABASE IF NOT EXISTS `mabase` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `mabase`;

-- --------------------------------------------------------

--
-- Structure de la table `commande`
--

CREATE TABLE `commande` (
  `idcommande` int(6) NOT NULL,
  `montant` int(5) NOT NULL,
  `id_membre` int(5) NOT NULL,
  `date` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `membre`
--

CREATE TABLE `membre` (
  `id_membre` int(5) NOT NULL,
  `pseudo` varchar(15) NOT NULL,
  `pwd` varchar(32) NOT NULL,
  `nom` varchar(20) NOT NULL,
  `prenom` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `sexe` enum('M','F') NOT NULL,
  `ville` varchar(20) NOT NULL,
  `adresse` varchar(30) NOT NULL,
  `statut` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `membre`
--

INSERT INTO `membre` (`id_membre`, `pseudo`, `pwd`, `nom`, `prenom`, `email`, `sexe`, `ville`, `adresse`, `statut`) VALUES
(1, 'mamba', '1234', 'lamamba', 'san', 'sanlamamba@yahoo.com', 'M', 'Dakar', 'ouakam', 1);

-- --------------------------------------------------------

--
-- Structure de la table `produit`
--

CREATE TABLE `produit` (
  `idproduit` int(5) NOT NULL,
  `date_arrivee` int(11) NOT NULL,
  `date_depart` int(11) NOT NULL,
  `idsalle` int(5) NOT NULL,
  `prix` int(5) NOT NULL,
  `etat` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `salle`
--

CREATE TABLE `salle` (
  `idsalle` int(5) NOT NULL,
  `pays` varchar(20) NOT NULL,
  `ville` varchar(20) NOT NULL,
  `adresse` text NOT NULL,
  `titre` varchar(200) NOT NULL,
  `photo` varchar(200) NOT NULL,
  `capacite` int(3) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `commande`
--
ALTER TABLE `commande`
  ADD PRIMARY KEY (`idcommande`);

--
-- Index pour la table `membre`
--
ALTER TABLE `membre`
  ADD PRIMARY KEY (`id_membre`);

--
-- Index pour la table `produit`
--
ALTER TABLE `produit`
  ADD PRIMARY KEY (`idproduit`);

--
-- Index pour la table `salle`
--
ALTER TABLE `salle`
  ADD PRIMARY KEY (`idsalle`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `commande`
--
ALTER TABLE `commande`
  MODIFY `idcommande` int(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `membre`
--
ALTER TABLE `membre`
  MODIFY `id_membre` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `produit`
--
ALTER TABLE `produit`
  MODIFY `idproduit` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `salle`
--
ALTER TABLE `salle`
  MODIFY `idsalle` int(5) NOT NULL AUTO_INCREMENT;
--
-- Base de données : `phpmyadmin`
--
CREATE DATABASE IF NOT EXISTS `phpmyadmin` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `phpmyadmin`;

-- --------------------------------------------------------

--
-- Structure de la table `pma__bookmark`
--

CREATE TABLE `pma__bookmark` (
  `id` int(10) UNSIGNED NOT NULL,
  `dbase` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `user` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `label` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `query` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Bookmarks';

-- --------------------------------------------------------

--
-- Structure de la table `pma__central_columns`
--

CREATE TABLE `pma__central_columns` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_type` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_length` text COLLATE utf8_bin DEFAULT NULL,
  `col_collation` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_isNull` tinyint(1) NOT NULL,
  `col_extra` varchar(255) COLLATE utf8_bin DEFAULT '',
  `col_default` text COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Central list of columns';

-- --------------------------------------------------------

--
-- Structure de la table `pma__column_info`
--

CREATE TABLE `pma__column_info` (
  `id` int(5) UNSIGNED NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `column_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `comment` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `mimetype` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `transformation` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `transformation_options` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `input_transformation` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `input_transformation_options` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Column information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Structure de la table `pma__designer_settings`
--

CREATE TABLE `pma__designer_settings` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `settings_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Settings related to Designer';

-- --------------------------------------------------------

--
-- Structure de la table `pma__export_templates`
--

CREATE TABLE `pma__export_templates` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `export_type` varchar(10) COLLATE utf8_bin NOT NULL,
  `template_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `template_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved export templates';

-- --------------------------------------------------------

--
-- Structure de la table `pma__favorite`
--

CREATE TABLE `pma__favorite` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `tables` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Favorite tables';

-- --------------------------------------------------------

--
-- Structure de la table `pma__history`
--

CREATE TABLE `pma__history` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp(),
  `sqlquery` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='SQL history for phpMyAdmin';

-- --------------------------------------------------------

--
-- Structure de la table `pma__navigationhiding`
--

CREATE TABLE `pma__navigationhiding` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `item_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `item_type` varchar(64) COLLATE utf8_bin NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Hidden items of navigation tree';

-- --------------------------------------------------------

--
-- Structure de la table `pma__pdf_pages`
--

CREATE TABLE `pma__pdf_pages` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `page_nr` int(10) UNSIGNED NOT NULL,
  `page_descr` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='PDF relation pages for phpMyAdmin';

-- --------------------------------------------------------

--
-- Structure de la table `pma__recent`
--

CREATE TABLE `pma__recent` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `tables` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Recently accessed tables';

--
-- Déchargement des données de la table `pma__recent`
--

INSERT INTO `pma__recent` (`username`, `tables`) VALUES
('root', '[{\"db\":\"gestioninscription\",\"table\":\"user\"},{\"db\":\"mabase\",\"table\":\"membre\"},{\"db\":\"mabase\",\"table\":\"commande\"},{\"db\":\"mabase\",\"table\":\"produit\"},{\"db\":\"mabase\",\"table\":\"salle\"},{\"db\":\"mabase\",\"table\":\"Salle\"}]');

-- --------------------------------------------------------

--
-- Structure de la table `pma__relation`
--

CREATE TABLE `pma__relation` (
  `master_db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `master_table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `master_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Relation table';

-- --------------------------------------------------------

--
-- Structure de la table `pma__savedsearches`
--

CREATE TABLE `pma__savedsearches` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `search_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `search_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved searches';

-- --------------------------------------------------------

--
-- Structure de la table `pma__table_coords`
--

CREATE TABLE `pma__table_coords` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `pdf_page_number` int(11) NOT NULL DEFAULT 0,
  `x` float UNSIGNED NOT NULL DEFAULT 0,
  `y` float UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table coordinates for phpMyAdmin PDF output';

-- --------------------------------------------------------

--
-- Structure de la table `pma__table_info`
--

CREATE TABLE `pma__table_info` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `display_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Structure de la table `pma__table_uiprefs`
--

CREATE TABLE `pma__table_uiprefs` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `prefs` text COLLATE utf8_bin NOT NULL,
  `last_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Tables'' UI preferences';

-- --------------------------------------------------------

--
-- Structure de la table `pma__tracking`
--

CREATE TABLE `pma__tracking` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `version` int(10) UNSIGNED NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL,
  `schema_snapshot` text COLLATE utf8_bin NOT NULL,
  `schema_sql` text COLLATE utf8_bin DEFAULT NULL,
  `data_sql` longtext COLLATE utf8_bin DEFAULT NULL,
  `tracking` set('UPDATE','REPLACE','INSERT','DELETE','TRUNCATE','CREATE DATABASE','ALTER DATABASE','DROP DATABASE','CREATE TABLE','ALTER TABLE','RENAME TABLE','DROP TABLE','CREATE INDEX','DROP INDEX','CREATE VIEW','ALTER VIEW','DROP VIEW') COLLATE utf8_bin DEFAULT NULL,
  `tracking_active` int(1) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Database changes tracking for phpMyAdmin';

-- --------------------------------------------------------

--
-- Structure de la table `pma__userconfig`
--

CREATE TABLE `pma__userconfig` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `config_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User preferences storage for phpMyAdmin';

--
-- Déchargement des données de la table `pma__userconfig`
--

INSERT INTO `pma__userconfig` (`username`, `timevalue`, `config_data`) VALUES
('root', '2021-05-26 00:34:00', '{\"Console\\/Mode\":\"collapse\",\"lang\":\"fr\"}');

-- --------------------------------------------------------

--
-- Structure de la table `pma__usergroups`
--

CREATE TABLE `pma__usergroups` (
  `usergroup` varchar(64) COLLATE utf8_bin NOT NULL,
  `tab` varchar(64) COLLATE utf8_bin NOT NULL,
  `allowed` enum('Y','N') COLLATE utf8_bin NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User groups with configured menu items';

-- --------------------------------------------------------

--
-- Structure de la table `pma__users`
--

CREATE TABLE `pma__users` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `usergroup` varchar(64) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Users and their assignments to user groups';

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `pma__central_columns`
--
ALTER TABLE `pma__central_columns`
  ADD PRIMARY KEY (`db_name`,`col_name`);

--
-- Index pour la table `pma__column_info`
--
ALTER TABLE `pma__column_info`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `db_name` (`db_name`,`table_name`,`column_name`);

--
-- Index pour la table `pma__designer_settings`
--
ALTER TABLE `pma__designer_settings`
  ADD PRIMARY KEY (`username`);

--
-- Index pour la table `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_user_type_template` (`username`,`export_type`,`template_name`);

--
-- Index pour la table `pma__favorite`
--
ALTER TABLE `pma__favorite`
  ADD PRIMARY KEY (`username`);

--
-- Index pour la table `pma__history`
--
ALTER TABLE `pma__history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`username`,`db`,`table`,`timevalue`);

--
-- Index pour la table `pma__navigationhiding`
--
ALTER TABLE `pma__navigationhiding`
  ADD PRIMARY KEY (`username`,`item_name`,`item_type`,`db_name`,`table_name`);

--
-- Index pour la table `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  ADD PRIMARY KEY (`page_nr`),
  ADD KEY `db_name` (`db_name`);

--
-- Index pour la table `pma__recent`
--
ALTER TABLE `pma__recent`
  ADD PRIMARY KEY (`username`);

--
-- Index pour la table `pma__relation`
--
ALTER TABLE `pma__relation`
  ADD PRIMARY KEY (`master_db`,`master_table`,`master_field`),
  ADD KEY `foreign_field` (`foreign_db`,`foreign_table`);

--
-- Index pour la table `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_savedsearches_username_dbname` (`username`,`db_name`,`search_name`);

--
-- Index pour la table `pma__table_coords`
--
ALTER TABLE `pma__table_coords`
  ADD PRIMARY KEY (`db_name`,`table_name`,`pdf_page_number`);

--
-- Index pour la table `pma__table_info`
--
ALTER TABLE `pma__table_info`
  ADD PRIMARY KEY (`db_name`,`table_name`);

--
-- Index pour la table `pma__table_uiprefs`
--
ALTER TABLE `pma__table_uiprefs`
  ADD PRIMARY KEY (`username`,`db_name`,`table_name`);

--
-- Index pour la table `pma__tracking`
--
ALTER TABLE `pma__tracking`
  ADD PRIMARY KEY (`db_name`,`table_name`,`version`);

--
-- Index pour la table `pma__userconfig`
--
ALTER TABLE `pma__userconfig`
  ADD PRIMARY KEY (`username`);

--
-- Index pour la table `pma__usergroups`
--
ALTER TABLE `pma__usergroups`
  ADD PRIMARY KEY (`usergroup`,`tab`,`allowed`);

--
-- Index pour la table `pma__users`
--
ALTER TABLE `pma__users`
  ADD PRIMARY KEY (`username`,`usergroup`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `pma__column_info`
--
ALTER TABLE `pma__column_info`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `pma__history`
--
ALTER TABLE `pma__history`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  MODIFY `page_nr` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- Base de données : `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `test`;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
