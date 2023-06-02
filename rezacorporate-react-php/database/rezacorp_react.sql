-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 28, 2023 at 07:58 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rezacorp_react`
--

-- --------------------------------------------------------

--
-- Table structure for table `aboutus`
--

CREATE TABLE `aboutus` (
  `id` int(11) NOT NULL,
  `headline` varchar(500) NOT NULL,
  `list1` varchar(250) NOT NULL,
  `list2` varchar(250) NOT NULL,
  `list3` varchar(250) NOT NULL,
  `detail` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `aboutus`
--

INSERT INTO `aboutus` (`id`, `headline`, `list1`, `list2`, `list3`, `detail`) VALUES
(1, 'WE ARE HERE TO TRANSFORM THE LANDSCAPE OF CONSULTANCY', 'Offer best in class management solutions through strategic partnership, linking executional roadmaps to long-term goals', 'Unleash the potential of your organization and leaders through transformation and change inculcating operational excellence', 'Partner with your organization for result achievement in defined parameters', 'With a combined experience of over 120 years, we offer solutions in the areas of setting up business, mergers and acquisitions, organizational development, executive search, corporate governance, human resources, transformation & leadership with end-to-end support in delivering manufacturing and supply-chain excellence. ');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `heading` varchar(300) NOT NULL,
  `location` varchar(500) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `heading`, `location`, `email`, `phone`) VALUES
(1, 'We can help. Our team of experts is on hand to answer your questions.', 'Lotus Kamal Tower- 2 (Level 6 & 12) 59 & 61 Gulshan South Avenue Dhaka-1212, Bangladesh', 'rezatawhid@gmail.com', 1913925893);

-- --------------------------------------------------------

--
-- Table structure for table `contact_msg`
--

CREATE TABLE `contact_msg` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(250) NOT NULL,
  `sub` varchar(250) NOT NULL,
  `msg` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact_msg`
--

INSERT INTO `contact_msg` (`id`, `name`, `email`, `sub`, `msg`) VALUES
(6, 'Tanjim Sorwar', 'tareza@gmail.com', 'This is a subject.', 'This is a message'),
(7, 'Monzurul Karim Khan', 'mhsohel017@gmail.com', 'An Objection', 'Your website is SHIT... Totally crap!!...'),
(8, 'Nasir Uddin', 'admin@email.com', 'A Subject', 'Your website is good, but you should do better. ');

-- --------------------------------------------------------

--
-- Table structure for table `general`
--

CREATE TABLE `general` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `headline` varchar(200) NOT NULL,
  `subtitle` varchar(500) NOT NULL,
  `servicessub` varchar(700) NOT NULL,
  `ctasub` varchar(700) NOT NULL,
  `portfoliosub` varchar(700) NOT NULL,
  `teamsub` varchar(700) NOT NULL,
  `newslettersub` varchar(700) NOT NULL,
  `ftitle` varchar(500) NOT NULL,
  `femail` varchar(500) NOT NULL,
  `fphone` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `general`
--

INSERT INTO `general` (`id`, `title`, `headline`, `subtitle`, `servicessub`, `ctasub`, `portfoliosub`, `teamsub`, `newslettersub`, `ftitle`, `femail`, `fphone`) VALUES
(1, 'REZACORPORATE', 'Welcome to REZACORPORATE', 'We are team of talented employees making relations with Technology', 'We offer a wide array of services aimed at simplifying your life', 'Discover the platform that gives you the freedom to create, design, manage and develop your web presence exactly the way you want.', 'Sit sint consectetur velit quisquam cupiditate impedit suscipit alias', 'We are team of talented employees making relations with Technology', 'Tamen quem nulla quae legam multos aute sint culpa legam noster magna', 'REZACORPORATE', 'rezatawhid@gmail.com', '1913925893');

-- --------------------------------------------------------

--
-- Table structure for table `portfolio`
--

CREATE TABLE `portfolio` (
  `id` int(11) NOT NULL,
  `photo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `portfolio`
--

INSERT INTO `portfolio` (`id`, `photo`) VALUES
(1, 'portfolio-1.jpg'),
(2, 'portfolio-2.jpg'),
(3, 'portfolio-3.jpg'),
(4, 'portfolio-4.jpg'),
(5, 'portfolio-5.jpg'),
(6, 'portfolio-6.jpg'),
(7, 'portfolio-7.jpg'),
(8, 'portfolio-8.jpg'),
(9, 'portfolio-9.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `boxicon` varchar(100) NOT NULL,
  `headline` varchar(500) NOT NULL,
  `subtitle` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `boxicon`, `headline`, `subtitle`) VALUES
(3, 'bx bxl-dribbble', 'Research & Development', 'Invest & Innovate,  Proudly Made in Bangladesh,  Technologies: AI, ML, NLP, RPA,  Concept, Prototype, Pilot, Test, Product. '),
(4, 'bx bx-file', 'Industrial Automation', 'Integrated Automation,  Increasing Efficiency,  Service Enhancement,  Optimization. '),
(5, 'bx bx-tachometer', 'Health Sector', 'Integrated Solution,  HealthTech,  Increasing Efficiency,  Innovation at the Core. '),
(7, 'bx bx-layer', 'Financial Sector', 'Diversified Solutions Offering, Financial Inclusion,  Increasing Efficiency,  Innovation at the Core,  Enhanced Security. ');

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `id` int(11) NOT NULL,
  `photo` varchar(100) NOT NULL,
  `name` varchar(250) NOT NULL,
  `position` varchar(250) NOT NULL,
  `detail` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `team`
--

INSERT INTO `team` (`id`, `photo`, `name`, `position`, `detail`) VALUES
(2, 'team-1.jpg', 'Shayan F Rahman ', 'Chairman', 'Represents the Beximco Group, Bangladesh’s largest conglomerate with an annual turnover of USD 1 billion.'),
(3, 'team-4.jpg', 'Samira Zuberi Himika ', 'Managing Director ', 'Serial entrepreneur and ecosystem builder working with public, private and development sectors in Bangladesh.'),
(4, 'team-3.jpg', 'Monzurul Karim Khan ', 'Chief Operating Officer ', ' Monzurul Karim Khan (Ronniee), has a career chronicled by well-earned promotions'),
(5, 'team-2.jpg', 'Kashfia Bashar', 'Head of Division – Process, Performance & People', 'With 15+ years of progressive HR & full-scale operational experience, Ms. Kashfia Bashar');

-- --------------------------------------------------------

--
-- Table structure for table `whyus`
--

CREATE TABLE `whyus` (
  `id` int(11) NOT NULL,
  `headline` varchar(500) NOT NULL,
  `subtitle` varchar(500) NOT NULL,
  `line1` varchar(250) NOT NULL,
  `line1sub` varchar(500) NOT NULL,
  `line2` varchar(250) NOT NULL,
  `line2sub` varchar(500) NOT NULL,
  `line3` varchar(250) NOT NULL,
  `line3sub` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `whyus`
--

INSERT INTO `whyus` (`id`, `headline`, `subtitle`, `line1`, `line1sub`, `line2`, `line2sub`, `line3`, `line3sub`) VALUES
(1, 'WE ARE HERE TO TRANSFORM THE LANDSCAPE OF CONSULTANCY', 'Our vision is to become the preferred partner in providing value-focused, sustainable management solutions through innovation & agility.', 'Punctuality', 'We are good at what we do and we get results, and we want to add value.', 'Effectivity', 'We put a lot of effort into developing relationships with our clients so we can provide meaningful advice.', 'Veracity', 'We work on a ‘no surprises’ policy. No unexpected bills. No budget blow-outs. No missed deadlines.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aboutus`
--
ALTER TABLE `aboutus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_msg`
--
ALTER TABLE `contact_msg`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `general`
--
ALTER TABLE `general`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `portfolio`
--
ALTER TABLE `portfolio`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `whyus`
--
ALTER TABLE `whyus`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aboutus`
--
ALTER TABLE `aboutus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `contact_msg`
--
ALTER TABLE `contact_msg`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `general`
--
ALTER TABLE `general`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `portfolio`
--
ALTER TABLE `portfolio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `team`
--
ALTER TABLE `team`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `whyus`
--
ALTER TABLE `whyus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
