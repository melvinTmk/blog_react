-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : db
-- Généré le : dim. 10 avr. 2022 à 16:10
-- Version du serveur : 10.6.4-MariaDB-1:10.6.4+maria~focal
-- Version de PHP : 7.4.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `data`
--

-- --------------------------------------------------------

--
-- Structure de la table `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `post`
--

INSERT INTO `post` (`id`, `title`, `content`) VALUES
(5, 'Damso', 'Damso, de son vrai nom William Kalubi Mwamba, né le 10 mai 1992 à Kinshasa, est un rappeur et auteur-compositeur-interprète belgo-congolais. Actif dans le monde du rap depuis 2006, Damso débute dans la publication de projets avec sa première mixtape Salle d\'attente, sortie en 2014.'),
(6, 'La Fève, cette pépite du rap français', 'Si vous faites partie « des vrais et de ceux qui ont quelque chose dans la tête », vous avez forcément écouté Kolaf, son EP en collaboration avec le beatmaker Kosei. Cela étant, vous savez à quel point la sortie de ce nouveau projet du rappeur originaire de Fontenay-sous-Bois est un petit événement sur la planète rap. Que ceux qui prennent le train en marche ne s\'inquiètent pas, on vous dit tout sur ce nouveau prodige et représentant autoproclamé de la « new-wave » du rap français.'),
(7, 'Jok\'Air', 'Jok\'Air, de son vrai nom Melvin Félix Aka, né le 23 septembre 1991 dans le 19e arrondissement de Paris, est un rappeur français d\'origine ivoirienne. D\'abord membre du groupe MZ, il commence sa carrière solo en 2017.'),
(8, 'Jazzy Bazz ', 'Jazzy Bazz de son vrai nom Ivan Bruno-Arbiser, né le 24 avril 1989, est un rappeur français originaire du 19ᵉ arrondissement de Paris. Il fait partie des collectifs Grande Ville et L\'Entourage. Il s’est essentiellement fait connaître grâce aux Rap Contenders');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `token` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `post`
--
ALTER TABLE `post`
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
-- AUTO_INCREMENT pour la table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=106;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
