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
-- 資料表結構 `coupon`
--

CREATE TABLE `coupon` (
  `cp_id` int(11) NOT NULL COMMENT '優惠券id',
  `cp_vendor` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '優惠券廠商id',
  `cp_count` int(11) NOT NULL COMMENT '優惠券發放數量',
  `cp_rule` int(11) NOT NULL COMMENT '優惠券使用規則',
  `cp_img` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '優惠券圖片',
  `cp_start` date NOT NULL COMMENT '優惠券開始時間',
  `cp_due` date NOT NULL COMMENT '優惠券結束時間',
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updates_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `coupon`
--

INSERT INTO `coupon` (`cp_id`, `cp_vendor`, `cp_count`, `cp_rule`, `cp_img`, `cp_start`, `cp_due`, `created_at`, `updates_at`) VALUES
(1, 'Apple', 100, 1, 'Swatch.jpg', '2020-03-12', '2020-03-31', '2020-03-12 13:19:22', '2020-03-12 13:19:22'),
(2, 'Apple2', 50, 2, 'Swatch.jpg', '2020-03-12', '2020-03-17', '2020-03-12 13:23:39', '2020-03-12 13:23:39'),
(3, 'Apple3', 200, 3, 'Swatch.jpg', '2020-03-12', '2020-03-20', '2020-03-12 13:23:40', '2020-03-12 13:23:40');

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
  MODIFY `cp_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '優惠券id', AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
