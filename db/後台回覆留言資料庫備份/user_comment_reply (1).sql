-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2020 年 03 月 31 日 10:51
-- 伺服器版本： 10.4.11-MariaDB
-- PHP 版本： 7.2.27

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
-- 資料表結構 `user_comment_reply`
--

CREATE TABLE IF NOT EXISTS `user_comment_reply` (
  `replyId` int(10) NOT NULL AUTO_INCREMENT,
  `commentId` int(10) NOT NULL,
  `replyText` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`replyId`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 資料表新增資料前，先清除舊資料 `user_comment_reply`
--

TRUNCATE TABLE `user_comment_reply`;
--
-- 傾印資料表的資料 `user_comment_reply`
--

INSERT INTO `user_comment_reply` (`replyId`, `commentId`, `replyText`, `created_at`, `updated_at`) VALUES
(1, 1, '謝謝你的留言', '2020-01-20 05:37:55', '2020-03-29 22:23:13'),
(3, 10, '感謝你的留言', '2020-01-20 09:32:31', '2020-01-20 09:32:31'),
(4, 3, '你拍照技術真好，拍得好美', '2020-03-29 22:12:45', '2020-03-29 22:12:45'),
(5, 8, '型男配帥錶，很開心你喜歡', '2020-03-29 22:25:28', '2020-03-29 22:25:28'),
(6, 2, 'hi', '2020-03-29 22:30:15', '2020-03-29 22:30:15'),
(7, 4, '謝謝你的誇讚，這款戴起來超舒服', '2020-03-29 22:31:09', '2020-03-29 22:31:09'),
(8, 5, '我也很喜歡他的螢幕喔', '2020-03-29 22:31:24', '2020-03-29 22:31:24');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
