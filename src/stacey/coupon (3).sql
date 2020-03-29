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
-- 資料表結構 `coupon`
--

CREATE TABLE `coupon` (
  `cp_id` int(11) NOT NULL COMMENT '優惠券id',
  `cp_vid` int(11) NOT NULL COMMENT '廠商id',
  `cp_vendor` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '優惠券廠商名',
  `cp_count` int(11) NOT NULL COMMENT '優惠券發放數量',
  `cp_rule` int(11) NOT NULL COMMENT '優惠券使用規則',
  `cp_img` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '優惠券圖片',
  `cp_countdown` int(11) NOT NULL COMMENT '限時優惠券',
  `cp_start` date NOT NULL COMMENT '優惠券開始時間',
  `cp_due` date NOT NULL COMMENT '優惠券結束時間',
  `cp_getedCount` int(11) NOT NULL COMMENT '已領取數量',
  `cp_useCount` int(11) NOT NULL COMMENT '使用人數',
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updates_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `coupon`
--

INSERT INTO `coupon` (`cp_id`, `cp_vid`, `cp_vendor`, `cp_count`, `cp_rule`, `cp_img`, `cp_countdown`, `cp_start`, `cp_due`, `cp_getedCount`, `cp_useCount`, `created_at`, `updates_at`) VALUES
(16, 55, 'APPLE', 100, 4, 'apple.png', 0, '2020-03-11', '2020-04-02', 100, 51, '2020-03-19 09:44:13', '2020-03-29 16:22:57'),
(17, 61, 'Fitbit', 120, 6, 'fitbit.png', 0, '2020-03-09', '2020-03-28', 50, 12, '2020-03-19 09:46:02', '2020-03-29 16:23:07'),
(18, 62, 'GoPro', 80, 7, 'gopro.png', 0, '2020-03-15', '2020-04-30', 63, 23, '2020-03-19 09:46:02', '2020-03-29 16:23:11'),
(19, 63, 'GARMIN', 100, 8, 'garmin.png', 0, '2020-03-19', '2020-04-10', 91, 46, '2020-03-19 09:46:02', '2020-03-29 16:23:13'),
(20, 64, 'JSmax', 100, 9, 'jsmax.jpg', 0, '2020-03-19', '2020-04-10', 100, 70, '2020-03-19 09:46:02', '2020-03-29 16:23:16'),
(21, 65, 'QCY', 150, 10, 'qcy.jpg', 0, '2020-03-19', '2020-04-10', 22, 5, '2020-03-19 09:46:02', '2020-03-29 16:23:18'),
(22, 66, 'SAMSUNG', 100, 11, 'samsung.png', 0, '2020-03-15', '2020-04-23', 55, 19, '2020-03-19 09:46:02', '2020-03-29 16:23:23'),
(23, 67, 'SJCAM', 100, 12, 'sjcam.jpg', 0, '2020-03-11', '2020-04-14', 81, 53, '2020-03-19 09:46:02', '2020-03-29 16:23:26'),
(24, 68, 'SONY', 130, 13, 'sony.png', 0, '2020-03-13', '2020-05-08', 45, 11, '2020-03-19 09:46:02', '2020-03-29 16:23:30'),
(25, 69, 'SUDIO', 80, 14, 'sudio.jpg', 0, '2020-03-04', '2020-04-11', 71, 37, '2020-03-19 09:46:02', '2020-03-29 16:23:32'),
(26, 69, '小米', 100, 15, '小米.jpg', 0, '2020-03-09', '2020-04-18', 34, 9, '2020-03-19 09:46:02', '2020-03-29 16:23:36'),
(27, 70, '鐵三角', 140, 16, '鐵三角.jpg', 0, '2020-03-06', '2020-05-21', 101, 58, '2020-03-19 09:46:02', '2020-03-29 16:23:43'),
(28, 71, 'Sabbat 魔宴', 150, 17, '魔宴.png', 0, '2020-03-05', '2020-04-18', 112, 44, '2020-03-19 09:46:02', '2020-03-29 16:23:46'),
(29, 69, '小米', 100, 17, '小米.jpg', 0, '2020-03-09', '2020-03-18', 20, 3, '2020-03-19 09:46:02', '2020-03-29 16:23:49'),
(30, 60, 'DJI', 130, 5, 'dji.png', 0, '2020-02-25', '2020-04-24', 71, 49, '2020-03-20 09:55:02', '2020-03-29 16:23:56'),
(31, 73, 'AFAMIC 艾法', 100, 18, 'AFAMIC 艾法.jpg', 0, '2020-03-17', '2020-05-15', 83, 29, '2020-03-24 15:30:06', '2020-03-29 16:24:01'),
(32, 79, 'GOLiFE', 130, 19, 'GOLiFE.png', 0, '2020-03-19', '2020-04-09', 130, 68, '2020-03-24 15:30:06', '2020-03-29 16:24:08'),
(33, 81, 'HTR', 120, 20, 'HTR.jpg', 0, '2020-03-11', '2020-04-07', 91, 61, '2020-03-24 15:30:06', '2020-03-29 16:24:14'),
(34, 82, 'JLab', 80, 21, 'JLab.jpg', 0, '2020-02-28', '2020-04-17', 73, 39, '2020-03-24 15:30:06', '2020-03-29 16:24:21'),
(35, 83, 'Plantronics繽特力', 100, 22, 'Plantronics繽特力.jpg', 0, '2020-03-20', '2020-06-19', 95, 57, '2020-03-24 15:30:06', '2020-03-29 16:24:36'),
(36, 85, 'Holy Stone', 100, 23, 'Holy Stone.png', 0, '2020-03-16', '2020-03-29', 76, 31, '2020-03-24 15:30:06', '2020-03-29 16:24:44'),
(37, 86, 'JOBY', 150, 24, 'JOBY.jpg', 0, '2020-03-07', '2020-04-11', 124, 67, '2020-03-24 15:30:06', '2020-03-29 16:24:50'),
(38, 87, 'Jenova 吉尼佛', 100, 25, 'Jenova 吉尼佛.jpg', 0, '2020-02-17', '2020-04-21', 85, 37, '2020-03-24 15:30:06', '2020-03-29 16:24:54'),
(39, 88, 'Incase', 100, 26, 'Incase.jpg', 0, '2020-03-05', '2020-04-12', 49, 16, '2020-03-24 15:30:06', '2020-03-29 16:25:02'),
(40, 70, '鐵三角', 140, 16, '鐵三角.jpg', 1, '2020-03-25', '2020-05-25', 83, 26, '2020-03-19 09:46:02', '2020-03-29 16:25:08'),
(41, 61, 'Fitbit', 120, 6, 'fitbit.png', 1, '2020-03-25', '2020-04-25', 81, 0, '2020-03-19 09:46:02', '2020-03-19 09:46:02');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `coupon`
--
ALTER TABLE `coupon`
  ADD PRIMARY KEY (`cp_id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `coupon`
--
ALTER TABLE `coupon`
  MODIFY `cp_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '優惠券id', AUTO_INCREMENT=42;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
