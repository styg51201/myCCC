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
-- 資料庫： `mybd1`
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
  `created_at` datetime NOT NULL,
  `updates_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `coupon_item`
--

INSERT INTO `coupon_item` (`cpi_id`, `cpi_cp_id`, `cpi_mb_id`, `cpi_use`, `cpi_useDate`, `created_at`, `updates_at`) VALUES
(1, 1, 4, 0, '0000-00-00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 1, 5, 1, '2020-03-13', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 2, 6, 0, '0000-00-00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 2, 7, 1, '2020-03-14', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 3, 7, 0, '0000-00-00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 3, 8, 1, '2020-03-17', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

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
  MODIFY `cpi_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '個人優惠券id', AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
