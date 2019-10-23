#
# TABLE STRUCTURE FOR: blood_donner
#

DROP TABLE IF EXISTS `blood_donner`;

CREATE TABLE `blood_donner` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `gender` varchar(20) NOT NULL,
  `blood_group` int(11) NOT NULL,
  `address` text NOT NULL,
  `image` varchar(200) NOT NULL,
  `thumb` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

INSERT INTO `blood_donner` (`id`, `name`, `phone`, `email`, `password`, `gender`, `blood_group`, `address`, `image`, `thumb`) VALUES (1, 'Nazmul Hossain', '01919821479', 'nm@gmail.com', '202cb962ac59075b964b07152d234b70', 'Male', 1, 'Dhaka,Bangladesh', 'uploads/b619d0db33e43cac995d10b1b1b786db.jpg', 'uploads/thumb/b619d0db33e43cac995d10b1b1b786db.jpg');
INSERT INTO `blood_donner` (`id`, `name`, `phone`, `email`, `password`, `gender`, `blood_group`, `address`, `image`, `thumb`) VALUES (2, 'Nazmul', '01919821478', '', '', 'Male', 1, 'Dhaka,Bangladesh', '', '');
INSERT INTO `blood_donner` (`id`, `name`, `phone`, `email`, `password`, `gender`, `blood_group`, `address`, `image`, `thumb`) VALUES (3, 'demo', '0145454145', '', '', 'Male', 1, 'Dhaka', '', '');


#
# TABLE STRUCTURE FOR: blood_group
#

DROP TABLE IF EXISTS `blood_group`;

CREATE TABLE `blood_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

INSERT INTO `blood_group` (`id`, `name`) VALUES (1, 'O+');
INSERT INTO `blood_group` (`id`, `name`) VALUES (2, 'O-');
INSERT INTO `blood_group` (`id`, `name`) VALUES (3, 'A+');
INSERT INTO `blood_group` (`id`, `name`) VALUES (4, 'A-');
INSERT INTO `blood_group` (`id`, `name`) VALUES (5, 'B+');
INSERT INTO `blood_group` (`id`, `name`) VALUES (6, 'B-');
INSERT INTO `blood_group` (`id`, `name`) VALUES (7, 'AB+');
INSERT INTO `blood_group` (`id`, `name`) VALUES (8, 'AB-');


#
# TABLE STRUCTURE FOR: setting
#

DROP TABLE IF EXISTS `setting`;

CREATE TABLE `setting` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `approve_option` int(11) NOT NULL,
  `registration_option` tinyint(11) NOT NULL DEFAULT '1',
  `email` varchar(255) NOT NULL,
  `site_name` varchar(250) CHARACTER SET latin1 NOT NULL,
  `post_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

INSERT INTO `setting` (`id`, `approve_option`, `registration_option`, `email`, `site_name`, `post_time`) VALUES (1, 0, 1, 'admin@gmail.com', 'Blood Bank', '2019-10-10 10:44:16');


#
# TABLE STRUCTURE FOR: users
#

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `country` int(11) NOT NULL,
  `password` varchar(255) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `address` text NOT NULL,
  `designation` varchar(250) NOT NULL,
  `website` varchar(255) NOT NULL,
  `user_type` int(11) NOT NULL,
  `is_active` int(11) NOT NULL,
  `messege` text CHARACTER SET utf8 NOT NULL,
  `login_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `post_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

INSERT INTO `users` (`id`, `username`, `email`, `country`, `password`, `gender`, `address`, `designation`, `website`, `user_type`, `is_active`, `messege`, `login_time`, `post_time`) VALUES (1, 'Admin', 'admin@gmail.com', 13, 'e10adc3949ba59abbe56e057f20f883e', 'Male', '', 'Web Developer', '', 1, 1, '', '2019-10-23 17:58:35', '2018-08-07 12:49:55');
INSERT INTO `users` (`id`, `username`, `email`, `country`, `password`, `gender`, `address`, `designation`, `website`, `user_type`, `is_active`, `messege`, `login_time`, `post_time`) VALUES (2, 'user', 'user@gmail.com', 18, 'e10adc3949ba59abbe56e057f20f883e', 'Male', '', '', '', 0, 1, '', '2019-03-14 12:02:42', '2018-08-07 12:57:13');
INSERT INTO `users` (`id`, `username`, `email`, `country`, `password`, `gender`, `address`, `designation`, `website`, `user_type`, `is_active`, `messege`, `login_time`, `post_time`) VALUES (3, 'Demo1', 'demo1@gmail.com', 2, 'e10adc3949ba59abbe56e057f20f883e', 'Male', '', '', '', 0, 0, '', '2018-08-14 15:30:37', '2018-08-14 15:30:37');


