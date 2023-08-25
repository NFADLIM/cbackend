-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: bu9gxk8ec6y2iq3azzps-mysql.services.clever-cloud.com:3306
-- Generation Time: Aug 21, 2023 at 10:33 AM
-- Server version: 8.0.22-13
-- PHP Version: 8.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bu9gxk8ec6y2iq3azzps`
--

-- --------------------------------------------------------

--
-- Table structure for table `akun`
--

CREATE TABLE `akun` (
  `id` int NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=COMPACT;

--
-- Dumping data for table `akun`
--

INSERT INTO `akun` (`id`, `username`, `password`, `email`) VALUES
(1, 'admin123', 'Admin12345', 'Admin@admin.com');

-- --------------------------------------------------------

--
-- Table structure for table `fasilitas`
--

CREATE TABLE `fasilitas` (
  `idFasilitas` int NOT NULL,
  `idGedung` int NOT NULL,
  `namaFasilitas` varchar(255) NOT NULL,
  `linkTour` varchar(255) NOT NULL,
  `penjelasan` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `gambar` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `fasilitas`
--

INSERT INTO `fasilitas` (`idFasilitas`, `idGedung`, `namaFasilitas`, `linkTour`, `penjelasan`, `gambar`) VALUES
(1, 1, 'lobby', 'https://kuula.co/share/NdrWM?logo=0&info=1&fs=1&vr=1&sd=1&thumbs=1', 'ini lobby', 'https://pict.sindonews.net/dyn/620/pena/news/2023/03/20/211/1051755/mengenal-daftar-jurusan-universitas-pertamina-dan-besaran-biaya-kuliah-ywi.jpg'),
(2, 2, 'lab kom', 'https://kuula.co/share/collection/7F5C0?logo=0&info=1&fs=1&vr=1&sd=1&thumbs=1', 'lab komputer', 'https://universitaspertamina.ac.id/uploads/department/content/e4bCrGzui3gXzvz97roAlL5y2eytGJaMoFXedUdB.jpg'),
(3, 2, 'auditorium', 'https://kuula.co/share/collection/7F5Cf?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1', 'auditorium', 'https://cdc.universitaspertamina.ac.id/public/content/2/article_1569468457_1.png');

-- --------------------------------------------------------

--
-- Table structure for table `gedung`
--

CREATE TABLE `gedung` (
  `idGedung` int NOT NULL,
  `namaGedung` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `penjelasan` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `linkTour` varchar(255) NOT NULL,
  `gambar` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `gedung`
--

INSERT INTO `gedung` (`idGedung`, `namaGedung`, `penjelasan`, `linkTour`, `gambar`) VALUES
(1, 'rektorat', 'ini rektorat gedung rektor', 'https://kuula.co/share/collection/7vjQN?logo=0&info=1&fs=1&vr=1&sd=1&thumbs=1', 'https://awsimages.detik.net.id/community/media/visual/2023/01/17/gedung-universitas-pertamina.jpeg?w=1200'),
(2, 'griya legita', 'gedung mahasiswa', 'https://kuula.co/share/collection/7vjQp?logo=0&info=1&fs=1&vr=1&sd=1&thumbs=1', 'https://lh3.googleusercontent.com/p/AF1QipOX5WYW4HfXys8P1nNumwFULd4EI8eHlYmS4zAo=s680-w680-h510'),
(3, 'gor', 'gor olahraga', 'https://kuula.co/share/collection/7vjQm?logo=0&info=1&fs=1&vr=1&sd=1&thumbs=1', 'https://universitaspertamina.ac.id/uploads/facilities/iqoZrHRI38VD7Eo1tmXwK6gfNNgeAlceEl6GKMNU.png');

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

CREATE TABLE `image` (
  `idimg` int NOT NULL,
  `gambar` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `image`
--

INSERT INTO `image` (`idimg`, `gambar`) VALUES
(25, '/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAzgCagMBIgACEQEDEQH/xAAxAAADAQEBAQAAAAAAAAA'),
(26, 'WhatsApp Image 2022-08-15 at 5.28.20 PM (1).jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `data` longblob,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `type`, `name`, `data`, `createdAt`, `updatedAt`) VALUES
INSERT INTO `images` (`id`, `type`, `name`, `data`, `createdAt`, `updatedAt`) VALUES

--
-- Indexes for dumped tables
--

--
-- Indexes for table `akun`
--
ALTER TABLE `akun`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fasilitas`
--
ALTER TABLE `fasilitas`
  ADD PRIMARY KEY (`idFasilitas`);

--
-- Indexes for table `gedung`
--
ALTER TABLE `gedung`
  ADD PRIMARY KEY (`idGedung`);

--
-- Indexes for table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`idimg`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `akun`
--
ALTER TABLE `akun`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `image`
--
ALTER TABLE `image`
  MODIFY `idimg` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

ALTER TABLE `fasilitas` ADD FOREIGN KEY (`idGedung`) REFERENCES `gedung` (`idGedung`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;