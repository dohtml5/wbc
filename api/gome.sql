-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2016 年 06 月 21 日 06:55
-- 服务器版本: 5.6.12-log
-- PHP 版本: 5.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `test`
--

-- --------------------------------------------------------

--
-- 表的结构 `gome`
--

CREATE TABLE IF NOT EXISTS `gome` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `price` float NOT NULL,
  `labels` varchar(200) NOT NULL,
  `comments` int(11) NOT NULL,
  `coupons` varchar(200) NOT NULL,
  `is_recommend` int(11) NOT NULL,
  `img` varchar(50) NOT NULL,
  `sales` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- 转存表中的数据 `gome`
--

INSERT INTO `gome` (`id`, `title`, `price`, `labels`, `comments`, `coupons`, `is_recommend`, `img`, `sales`) VALUES
(2, '【秒杀版】奇酷（QiKU）青春版全网通 流光金 移动联通电信4G手机 双卡双待', 799, '掌上专享', 290, '满1000减10元', 1, '1466491622.7068.png', 800),
(3, '荣耀7 (PLK-TL01H) 3GB+32GB内存版 晨曦金 移动4G手机 双卡双待双通', 1599, '', 390, '已优惠300元', 0, '1466491763.7418.png', 699),
(4, '乐视（Le）乐Max2（X820) 64G金色 移动联通电信4G 双卡双待', 2499, '满额返券', 655, '优惠500元', 1, '1466491835.3721.png', 678),
(5, '联想（Lenovo）拯救者 ISK15.6英寸游戏本（i5-6300HQ 8G 1T HDD GTX960M 2G独显 FHD IPS屏 ）黑', 5299, '手机专享价', 5999, '支持以旧换新', 0, '1466491940.2704.png', 388);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
