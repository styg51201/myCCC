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
  MODIFY `cpi_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '個人優惠券id', AUTO_INCREMENT=188;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
