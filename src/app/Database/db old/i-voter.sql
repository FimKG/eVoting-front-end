-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 18, 2019 at 09:08 AM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.1.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `i-voter`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(9) NOT NULL,
  `admin_name` varchar(255) NOT NULL,
  `admin_lname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `admin_name`, `admin_lname`, `email`, `password`) VALUES
(212486884, 'KGAUGELO', 'Moloto', '212486884@tut4life.ac.za', '12345678'),
(2019, 'admin', 'admin', 'admin@evoting.co.za', '12345678');

-- --------------------------------------------------------

--
-- Table structure for table `csrc`
--

CREATE TABLE `csrc` (
  `csrc_id` int(15) NOT NULL,
  `csrc_desc` varchar(200) NOT NULL,
  `csrc_name` varchar(120) NOT NULL,
  `csrc_img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `csrc`
--

INSERT INTO `csrc` (`csrc_id`, `csrc_desc`, `csrc_name`, `csrc_img`) VALUES
(410, 'SOUTH AFRICAN STUDENTS\' CONGRESS', 'SASCO ', 'assets/logo/SASCO.jpg'),
(420, 'ECONOMIC FREEDOM FIGHTERS STUDENT COMMAND', 'EFFSC ', 'assets/logo/ptylg1.jpg'),
(430, 'DEMOCRATIC ALLIANCE STUDENT ORGANISATION', 'DASO ', 'assets/logo/ptylg8.jpg'),
(440, 'SOUTH AFRICAN DEMOCRATIC STUDENTS MOVEMENT', 'SADESMO ', 'assets/logo/sadesmo.jpg'),
(450, 'CONGRESS OF THE PEOPLE STUDENTS MOVEMENT', 'COPESM ', 'assets/logo/ptylg6.png'),
(460, 'PAN AFRICANIST STUDENT MOVEMENT of AZANIA', 'PASMA', 'assets/logo/ptylg10.jpg'),
(470, 'AFRICAN PEOPLE\'S CONVENTION YOUTH LEAGUE', 'APCYL ', 'assets/logo/ptylg3.png'),
(480, 'ALLIANCE FOR TRANSFORMATION FOR ALL', 'ATA ', 'assets/logo/ATA-Alliance.jpg'),
(490, 'STUDENTS CHRISTIAN ORGANISATION', 'SCO ', 'assets/logo/sco.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `faculty`
--

CREATE TABLE `faculty` (
  `fac_id` int(2) NOT NULL,
  `fac_name` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `faculty`
--

INSERT INTO `faculty` (`fac_id`, `fac_name`) VALUES
(1, 'Humanities'),
(2, 'Information and Communication Technology'),
(3, 'Economic And Finance'),
(4, 'Management Sciences'),
(5, 'Engineering and Built Environment'),
(6, 'Science'),
(7, 'The Arts');

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

CREATE TABLE `image` (
  `image_id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `image`
--

INSERT INTO `image` (`image_id`, `image`) VALUES
(1, 'undefined.jpeg'),
(12, 'undefined.jpeg'),
(13, 'undefined.jpeg'),
(14, 'undefined.jpeg'),
(15, 'undefined.jpeg'),
(16, 'undefined.jpeg'),
(17, 'undefined.jpeg'),
(18, 'undefined.jpeg'),
(19, 'undefined.jpeg'),
(20, 'undefined.jpeg'),
(21, 'undefined.jpeg'),
(22, 'undefined.jpeg'),
(23, 'undefined.jpeg'),
(24, 'undefined.jpeg'),
(25, 'undefined.jpeg'),
(26, 'undefined.png');

-- --------------------------------------------------------

--
-- Table structure for table `iscrc`
--

CREATE TABLE `iscrc` (
  `isrc_id` int(15) NOT NULL,
  `isrc_desc` varchar(200) NOT NULL,
  `isrc_name` varchar(100) NOT NULL,
  `isrc_img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `iscrc`
--

INSERT INTO `iscrc` (`isrc_id`, `isrc_desc`, `isrc_name`, `isrc_img`) VALUES
(210, 'SOUTH AFRICAN STUDENTS\' CONGRESS', 'SASCO ', 'assets/logo/ptylg9.jpg'),
(220, 'ECONOMIC FREEDOM FIGHTERS STUDENT COMMAND', 'EFFSC', 'assets/logo/ptylg1.jpg'),
(230, 'DEMOCRATIC STUDENT ORGANISATIONS', 'DASO ', 'assets/logo/ptylg8.jpg'),
(240, 'STUDENTS CHRISTIAN ORGANISATION', 'SCO ', 'assets/logo/ptylg12.png'),
(250, 'PAN AFRICANIS STUDENT MOVEMENT OF AZANIA', 'PASMA', 'assets/logo/ptylg10.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `sfc`
--

CREATE TABLE `sfc` (
  `sfc_id` int(15) NOT NULL,
  `fac_id` int(2) NOT NULL,
  `sfc_name` varchar(225) NOT NULL,
  `sfc_position` varchar(50) NOT NULL,
  `sfc_img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sfc`
--

INSERT INTO `sfc` (`sfc_id`, `fac_id`, `sfc_name`, `sfc_position`, `sfc_img`) VALUES
(214555310, 3, 'MADONSELA NJABULO', 'CHAIRPERSON', 'assets/avater/6eba6407-5a59-47ff-a60f-a0a5fea99ef1.jpg'),
(214555311, 2, 'NGWENYA NOZIPHO', 'CHAIRPERSON', 'assets/avater/06f669e6-d66c-442f-a8de-d2c5bc595775.jpg'),
(214555312, 1, 'PHATEDI SECHABA', 'DEPUTY SECRETARY', 'assets/avater/06f669e6-d66c-442f-a8de-d2c5bc595775.jpg'),
(214555313, 2, 'MOKOENA WANDILE', 'DEPUTY SECRETARY', 'assets/avater/de1e05a1-55e1-4bfb-bb0c-c4500115b5a9.jpg'),
(214555314, 2, 'SINXADI TEBOGO', 'CHAIRPERSON', 'assets/avater/e3775e3e-8e5b-4272-8572-6e7ba450836f.jpg'),
(214555315, 3, 'MOLOTO LEGACY', 'SECRETARY', 'assets/avater/3bcb3d67-66be-4cd9-add8-ddd109e10a2f.jpg'),
(214555320, 1, 'MKHARI SIYABULA', 'CHAIRPERSON', 'assets/avater/6eba6407-5a59-47ff-a60f-a0a5fea99ef1.jpg'),
(214555330, 3, 'CQONTHSI THOBANI', 'DEPUTY SECRETARY', 'assets/avater/06f669e6-d66c-442f-a8de-d2c5bc595775.jpg'),
(214555340, 1, 'MAGOMANI CODENSA', 'DEPUTY SECRETARY', 'assets/avater/7c2900d7-f9a0-413f-94d1-e4febcb74d1e.jpg'),
(214555350, 1, 'MABASO NOLUTHANDO', 'SECRETARY', 'assets/avater/8c7fe769-c6d4-4398-abef-8286db1ae1fa.jpg'),
(214555360, 1, 'KHUMALO SANDILE', 'SECRETARY', 'assets/avater/54b0f03f-7bbe-4ecf-a154-51ec5d0d825a.jpg'),
(214555370, 2, 'KEKANA THOROSO', 'CHAIRPERSON', 'assets/avater/e56cb4a7-1e9f-4412-93bb-b761c4d7288a.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `student_fname` varchar(225) NOT NULL,
  `student_lname` varchar(225) NOT NULL,
  `student_id` int(9) NOT NULL,
  `student_password` varchar(30) NOT NULL,
  `fac_id` int(2) NOT NULL,
  `otp` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Storing students details';

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`student_fname`, `student_lname`, `student_id`, `student_password`, `fac_id`, `otp`) VALUES
('', '', 0, '', 4, 0),
('fdgdfgdfgdfgd', '44444444444', 21104487, '1234567', 3, 0),
('tut', 'tut', 123456781, '123456', 5, 0),
('tut', 'kg', 123456789, '123456', 6, 0),
('22222', '222222', 212411135, '12', 2, 0),
('22222', '222222', 212413335, '123456', 2, 0),
('22222', '222222', 212431335, '123456', 1, 0),
('tut', 'tut', 212433335, '12', 2, 0),
('22222', '222222', 212435335, '12', 1, 0),
('fdgdfgdfgdfgd', '222222', 212463335, '123456', 2, 0),
('tut', 'tut', 212466684, '12345678', 1, 0),
('22222', 'tut', 212476674, '123456', 1, 0),
('ttt', 'ttt', 212477784, '123456', 7, 0),
('22222', 'tut', 212486814, '12345678', 7, 0),
('tut', 'tut', 212486883, '123456', 6, 0),
('Kgaugelo', 'Moloto', 212486884, '12345678', 2, 8716),
('tut', '124', 212486885, 'Arthur', 2, 0),
('Kgaugelo', 'Moloto', 212486887, '123456789', 2, 0),
('ggdgfdf', 'fdhhdhdhd', 212486889, '$2b$10$MZLswRsiWRYTYShrA.Rl2uv', 3, 0),
('Engineering', 'tut', 212498664, '123456', 5, 0),
('hjkl', 'hjkl', 214189141, '2222', 1, 0),
('Mahomed', 'Paul', 214189143, '12345678', 4, 6641),
('kgu', 'mol', 214189147, '123456', 5, 0),
('onkemetse', 'Motyingwa', 215556271, '21555@Onke', 2, 8408),
('Kgaugelo', 'tut', 215611311, '12345678', 3, 0),
('Kgaugelo', 'Moloto', 215611343, '12345678', 2, 0),
('Kgaugelo', 'Moloto', 215611344, '12345678', 2, 0),
('Kgaugelo', 'Moloto', 215611345, '12345678', 6, 0),
('Kgaugelo', 'tut', 215611385, '12345678', 2, 0),
('Kabelo', 'Malatji', 215611388, '12345678', 2, 0),
('Kgaugelo', 'tut', 215611685, '12345678', 2, 0),
('khethi', 'mahlangu', 215794164, '20070512', 2, 0),
('SupaMega', 'Ngemntu', 215799042, '5808', 3, 0),
('n', 'n', 216922230, 'Luyanda1', 2, 0),
('nothando', 'ngobeni', 216922240, 'LUYANDA', 2, 0),
('nothando', 'ngobeni', 216922250, 'luyanda', 2, 0),
('Dineo', 'Matlala', 217123456, '12345678', 2, 0);

-- --------------------------------------------------------

--
-- Table structure for table `votes`
--

CREATE TABLE `votes` (
  `student_id` int(9) NOT NULL,
  `v_id` int(11) NOT NULL,
  `csrc_id` int(15) NOT NULL,
  `sfc_name` varchar(120) NOT NULL,
  `sfc_id` int(11) NOT NULL,
  `isrc_id` int(11) NOT NULL,
  `year` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `votes`
--

INSERT INTO `votes` (`student_id`, `v_id`, `csrc_id`, `sfc_name`, `sfc_id`, `isrc_id`, `year`) VALUES
(215611388, 62, 410, '', 214555310, 210, 2019),
(215611388, 63, 410, '', 214555310, 210, 2019),
(215611388, 64, 410, '', 214555312, 210, 2019),
(214189141, 66, 420, '', 214555311, 220, 2019),
(214189141, 67, 450, '', 214555313, 230, 2019),
(212411135, 69, 410, '', 214555330, 444, 2019),
(21104487, 70, 420, '', 214555313, 220, 2019),
(212486884, 74, 440, '', 214555311, 240, 2019);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `csrc`
--
ALTER TABLE `csrc`
  ADD PRIMARY KEY (`csrc_id`);

--
-- Indexes for table `faculty`
--
ALTER TABLE `faculty`
  ADD PRIMARY KEY (`fac_id`);

--
-- Indexes for table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`image_id`);

--
-- Indexes for table `iscrc`
--
ALTER TABLE `iscrc`
  ADD PRIMARY KEY (`isrc_id`),
  ADD KEY `isrc_id` (`isrc_id`);

--
-- Indexes for table `sfc`
--
ALTER TABLE `sfc`
  ADD PRIMARY KEY (`sfc_id`),
  ADD KEY `fac_id` (`fac_id`),
  ADD KEY `sfc_id` (`sfc_id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`student_id`),
  ADD KEY `fac_id` (`fac_id`);

--
-- Indexes for table `votes`
--
ALTER TABLE `votes`
  ADD PRIMARY KEY (`v_id`),
  ADD KEY `candidate_id` (`csrc_id`),
  ADD KEY `user_id` (`student_id`) USING BTREE;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `image`
--
ALTER TABLE `image`
  MODIFY `image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `votes`
--
ALTER TABLE `votes`
  MODIFY `v_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `sfc`
--
ALTER TABLE `sfc`
  ADD CONSTRAINT `sfc_ibfk_1` FOREIGN KEY (`fac_id`) REFERENCES `faculty` (`fac_id`);

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_ibfk_1` FOREIGN KEY (`fac_id`) REFERENCES `faculty` (`fac_id`);

--
-- Constraints for table `votes`
--
ALTER TABLE `votes`
  ADD CONSTRAINT `votes_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
