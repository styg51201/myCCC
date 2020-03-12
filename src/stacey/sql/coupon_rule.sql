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
(2, 2, 1, 2, 1000, 1, 200, 0, 0),
(3, 3, 2, 0, 0, 0, 9, 0, 0);

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
  MODIFY `cpr_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '優惠券規則id', AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
