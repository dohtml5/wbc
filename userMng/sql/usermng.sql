-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2016 年 05 月 07 日 03:41
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
-- 表的结构 `usermng`
--

CREATE TABLE IF NOT EXISTS `usermng` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `age` int(5) DEFAULT NULL,
  `gender` varchar(5) DEFAULT NULL,
  `edu` varchar(20) DEFAULT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `hobbies` varchar(200) DEFAULT NULL,
  `user_img` varchar(200) DEFAULT NULL,
  `regDate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13 ;

--
-- 转存表中的数据 `usermng`
--

INSERT INTO `usermng` (`id`, `name`, `age`, `gender`, `edu`, `mobile`, `address`, `hobbies`, `regDate`) VALUES
(1, 'aaa', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 'bbb', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, '张三', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, '例子', 77, NULL, NULL, NULL, NULL, NULL, NULL),
(5, '张博', 22, '男', '2', '150000000', '北京市海淀', '打游戏', '2016-05-07 11:34:02'),
(6, '张博', 22, '男', '2', '150000000', '北京市海淀', '打游戏', '2016-05-07 11:35:00'),
(7, '张博', 22, '男', '2', '150000000', '北京市海淀', '打游戏', '2016-05-07 11:36:00'),
(8, '吞吞吐吐', 0, NULL, '0', '', '', NULL, '2016-05-07 11:37:25'),
(9, '似的发射点', 12, '男', '2', '12312', '123123', '看电影', '2016-05-07 11:37:43'),
(10, '任溶溶', 0, NULL, '0', '', '', NULL, '2016-05-07 11:38:45'),
(11, '让范德萨', 0, NULL, '0', '', '', NULL, '2016-05-07 11:39:03'),
(12, '345344', 234, '男', '2', '234', '234', '篮球', '2016-05-07 11:39:13');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
