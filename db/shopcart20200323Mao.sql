-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 
-- 伺服器版本： 10.4.8-MariaDB
-- PHP 版本： 7.3.10

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
-- 資料表結構 `shopcart`
--

CREATE TABLE `shopcart` (
  `Id` int(11) NOT NULL,
  `csId` varchar(20) NOT NULL COMMENT '會員ID',
  `itemId` varchar(20) NOT NULL COMMENT '產品ID',
  `itemPrice` varchar(20) NOT NULL COMMENT '價格',
  `count` int(20) DEFAULT NULL COMMENT '產品數量',
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_time` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `shopcart`
--

INSERT INTO `shopcart` (`Id`, `csId`, `itemId`, `itemPrice`, `count`, `created_at`, `updated_time`) VALUES
(1, 'CS001', 'p003', '300', 1, '2020-02-04 15:40:42', '2020-02-04 15:40:42'),
(2, 'CS001', 'p008', '800', 3, '2020-02-04 15:40:46', '2020-02-06 09:09:38'),
(3, 'CS005', 'p006', '600', 1, '2020-02-05 18:45:34', '2020-02-05 18:45:34'),
(4, 'CS005', 'p005', '500', 3, '2020-02-05 18:53:57', '2020-02-05 18:53:59'),
(5, 'CS005', 'p001', '100', 4, '2020-02-05 19:03:23', '2020-02-05 19:14:07'),
(15, 'CS004', 'p007', '700', 1, '2020-02-07 17:31:58', '2020-02-07 17:31:58');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `shopcart`
--
ALTER TABLE `shopcart`
  ADD PRIMARY KEY (`Id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `shopcart`
--
ALTER TABLE `shopcart`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
