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
-- 資料表結構 `coupon_rule`
--

CREATE TABLE `coupon_rule` (
  `cpr_id` int(11) NOT NULL COMMENT '優惠券規則id',
  `cpr_cp_id` int(11) NOT NULL COMMENT '對應的優惠券id',
  `cpr_object` int(11) NOT NULL COMMENT '優惠券目標',
  `cpr_rule` int(11) NOT NULL COMMENT '優惠券規則',
  `cpr_ruleNum` int(11) NOT NULL COMMENT '優惠券規則的數量',
  `cpr_discount` int(11) NOT NULL COMMENT '優惠券折扣',
  `cpr_discountNum` int(11) NOT NULL COMMENT '優惠券折扣數量',
  `created_at` int(11) NOT NULL,
  `updates_at` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `coupon_rule`
--

INSERT INTO `coupon_rule` (`cpr_id`, `cpr_cp_id`, `cpr_object`, `cpr_rule`, `cpr_ruleNum`, `cpr_discount`, `cpr_discountNum`, `created_at`, `updates_at`) VALUES
(1, 1, 0, 1, 3, 0, 8, 0, 0),
(2, 2, 1, 2, 10000, 1, 3500, 0, 0),
(3, 3, 2, 0, 0, 0, 9, 0, 0),
(4, 0, 0, 1, 2, 0, 90, 0, 0),
(5, 0, 3, 2, 9000, 1, 2500, 0, 0),
(6, 0, 1, 0, 0, 1, 2000, 0, 0),
(7, 0, 3, 2, 10000, 1, 2000, 0, 0),
(8, 0, 1, 2, 15000, 0, 80, 0, 0),
(9, 0, 0, 2, 8000, 0, 95, 0, 0),
(10, 0, 2, 1, 2, 1, 1500, 0, 0),
(11, 0, 0, 2, 4000, 1, 1000, 0, 0),
(12, 0, 3, 0, 0, 0, 90, 0, 0),
(13, 0, 2, 1, 3, 0, 90, 0, 0),
(14, 0, 2, 2, 20000, 1, 5000, 0, 0),
(15, 0, 0, 1, 2, 0, 88, 0, 0),
(16, 0, 2, 2, 12000, 0, 79, 0, 0),
(17, 0, 2, 0, 0, 1, 2500, 0, 0),
(18, 0, 1, 2, 15000, 0, 90, 0, 0),
(19, 0, 1, 0, 0, 1, 3000, 0, 0),
(20, 0, 4, 1, 3, 0, 86, 0, 0),
(21, 0, 2, 1, 2, 1, 5000, 0, 0),
(22, 0, 2, 0, 0, 0, 77, 0, 0),
(23, 0, 3, 2, 20000, 1, 4000, 0, 0),
(24, 0, 4, 1, 3, 1, 3000, 0, 0),
(25, 0, 4, 0, 0, 0, 95, 0, 0),
(26, 0, 4, 2, 10000, 1, 3500, 0, 0),
(27, 0, 2, 2, 10000, 0, 50, 0, 0),
(28, 0, 0, 1, 2, 1, 4000, 0, 0),
(29, 0, 4, 1, 3, 1, 4500, 0, 0),
(30, 0, 0, 1, 2, 1, 1000, 0, 0),
(31, 0, 3, 1, 5, 0, 1, 0, 0);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `coupon_rule`
--
ALTER TABLE `coupon_rule`
  ADD PRIMARY KEY (`cpr_id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `coupon_rule`
--
ALTER TABLE `coupon_rule`
  MODIFY `cpr_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '優惠券規則id', AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
