-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2020 年 03 月 31 日 10:42
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
-- 資料表結構 `user_comment`
--

CREATE TABLE IF NOT EXISTS `user_comment` (
  `commentId` int(10) NOT NULL AUTO_INCREMENT,
  `productId` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` int(10) NOT NULL,
  `userName` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rank` int(5) NOT NULL,
  `commentText` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `commentText2` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`commentId`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 資料表新增資料前，先清除舊資料 `user_comment`
--

TRUNCATE TABLE `user_comment`;
--
-- 傾印資料表的資料 `user_comment`
--

INSERT INTO `user_comment` (`commentId`, `productId`, `userId`, `userName`, `rank`, `commentText`, `commentText2`, `img`, `created_at`, `updated_at`) VALUES
(1, '2', 1, 'yaling999', 5, '很輕，錶帶觸感也不錯', '', '1.jpg', '2020-01-20 02:27:14', '2020-03-28 17:00:30'),
(2, '2', 2, 'rick06', 5, '害怕買到假貨但此商場服務人員耐心細心解說服務不錯就決定下單給它，隔天就到貨了非常不錯的商家', '', '2.jpg', '2020-01-20 02:27:18', '2020-03-28 17:00:36'),
(3, '2', 3, 'jolin719', 5, '包裝很精美東西帶起來很好看', '', '3.jpg', '2020-01-20 02:31:58', '2020-03-28 17:00:42'),
(4, '2', 4, 'roman1', 5, '陶瓷錶圈+真皮錶帶，質感很好', '', '4.jpg', '2020-01-20 02:32:00', '2020-03-28 17:01:34'),
(5, '2', 5, 'alber7', 3, '1.2 吋彩色觸控顯示螢幕觀看資訊很清晰', '', '', '2020-01-20 04:05:46', '2020-03-28 16:42:51'),
(6, '2', 6, 'kittie', 5, '高感度的 GPS 快速定位，搭配高爾夫球場地圖真的很方便', '', '6.jpg', '2020-01-20 04:56:07', '2020-03-28 17:01:55'),
(7, '2', 7, 'nitos', 5, '老闆太優惹，幫買家設想周到，詢問回答都很詳細，出貨速度也很快！大推！', '', '7.jpg', '2020-01-20 04:56:49', '2020-03-28 17:46:13'),
(8, '6', 8, 'arben', 5, '謝謝老闆很有耐心的幫忙我挑選，搭配起來很棒，很喜歡喔！', '', '8.jpg', '2020-01-20 04:57:44', '2020-03-28 17:47:23'),
(9, '6', 9, 'elfin008', 5, '詳盡豐富的內建航空地圖，騎Ubike也能用，讚喔', '', '9.jpg', '2020-01-20 04:58:19', '2020-03-28 17:48:37'),
(10, '6', 10, 'yachi55', 5, '鈦金屬的錶帶相當有質感', '', '10.jpg', '2020-01-20 08:28:04', '2020-03-28 17:49:48'),
(11, '6', 11, 'nio5019', 5, '很快就收到了，目前使用上沒太多問題。只有garmin本身錶面軟體有時候會卡然後重開機，就看新韌體是否能解決了', '', '11.jpg', '2020-01-20 08:28:59', '2020-03-28 17:50:43'),
(12, '6', 12, 'tim067', 4, '操作起來不是很順、有什麼方法較簡單及快速方式可以教我們ㄧ下嗎？', '', '', '2020-01-20 08:30:01', '2020-03-28 17:50:33'),
(13, '6', 13, 'Imp01', 5, '較其他賣場便宜，但品質無異，出貨快、回應快', '', '', '2020-01-20 08:30:44', '2020-03-28 17:50:23');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
