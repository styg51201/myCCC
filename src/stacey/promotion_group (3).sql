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
-- 資料表結構 `promotion_group`
--

CREATE TABLE `promotion_group` (
  `groupId` int(11) NOT NULL,
  `groupPlanId` int(11) NOT NULL COMMENT '廣告id',
  `groupBuyItems` int(11) NOT NULL COMMENT '買過我的商品',
  `groupHistoryItems` int(11) NOT NULL COMMENT '瀏覽過我的商品',
  `groupCollectItems` int(11) NOT NULL COMMENT '收藏我的商品',
  `groupHistoryCategory` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '瀏覽過某類別',
  `groupCollectCategory` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '收藏某類別',
  `groupCartCategory` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '購物車有某類別',
  `group_created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `group_updates_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `promotion_group`
--

INSERT INTO `promotion_group` (`groupId`, `groupPlanId`, `groupBuyItems`, `groupHistoryItems`, `groupCollectItems`, `groupHistoryCategory`, `groupCollectCategory`, `groupCartCategory`, `group_created_at`, `group_updates_at`) VALUES
(1, 70, 1, 1, 0, '穿戴式裝置', '0', '0', '0000-00-00 00:00:00', '2020-03-29 15:22:17'),
(2, 71, 0, 1, 1, '0', '0', '0', '2020-02-07 18:18:14', '2020-03-29 15:08:02'),
(4, 72, 1, 0, 1, '0', '0', '運動攝影機', '2020-02-07 18:22:27', '2020-03-29 15:23:20'),
(5, 73, 1, 1, 1, '穿戴式裝置', '穿戴式裝置', '穿戴式裝置', '0000-00-00 00:00:00', '2020-03-29 16:02:59'),
(6, 74, 1, 1, 1, '0', '0', '0', '2020-02-07 18:18:14', '2020-03-29 15:15:03'),
(7, 75, 0, 0, 1, '0', '0', '0', '2020-02-07 18:22:27', '2020-03-29 15:08:00');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `promotion_group`
--
ALTER TABLE `promotion_group`
  ADD PRIMARY KEY (`groupId`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `promotion_group`
--
ALTER TABLE `promotion_group`
  MODIFY `groupId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
