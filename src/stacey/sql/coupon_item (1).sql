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
-- 資料表結構 `coupon_item`
--

CREATE TABLE `coupon_item` (
  `cpi_id` int(11) NOT NULL COMMENT '個人優惠券id',
  `cpi_cp_id` int(11) NOT NULL COMMENT '對應的優惠券id',
  `cpi_mb_id` int(11) NOT NULL COMMENT '對應的會員id',
  `cpi_use` int(11) NOT NULL COMMENT '是否使用',
  `cpi_useDate` date NOT NULL COMMENT '使用日期',
  `cpi_order_id` int(11) NOT NULL COMMENT '訂單id',
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updates_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `coupon_item`
--

INSERT INTO `coupon_item` (`cpi_id`, `cpi_cp_id`, `cpi_mb_id`, `cpi_use`, `cpi_useDate`, `cpi_order_id`, `created_at`, `updates_at`) VALUES
(188, 36, 40, 1, '0000-00-00', 0, '2020-03-30 14:26:05', '2020-03-30 14:26:05'),
(189, 46, 40, 1, '0000-00-00', 0, '2020-03-30 18:12:31', '2020-03-30 18:12:31'),
(193, 24, 40, 0, '0000-00-00', 0, '2020-03-31 01:24:30', '2020-03-31 01:24:30'),
(195, 38, 40, 0, '0000-00-00', 0, '2020-03-31 01:26:33', '2020-03-31 01:26:33'),
(196, 17, 40, 0, '0000-00-00', 0, '2020-03-31 01:28:39', '2020-03-31 01:28:39'),
(198, 35, 40, 0, '0000-00-00', 0, '2020-03-31 01:32:41', '2020-03-31 01:32:41'),
(199, 45, 40, 0, '0000-00-00', 0, '2020-03-31 01:32:48', '2020-03-31 01:32:48'),
(206, 19, 40, 0, '0000-00-00', 0, '2020-03-31 14:49:58', '2020-03-31 14:49:58'),
(207, 44, 40, 0, '0000-00-00', 0, '2020-03-31 14:50:43', '2020-03-31 14:50:43');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `coupon_item`
--
ALTER TABLE `coupon_item`
  ADD PRIMARY KEY (`cpi_id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `coupon_item`
--
ALTER TABLE `coupon_item`
  MODIFY `cpi_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '個人優惠券id', AUTO_INCREMENT=209;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
