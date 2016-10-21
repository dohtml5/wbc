-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-10-21 08:49:19
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- 表的结构 `reg_login`
--

CREATE TABLE IF NOT EXISTS `reg_login` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `gender` varchar(5) NOT NULL,
  `edu` varchar(10) NOT NULL,
  `desc` varchar(500) NOT NULL,
  `hobbies` varchar(50) NOT NULL,
  `pic` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `reg_login`
--

INSERT INTO `reg_login` (`id`, `username`, `password`, `email`, `gender`, `edu`, `desc`, `hobbies`, `pic`) VALUES
(1, 'wbc1', '123123', 'wbc1@wbc.com', '', '', '', '', ''),
(2, 'wbc2', 'qweqwe', 'wbc2@wbc.com', '', '', '', '', ''),
(3, 'wbc3', 'asdsa', 'wbc3@123.com', '', '', '', '', ''),
(4, 'wbc4', '123123', 'wbc4@dsf.com', '', '', '', '', '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
