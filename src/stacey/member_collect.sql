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
-- 資料表結構 `member_collect`
--

CREATE TABLE `member_collect` (
  `collect_id` int(11) NOT NULL,
  `mb_id` int(11) NOT NULL,
  `p_id` int(11) NOT NULL,
  `p_category` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `p_vendor` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updates_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `member_collect`
--

INSERT INTO `member_collect` (`collect_id`, `mb_id`, `p_id`, `p_category`, `p_vendor`, `created_at`, `updates_at`) VALUES
(1, 37, 153, '運動攝影機', 'GoPro', '2020-03-29 10:08:59', '2020-03-29 10:08:59'),
(2, 37, 15, '穿戴式裝置', 'APPLE', '2020-03-29 10:08:59', '2020-03-29 10:08:59');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `member_collect`
--
ALTER TABLE `member_collect`
  ADD PRIMARY KEY (`collect_id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `member_collect`
--
ALTER TABLE `member_collect`
  MODIFY `collect_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
