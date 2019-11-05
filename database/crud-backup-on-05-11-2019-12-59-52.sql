#
# TABLE STRUCTURE FOR: blood_donors
#

DROP TABLE IF EXISTS `blood_donors`;

CREATE TABLE `blood_donors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` varchar(50) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `username` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `gender` varchar(20) NOT NULL,
  `blood_group` int(11) NOT NULL,
  `address` text NOT NULL,
  `image` varchar(200) NOT NULL,
  `thumb` varchar(200) NOT NULL,
  `designation` varchar(200) NOT NULL,
  `about_me` text NOT NULL,
  `dob` date NOT NULL,
  `facebook` varchar(200) NOT NULL,
  `twitter` varchar(200) NOT NULL,
  `instagram` varchar(200) NOT NULL,
  `linkedin` varchar(200) NOT NULL,
  `last_login` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

INSERT INTO `blood_donors` (`id`, `userId`, `first_name`, `last_name`, `username`, `phone`, `email`, `password`, `gender`, `blood_group`, `address`, `image`, `thumb`, `designation`, `about_me`, `dob`, `facebook`, `twitter`, `instagram`, `linkedin`, `last_login`) VALUES (1, 'c4ca4238a0b923820dcc509a6f75849b', 'Nazmul', 'Hossain', 'Nazmul', '01919821479', 'nm@gmail.com', '202cb962ac59075b964b07152d234b70', 'Male', 1, 'Dhaka, Bangladesh', 'uploads/fa5122072d87ea94b0f0726addc602f0.jpg', 'uploads/thumb/fa5122072d87ea94b0f0726addc602f0.jpg', 'Web Developer', 'Hi I\'m Md Nazmul Hossain', '1993-03-27', 'nazmul.nm', '', '', '', '2019-11-05 12:35:49');
INSERT INTO `blood_donors` (`id`, `userId`, `first_name`, `last_name`, `username`, `phone`, `email`, `password`, `gender`, `blood_group`, `address`, `image`, `thumb`, `designation`, `about_me`, `dob`, `facebook`, `twitter`, `instagram`, `linkedin`, `last_login`) VALUES (2, 'c81e728d9d4c2f636f067f89cc14862c', 'Abdullah', 'AL Mamun', 'Mamun', '01949367669', 'mamun@gmail.com', '202cb962ac59075b964b07152d234b70', 'Male', 1, 'Gazipur', 'uploads/06c30f09351b546f0703ebdb9331b199.jpg', 'uploads/thumb/06c30f09351b546f0703ebdb9331b199.jpg', '', '', '0000-00-00', '', '', '', '', '2019-11-05 12:37:40');
INSERT INTO `blood_donors` (`id`, `userId`, `first_name`, `last_name`, `username`, `phone`, `email`, `password`, `gender`, `blood_group`, `address`, `image`, `thumb`, `designation`, `about_me`, `dob`, `facebook`, `twitter`, `instagram`, `linkedin`, `last_login`) VALUES (3, 'eccbc87e4b5ce2fe28308fd9f2a7baf3', 'Nazmul ', 'Hossain', '', '01919821471', '', '202cb962ac59075b964b07152d234b70', 'Male', 1, 'afds', 'uploads/06c30f09351b546f0703ebdb9331b199.jpg', 'uploads/thumb/06c30f09351b546f0703ebdb9331b199.jpg', '', '', '0000-00-00', '', '', '', '', '2019-11-05 12:34:36');
INSERT INTO `blood_donors` (`id`, `userId`, `first_name`, `last_name`, `username`, `phone`, `email`, `password`, `gender`, `blood_group`, `address`, `image`, `thumb`, `designation`, `about_me`, `dob`, `facebook`, `twitter`, `instagram`, `linkedin`, `last_login`) VALUES (6, '1679091c5a880faf6fb5e6087eb1b2dc', 'Mojaffor', 'Hossain', 'mojaffor', '01937179934', '', '202cb962ac59075b964b07152d234b70', 'Male', 3, 'Rajibpur', 'uploads/8fa6a2d17e51150b7c4b390800c5001d.jpg', 'uploads/thumb/8fa6a2d17e51150b7c4b390800c5001d.jpg', '', '', '0000-00-00', '', '', '', '', '2019-11-05 12:36:12');
INSERT INTO `blood_donors` (`id`, `userId`, `first_name`, `last_name`, `username`, `phone`, `email`, `password`, `gender`, `blood_group`, `address`, `image`, `thumb`, `designation`, `about_me`, `dob`, `facebook`, `twitter`, `instagram`, `linkedin`, `last_login`) VALUES (7, '8f14e45fceea167a5a36dedd4bea2543', 'Milon', 'Miah', 'Milon', '01937179935', '', '202cb962ac59075b964b07152d234b70', 'Male', 5, 'Gazipur', 'uploads/246725951b82ce1cea5c5ca20f49ef52.png', 'uploads/thumb/246725951b82ce1cea5c5ca20f49ef52.png', 'Textile', '', '1993-03-27', '', '', '', '', '2019-11-05 12:36:52');
INSERT INTO `blood_donors` (`id`, `userId`, `first_name`, `last_name`, `username`, `phone`, `email`, `password`, `gender`, `blood_group`, `address`, `image`, `thumb`, `designation`, `about_me`, `dob`, `facebook`, `twitter`, `instagram`, `linkedin`, `last_login`) VALUES (8, 'c9f0f895fb98ab9159f51fd0297e236d', 'Kamrul', 'Hasan', 'Kamrul', '01745419094', 'kamrul@gmail.com', '202cb962ac59075b964b07152d234b70', 'Male', 1, 'Dhaka', '', '', '', '', '0000-00-00', '', '', '', '', '2019-11-05 12:37:17');
INSERT INTO `blood_donors` (`id`, `userId`, `first_name`, `last_name`, `username`, `phone`, `email`, `password`, `gender`, `blood_group`, `address`, `image`, `thumb`, `designation`, `about_me`, `dob`, `facebook`, `twitter`, `instagram`, `linkedin`, `last_login`) VALUES (9, '', 'Jahidul', 'Isalm', '', '01937179936', '', '', 'Male', 1, 'Dhaka', '', '', '', '', '0000-00-00', '', '', '', '', '0000-00-00 00:00:00');


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
# TABLE STRUCTURE FOR: donate_date
#

DROP TABLE IF EXISTS `donate_date`;

CREATE TABLE `donate_date` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` varchar(50) NOT NULL,
  `donate_date` date NOT NULL,
  `location` varchar(200) NOT NULL,
  `date_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

INSERT INTO `donate_date` (`id`, `userId`, `donate_date`, `location`, `date_time`) VALUES (1, 'c4ca4238a0b923820dcc509a6f75849b', '2019-11-05', 'Dhaka', '0000-00-00 00:00:00');
INSERT INTO `donate_date` (`id`, `userId`, `donate_date`, `location`, `date_time`) VALUES (2, 'c4ca4238a0b923820dcc509a6f75849b', '2019-11-07', 'Dhaka', '0000-00-00 00:00:00');


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

INSERT INTO `users` (`id`, `username`, `email`, `country`, `password`, `gender`, `address`, `designation`, `website`, `user_type`, `is_active`, `messege`, `login_time`, `post_time`) VALUES (1, 'Admin', 'admin@gmail.com', 13, 'e10adc3949ba59abbe56e057f20f883e', 'Male', '', 'Web Developer', '', 1, 1, '', '2019-11-05 17:59:50', '2018-08-07 12:49:55');
INSERT INTO `users` (`id`, `username`, `email`, `country`, `password`, `gender`, `address`, `designation`, `website`, `user_type`, `is_active`, `messege`, `login_time`, `post_time`) VALUES (2, 'user', 'user@gmail.com', 18, 'e10adc3949ba59abbe56e057f20f883e', 'Male', '', '', '', 0, 1, '', '2019-03-14 12:02:42', '2018-08-07 12:57:13');
INSERT INTO `users` (`id`, `username`, `email`, `country`, `password`, `gender`, `address`, `designation`, `website`, `user_type`, `is_active`, `messege`, `login_time`, `post_time`) VALUES (3, 'Demo1', 'demo1@gmail.com', 2, 'e10adc3949ba59abbe56e057f20f883e', 'Male', '', '', '', 0, 0, '', '2018-08-14 15:30:37', '2018-08-14 15:30:37');


