-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 
-- 伺服器版本： 10.4.10-MariaDB
-- PHP 版本： 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `triplec`
--

-- --------------------------------------------------------

--
-- 資料表結構 `multiple_images`
--

CREATE TABLE `multiple_images` (
  `multipleImageId` int(11) NOT NULL COMMENT '流水號',
  `multipleImageImg` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '圖片名稱',
  `itemId` int(11) NOT NULL COMMENT '商品編號',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '新增時間	',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `multiple_images`
--

INSERT INTO `multiple_images` (`multipleImageId`, `multipleImageImg`, `itemId`, `created_at`, `updated_at`) VALUES
(318, 'watch.jpg', 1, '2020-03-20 10:03:18', '2020-03-20 10:03:18'),
(319, 'watch2.jpg', 1, '2020-03-20 10:04:02', '2020-03-20 10:04:02'),
(320, 'watch3.jpg', 1, '2020-03-20 10:04:02', '2020-03-20 10:04:02'),
(321, 'watch4.jpg', 1, '2020-03-20 10:04:02', '2020-03-20 10:04:02'),
(322, 'watch5.jpg', 1, '2020-03-20 10:04:02', '2020-03-20 10:04:02'),
(323, 'watch6.jpg', 1, '2020-03-20 10:04:02', '2020-03-20 10:04:02'),
(324, 'watch7.jpg', 1, '2020-03-20 10:04:02', '2020-03-20 10:04:02'),
(325, 'watch8.jpg', 1, '2020-03-20 10:04:02', '2020-03-20 10:04:02'),
(326, 'watch9.jpg', 1, '2020-03-20 10:04:02', '2020-03-20 10:04:02'),
(327, 'watch10.jpg', 1, '2020-03-20 10:04:02', '2020-03-20 10:04:02');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `multiple_images`
--
ALTER TABLE `multiple_images`
  ADD PRIMARY KEY (`multipleImageId`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `multiple_images`
--
ALTER TABLE `multiple_images`
  MODIFY `multipleImageId` int(11) NOT NULL AUTO_INCREMENT COMMENT '流水號', AUTO_INCREMENT=328;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
