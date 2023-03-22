-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : mer. 22 mars 2023 à 14:13
-- Version du serveur : 5.7.34
-- Version de PHP : 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `tp_hiren`
--

-- --------------------------------------------------------

--
-- Structure de la table `admin2`
--

CREATE TABLE `admin2` (
  `id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `pincode` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `admin2`
--

INSERT INTO `admin2` (`id`, `created_at`, `modified_at`, `pincode`) VALUES
(1, '2023-03-21 09:53:01', '2023-03-21 09:53:01', '$2b$10$nHUq7Cy8Dai7gNAlM5NYoeIfTw38pAbaL6anK2Bvbwc2x599wBhSu'),
(2, '2023-03-21 10:50:37', '2023-03-21 10:50:37', '$2b$10$wP03mCpS1aav.ja2JhHVjeMZqkLX55R1N5XYbhXPl5d1IWrZTJrn6'),
(3, '2023-03-21 10:50:55', '2023-03-21 10:50:55', '2345'),
(4, '2023-03-21 10:54:13', '2023-03-21 10:54:13', '2345');

-- --------------------------------------------------------

--
-- Structure de la table `restaurantTable`
--

CREATE TABLE `restaurantTable` (
  `id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `restaurantTable`
--

INSERT INTO `restaurantTable` (`id`, `created_at`, `modified_at`, `name`) VALUES
(1, '2023-03-15 12:49:53', '2023-03-15 10:26:10', 'Fraise'),
(2, '2023-03-17 13:02:20', '0000-00-00 00:00:00', 'dzdz'),
(3, '2023-03-17 19:05:45', '2023-03-17 19:06:57', 'Table du dev bg'),
(4, '2023-03-20 13:58:26', '2023-03-20 13:58:26', 'ggtggtgt');

-- --------------------------------------------------------

--
-- Structure de la table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `modified_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `shiftType` int(11) DEFAULT NULL,
  `shiftClosed` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `services`
--

INSERT INTO `services` (`id`, `created_at`, `modified_at`, `shiftType`, `shiftClosed`) VALUES
(1, '2023-03-15 10:26:48', '2023-03-15 10:26:48', 2, 1);

-- --------------------------------------------------------

--
-- Structure de la table `serviceUsers`
--

CREATE TABLE `serviceUsers` (
  `id_service` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tableTips`
--

CREATE TABLE `tableTips` (
  `id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `modified_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `tips` int(11) DEFAULT NULL,
  `id_restaurantTable` int(11) DEFAULT NULL,
  `id_service` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `tableTips`
--

INSERT INTO `tableTips` (`id`, `created_at`, `modified_at`, `tips`, `id_restaurantTable`, `id_service`) VALUES
(1, '2023-03-15 10:24:31', '0000-00-00 00:00:00', 23, 1, 1),
(2, '2023-03-15 10:24:31', '2023-03-10 13:03:44', 22, 1, 1),
(3, '2023-04-15 09:24:31', '2023-03-10 13:03:44', 29, 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `tipsPayments`
--

CREATE TABLE `tipsPayments` (
  `id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `modified_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `amount` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `tipsPayments`
--

INSERT INTO `tipsPayments` (`id`, `created_at`, `modified_at`, `amount`, `id_user`) VALUES
(1, '2023-03-21 13:18:31', '2023-03-16 13:26:45', 23, 0),
(3, '2023-03-21 13:18:31', '2023-03-16 13:26:45', 22, 0),
(4, '2023-03-21 13:18:31', '0000-00-00 00:00:00', 10, 0);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `modified_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `created_at`, `modified_at`, `firstname`, `lastname`, `status`, `active`) VALUES
(3, '2023-03-21 13:29:52', '0000-00-00 00:00:00', 'anonyme', 'anonyme', 0, NULL),
(4, '2023-03-21 14:27:00', '0000-00-00 00:00:00', 'anonyme', 'anonyme', 0, NULL),
(5, '2023-03-21 14:29:37', '0000-00-00 00:00:00', 'anonyme', 'anonyme', 1, NULL),
(6, '2023-03-21 14:31:05', '0000-00-00 00:00:00', 'anonyme', 'anonyme', 1, NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `admin2`
--
ALTER TABLE `admin2`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `restaurantTable`
--
ALTER TABLE `restaurantTable`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `tableTips`
--
ALTER TABLE `tableTips`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `tipsPayments`
--
ALTER TABLE `tipsPayments`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `admin2`
--
ALTER TABLE `admin2`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `restaurantTable`
--
ALTER TABLE `restaurantTable`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `tableTips`
--
ALTER TABLE `tableTips`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `tipsPayments`
--
ALTER TABLE `tipsPayments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
