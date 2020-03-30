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
-- 資料表結構 `user_comment`
--

CREATE TABLE `user_comment` (
  `commentId` int(10) NOT NULL,
  `productId` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` int(10) NOT NULL,
  `userName` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rank` int(5) NOT NULL,
  `commentText` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `commentText2` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `user_comment`
--

INSERT INTO `user_comment` (`commentId`, `productId`, `userId`, `userName`, `rank`, `commentText`, `commentText2`, `img`, `created_at`, `updated_at`) VALUES
(1, '2', 1, 'yaling999', 5, '很輕，錶帶觸感也不錯', '真的超棒的', '1.jpg', '2020-03-30 19:52:19', '2020-03-30 19:52:19'),
(2, '2', 2, 'rick06', 5, '害怕買到假貨但此商場服務人員耐心細心解說服務不錯就決定下單給它，隔天就到貨了非常不錯的商家', '一拿到就可以使用一切正常!!!', '2.jpg', '2020-03-30 19:52:20', '2020-03-30 19:52:20'),
(3, '2', 3, 'jolin719', 5, '包裝很精美東西帶起來很好看', 'CP值很高 !!', '3.jpg', '2020-03-30 19:52:20', '2020-03-30 19:52:20'),
(4, '2', 4, 'roman1', 5, '陶瓷錶圈+真皮錶帶，質感很好', 'CP值很高 !!', '4.jpg', '2020-03-30 19:52:20', '2020-03-30 19:52:20'),
(5, '2', 5, 'alber7', 5, '1.2 吋彩色觸控顯示螢幕觀看資訊很清晰', '物超所值', '', '2020-03-30 19:52:20', '2020-03-30 19:52:20'),
(6, '2', 6, 'kittie', 5, '高感度的 GPS 快速定位，搭配高爾夫球場地圖真的很方便', 'CP值很高！！推薦購入', '6.jpg', '2020-03-30 19:52:20', '2020-03-30 19:52:20'),
(7, '2', 7, 'nitos', 5, '老闆太優惹，幫買家設想周到，詢問回答都很詳細，出貨速度也很快！大推！', '謝謝老闆 有機會還會跟你購買', '7.jpg', '2020-03-30 19:52:20', '2020-03-30 19:52:20'),
(8, '6', 8, 'arben', 5, '謝謝老闆很有耐心的幫忙我挑選，搭配起來很棒，很喜歡喔！', '老闆人很熱心 解說十分詳細有機會會回', '8.jpg', '2020-03-30 19:52:20', '2020-03-30 19:52:20'),
(9, '6', 9, 'elfin008', 5, '詳盡豐富的內建航空地圖，騎Ubike也能用，讚喔', '品質好、服務好，推！', '9.jpg', '2020-03-30 19:52:20', '2020-03-30 19:52:20'),
(10, '6', 10, 'yachi55', 5, '鈦金屬的錶帶相當有質感', '物超所值', '10.jpg', '2020-03-30 19:52:20', '2020-03-30 19:52:20'),
(11, '6', 11, 'nio5019', 5, '很快就收到了，目前使用上沒太多問題。只有garmin本身錶面軟體有時候會卡然後重開機，就看新韌體是否能解決了', '與圖片相符，很喜歡，謝謝', '11.jpg', '2020-03-30 19:52:20', '2020-03-30 19:52:20'),
(12, '6', 12, 'tim067', 4, '操作起來不是很順、有什麼方法較簡單及快速方式可以教我們ㄧ下嗎？', '使用中 後續沒有問題會推薦朋友', '', '2020-03-30 19:52:20', '2020-03-30 19:52:20'),
(13, '6', 13, 'Imp01', 5, '較其他賣場便宜，但品質無異，出貨快、回應快', '出貨速度非常的快，當天下單隔天就出貨了！非常棒的賣家', '', '2020-03-30 19:52:20', '2020-03-30 19:52:20');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `user_comment`
--
ALTER TABLE `user_comment`
  ADD PRIMARY KEY (`commentId`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user_comment`
--
ALTER TABLE `user_comment`
  MODIFY `commentId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
