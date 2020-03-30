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
-- 資料表結構 `plan`
--

CREATE TABLE `plan` (
  `planId` int(3) NOT NULL COMMENT '流水號',
  `planUsername` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '廠商名',
  `planName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '名稱',
  `planPlace` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '廣告位置',
  `planGroup` int(11) NOT NULL COMMENT '投放對象',
  `planCost` int(11) DEFAULT NULL COMMENT '預算',
  `planClick` int(11) NOT NULL COMMENT '點擊數',
  `planStatus` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '狀態',
  `planStartTime` date NOT NULL,
  `planDueTime` date NOT NULL,
  `plan_created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `plan_updates_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `plan`
--

INSERT INTO `plan` (`planId`, `planUsername`, `planName`, `planPlace`, `planGroup`, `planCost`, `planClick`, `planStatus`, `planStartTime`, `planDueTime`, `plan_created_at`, `plan_updates_at`) VALUES
(70, 'GARMIN', 'GRAMIN FĒNIX 5 PLUS', '首頁的幻燈片', 1, 1000, 0, '上架', '2020-03-18', '2020-03-31', '2020-02-07 13:29:45', '2020-03-24 13:29:45'),
(71, 'SONY', 'SONY WF-SP900 運動無線耳機', '首頁的幻燈片', 0, 2000, 0, '上架', '2020-03-19', '2020-03-24', '2020-02-07 18:17:39', '2020-03-29 15:41:37'),
(72, 'GoPro', 'GoPro-HERO8 Black', '首頁的幻燈片', 1, 2000, 0, '上架', '2020-03-19', '2020-03-24', '2020-02-07 18:17:39', '2020-02-10 18:17:39'),
(73, 'APPLE', 'Apple Watch Series 5', '首頁的幻燈片', 1, 2000, 0, '上架', '2020-03-19', '2020-03-24', '2020-02-07 18:17:39', '2020-03-11 18:17:39'),
(74, 'SONY', 'SONY 重低音降噪藍牙耳罩式耳機 WH-XB900N', '首頁的幻燈片', 1, 2000, 0, '上架', '2020-03-19', '2020-03-24', '2020-02-07 18:17:39', '2020-02-07 18:17:39'),
(75, 'GARMIN', 'GARMIN vivomove 3 指針智慧腕錶', '首頁的幻燈片', 0, 2000, 0, '上架', '2020-03-19', '2020-03-24', '2020-02-07 18:17:39', '2020-01-12 18:17:39');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `plan`
--
ALTER TABLE `plan`
  ADD PRIMARY KEY (`planId`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `plan`
--
ALTER TABLE `plan`
  MODIFY `planId` int(3) NOT NULL AUTO_INCREMENT COMMENT '流水號', AUTO_INCREMENT=76;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
