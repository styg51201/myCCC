-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2020 年 03 月 10 日 08:50
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
CREATE DATABASE IF NOT EXISTS `triplec` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `triplec`;

-- --------------------------------------------------------

--
-- 資料表結構 `ad`
--

CREATE TABLE IF NOT EXISTS `ad` (
  `adId` int(5) NOT NULL AUTO_INCREMENT,
  `adName` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '標題',
  `content` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '內文',
  `planId` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updates_at` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`adId`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 資料表新增資料前，先清除舊資料 `ad`
--

TRUNCATE TABLE `ad`;
--
-- 傾印資料表的資料 `ad`
--

INSERT INTO `ad` (`adId`, `adName`, `img`, `title`, `content`, `planId`, `created_at`, `updates_at`) VALUES
(48, '', '20200206175952.jpg', '', '', 42, '2020-02-05 17:49:57', '2020-02-05 17:49:57');

-- --------------------------------------------------------

--
-- 資料表結構 `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '流水號',
  `username` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '使用者帳號',
  `pwd` char(40) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '使用者密碼',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '新增時間',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='管理者帳號';

--
-- 資料表新增資料前，先清除舊資料 `admin`
--

TRUNCATE TABLE `admin`;
--
-- 傾印資料表的資料 `admin`
--

INSERT INTO `admin` (`id`, `username`, `pwd`, `created_at`, `updated_at`) VALUES
(1, 'test', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '2019-12-05 00:43:04', '2019-12-05 00:43:04'),
(2, 'admin', 'admin', '2020-02-16 03:57:45', '2020-02-16 03:57:45');

-- --------------------------------------------------------

--
-- 資料表結構 `categoryies`
--

CREATE TABLE IF NOT EXISTS `categoryies` (
  `categoryId` int(11) NOT NULL AUTO_INCREMENT COMMENT '流水號',
  `categoryName` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '類別名稱',
  `categoryParentId` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '上層編號',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '新增時間',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間',
  PRIMARY KEY (`categoryId`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 資料表新增資料前，先清除舊資料 `categoryies`
--

TRUNCATE TABLE `categoryies`;
--
-- 傾印資料表的資料 `categoryies`
--

INSERT INTO `categoryies` (`categoryId`, `categoryName`, `categoryParentId`, `created_at`, `updated_at`) VALUES
(33, '智慧手錶', '智慧手錶', '2020-01-18 21:04:04', '2020-01-18 21:04:04'),
(34, '藍芽耳機', '藍芽耳機', '2020-01-18 21:04:04', '2020-01-18 21:04:04'),
(35, '錄影器材', '錄影器材', '2020-01-18 21:04:04', '2020-01-18 21:04:04'),
(36, '其他', '其他', '2020-01-18 21:04:04', '2020-01-18 21:04:04');

-- --------------------------------------------------------

--
-- 資料表結構 `customer`
--

CREATE TABLE IF NOT EXISTS `customer` (
  `csId` varchar(11) NOT NULL,
  `csName` varchar(20) NOT NULL,
  `csAdress` varchar(999) NOT NULL,
  `csPhone` varchar(20) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`csId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 資料表新增資料前，先清除舊資料 `customer`
--

TRUNCATE TABLE `customer`;
--
-- 傾印資料表的資料 `customer`
--

INSERT INTO `customer` (`csId`, `csName`, `csAdress`, `csPhone`, `created_at`, `updated_at`) VALUES
('CS001', 'Alex', '台北市大安區復興南路一段390號 3號15樓', '0912345678', '2020-01-09 16:55:52', '2020-01-21 10:15:32'),
('CS002', 'Bill', '台北市大安區復興南路一段390號2號2樓', '0123456789', '2020-01-10 10:34:49', '2020-01-21 10:15:44'),
('CS003', 'Cala', '台北市大安區和平東路二段106號11樓', '0198456789', '2020-01-10 10:34:49', '2020-01-21 10:16:02'),
('CS004', 'Delt', '台北市士林區基河路363號', '0773456789', '2020-01-10 10:34:49', '2020-01-21 10:17:01'),
('CS005', 'Eels', '台北市萬華區大理街132之10號', '0123459989', '2020-01-10 10:34:49', '2020-01-21 10:16:31'),
('CS006', 'FEED', '新北市三重區集美街55號', '0123455589', '2020-01-10 10:34:49', '2020-01-21 10:16:45');

-- --------------------------------------------------------

--
-- 資料表結構 `items`
--

CREATE TABLE IF NOT EXISTS `items` (
  `itemId` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品編號',
  `itemName` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '商品名稱',
  `itemImg` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '商品照片',
  `itemDescription` varchar(3000) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '商品描述',
  `itemPrice` int(11) NOT NULL COMMENT '商品價格',
  `itemQty` tinyint(4) NOT NULL COMMENT '商品數量',
  `itemCategoryId` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '商品類別',
  `itemColor` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '商品顏色',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '新增時間',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間',
  PRIMARY KEY (`itemId`)
) ENGINE=InnoDB AUTO_INCREMENT=243 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 資料表新增資料前，先清除舊資料 `items`
--

TRUNCATE TABLE `items`;
--
-- 傾印資料表的資料 `items`
--

INSERT INTO `items` (`itemId`, `itemName`, `itemImg`, `itemDescription`, `itemPrice`, `itemQty`, `itemCategoryId`, `itemColor`, `created_at`, `updated_at`) VALUES
(239, '我誰', 'jq範例1.jpg', '我誰!!!!!!!!!!!!!!!!!!我瘋子!!!!!!!!!!', 30000, 100, '其他', '黑', '2020-02-14 22:57:08', '2020-02-14 22:57:08'),
(241, '1', 'a1.jpg', '2', 3, 4, '智慧手錶', '黑', '2020-02-16 12:47:18', '2020-02-16 12:47:18'),
(242, '1', 'a1.jpg', '2', 3, 4, '智慧手錶', '黑', '2020-02-17 14:58:52', '2020-02-17 14:58:52');

-- --------------------------------------------------------

--
-- 資料表結構 `member`
--

CREATE TABLE IF NOT EXISTS `member` (
  `ID` int(50) NOT NULL AUTO_INCREMENT,
  `Account` varchar(50) NOT NULL,
  `AccountActivated` int(1) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Pwd` varchar(100) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Gender` varchar(10) NOT NULL,
  `Img` varchar(100) NOT NULL,
  `Birthday` date NOT NULL,
  `PhoneNumber` varchar(50) NOT NULL,
  `Address` varchar(50) NOT NULL,
  `Blocked` varchar(20) NOT NULL,
  `VIP` varchar(10) NOT NULL,
  `VIP_Start` date NOT NULL,
  `VIP_Due` date NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`ID`),
  UNIQUE KEY `Account` (`Account`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4;

--
-- 資料表新增資料前，先清除舊資料 `member`
--

TRUNCATE TABLE `member`;
--
-- 傾印資料表的資料 `member`
--

INSERT INTO `member` (`ID`, `Account`, `AccountActivated`, `Email`, `Pwd`, `Name`, `Gender`, `Img`, `Birthday`, `PhoneNumber`, `Address`, `Blocked`, `VIP`, `VIP_Start`, `VIP_Due`, `created_at`, `updated_at`) VALUES
(1, 'Brady0507', 1, 'nibh@Nam.com', '3565a686e7e365cd1902235baeda712efa9f3c6f', '王俊依', '男', '', '1994-12-28', '0901208666', '臺北市內湖區南湖里011鄰康寧路三段７０巷１６５號', 'NO', 'YES', '2019-01-01', '2020-01-01', '2020-02-16 16:14:49', '2020-02-16 16:14:49'),
(2, 'Nicholas1111', 1, 'feugiat@Etiam.co.uk', '52253a27b6ea0a63bbd2a48b24ffc141ea8e752b', '郭柔延', '男', '', '1983-09-10', '0927600224', '臺北市南港區聯成里001鄰忠孝東路六段１３０號十樓', 'NO', 'NO', '0000-00-00', '0000-00-00', '2020-02-16 16:14:49', '2020-02-16 16:14:49'),
(3, 'Eden5468', 1, 'lacus.Nulla.tincidunt@tempuslorem.net', '6c0602ec5cb683c76e9eeec6b8fff8fea3b2dec2', '洪玉芳', '女', '', '2007-11-17', '0967188791', '臺北市大同區星明里021鄰民生西路２４８號', 'NO', 'NO', '0000-00-00', '0000-00-00', '2020-02-16 16:14:49', '2020-02-16 16:14:49'),
(4, 'Colton780', 1, 'id.nunc@ideratEtiam.edu', 'a44a6c035ed805e4b3d9086c64c46fb2885fcadd', '張馨俐', '男', '', '2010-09-07', '0945386979', '臺北市南港區西新里008鄰成功路一段７８號二樓', 'NO', 'NO', '0000-00-00', '0000-00-00', '2020-02-16 16:14:49', '2020-02-16 16:14:49'),
(5, 'Isabelle65437', 1, 'pharetra@nasceturridiculusmus.co.uk', '4ef77757e8c3bef5f98016fabecb483860615c78', '黃雅雯', '男', '', '1963-10-22', '0999424728', '臺北市信義區黎平里006鄰信安街１８８號五樓', 'NO', 'NO', '0000-00-00', '0000-00-00', '2020-02-16 16:14:49', '2020-02-16 16:14:49'),
(6, 'Kathleen89043', 1, 'mauris@vitaeodio.org', 'e58c994d320dac65758fee6f8712084d33af38b5', '許佳蓉', '女', '', '1975-08-26', '0904214323', '臺北市信義區四育里016鄰永吉路３４９號', 'NO', 'NO', '0000-00-00', '0000-00-00', '2020-02-16 16:14:49', '2020-02-16 16:14:49'),
(7, 'Boris56803', 1, 'lobortis.Class.aptent@ac.co.uk', '5f3db71cf732c9cad0c9f2b2ff10adbfa93fb687', '趙秀娟', '女', '', '1997-12-04', '0912900648', '臺北市松山區吉祥里012鄰南京東路五段１１８號十一樓之１', 'NO', 'NO', '0000-00-00', '0000-00-00', '2020-02-16 16:14:49', '2020-02-16 16:14:49'),
(8, 'Xantha33', 1, 'purus@Inmipede.org', '720e54922f8ad00f207f845df03709c17b0e27f8', '陳美珠', '男', '', '1975-08-07', '0902092983', '臺北市大安區通安里003鄰信義路四段２５６號十樓之２', 'NO', 'NO', '0000-00-00', '0000-00-00', '2020-02-16 16:14:49', '2020-02-16 16:14:49'),
(9, 'Ulla4455', 1, 'ridiculus@turpis.net', '87793af5949f9f7b4aee0762084c83128169a02c', '徐常為', '男', '', '1991-06-29', '0981849035', '臺北市大同區光能里018鄰赤峰街５３巷２２號三樓', 'NO', 'NO', '0000-00-00', '0000-00-00', '2020-02-16 16:14:49', '2020-02-16 16:14:49'),
(10, 'Sierra21', 1, 'nisi.dictum.augue@commodotincidunt.net', 'f97056fe7961dab9444af6be16614dc3c150879c', '江苑名', '男', '', '1967-06-12', '0922039611', '臺北市萬華區錦德里020鄰寶興街９４號三樓', 'NO', 'NO', '0000-00-00', '0000-00-00', '2020-02-16 16:14:49', '2020-02-16 16:14:49'),
(11, 'Michelle', 1, 'Nulla@Fusce.edu', '187569f5bdd27560c0451eccd8f24cd22232637f', '林惠雯', '女', '', '1963-09-29', '0975903708', '臺北市松山區敦化里016鄰八德路三段１２巷５７弄４０之７號三樓', 'NO', 'NO', '0000-00-00', '0000-00-00', '2020-02-16 16:14:49', '2020-02-16 16:14:49'),
(12, 'Ralph45', 1, 'Aenean@convallisantelectus.org', 'c587125d3df5c300c42b1600b4d9437c62d3afdc', '張明喬', '男', '', '1967-12-06', '0932312010', '臺北市士林區東山里014鄰東山路１００巷１２號二樓', 'NO', 'NO', '0000-00-00', '0000-00-00', '2020-02-16 16:14:49', '2020-02-16 16:14:49'),
(13, 'Devin00', 1, 'urna.Ut@a.ca', '3ff7ee5ef842c6e56ad367ee2937a127f3c76f5a', '陳偉純', '男', '', '1977-09-23', '0980756070', '臺北市大安區仁慈里003鄰信義路四段１號七樓之２', 'NO', 'NO', '0000-00-00', '0000-00-00', '2020-02-16 16:14:49', '2020-02-16 16:14:49'),
(14, 'Kyla', 1, 'sit.amet@loremDonecelementum.ca', 'b17fbb609146d64cc588cbad1abe88833c9a2975', '黃冠良', '男', '', '1992-09-01', '0953951377', '臺北市文山區興旺里021鄰福興路１０６巷３１號十樓', 'NO', 'NO', '0000-00-00', '0000-00-00', '2020-02-16 16:14:49', '2020-02-16 16:14:49'),
(15, 'Sierra', 1, 'semper.pretium@ligulaNullamenim.org', '5f884cf5694022e258e7ab8cb717110d81776b84', '李佳玲', '女', '', '1998-09-21', '0922038504', '臺北市南港區東新里023鄰興南街５號四樓', 'NO', 'NO', '0000-00-00', '0000-00-00', '2020-02-16 16:14:49', '2020-02-16 16:14:49'),
(16, 'Julian567', 1, 'Donec@primisinfaucibus.ca', '8261bb7c51ec3cc7ebbcaf11f787b6fc9402c224', '楊書豪', '男', '', '1968-01-19', '0929003579', '臺北市中山區中山里003鄰中山北路二段５９巷３０號四樓', 'NO', 'NO', '0000-00-00', '0000-00-00', '2020-02-16 16:14:49', '2020-02-16 16:14:49'),
(17, 'Russell777', 1, 'nascetur.ridiculus@libero.com', 'ac5497f20f46a45ae428559655066789aa5b9e25', '陳佳瑩', '男', '', '1990-02-25', '0960315189', '臺北市大同區建明里002鄰長安西路８２號七樓之１', 'NO', 'NO', '0000-00-00', '0000-00-00', '2020-02-16 16:14:49', '2020-02-16 16:14:49'),
(18, 'Aiko99', 1, 'augue.ac.ipsum@Donecfeugiatmetus.ca', 'ec3f1cb6d0a113f98075deff829b91405e28a9e8', '宋嬌夢', '女', '', '1986-10-25', '0920200069', '臺北市南港區舊莊里001鄰舊莊街一段３巷２弄２０號', 'NO', 'NO', '0000-00-00', '0000-00-00', '2020-02-16 16:14:49', '2020-02-16 16:14:49'),
(19, 'Vielka', 1, 'sodales@sedconsequat.org', '8331a54fdd530cbeda32c4c35d03a0c64d8d8927', '黃燕貴', '女', '', '2008-07-19', '0930637539', '臺北市內湖區秀湖里017鄰成功路四段３２４巷４弄８號', 'NO', 'NO', '0000-00-00', '0000-00-00', '2020-02-16 16:14:49', '2020-02-16 16:14:49'),
(20, 'Karleigh', 1, 'molestie.pharetra@nec.ca', '3f90458111e78a8863283c921df4ad88658f3064', '蔡怡文', '男', '', '1970-12-07', '0989893535', '臺北市萬華區華中里005鄰萬大路４８６巷１０弄２４號', 'NO', 'NO', '0000-00-00', '0000-00-00', '2020-02-16 16:14:49', '2020-02-16 16:14:49'),
(21, 'Keely7986', 1, 'sem@Aliquam.co.uk', '0c61e93e83827f94c3ae8704406e71f974cc450f', '黃詩靖', '女', '', '1974-02-02', '0930557368', '臺北市大同區建明里002鄰長安西路８８號二樓', 'NO', 'NO', '0000-00-00', '0000-00-00', '2020-02-16 16:14:49', '2020-02-16 16:14:49'),
(22, 'Aurora', 1, 'augue@atpede.co.uk', 'f0c300ffd00f401b3a9cce514b2c3ebd905e1d39', '烏琦江', '男', '', '2008-02-14', '0946141594', '臺北市文山區明義里025鄰興隆路四段１０５巷４７號十八樓之１１', 'NO', 'YES', '2019-05-01', '2020-05-01', '2020-02-16 16:14:49', '2020-02-16 16:14:49'),
(23, 'Leigh0894', 1, 'Ut.tincidunt.orci@rhoncusNullamvelit.com', '87b3dd56f808ceac5f02d7f955fe0757d0652764', '陳宥漢', '女', '', '1968-01-23', '0906057370', '臺北市中山區中山里023鄰林森北路２９３號', 'NO', 'NO', '0000-00-00', '0000-00-00', '2020-02-16 16:14:49', '2020-02-16 16:14:49'),
(24, 'Basil', 1, 'elit.elit@massalobortis.ca', '162ba2e40961fccd210e033ff2bce83f103e4dcf', '曹偉安', '男', '', '1996-06-28', '0945421975', '臺北市文山區樟林里012鄰下崙路９之３號五樓', 'NO', 'YES', '2019-10-20', '2020-10-31', '2020-02-16 16:14:49', '2020-02-16 16:14:49'),
(25, 'Lee157', 1, 'eget.tincidunt@hendreritconsectetuercursus.co.uk', '1d9b48ca521d57df8c0b3bb316b323f6b625cdc3', '範文彬', '男', '', '1983-09-13', '0906246615', '臺北市中正區頂東里001鄰羅斯福路三段１００號地下之３２', 'YES', 'YES', '2020-01-01', '2021-01-01', '2020-02-16 16:14:49', '2020-02-16 16:14:49'),
(26, 'Honorato', 1, 'interdum.Nunc@Maurisblandit.ca', '709d6b18bf0a274433ca3f47eeff071fc9974bf6', '王冠靖', '女', '', '1976-03-31', '0957932366', '臺北市萬華區綠堤里011鄰環河南路二段１５７號十樓之１', 'NO', 'NO', '0000-00-00', '0000-00-00', '2020-02-16 16:14:49', '2020-02-16 16:14:49'),
(27, 'Chancellor88', 1, 'magna@condimentumDonec.edu', 'a7b52067308457bba91955c4ca2ef0c376641973', '林靜臻', '男', '', '1973-08-02', '0983288305', '臺北市文山區景美里007鄰育英街３１巷３４弄９號三樓', 'NO', 'NO', '0000-00-00', '0000-00-00', '2020-02-16 16:14:49', '2020-02-16 16:14:49'),
(28, 'Hu', 1, 'vitae.sodales@magnaseddui.ca', '5cb7829bab81459668ef97549fa0d82fb2b399b4', '楊思穎', '男', '', '1975-08-04', '0902561546', '臺北市南港區成福里004鄰東新街８０巷１０弄４號三樓', 'NO', 'YES', '2020-02-03', '2020-02-03', '2020-02-16 16:14:49', '2020-02-16 16:14:49'),
(29, 'Amy', 1, 'arcu@orciPhasellus.com', '66f8ec6cc042a764e0990c2da0f836c3ec54eabe', '王柏舜', '女', '', '1984-02-15', '0975911053', '臺北市大同區保安里001鄰酒泉街１０５之４號', 'NO', 'NO', '0000-00-00', '0000-00-00', '2020-02-16 16:14:49', '2020-02-16 16:14:49'),
(30, 'Gil7115', 1, 'velit.justo.nec@Nullam.edu', '3068720b88c2fdd25e60f14ea051c9b94893f8f1', '陳致柔', '女', '', '1961-09-17', '0900284832', '臺北市北投區豐年里016鄰大業路５３７號二樓', 'YES', 'NO', '0000-00-00', '0000-00-00', '2020-02-16 16:14:49', '2020-02-16 16:14:49'),
(31, 'Herman', 1, 'sed@pretiumneque.ca', 'a2fbf9b918a6b40edfcd1e51cff4c4bf42bbb411', '黃志憲', '男', '', '1980-08-01', '0947710239', '臺北市中山區晴光里008鄰農安街１９號九樓之１', 'YES', 'NO', '0000-00-00', '0000-00-00', '2020-02-16 16:14:49', '2020-02-16 16:14:49'),
(32, 'Harrison', 1, 'molestie@malesuadaaugue.org', 'f7c305a529d5bc8d1bcbd3eb6c4784d10b8309bb', '黃亭君', '女', '', '1974-12-16', '0907540660', '臺北市文山區興旺里003鄰福興路６３巷４弄１１之１號七樓', 'YES', 'NO', '0000-00-00', '0000-00-00', '2020-02-16 16:14:49', '2020-02-16 16:14:49'),
(33, 'Summer0876', 1, 'Morbi.non.sapien@ultrices.co.uk', '4146e5d02329bdffc3e1f9e0656bb863d059f2ef', '溫郁涵', '男', '', '1963-09-14', '0958242249', '臺北市北投區中和里006鄰中和街４５５巷４弄１號', 'NO', 'NO', '0000-00-00', '0000-00-00', '2020-02-16 16:14:49', '2020-02-16 16:14:49'),
(34, 'Tatiana', 1, 'Etiam.ligula@pharetrasedhendrerit.edu', 'ae0a44d8836092e9a5ba56d5a180146843eef99a', '張碧依', '男', '', '1963-09-10', '0959626921', '臺北市內湖區湖興里014鄰民權東路六段１５０之１號十二樓之１６', 'NO', 'NO', '0000-00-00', '0000-00-00', '2020-02-16 16:14:49', '2020-02-16 16:14:49'),
(35, 'test', 1, 'test111@ntu.edu.tw', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '楊俊吉', '', '', '1991-04-21', '0981999003', '臺北市大安區古莊里002鄰和平東路一段５０巷１弄８號六樓', 'NO', 'YES', '0000-00-00', '0000-00-00', '2020-02-16 16:14:50', '2020-02-16 16:14:50'),
(36, 'Candice0887', 1, 'ac.facilisis@Aliquamtinciduntnunc.com', '5a6c027739911150b239b885770dc731e94fe4a4', '黃柏宇', '女', '', '1974-07-19', '0943988182', '臺北市文山區樟文里004鄰忠順街一段２號', 'NO', 'NO', '0000-00-00', '0000-00-00', '2020-02-16 16:14:50', '2020-02-16 16:14:50');

-- --------------------------------------------------------

--
-- 資料表結構 `multiple_images`
--

CREATE TABLE IF NOT EXISTS `multiple_images` (
  `multipleImageId` int(11) NOT NULL AUTO_INCREMENT COMMENT '流水號',
  `multipleImageImg` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '圖片名稱',
  `itemId` int(11) NOT NULL COMMENT '商品編號',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '新增時間	',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間',
  PRIMARY KEY (`multipleImageId`)
) ENGINE=InnoDB AUTO_INCREMENT=318 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 資料表新增資料前，先清除舊資料 `multiple_images`
--

TRUNCATE TABLE `multiple_images`;
--
-- 傾印資料表的資料 `multiple_images`
--

INSERT INTO `multiple_images` (`multipleImageId`, `multipleImageImg`, `itemId`, `created_at`, `updated_at`) VALUES
(304, 'jq範例2.jpg', 239, '2020-02-14 22:57:08', '2020-02-14 22:57:08'),
(305, 'jq範例3.jpg', 239, '2020-02-14 22:57:08', '2020-02-14 22:57:08'),
(306, 'jq範例4.jpg', 239, '2020-02-14 22:57:08', '2020-02-14 22:57:08'),
(307, 'a2.jpg', 0, '2020-02-16 05:26:27', '2020-02-16 05:26:27'),
(308, 'a3.jpg', 0, '2020-02-16 05:26:27', '2020-02-16 05:26:27'),
(309, 'a4.jpg', 0, '2020-02-16 05:26:27', '2020-02-16 05:26:27'),
(310, 'a2.jpg', 0, '2020-02-16 05:40:56', '2020-02-16 05:40:56'),
(311, 'a3.jpg', 0, '2020-02-16 05:40:56', '2020-02-16 05:40:56'),
(312, 'a4.jpg', 0, '2020-02-16 05:40:56', '2020-02-16 05:40:56'),
(315, 'a2.jpg', 241, '2020-02-16 12:47:18', '2020-02-16 12:47:18'),
(316, 'a3.jpg', 241, '2020-02-16 12:47:18', '2020-02-16 12:47:18'),
(317, 'a2.jpg', 242, '2020-02-17 14:58:52', '2020-02-17 14:58:52');

-- --------------------------------------------------------

--
-- 資料表結構 `orderbuyer`
--

CREATE TABLE IF NOT EXISTS `orderbuyer` (
  `orderId` varchar(20) NOT NULL COMMENT '訂單編號',
  `buyerName` varchar(20) NOT NULL COMMENT '購買人姓名',
  `buyerPhone` varchar(10) NOT NULL COMMENT '購買人電話',
  `buyerAdress` varchar(99) NOT NULL COMMENT '購買人地址',
  `invoiceType` varchar(10) NOT NULL COMMENT '發票類別',
  `taxNo` int(10) NOT NULL COMMENT '統一編號',
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 資料表新增資料前，先清除舊資料 `orderbuyer`
--

TRUNCATE TABLE `orderbuyer`;
-- --------------------------------------------------------

--
-- 資料表結構 `orderdetail`
--

CREATE TABLE IF NOT EXISTS `orderdetail` (
  `orderId` int(20) NOT NULL COMMENT '訂單編號',
  `pId` varchar(20) NOT NULL COMMENT '產品ID',
  `count` int(20) NOT NULL COMMENT '購買數量',
  `outStatus` varchar(20) NOT NULL COMMENT '產品狀態',
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 資料表新增資料前，先清除舊資料 `orderdetail`
--

TRUNCATE TABLE `orderdetail`;
--
-- 傾印資料表的資料 `orderdetail`
--

INSERT INTO `orderdetail` (`orderId`, `pId`, `count`, `outStatus`, `created_at`, `updated_at`) VALUES
(1, 'p006', 1, '已出貨', '2020-02-16 10:41:53', '2020-02-16 10:41:53'),
(1, 'p008', 1, '退貨處理中', '2020-02-16 10:41:53', '2020-02-16 10:41:53'),
(2, 'p007', 2, '退貨處理中', '2020-02-16 10:42:00', '2020-02-16 10:42:00'),
(2, 'p001', 1, '退貨處理中', '2020-02-16 10:42:00', '2020-02-16 10:42:00'),
(3, 'p006', 2, '退貨完成', '2020-02-16 10:42:05', '2020-02-16 10:42:05'),
(3, 'p003', 1, '已出貨', '2020-02-16 10:42:05', '2020-02-16 10:42:05'),
(4, 'p002', 1, '退貨完成', '2020-02-16 10:43:07', '2020-02-16 10:43:07'),
(5, 'p005', 1, '退貨完成', '2020-02-16 10:43:11', '2020-02-16 10:43:11'),
(6, 'p008', 1, '退貨處理中', '2020-02-16 11:07:04', '2020-02-16 11:07:04'),
(6, 'p003', 1, '退貨處理中', '2020-02-16 11:07:04', '2020-02-16 11:07:04'),
(7, 'p003', 1, '', '2020-02-16 11:12:25', '2020-02-16 11:12:25'),
(8, 'p006', 2, '', '2020-02-16 11:12:32', '2020-02-16 11:12:32'),
(8, 'p005', 1, '', '2020-02-16 11:12:32', '2020-02-16 11:12:32'),
(9, 'p004', 1, '', '2020-02-16 13:31:29', '2020-02-16 13:31:29'),
(9, 'p006', 1, '', '2020-02-16 13:31:29', '2020-02-16 13:31:29');

-- --------------------------------------------------------

--
-- 資料表結構 `orderlist`
--

CREATE TABLE IF NOT EXISTS `orderlist` (
  `orderId` int(100) NOT NULL AUTO_INCREMENT COMMENT '訂單編號',
  `csId` varchar(20) NOT NULL COMMENT '會員ID',
  `total` varchar(20) NOT NULL COMMENT '訂單總額',
  `marketingType` varchar(99) NOT NULL COMMENT '行銷類別',
  `paymentType` varchar(20) NOT NULL COMMENT '付款類別',
  `shippingWay` varchar(20) NOT NULL COMMENT '運送類別',
  `outStatus` varchar(20) NOT NULL COMMENT '訂單狀態',
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_time` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`orderId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;

--
-- 資料表新增資料前，先清除舊資料 `orderlist`
--

TRUNCATE TABLE `orderlist`;
--
-- 傾印資料表的資料 `orderlist`
--

INSERT INTO `orderlist` (`orderId`, `csId`, `total`, `marketingType`, `paymentType`, `shippingWay`, `outStatus`, `created_at`, `updated_time`) VALUES
(1, 'CS002', '140', '', 'ATM', '宅配到府', '已出貨', '2020-02-16 10:41:53', '2020-02-16 10:41:53'),
(2, 'CS002', '150', '', 'IbonPay', '宅配到府', '已出貨', '2020-02-16 10:42:00', '2020-02-16 10:42:00'),
(3, 'CS002', '150', '', 'CreditCard', '宅配到府', '已出貨', '2020-02-16 10:42:05', '2020-02-16 10:42:05'),
(4, 'CS002', '20', '', 'ATM', '宅配到府', '退貨完成', '2020-02-16 10:43:07', '2020-02-16 10:43:07'),
(5, 'CS002', '50', '', 'Cashondelivery', '宅配到府', '退貨完成', '2020-02-16 10:43:11', '2020-02-16 10:43:11'),
(6, 'CS002', '110', '', 'ATM', '宅配到府', '已出貨', '2020-02-16 11:07:04', '2020-02-16 11:07:04'),
(7, 'CS002', '30', '', 'ATM', '宅配到府', '訂單成立', '2020-02-16 11:12:25', '2020-02-16 11:12:25'),
(8, 'CS002', '170', '', 'ATM', '宅配到府', '訂單成立', '2020-02-16 11:12:32', '2020-02-16 11:12:32'),
(9, 'CS002', '100', '', 'CreditCard', '宅配到府', '訂單成立', '2020-02-16 13:31:29', '2020-02-16 13:31:29');

-- --------------------------------------------------------

--
-- 資料表結構 `outlist`
--

CREATE TABLE IF NOT EXISTS `outlist` (
  `outId` int(11) NOT NULL AUTO_INCREMENT,
  `csId` varchar(20) NOT NULL,
  `orderId` int(20) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `undated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`outId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 資料表新增資料前，先清除舊資料 `outlist`
--

TRUNCATE TABLE `outlist`;
-- --------------------------------------------------------

--
-- 資料表結構 `payment`
--

CREATE TABLE IF NOT EXISTS `payment` (
  `paymentId` int(20) NOT NULL AUTO_INCREMENT,
  `paymentName` varchar(20) NOT NULL,
  `paymentCName` varchar(20) NOT NULL,
  `paymentImg` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`paymentId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

--
-- 資料表新增資料前，先清除舊資料 `payment`
--

TRUNCATE TABLE `payment`;
--
-- 傾印資料表的資料 `payment`
--

INSERT INTO `payment` (`paymentId`, `paymentName`, `paymentCName`, `paymentImg`, `created_at`, `updated_at`) VALUES
(1, 'ATM', 'ATM轉帳', 'payment_type_20200203100343.png', '2020-01-19 00:31:30', '2020-02-03 17:03:43'),
(2, 'CreditCard', '信用卡', 'payment_type_20200203095508.png', '2020-01-19 01:01:35', '2020-02-03 16:55:08'),
(4, 'Cashondelivery', '貨到付款', 'payment_type_20200203095554.png', '2020-01-19 01:07:43', '2020-02-03 16:55:54'),
(5, 'IbonPay', 'Ibon付款', 'payment_type_20200203095605.jpg', '2020-01-19 01:09:37', '2020-02-03 16:56:05'),
(6, 'linePay', 'linePay', 'payment_type_20200203095926.png', '2020-01-19 16:06:35', '2020-02-03 16:59:26'),
(7, 'SamsunPay', 'SamsunPay', 'payment_type_20200203100029.png', '2020-01-19 16:08:06', '2020-02-03 17:00:29');

-- --------------------------------------------------------

--
-- 資料表結構 `plan`
--

CREATE TABLE IF NOT EXISTS `plan` (
  `id` int(3) NOT NULL AUTO_INCREMENT COMMENT '流水號',
  `username` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '廠商名',
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '名稱',
  `target` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '目標',
  `type` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '方案',
  `place` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '廣告位置',
  `cost` int(11) DEFAULT NULL COMMENT '預算',
  `click` int(11) NOT NULL COMMENT '點擊數',
  `status` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '狀態',
  `startTime` date NOT NULL,
  `dueTime` date NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updates_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 資料表新增資料前，先清除舊資料 `plan`
--

TRUNCATE TABLE `plan`;
--
-- 傾印資料表的資料 `plan`
--

INSERT INTO `plan` (`id`, `username`, `name`, `target`, `type`, `place`, `cost`, `click`, `status`, `startTime`, `dueTime`, `created_at`, `updates_at`) VALUES
(42, 'test', '', '提升品牌知名度', '曝光天數', '商品首頁頭版', 0, 0, '審核', '2020-02-05', '2020-02-07', '2020-02-05 17:49:57', '2020-02-16 11:40:02');

-- --------------------------------------------------------

--
-- 資料表結構 `platformAdmins`
--

CREATE TABLE IF NOT EXISTS `platformAdmins` (
  `aId` int(11) NOT NULL AUTO_INCREMENT,
  `aRoleId` int(10) NOT NULL,
  `aFName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `aLName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `aEmail` varchar(254) COLLATE utf8mb4_unicode_ci NOT NULL,
  `aPassword` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `aActive` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `aVerify` varchar(25) COLLATE utf8mb4_unicode_ci DEFAULT current_timestamp(),
  `aHash` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `aNotes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `aLogoutTime` datetime DEFAULT NULL,
  `aLoginTime` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`aId`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 資料表新增資料前，先清除舊資料 `platformAdmins`
--

TRUNCATE TABLE `platformAdmins`;
--
-- 傾印資料表的資料 `platformAdmins`
--

INSERT INTO `platformAdmins` (`aId`, `aRoleId`, `aFName`, `aLName`, `aEmail`, `aPassword`, `aActive`, `aVerify`, `aHash`, `aNotes`, `aLogoutTime`, `aLoginTime`, `created_at`, `updated_at`) VALUES
(1, 1, 'vicky', 'test', 'vickysun2@hotmail.com', 'e79cab55eab4c0a1a63610829a51fd51d5cfb294', 'active', 'verified', '', 'asdf', '2020-01-22 07:55:46', '2020-01-22 07:21:53', '2020-01-15 04:01:20', '2020-01-15 04:01:20'),
(11, 3, 'dd', 'dd', 'radu000rider@gmail.com', 'bc7cafbd1f9bcb7a3065a603b98d5c45e60c67d9', 'active', 'verified', '3295c76acbf4caaed33c36b1b5fc2cb1', 'again\r\n', '2020-01-22 03:55:22', '2020-01-22 03:55:02', '2020-01-21 19:53:38', '2020-01-21 19:53:38'),
(13, 2, 'aa', 'aa', 'nightfallvs0923@gmail.com', 'e0c9035898dd52fc65c41454cec9c4d2611bfb37', 'active', 'verified', 'daca41214b39c5dc66674d09081940f0', 'aa', '2020-01-22 04:00:19', '2020-01-22 03:58:24', '2020-01-21 19:58:09', '2020-01-21 19:58:09');

-- --------------------------------------------------------

--
-- 資料表結構 `platformPermissions`
--

CREATE TABLE IF NOT EXISTS `platformPermissions` (
  `adminPrmId` varchar(6) COLLATE utf8mb4_unicode_ci NOT NULL,
  `adminPrmName` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`adminPrmId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 資料表新增資料前，先清除舊資料 `platformPermissions`
--

TRUNCATE TABLE `platformPermissions`;
--
-- 傾印資料表的資料 `platformPermissions`
--

INSERT INTO `platformPermissions` (`adminPrmId`, `adminPrmName`) VALUES
('prmA00', 'admin'),
('prmA01', 'vendors'),
('prmA02', 'charts'),
('prmA03', 'users'),
('prmA04', 'comments');

-- --------------------------------------------------------

--
-- 資料表結構 `platformResetPass`
--

CREATE TABLE IF NOT EXISTS `platformResetPass` (
  `aEmail` varchar(254) COLLATE utf8mb4_unicode_ci NOT NULL,
  `aToken` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `aHash` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `aExpireDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 資料表新增資料前，先清除舊資料 `platformResetPass`
--

TRUNCATE TABLE `platformResetPass`;
-- --------------------------------------------------------

--
-- 資料表結構 `platformRoles`
--

CREATE TABLE IF NOT EXISTS `platformRoles` (
  `aRoleId` int(10) NOT NULL AUTO_INCREMENT,
  `aRoleName` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`aRoleId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 資料表新增資料前，先清除舊資料 `platformRoles`
--

TRUNCATE TABLE `platformRoles`;
--
-- 傾印資料表的資料 `platformRoles`
--

INSERT INTO `platformRoles` (`aRoleId`, `aRoleName`) VALUES
(1, 'Owner'),
(2, 'Manager'),
(3, 'Staff');

-- --------------------------------------------------------

--
-- 資料表結構 `product`
--

CREATE TABLE IF NOT EXISTS `product` (
  `pId` varchar(20) NOT NULL,
  `pName` varchar(20) NOT NULL,
  `price` int(20) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_time` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`pId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 資料表新增資料前，先清除舊資料 `product`
--

TRUNCATE TABLE `product`;
--
-- 傾印資料表的資料 `product`
--

INSERT INTO `product` (`pId`, `pName`, `price`, `created_at`, `updated_time`) VALUES
('p001', 'p001', 10, '0000-00-00 00:00:00', '2020-01-08 14:45:05'),
('p002', 'p002', 20, '0000-00-00 00:00:00', '2020-01-08 14:45:05'),
('p003', 'p003', 30, '0000-00-00 00:00:00', '2020-01-08 14:45:05'),
('p004', 'p004', 40, '0000-00-00 00:00:00', '2020-01-08 14:45:05'),
('p005', 'p005', 50, '0000-00-00 00:00:00', '2020-01-08 14:45:05'),
('p006', 'p006', 60, '0000-00-00 00:00:00', '2020-01-08 14:45:05'),
('p007', 'p007', 70, '0000-00-00 00:00:00', '2020-01-08 14:45:05'),
('p008', 'p008', 80, '0000-00-00 00:00:00', '2020-01-08 14:45:05');

-- --------------------------------------------------------

--
-- 資料表結構 `rel_platform_permissions`
--

CREATE TABLE IF NOT EXISTS `rel_platform_permissions` (
  `aId` int(10) NOT NULL COMMENT '管理者',
  `aPermissionId` varchar(6) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '權限'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 資料表新增資料前，先清除舊資料 `rel_platform_permissions`
--

TRUNCATE TABLE `rel_platform_permissions`;
--
-- 傾印資料表的資料 `rel_platform_permissions`
--

INSERT INTO `rel_platform_permissions` (`aId`, `aPermissionId`) VALUES
(1, 'prmA01'),
(1, 'prmA03'),
(1, 'prmA00'),
(1, 'prmA02'),
(1, 'prmA04'),
(13, 'prmA00'),
(13, 'prmA01'),
(13, 'prmA02'),
(13, 'prmA03'),
(13, 'prmA04'),
(11, 'prmA01'),
(11, 'prmA02'),
(11, 'prmA03'),
(11, 'prmA04');

-- --------------------------------------------------------

--
-- 資料表結構 `rel_vendor_permissions`
--

CREATE TABLE IF NOT EXISTS `rel_vendor_permissions` (
  `vaId` int(10) NOT NULL,
  `vaPermissionId` varchar(6) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 資料表新增資料前，先清除舊資料 `rel_vendor_permissions`
--

TRUNCATE TABLE `rel_vendor_permissions`;
--
-- 傾印資料表的資料 `rel_vendor_permissions`
--

INSERT INTO `rel_vendor_permissions` (`vaId`, `vaPermissionId`) VALUES
(150, 'prmV00'),
(150, 'prmV01'),
(150, 'prmV02'),
(150, 'prmV03'),
(150, 'prmV04'),
(152, 'prmV00'),
(152, 'prmV01'),
(152, 'prmV02'),
(152, 'prmV03'),
(152, 'prmV04'),
(153, 'prmV00'),
(153, 'prmV01'),
(153, 'prmV02'),
(153, 'prmV03'),
(153, 'prmV04'),
(151, 'prmV01'),
(151, 'prmV02'),
(151, 'prmV03'),
(151, 'prmV04'),
(154, 'prmV00'),
(154, 'prmV01'),
(154, 'prmV02'),
(154, 'prmV03'),
(154, 'prmV04');

-- --------------------------------------------------------

--
-- 資料表結構 `reply_comment`
--

CREATE TABLE IF NOT EXISTS `reply_comment` (
  `replyId` int(10) NOT NULL AUTO_INCREMENT,
  `commentId` int(10) NOT NULL,
  `replyText` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`replyId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 資料表新增資料前，先清除舊資料 `reply_comment`
--

TRUNCATE TABLE `reply_comment`;
--
-- 傾印資料表的資料 `reply_comment`
--

INSERT INTO `reply_comment` (`replyId`, `commentId`, `replyText`, `created_at`, `updated_at`) VALUES
(1, 1, '謝謝你的留言', '2020-01-20 05:37:55', '2020-01-20 09:05:04'),
(2, 2, 'hello', '2020-01-20 08:19:53', '2020-01-20 08:23:17'),
(3, 10, '感謝你的留言', '2020-01-20 09:32:31', '2020-01-20 09:32:31');

-- --------------------------------------------------------

--
-- 資料表結構 `returndetail`
--

CREATE TABLE IF NOT EXISTS `returndetail` (
  `returnId` int(11) NOT NULL COMMENT '退貨編號',
  `pId` varchar(20) NOT NULL COMMENT '產品ID',
  `count` varchar(20) NOT NULL COMMENT '退貨數量',
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 資料表新增資料前，先清除舊資料 `returndetail`
--

TRUNCATE TABLE `returndetail`;
--
-- 傾印資料表的資料 `returndetail`
--

INSERT INTO `returndetail` (`returnId`, `pId`, `count`, `created_at`, `updated_at`) VALUES
(1, 'p005', '1', '2020-02-16 10:59:39', '2020-02-16 10:59:39'),
(2, 'p002', '1', '2020-02-16 11:03:25', '2020-02-16 11:03:25'),
(3, 'p006', '2', '2020-02-16 11:05:14', '2020-02-16 11:05:14'),
(7, 'p008', '1', '2020-02-16 13:38:14', '2020-02-16 13:38:14'),
(8, 'p003', '1', '2020-02-16 13:38:39', '2020-02-16 13:38:39'),
(9, 'p008', '1', '2020-02-16 13:38:46', '2020-02-16 13:38:46');

-- --------------------------------------------------------

--
-- 資料表結構 `returnlist`
--

CREATE TABLE IF NOT EXISTS `returnlist` (
  `returnId` int(11) NOT NULL AUTO_INCREMENT COMMENT '退貨編號',
  `orderId` varchar(20) NOT NULL COMMENT '訂單編號',
  `returnStatus` varchar(20) NOT NULL COMMENT '退貨狀態',
  `returnPay` varchar(20) NOT NULL COMMENT '退款金額',
  `buyerName` varchar(20) NOT NULL COMMENT '購買人姓名',
  `buyerPhone` varchar(10) NOT NULL COMMENT '購買人電話',
  `buyerAdress` varchar(30) NOT NULL COMMENT '購買人地址',
  `returnReason` varchar(150) NOT NULL COMMENT '退貨原因',
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`returnId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

--
-- 資料表新增資料前，先清除舊資料 `returnlist`
--

TRUNCATE TABLE `returnlist`;
--
-- 傾印資料表的資料 `returnlist`
--

INSERT INTO `returnlist` (`returnId`, `orderId`, `returnStatus`, `returnPay`, `buyerName`, `buyerPhone`, `buyerAdress`, `returnReason`, `created_at`, `updated_at`) VALUES
(1, '5', '退貨完成', '50', 'Bill', '0123456789', '台北市大安區復興南路一段390號2號2樓', '134', '2020-02-16 10:59:39', '2020-02-16 10:59:39'),
(2, '4', '退貨完成', '20', 'Bill', '0123456789', '台北市大安區復興南路一段390號2號2樓', '', '2020-02-16 11:03:25', '2020-02-16 11:03:25'),
(3, '3', '退貨完成', '120', 'Bill', '0123456789', '台北市大安區復興南路一段390號2號2樓', '', '2020-02-16 11:05:14', '2020-02-16 11:05:14'),
(5, '5', '退貨處理中', '0', 'Bill', '0123456789', '台北市大安區復興南路一段390號2號2樓', '456', '2020-02-16 13:31:38', '2020-02-16 13:31:38'),
(6, '5', '退貨處理中', '0', 'Bill', '0123456789', '台北市大安區復興南路一段390號2號2樓', 'tyty', '2020-02-16 13:31:44', '2020-02-16 13:31:44'),
(7, '6', '退貨處理中', '80', 'Bill', '0123456789', '台北市大安區復興南路一段390號2號2樓', '123', '2020-02-16 13:38:14', '2020-02-16 13:38:14'),
(8, '6', '退貨處理中', '30', 'Bill', '0123456789', '台北市大安區復興南路一段390號2號2樓', '123', '2020-02-16 13:38:39', '2020-02-16 13:38:39'),
(9, '1', '退貨處理中', '80', 'Bill', '0123456789', '台北市大安區復興南路一段390號2號2樓', '', '2020-02-16 13:38:46', '2020-02-16 13:38:46');

-- --------------------------------------------------------

--
-- 資料表結構 `shopcart`
--

CREATE TABLE IF NOT EXISTS `shopcart` (
  `csId` varchar(20) NOT NULL COMMENT '會員ID',
  `pId` varchar(20) NOT NULL COMMENT '產品ID',
  `count` int(20) DEFAULT NULL COMMENT '產品數量',
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_time` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 資料表新增資料前，先清除舊資料 `shopcart`
--

TRUNCATE TABLE `shopcart`;
--
-- 傾印資料表的資料 `shopcart`
--

INSERT INTO `shopcart` (`csId`, `pId`, `count`, `created_at`, `updated_time`) VALUES
('CS001', 'p003', 1, '2020-02-04 15:40:42', '2020-02-04 15:40:42'),
('CS001', 'p008', 3, '2020-02-04 15:40:46', '2020-02-06 09:09:38'),
('CS005', 'p006', 1, '2020-02-05 18:45:34', '2020-02-05 18:45:34'),
('CS005', 'p005', 3, '2020-02-05 18:53:57', '2020-02-05 18:53:59'),
('CS005', 'p001', 4, '2020-02-05 19:03:23', '2020-02-05 19:14:07'),
('CS001', 'p001', 4, '2020-02-06 09:26:52', '2020-02-06 09:27:01'),
('CS001', 'p005', 1, '2020-02-06 09:27:03', '2020-02-06 09:27:03'),
('', 'p003', 2, '2020-02-07 13:19:11', '2020-02-07 17:08:04'),
('', 'p001', 3, '2020-02-07 13:19:14', '2020-02-07 17:09:59'),
('', 'p002', 1, '2020-02-07 17:06:53', '2020-02-07 17:06:53'),
('', 'p006', 2, '2020-02-07 17:06:54', '2020-02-07 17:08:05'),
('', 'p007', 1, '2020-02-07 17:09:07', '2020-02-07 17:09:07'),
('', '', 1, '2020-02-07 17:10:34', '2020-02-07 17:10:34'),
('CS004', 'p005', 1, '2020-02-07 17:31:56', '2020-02-07 17:31:56'),
('CS004', 'p007', 1, '2020-02-07 17:31:58', '2020-02-07 17:31:58');

-- --------------------------------------------------------

--
-- 資料表結構 `students`
--

CREATE TABLE IF NOT EXISTS `students` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '流水號',
  `studentId` varchar(9) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '學號',
  `studentName` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '學生姓名',
  `studentGender` varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '學生性別',
  `studentBirthday` date NOT NULL COMMENT '學生生日',
  `studentPhoneNumber` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '學生手機號碼',
  `studentDescription` text COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '個人描述',
  `studentImg` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '照片檔案名稱',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '新增時間',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='學生資料表';

--
-- 資料表新增資料前，先清除舊資料 `students`
--

TRUNCATE TABLE `students`;
--
-- 傾印資料表的資料 `students`
--

INSERT INTO `students` (`id`, `studentId`, `studentName`, `studentGender`, `studentBirthday`, `studentPhoneNumber`, `studentDescription`, `studentImg`, `created_at`, `updated_at`) VALUES
(2, 'S001', '陳同學', '女', '1995-02-21', '0911111111', '你好，我是陳同學…\r\n請多指教…', NULL, '2019-12-06 00:37:09', '2019-12-10 18:52:53'),
(3, 'S002', '王同學', '男', '1996-03-22', '0922222222', '你好，我是王同學…\r\n請多指教…', NULL, '2019-12-08 21:33:36', '2019-12-10 18:52:55'),
(7, 'S003', '江同學', '女', '2000-07-25', '0966666666', '你好，我是江同學…\r\n請多指教…', NULL, '2019-12-08 22:02:24', '2019-12-10 18:52:58'),
(8, 'S004', '周同學', '男', '2001-08-26', '0977777777', '你好，我是周同學…\r\n請多指教…', NULL, '2019-12-08 22:02:57', '2019-12-10 18:53:01'),
(9, 'S005', '劉同學', '男', '2002-09-27', '0988888888', '你好，我是劉同學…\r\n請多指教…', NULL, '2019-12-08 22:03:48', '2019-12-10 18:53:03'),
(18, 'S006', '張同學', '女', '1995-07-13', '0987666555', '你好，我是張同學…\r\n請多指教…', NULL, '2019-12-10 18:41:50', '2019-12-10 18:53:04');

-- --------------------------------------------------------

--
-- 資料表結構 `table 9`
--

CREATE TABLE IF NOT EXISTS `table 9` (
  `categoryId` int(20) NOT NULL,
  `categoryName` varchar(20) NOT NULL,
  `categoryParentId` int(20) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表新增資料前，先清除舊資料 `table 9`
--

TRUNCATE TABLE `table 9`;
--
-- 傾印資料表的資料 `table 9`
--

INSERT INTO `table 9` (`categoryId`, `categoryName`, `categoryParentId`, `created_at`, `updated_at`) VALUES
(1, '全部', 0, '2019-12-30 11:42:35', '2019-12-30 11:42:35'),
(2, '相機/攝影機', 1, '2019-12-30 11:43:57', '2019-12-30 11:43:57'),
(3, 'rest', 0, '2020-01-09 10:13:43', '2020-01-09 10:13:43');

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

INSERT INTO `user_comment` (`commentId`, `productId`, `userId`, `userName`, `rank`, `commentText`, `img`, `created_at`, `updated_at`) VALUES
(1, 'pt001', 1, 'yaling999', 5, '很輕，錶帶觸感也不錯', '', '2020-01-20 02:27:14', '2020-01-20 02:30:45'),
(2, 'pt001', 2, 'rick06', 4, 'CP還蠻高的', 'https://cf.shopee.tw/file/48900a5ed610d3c77feb16e280497d6c', '2020-01-20 02:27:18', '2020-01-20 02:30:54'),
(3, 'pt001', 3, 'jolin719', 5, '包裝很精美東西帶齊來很好看⋯⋯⋯👍👍👍', 'https://cf.shopee.tw/file/6e66205dcc029faf33fb49a87b6af4fb', '2020-01-20 02:31:58', '2020-01-20 02:31:58'),
(4, 'pt001', 4, 'roman1', 5, '很輕  功能攜有小米功能 還可以遙控手機拍照', 'https://cf.shopee.tw/file/9f478dcadf42f7b6eb01433f933cbd65', '2020-01-20 02:32:00', '2020-01-20 02:33:07'),
(5, 'pt001', 5, 'alber7', 3, '跟影片有落差', '', '2020-01-20 04:05:46', '2020-01-20 04:05:46'),
(6, 'pt002', 6, 'kittie', 5, '需要先將手表連接WiFi,並在手表上操作升級，要重複升級約3-4次，直到無軟件可升級，才能綁定garmin pay', 'https://cf.shopee.tw/file/7a4501d190d87f8519bf05b0e1549c6a', '2020-01-20 04:56:07', '2020-01-20 04:56:07'),
(7, 'pt002', 7, 'nitos', 5, '老闆太優惹，幫買家設想周到，詢問回答都很詳細，出貨速度也很快！大推！', 'https://cf.shopee.tw/file/d8ddc454b35991f9e89693b95a4284a6', '2020-01-20 04:56:49', '2020-01-20 04:56:49'),
(8, 'pt002', 8, 'arben', 5, '謝謝老闆很有耐心的幫忙我挑選很漂亮，很喜歡喔！', '', '2020-01-20 04:57:44', '2020-01-20 04:57:44'),
(9, 'pt002', 9, 'elfin008', 5, '錶面不會太大，適合低調的女生戴', '', '2020-01-20 04:58:19', '2020-01-20 04:58:19'),
(10, 'pt003', 10, 'yachi55', 5, '出貨速度快，有問題也可以儘快回覆。\r\n會想要再回購。', 'https://cf.shopee.tw/file/a0b8d964d9ba507de5683ffdd25656c9', '2020-01-20 08:28:04', '2020-01-20 08:28:04'),
(11, 'pt003', 11, 'nio5019', 5, '很快就收到了，目前使用上沒太多問題。只有garmin本身錶面軟體有時候會卡然後重開機，就看新韌體是否能解決了', 'https://cf.shopee.tw/file/157851e0d0f771d0bbe02fd058018a38', '2020-01-20 08:28:59', '2020-01-20 08:28:59'),
(12, 'pt003', 12, 'tim067', 4, '操作起來不是很順、有什麼方法較簡單及快速方式可以交我們ㄧ下嗎？', '', '2020-01-20 08:30:01', '2020-01-20 08:30:01'),
(13, 'pt003', 13, 'Imp01', 5, '較其他賣場便宜，但品質無異，出貨快、回應快', 'https://cf.shopee.tw/file/258915768b1f5820e25404df1693a7f4', '2020-01-20 08:30:44', '2020-01-20 08:30:44');

-- --------------------------------------------------------

--
-- 資料表結構 `vendorAdmins`
--

CREATE TABLE IF NOT EXISTS `vendorAdmins` (
  `vaId` int(10) NOT NULL AUTO_INCREMENT,
  `vId` int(10) DEFAULT NULL COMMENT '廠商',
  `vaRoleId` int(10) NOT NULL,
  `vaFName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '名字',
  `vaLName` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '姓氏',
  `vaEmail` varchar(254) COLLATE utf8mb4_unicode_ci NOT NULL,
  `vaPassword` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `vaActive` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vaVerify` varchar(25) COLLATE utf8mb4_unicode_ci DEFAULT current_timestamp() COMMENT '驗證',
  `vaHash` varchar(32) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vaLogoutTime` datetime DEFAULT NULL,
  `vaLoginTime` datetime DEFAULT NULL,
  `vaNotes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`vaId`)
) ENGINE=InnoDB AUTO_INCREMENT=155 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 資料表新增資料前，先清除舊資料 `vendorAdmins`
--

TRUNCATE TABLE `vendorAdmins`;
--
-- 傾印資料表的資料 `vendorAdmins`
--

INSERT INTO `vendorAdmins` (`vaId`, `vId`, `vaRoleId`, `vaFName`, `vaLName`, `vaEmail`, `vaPassword`, `vaActive`, `vaVerify`, `vaHash`, `vaLogoutTime`, `vaLoginTime`, `vaNotes`, `created_at`, `updated_at`) VALUES
(150, 52, 1, 'VICKY', NULL, 'vickysun2@hotmail.com', 'e79cab55eab4c0a1a63610829a51fd51d5cfb294', 'active', 'verified', 'd64a340bcb633f536d56e51874281454', '2020-01-22 07:11:39', '2020-01-22 07:55:57', NULL, '2020-01-21 15:52:22', '2020-01-21 15:52:22'),
(151, 52, 3, 'fall', 'night', 'nightfallvs0923@gmail.com', 'c52888225c6929961bb5fdd4c51fe46c239d9e11', 'active', 'verified', '16c222aa19898e5058938167c8ab6c57', '2020-01-22 06:50:59', '2020-01-22 06:50:11', 'okey dokey', '2020-01-21 16:06:23', '2020-01-21 16:06:23'),
(152, 52, 2, 'radu', 'rider', 'radu000rider@gmail.com', 'bc7cafbd1f9bcb7a3065a603b98d5c45e60c67d9', 'active', 'verified', 'dd8eb9f23fbd362da0e3f4e70b878c16', '2020-01-22 00:43:22', '2020-01-22 00:27:49', '', '2020-01-21 16:11:18', '2020-01-21 16:11:18'),
(153, 53, 1, 'NIGHT', NULL, 'nightfallvs0923@gmail.com', '1be2a44cb53dde903be8466c08dee9067da8ede3', 'active', 'verified', 'f1c1592588411002af340cbaedd6fc33', '2020-01-22 07:11:01', '2020-01-22 07:11:47', NULL, '2020-01-21 17:08:33', '2020-01-21 17:08:33'),
(154, 54, 1, '是在哈囉', NULL, 'onpica17@gmail.com', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', 'active', '2020-02-16 04:37:00', 'fb7b9ffa5462084c5f4e7e85a093e6d7', NULL, '2020-02-16 04:37:00', NULL, '2020-02-16 04:37:00', '2020-02-16 04:37:00');

-- --------------------------------------------------------

--
-- 資料表結構 `vendorPermissions`
--

CREATE TABLE IF NOT EXISTS `vendorPermissions` (
  `vendorPrmId` varchar(6) COLLATE utf8mb4_unicode_ci NOT NULL,
  `vendorPrmName` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`vendorPrmId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 資料表新增資料前，先清除舊資料 `vendorPermissions`
--

TRUNCATE TABLE `vendorPermissions`;
--
-- 傾印資料表的資料 `vendorPermissions`
--

INSERT INTO `vendorPermissions` (`vendorPrmId`, `vendorPrmName`) VALUES
('prmV00', 'admin'),
('prmV01', 'products'),
('prmV02', 'charts'),
('prmV03', 'marketing'),
('prmV04', 'orders');

-- --------------------------------------------------------

--
-- 資料表結構 `vendorResetPass`
--

CREATE TABLE IF NOT EXISTS `vendorResetPass` (
  `vaEmail` varchar(254) COLLATE utf8mb4_unicode_ci NOT NULL,
  `vaToken` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `vaHash` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `vaExpireDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 資料表新增資料前，先清除舊資料 `vendorResetPass`
--

TRUNCATE TABLE `vendorResetPass`;
-- --------------------------------------------------------

--
-- 資料表結構 `vendorRoles`
--

CREATE TABLE IF NOT EXISTS `vendorRoles` (
  `vaRoleId` int(10) NOT NULL AUTO_INCREMENT,
  `vaRoleName` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`vaRoleId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 資料表新增資料前，先清除舊資料 `vendorRoles`
--

TRUNCATE TABLE `vendorRoles`;
--
-- 傾印資料表的資料 `vendorRoles`
--

INSERT INTO `vendorRoles` (`vaRoleId`, `vaRoleName`) VALUES
(1, 'Owner'),
(2, 'Manager'),
(3, 'Staff');

-- --------------------------------------------------------

--
-- 資料表結構 `vendors`
--

CREATE TABLE IF NOT EXISTS `vendors` (
  `vId` int(10) NOT NULL AUTO_INCREMENT,
  `vName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `vEmail` varchar(254) COLLATE utf8mb4_unicode_ci NOT NULL,
  `vInfo` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vImg` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vActive` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vVerify` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT current_timestamp() COMMENT '驗證',
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`vId`),
  UNIQUE KEY `vEmail` (`vEmail`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 資料表新增資料前，先清除舊資料 `vendors`
--

TRUNCATE TABLE `vendors`;
--
-- 傾印資料表的資料 `vendors`
--

INSERT INTO `vendors` (`vId`, `vName`, `vEmail`, `vInfo`, `vImg`, `vActive`, `vVerify`, `created_at`, `updated_at`) VALUES
(52, 'VICKY', 'vickysun2@hotmail.com', 'test img', '20200122060317.jpg', 'active', 'verified', '2020-01-21 15:52:22', '2020-01-21 15:52:22'),
(53, 'NIGHT', 'nightfallvs0923@gmail.com', '', NULL, 'active', 'verified', '2020-01-21 17:08:33', '2020-01-21 17:08:33'),
(54, '是在哈囉', 'onpica17@gmail.com', '', NULL, 'active', '2020-02-16 04:37:00', '2020-02-16 04:37:00', '2020-02-16 04:37:00');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
