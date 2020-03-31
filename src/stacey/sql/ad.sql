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
-- 資料表結構 `ad`
--

CREATE TABLE `ad` (
  `adId` int(5) NOT NULL,
  `adName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '圖片名稱',
  `adImg` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '圖片',
  `adTitle` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '圖片標題',
  `adContent` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '圖片內文',
  `adLink` int(11) NOT NULL COMMENT '連結',
  `adLinkPlace` int(11) NOT NULL COMMENT '連結產品id',
  `adPlanId` int(11) NOT NULL COMMENT '廣告ID',
  `ad_created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `ad_updates_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `ad`
--

INSERT INTO `ad` (`adId`, `adName`, `adImg`, `adTitle`, `adContent`, `adLink`, `adLinkPlace`, `adPlanId`, `ad_created_at`, `ad_updates_at`) VALUES
(76, 'FĒNIX 5 PLUS', 'id22.jpg', '進階複合式戶外 GPS 腕錶', '突破界線，邁向無限可能，就交給 fēnix 全方位戶外腕錶。材質優異、堅固耐用，適合各種探險活動。', 1, 22, 85, '2020-02-07 13:29:56', '2020-02-07 13:29:56'),
(77, 'WF-SP900 運動無線耳機', 'id102.jpg', '環境聲模式讓您隨時掌握周遭動靜', '無論是在跑道上奔馳、在游泳池或是海中游泳，WF-SP900 耳機都能給您更棒的體驗，走到哪裡就聽到哪裡。', 0, 102, 80, '2020-02-07 18:17:53', '2020-02-07 18:17:53'),
(78, 'GoPro-HERO8 Black', 'id153.jpg', '創造攝影新高度', '超強穩定功能，有史以來手持最穩定的HERO相機。Hypersmooth2.0、縮時攝影2.0、超級相片及Live Burst功能，讓你創造攝影新高度。', 0, 153, 83, '2020-02-07 18:17:53', '2020-02-07 18:17:53'),
(79, 'Apple Watch Series 5', 'id15.jpg', '這樣的錶，出人意表', '有了全新的隨顯Retina 顯示器，Apple Watch Series 5 隨時為你待命。它能監測你的健康，助你維持身體狀態，讓你時時與人保持聯繫。', 0, 15, 81, '2020-02-07 18:17:53', '2020-02-07 18:17:53'),
(80, 'SONY 重低音降噪藍牙耳機', 'id116.jpg', 'EXTRA BASS 給您驚人的深沈強力', '這款耳機強化了所有低音頻率，可提供卓越低音。耳機殼內具備專屬低音管，加上驅動單體與耳膜之間經強化的氣密設計。', 0, 116, 82, '2020-02-07 18:17:53', '2020-02-07 18:17:53'),
(81, 'GARMIN vivomove 3 指針', 'id25.jpg', '講究細節，彰顯絕美', '講究細節，彰顯絕美, 包含走路、跑步、騎行、瑜珈、有氧運動等 8 種運動模式。', 0, 25, 84, '2020-02-07 18:17:53', '2020-02-07 18:17:53');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `ad`
--
ALTER TABLE `ad`
  ADD PRIMARY KEY (`adId`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `ad`
--
ALTER TABLE `ad`
  MODIFY `adId` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
