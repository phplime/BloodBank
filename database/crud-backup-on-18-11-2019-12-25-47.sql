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
  `district` int(11) NOT NULL,
  `upazila` int(11) NOT NULL,
  `facebook` varchar(200) NOT NULL,
  `twitter` varchar(200) NOT NULL,
  `instagram` varchar(200) NOT NULL,
  `linkedin` varchar(200) NOT NULL,
  `last_login` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

INSERT INTO `blood_donors` (`id`, `userId`, `first_name`, `last_name`, `username`, `phone`, `email`, `password`, `gender`, `blood_group`, `address`, `image`, `thumb`, `designation`, `about_me`, `dob`, `district`, `upazila`, `facebook`, `twitter`, `instagram`, `linkedin`, `last_login`) VALUES (1, 'c4ca4238a0b923820dcc509a6f75849b', 'Nazmul', 'Hossain', 'Nazmul', '01919821479', 'nm@gmail.com', '202cb962ac59075b964b07152d234b70', 'Male', 1, 'Dhaka, Bangladesh', 'uploads/fa5122072d87ea94b0f0726addc602f0.jpg', 'uploads/thumb/fa5122072d87ea94b0f0726addc602f0.jpg', 'Web Developer', 'Hi I\'m Md Nazmul Hossain', '1993-03-27', 0, 0, 'nazmul.nm', '', '', '', '2019-11-16 12:56:16');
INSERT INTO `blood_donors` (`id`, `userId`, `first_name`, `last_name`, `username`, `phone`, `email`, `password`, `gender`, `blood_group`, `address`, `image`, `thumb`, `designation`, `about_me`, `dob`, `district`, `upazila`, `facebook`, `twitter`, `instagram`, `linkedin`, `last_login`) VALUES (2, 'c81e728d9d4c2f636f067f89cc14862c', 'Abdullah', 'AL Mamun', 'Mamun', '01949367669', 'mamun@gmail.com', '202cb962ac59075b964b07152d234b70', 'Male', 1, 'Gazipur', 'uploads/06c30f09351b546f0703ebdb9331b199.jpg', 'uploads/thumb/06c30f09351b546f0703ebdb9331b199.jpg', '', '', '0000-00-00', 0, 0, '', '', '', '', '2019-11-05 12:37:40');
INSERT INTO `blood_donors` (`id`, `userId`, `first_name`, `last_name`, `username`, `phone`, `email`, `password`, `gender`, `blood_group`, `address`, `image`, `thumb`, `designation`, `about_me`, `dob`, `district`, `upazila`, `facebook`, `twitter`, `instagram`, `linkedin`, `last_login`) VALUES (3, 'eccbc87e4b5ce2fe28308fd9f2a7baf3', 'Nazmul ', 'Hossain', '', '01919821471', '', '202cb962ac59075b964b07152d234b70', 'Male', 1, 'afds', 'uploads/06c30f09351b546f0703ebdb9331b199.jpg', 'uploads/thumb/06c30f09351b546f0703ebdb9331b199.jpg', '', '', '0000-00-00', 0, 0, '', '', '', '', '2019-11-05 12:34:36');
INSERT INTO `blood_donors` (`id`, `userId`, `first_name`, `last_name`, `username`, `phone`, `email`, `password`, `gender`, `blood_group`, `address`, `image`, `thumb`, `designation`, `about_me`, `dob`, `district`, `upazila`, `facebook`, `twitter`, `instagram`, `linkedin`, `last_login`) VALUES (6, '1679091c5a880faf6fb5e6087eb1b2dc', 'Mojaffor', 'Hossain', 'mojaffor', '01937179934', '', '202cb962ac59075b964b07152d234b70', 'Male', 3, 'Rajibpur', 'uploads/8fa6a2d17e51150b7c4b390800c5001d.jpg', 'uploads/thumb/8fa6a2d17e51150b7c4b390800c5001d.jpg', '', '', '0000-00-00', 0, 0, '', '', '', '', '2019-11-05 12:36:12');
INSERT INTO `blood_donors` (`id`, `userId`, `first_name`, `last_name`, `username`, `phone`, `email`, `password`, `gender`, `blood_group`, `address`, `image`, `thumb`, `designation`, `about_me`, `dob`, `district`, `upazila`, `facebook`, `twitter`, `instagram`, `linkedin`, `last_login`) VALUES (7, '8f14e45fceea167a5a36dedd4bea2543', 'Milon', 'Miah', 'Milon', '01937179935', '', '202cb962ac59075b964b07152d234b70', 'Male', 5, 'Gazipur', 'uploads/246725951b82ce1cea5c5ca20f49ef52.png', 'uploads/thumb/246725951b82ce1cea5c5ca20f49ef52.png', 'Textile', '', '1993-03-27', 0, 0, '', '', '', '', '2019-11-05 12:36:52');
INSERT INTO `blood_donors` (`id`, `userId`, `first_name`, `last_name`, `username`, `phone`, `email`, `password`, `gender`, `blood_group`, `address`, `image`, `thumb`, `designation`, `about_me`, `dob`, `district`, `upazila`, `facebook`, `twitter`, `instagram`, `linkedin`, `last_login`) VALUES (8, 'c9f0f895fb98ab9159f51fd0297e236d', 'Kamrul', 'Hasan', 'Kamrul', '01745419094', 'kamrul@gmail.com', '202cb962ac59075b964b07152d234b70', 'Male', 1, 'Dhaka', '', '', '', '', '0000-00-00', 0, 0, '', '', '', '', '2019-11-05 12:37:17');
INSERT INTO `blood_donors` (`id`, `userId`, `first_name`, `last_name`, `username`, `phone`, `email`, `password`, `gender`, `blood_group`, `address`, `image`, `thumb`, `designation`, `about_me`, `dob`, `district`, `upazila`, `facebook`, `twitter`, `instagram`, `linkedin`, `last_login`) VALUES (9, '', 'Jahidul', 'Isalm', '', '01937179936', '', '', 'Male', 1, 'Dhaka', '', '', '', '', '0000-00-00', 0, 0, '', '', '', '', '0000-00-00 00:00:00');
INSERT INTO `blood_donors` (`id`, `userId`, `first_name`, `last_name`, `username`, `phone`, `email`, `password`, `gender`, `blood_group`, `address`, `image`, `thumb`, `designation`, `about_me`, `dob`, `district`, `upazila`, `facebook`, `twitter`, `instagram`, `linkedin`, `last_login`) VALUES (10, 'd3d9446802a44259755d38e6d163e820', 'Nazmul ', 'Hossain', '', '01745419097', '', '', 'Male', 1, 'Dhaka', '', '', '', '', '0000-00-00', 0, 0, '', '', '', '', '0000-00-00 00:00:00');
INSERT INTO `blood_donors` (`id`, `userId`, `first_name`, `last_name`, `username`, `phone`, `email`, `password`, `gender`, `blood_group`, `address`, `image`, `thumb`, `designation`, `about_me`, `dob`, `district`, `upazila`, `facebook`, `twitter`, `instagram`, `linkedin`, `last_login`) VALUES (11, '6512bd43d9caa6e02c990b0a82652dca', 'Demo Test', 'Test', '', '01454784985', '', '', 'Male', 5, 'Dhaka', '', '', '', '', '0000-00-00', 0, 0, '', '', '', '', '0000-00-00 00:00:00');


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
# TABLE STRUCTURE FOR: district
#

DROP TABLE IF EXISTS `district`;

CREATE TABLE `district` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `district` varchar(50) CHARACTER SET utf8 NOT NULL,
  `division` int(5) NOT NULL,
  `en_name` varchar(255) NOT NULL,
  `bn_name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `lat` varchar(255) NOT NULL,
  `lon` varchar(255) NOT NULL,
  `website` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=latin1;

INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (1, 'ঢাকা', 3, 'Dhaka', 'ঢাকা', '23.7115253', '90.4111451', 'www.dhaka.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (2, 'ফরিদপুর', 3, 'Faridpur', 'ফরিদপুর', '23.6070822', '89.8429406', 'www.faridpur.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (3, 'গাজীপুর', 3, 'Gazipur', 'গাজীপুর', '24.0022858', '90.4264283', 'www.gazipur.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (4, 'গোপালগঞ্জ', 3, 'Gopalganj', 'গোপালগঞ্জ', '23.0050857', '89.8266059', 'www.gopalganj.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (5, 'জামালপুর', 8, 'Jamalpur', 'জামালপুর', '24.937533', '89.937775', 'www.jamalpur.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (6, 'কিশোরগঞ্জ', 3, 'Kishoreganj', 'কিশোরগঞ্জ', '24.444937', '90.776575', 'www.kishoreganj.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (7, 'মাদারীপুর', 3, 'Madaripur', 'মাদারীপুর', '23.164102', '90.1896805', 'www.madaripur.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (8, 'মানিকগঞ্জ', 3, 'Manikganj', 'মানিকগঞ্জ', '0', '0', 'www.manikganj.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (9, 'মুন্সিগঞ্জ', 3, 'Munshiganj', 'মুন্সিগঞ্জ', '0', '0', 'www.munshiganj.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (10, 'ময়মনসিং', 8, 'Mymensingh', 'ময়মনসিং', '0', '0', 'www.mymensingh.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (11, 'নারায়াণগঞ্জ', 3, 'Narayanganj', 'নারায়াণগঞ্জ', '23.63366', '90.496482', 'www.narayanganj.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (12, 'নরসিংদী', 3, 'Narsingdi', 'নরসিংদী', '23.932233', '90.71541', 'www.narsingdi.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (13, 'নেত্রকোনা', 8, 'Netrokona', 'নেত্রকোনা', '24.870955', '90.727887', 'www.netrokona.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (14, 'রাজবাড়ি', 3, 'Rajbari', 'রাজবাড়ি', '23.7574305', '89.6444665', 'www.rajbari.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (15, 'শরীয়তপুর', 3, 'Shariatpur', 'শরীয়তপুর', '0', '0', 'www.shariatpur.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (16, 'শেরপুর', 8, 'Sherpur', 'শেরপুর', '25.0204933', '90.0152966', 'www.sherpur.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (17, 'টাঙ্গাইল', 3, 'Tangail', 'টাঙ্গাইল', '0', '0', 'www.tangail.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (18, 'বগুড়া', 5, 'Bogra', 'বগুড়া', '24.8465228', '89.377755', 'www.bogra.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (19, 'জয়পুরহাট', 5, 'Joypurhat', 'জয়পুরহাট', '0', '0', 'www.joypurhat.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (20, 'নওগাঁ', 5, 'Naogaon', 'নওগাঁ', '0', '0', 'www.naogaon.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (21, 'নাটোর', 5, 'Natore', 'নাটোর', '24.420556', '89.000282', 'www.natore.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (22, 'নবাবগঞ্জ', 5, 'Nawabganj', 'নবাবগঞ্জ', '24.5965034', '88.2775122', 'www.chapainawabganj.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (23, 'পাবনা', 5, 'Pabna', 'পাবনা', '23.998524', '89.233645', 'www.pabna.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (24, 'রাজশাহী', 5, 'Rajshahi', 'রাজশাহী', '0', '0', 'www.rajshahi.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (25, 'সিরাজগঞ্জ', 5, 'Sirajgonj', 'সিরাজগঞ্জ', '24.4533978', '89.7006815', 'www.sirajganj.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (26, 'দিনাজপুর', 6, 'Dinajpur', 'দিনাজপুর', '25.6217061', '88.6354504', 'www.dinajpur.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (27, 'গাইবান্ধা', 6, 'Gaibandha', 'গাইবান্ধা', '25.328751', '89.528088', 'www.gaibandha.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (28, 'কুড়িগ্রাম', 6, 'Kurigram', 'কুড়িগ্রাম', '25.805445', '89.636174', 'www.kurigram.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (29, 'লালমনিরহাট', 6, 'Lalmonirhat', 'লালমনিরহাট', '0', '0', 'www.lalmonirhat.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (30, 'নীলফামারী', 6, 'Nilphamari', 'নীলফামারী', '25.931794', '88.856006', 'www.nilphamari.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (31, 'পঞ্চগড়', 6, 'Panchagarh', 'পঞ্চগড়', '26.3411', '88.5541606', 'www.panchagarh.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (32, 'রংপুর', 6, 'Rangpur', 'রংপুর', '25.7558096', '89.244462', 'www.rangpur.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (33, 'ঠাকুরগাঁও', 6, 'Thakurgaon', 'ঠাকুরগাঁও', '26.0336945', '88.4616834', 'www.thakurgaon.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (34, 'বরগুনা', 1, 'Barguna', 'বরগুনা', '0', '0', 'www.barguna.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (35, 'বরিশাল', 1, 'Barisal', 'বরিশাল', '0', '0', 'www.barisal.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (36, 'ভোলা', 1, 'Bhola', 'ভোলা', '22.685923', '90.648179', 'www.bhola.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (37, 'ঝালকাঠি', 1, 'Jhalokati', 'ঝালকাঠি', '0', '0', 'www.jhalakathi.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (38, 'পটুয়াখালী', 1, 'Patuakhali', 'পটুয়াখালী', '22.3596316', '90.3298712', 'www.patuakhali.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (39, 'পিরোজপুর', 1, 'Pirojpur', 'পিরোজপুর', '0', '0', 'www.pirojpur.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (40, 'বান্দরবান', 2, 'Bandarban', 'বান্দরবান', '22.1953275', '92.2183773', 'www.bandarban.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (41, 'ব্রাহ্মণবাড়িয়া', 2, 'Brahmanbaria', 'ব্রাহ্মণবাড়িয়া', '23.9570904', '91.1119286', 'www.brahmanbaria.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (42, 'চাঁদপুর', 2, 'Chandpur', 'চাঁদপুর', '23.2332585', '90.6712912', 'www.chandpur.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (43, 'চট্টগ্রাম', 2, 'Chittagong', 'চট্টগ্রাম', '22.335109', '91.834073', 'www.chittagong.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (44, 'কুমিল্লা', 2, 'Comilla', 'কুমিল্লা', '23.4682747', '91.1788135', 'www.comilla.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (45, 'কক্সবাজার', 2, 'Cox\'s Bazar', 'কক্সবাজার', '0', '0', 'www.coxsbazar.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (46, 'ফেনী', 2, 'Feni', 'ফেনী', '23.023231', '91.3840844', 'www.feni.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (47, 'খাগড়াছড়ি', 2, 'Khagrachari', 'খাগড়াছড়ি', '23.119285', '91.984663', 'www.khagrachhari.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (48, 'লক্ষ্মীপুর', 2, 'Lakshmipur', 'লক্ষ্মীপুর', '22.942477', '90.841184', 'www.lakshmipur.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (49, 'নোয়াখালী', 2, 'Noakhali', 'নোয়াখালী', '22.869563', '91.099398', 'www.noakhali.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (50, 'রাঙ্গামাটি', 2, 'Rangamati', 'রাঙ্গামাটি', '0', '0', 'www.rangamati.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (51, 'হবিগঞ্জ', 7, 'Habiganj', 'হবিগঞ্জ', '24.374945', '91.41553', 'www.habiganj.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (52, 'মৌলভীবাজার', 7, 'Maulvibazar', 'মৌলভীবাজার', '24.482934', '91.777417', 'www.moulvibazar.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (53, 'সুনামগঞ্জ', 7, 'Sunamganj', 'সুনামগঞ্জ', '25.0658042', '91.3950115', 'www.sunamganj.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (54, 'সিলেট', 7, 'Sylhet', 'সিলেট', '24.8897956', '91.8697894', 'www.sylhet.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (55, 'বাগেরহাট', 4, 'Bagerhat', 'বাগেরহাট', '22.651568', '89.785938', 'www.bagerhat.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (56, 'চুয়াডাঙ্গা', 4, 'Chuadanga', 'চুয়াডাঙ্গা', '23.6401961', '88.841841', 'www.chuadanga.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (57, 'যশোর', 4, 'Jessore', 'যশোর', '23.16643', '89.2081126', 'www.jessore.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (58, 'ঝিনাইদহ', 4, 'Jhenaidah', 'ঝিনাইদহ', '23.5448176', '89.1539213', 'www.jhenaidah.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (59, 'খুলনা', 4, 'Khulna', 'খুলনা', '22.815774', '89.568679', 'www.khulna.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (60, 'কুষ্টিয়া', 4, 'Kushtia', 'কুষ্টিয়া', '23.901258', '89.120482', 'www.kushtia.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (61, 'মাগুরা', 4, 'Magura', 'মাগুরা', '23.487337', '89.419956', 'www.magura.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (62, 'মেহেরপুর', 4, 'Meherpur', 'মেহেরপুর', '23.762213', '88.631821', 'www.meherpur.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (63, 'নড়াইল', 4, 'Narail', 'নড়াইল', '23.172534', '89.512672', 'www.narail.gov.bd');
INSERT INTO `district` (`id`, `district`, `division`, `en_name`, `bn_name`, `lat`, `lon`, `website`) VALUES (64, 'সাতক্ষীরা', 4, 'Satkhira', 'সাতক্ষীরা', '0', '0', 'www.satkhira.gov.bd');


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
# TABLE STRUCTURE FOR: upazilas
#

DROP TABLE IF EXISTS `upazilas`;

CREATE TABLE `upazilas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `district_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `bn_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=493 DEFAULT CHARSET=utf8;

INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (1, 34, 'Amtali Upazila', 'আমতলী');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (2, 34, 'Bamna Upazila', 'বামনা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (3, 34, 'Barguna Sadar Upazila', 'বরগুনা সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (4, 34, 'Betagi Upazila', 'বেতাগি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (5, 34, 'Patharghata Upazila', 'পাথরঘাটা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (6, 34, 'Taltali Upazila', 'তালতলী');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (7, 35, 'Muladi Upazila', 'মুলাদি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (8, 35, 'Babuganj Upazila', 'বাবুগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (9, 35, 'Agailjhara Upazila', 'আগাইলঝরা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (10, 35, 'Barisal Sadar Upazila', 'বরিশাল সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (11, 35, 'Bakerganj Upazila', 'বাকেরগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (12, 35, 'Banaripara Upazila', 'বানাড়িপারা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (13, 35, 'Gaurnadi Upazila', 'গৌরনদী');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (14, 35, 'Hizla Upazila', 'হিজলা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (15, 35, 'Mehendiganj Upazila', 'মেহেদিগঞ্জ ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (16, 35, 'Wazirpur Upazila', 'ওয়াজিরপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (17, 36, 'Bhola Sadar Upazila', 'ভোলা সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (18, 36, 'Burhanuddin Upazila', 'বুরহানউদ্দিন');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (19, 36, 'Char Fasson Upazila', 'চর ফ্যাশন');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (20, 36, 'Daulatkhan Upazila', 'দৌলতখান');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (21, 36, 'Lalmohan Upazila', 'লালমোহন');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (22, 36, 'Manpura Upazila', 'মনপুরা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (23, 36, 'Tazumuddin Upazila', 'তাজুমুদ্দিন');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (24, 37, 'Jhalokati Sadar Upazila', 'ঝালকাঠি সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (25, 37, 'Kathalia Upazila', 'কাঁঠালিয়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (26, 37, 'Nalchity Upazila', 'নালচিতি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (27, 37, 'Rajapur Upazila', 'রাজাপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (28, 38, 'Bauphal Upazila', 'বাউফল');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (29, 38, 'Dashmina Upazila', 'দশমিনা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (30, 38, 'Galachipa Upazila', 'গলাচিপা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (31, 38, 'Kalapara Upazila', 'কালাপারা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (32, 38, 'Mirzaganj Upazila', 'মির্জাগঞ্জ ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (33, 38, 'Patuakhali Sadar Upazila', 'পটুয়াখালী সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (34, 38, 'Dumki Upazila', 'ডুমকি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (35, 38, 'Rangabali Upazila', 'রাঙ্গাবালি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (36, 39, 'Bhandaria', 'ভ্যান্ডারিয়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (37, 39, 'Kaukhali', 'কাউখালি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (38, 39, 'Mathbaria', 'মাঠবাড়িয়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (39, 39, 'Nazirpur', 'নাজিরপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (40, 39, 'Nesarabad', 'নেসারাবাদ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (41, 39, 'Pirojpur Sadar', 'পিরোজপুর সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (42, 39, 'Zianagar', 'জিয়ানগর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (43, 40, 'Bandarban Sadar', 'বান্দরবন সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (44, 40, 'Thanchi', 'থানচি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (45, 40, 'Lama', 'লামা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (46, 40, 'Naikhongchhari', 'নাইখংছড়ি ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (47, 40, 'Ali kadam', 'আলী কদম');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (48, 40, 'Rowangchhari', 'রউয়াংছড়ি ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (49, 40, 'Ruma', 'রুমা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (50, 41, 'Brahmanbaria Sadar Upazila', 'ব্রাহ্মণবাড়িয়া সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (51, 41, 'Ashuganj Upazila', 'আশুগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (52, 41, 'Nasirnagar Upazila', 'নাসির নগর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (53, 41, 'Nabinagar Upazila', 'নবীনগর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (54, 41, 'Sarail Upazila', 'সরাইল');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (55, 41, 'Shahbazpur Town', 'শাহবাজপুর টাউন');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (56, 41, 'Kasba Upazila', 'কসবা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (57, 41, 'Akhaura Upazila', 'আখাউরা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (58, 41, 'Bancharampur Upazila', 'বাঞ্ছারামপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (59, 41, 'Bijoynagar Upazila', 'বিজয় নগর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (60, 42, 'Chandpur Sadar', 'চাঁদপুর সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (61, 42, 'Faridganj', 'ফরিদগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (62, 42, 'Haimchar', 'হাইমচর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (63, 42, 'Haziganj', 'হাজীগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (64, 42, 'Kachua', 'কচুয়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (65, 42, 'Matlab Uttar', 'মতলব উত্তর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (66, 42, 'Matlab Dakkhin', 'মতলব দক্ষিণ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (67, 42, 'Shahrasti', 'শাহরাস্তি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (68, 43, 'Anwara Upazila', 'আনোয়ারা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (69, 43, 'Banshkhali Upazila', 'বাশখালি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (70, 43, 'Boalkhali Upazila', 'বোয়ালখালি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (71, 43, 'Chandanaish Upazila', 'চন্দনাইশ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (72, 43, 'Fatikchhari Upazila', 'ফটিকছড়ি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (73, 43, 'Hathazari Upazila', 'হাঠহাজারী');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (74, 43, 'Lohagara Upazila', 'লোহাগারা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (75, 43, 'Mirsharai Upazila', 'মিরসরাই');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (76, 43, 'Patiya Upazila', 'পটিয়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (77, 43, 'Rangunia Upazila', 'রাঙ্গুনিয়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (78, 43, 'Raozan Upazila', 'রাউজান');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (79, 43, 'Sandwip Upazila', 'সন্দ্বীপ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (80, 43, 'Satkania Upazila', 'সাতকানিয়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (81, 43, 'Sitakunda Upazila', 'সীতাকুণ্ড');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (82, 44, 'Barura Upazila', 'বড়ুরা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (83, 44, 'Brahmanpara Upazila', 'ব্রাহ্মণপাড়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (84, 44, 'Burichong Upazila', 'বুড়িচং');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (85, 44, 'Chandina Upazila', 'চান্দিনা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (86, 44, 'Chauddagram Upazila', 'চৌদ্দগ্রাম');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (87, 44, 'Daudkandi Upazila', 'দাউদকান্দি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (88, 44, 'Debidwar Upazila', 'দেবীদ্বার');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (89, 44, 'Homna Upazila', 'হোমনা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (90, 44, 'Comilla Sadar Upazila', 'কুমিল্লা সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (91, 44, 'Laksam Upazila', 'লাকসাম');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (92, 44, 'Monohorgonj Upazila', 'মনোহরগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (93, 44, 'Meghna Upazila', 'মেঘনা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (94, 44, 'Muradnagar Upazila', 'মুরাদনগর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (95, 44, 'Nangalkot Upazila', 'নাঙ্গালকোট');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (96, 44, 'Comilla Sadar South Upazila', 'কুমিল্লা সদর দক্ষিণ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (97, 44, 'Titas Upazila', 'তিতাস');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (98, 45, 'Chakaria Upazila', 'চকরিয়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (99, 45, 'Chakaria Upazila', 'চকরিয়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (100, 45, 'Cox\'s Bazar Sadar Upazila', 'কক্স বাজার সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (101, 45, 'Kutubdia Upazila', 'কুতুবদিয়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (102, 45, 'Maheshkhali Upazila', 'মহেশখালী');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (103, 45, 'Ramu Upazila', 'রামু');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (104, 45, 'Teknaf Upazila', 'টেকনাফ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (105, 45, 'Ukhia Upazila', 'উখিয়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (106, 45, 'Pekua Upazila', 'পেকুয়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (107, 46, 'Feni Sadar', 'ফেনী সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (108, 46, 'Chagalnaiya', 'ছাগল নাইয়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (109, 46, 'Daganbhyan', 'দাগানভিয়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (110, 46, 'Parshuram', 'পরশুরাম');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (111, 46, 'Fhulgazi', 'ফুলগাজি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (112, 46, 'Sonagazi', 'সোনাগাজি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (113, 47, 'Dighinala Upazila', 'দিঘিনালা ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (114, 47, 'Khagrachhari Upazila', 'খাগড়াছড়ি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (115, 47, 'Lakshmichhari Upazila', 'লক্ষ্মীছড়ি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (116, 47, 'Mahalchhari Upazila', 'মহলছড়ি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (117, 47, 'Manikchhari Upazila', 'মানিকছড়ি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (118, 47, 'Matiranga Upazila', 'মাটিরাঙ্গা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (119, 47, 'Panchhari Upazila', 'পানছড়ি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (120, 47, 'Ramgarh Upazila', 'রামগড়');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (121, 48, 'Lakshmipur Sadar Upazila', 'লক্ষ্মীপুর সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (122, 48, 'Raipur Upazila', 'রায়পুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (123, 48, 'Ramganj Upazila', 'রামগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (124, 48, 'Ramgati Upazila', 'রামগতি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (125, 48, 'Komol Nagar Upazila', 'কমল নগর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (126, 49, 'Noakhali Sadar Upazila', 'নোয়াখালী সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (127, 49, 'Begumganj Upazila', 'বেগমগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (128, 49, 'Chatkhil Upazila', 'চাটখিল');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (129, 49, 'Companyganj Upazila', 'কোম্পানীগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (130, 49, 'Shenbag Upazila', 'শেনবাগ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (131, 49, 'Hatia Upazila', 'হাতিয়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (132, 49, 'Kobirhat Upazila', 'কবিরহাট ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (133, 49, 'Sonaimuri Upazila', 'সোনাইমুরি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (134, 49, 'Suborno Char Upazila', 'সুবর্ণ চর ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (135, 50, 'Rangamati Sadar Upazila', 'রাঙ্গামাটি সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (136, 50, 'Belaichhari Upazila', 'বেলাইছড়ি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (137, 50, 'Bagaichhari Upazila', 'বাঘাইছড়ি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (138, 50, 'Barkal Upazila', 'বরকল');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (139, 50, 'Juraichhari Upazila', 'জুরাইছড়ি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (140, 50, 'Rajasthali Upazila', 'রাজাস্থলি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (141, 50, 'Kaptai Upazila', 'কাপ্তাই');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (142, 50, 'Langadu Upazila', 'লাঙ্গাডু');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (143, 50, 'Nannerchar Upazila', 'নান্নেরচর ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (144, 50, 'Kaukhali Upazila', 'কাউখালি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (145, 1, 'Dhamrai Upazila', 'ধামরাই');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (146, 1, 'Dohar Upazila', 'দোহার');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (147, 1, 'Keraniganj Upazila', 'কেরানীগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (148, 1, 'Nawabganj Upazila', 'নবাবগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (149, 1, 'Savar Upazila', 'সাভার');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (150, 2, 'Faridpur Sadar Upazila', 'ফরিদপুর সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (151, 2, 'Boalmari Upazila', 'বোয়ালমারী');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (152, 2, 'Alfadanga Upazila', 'আলফাডাঙ্গা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (153, 2, 'Madhukhali Upazila', 'মধুখালি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (154, 2, 'Bhanga Upazila', 'ভাঙ্গা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (155, 2, 'Nagarkanda Upazila', 'নগরকান্ড');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (156, 2, 'Charbhadrasan Upazila', 'চরভদ্রাসন ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (157, 2, 'Sadarpur Upazila', 'সদরপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (158, 2, 'Shaltha Upazila', 'শালথা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (159, 3, 'Gazipur Sadar-Joydebpur', 'গাজীপুর সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (160, 3, 'Kaliakior', 'কালিয়াকৈর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (161, 3, 'Kapasia', 'কাপাসিয়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (162, 3, 'Sripur', 'শ্রীপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (163, 3, 'Kaliganj', 'কালীগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (164, 3, 'Tongi', 'টঙ্গি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (165, 4, 'Gopalganj Sadar Upazila', 'গোপালগঞ্জ সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (166, 4, 'Kashiani Upazila', 'কাশিয়ানি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (167, 4, 'Kotalipara Upazila', 'কোটালিপাড়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (168, 4, 'Muksudpur Upazila', 'মুকসুদপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (169, 4, 'Tungipara Upazila', 'টুঙ্গিপাড়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (170, 5, 'Dewanganj Upazila', 'দেওয়ানগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (171, 5, 'Baksiganj Upazila', 'বকসিগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (172, 5, 'Islampur Upazila', 'ইসলামপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (173, 5, 'Jamalpur Sadar Upazila', 'জামালপুর সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (174, 5, 'Madarganj Upazila', 'মাদারগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (175, 5, 'Melandaha Upazila', 'মেলানদাহা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (176, 5, 'Sarishabari Upazila', 'সরিষাবাড়ি ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (177, 5, 'Narundi Police I.C', 'নারুন্দি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (178, 6, 'Astagram Upazila', 'অষ্টগ্রাম');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (179, 6, 'Bajitpur Upazila', 'বাজিতপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (180, 6, 'Bhairab Upazila', 'ভৈরব');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (181, 6, 'Hossainpur Upazila', 'হোসেনপুর ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (182, 6, 'Itna Upazila', 'ইটনা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (183, 6, 'Karimganj Upazila', 'করিমগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (184, 6, 'Katiadi Upazila', 'কতিয়াদি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (185, 6, 'Kishoreganj Sadar Upazila', 'কিশোরগঞ্জ সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (186, 6, 'Kuliarchar Upazila', 'কুলিয়ারচর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (187, 6, 'Mithamain Upazila', 'মিঠামাইন');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (188, 6, 'Nikli Upazila', 'নিকলি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (189, 6, 'Pakundia Upazila', 'পাকুন্ডা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (190, 6, 'Tarail Upazila', 'তাড়াইল');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (191, 7, 'Madaripur Sadar', 'মাদারীপুর সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (192, 7, 'Kalkini', 'কালকিনি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (193, 7, 'Rajoir', 'রাজইর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (194, 7, 'Shibchar', 'শিবচর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (195, 8, 'Manikganj Sadar Upazila', 'মানিকগঞ্জ সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (196, 8, 'Singair Upazila', 'সিঙ্গাইর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (197, 8, 'Shibalaya Upazila', 'শিবালয়');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (198, 8, 'Saturia Upazila', 'সাঠুরিয়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (199, 8, 'Harirampur Upazila', 'হরিরামপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (200, 8, 'Ghior Upazila', 'ঘিওর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (201, 8, 'Daulatpur Upazila', 'দৌলতপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (202, 9, 'Lohajang Upazila', 'লোহাজং');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (203, 9, 'Sreenagar Upazila', 'শ্রীনগর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (204, 9, 'Munshiganj Sadar Upazila', 'মুন্সিগঞ্জ সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (205, 9, 'Sirajdikhan Upazila', 'সিরাজদিখান');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (206, 9, 'Tongibari Upazila', 'টঙ্গিবাড়ি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (207, 9, 'Gazaria Upazila', 'গজারিয়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (208, 10, 'Bhaluka', 'ভালুকা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (209, 10, 'Trishal', 'ত্রিশাল');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (210, 10, 'Haluaghat', 'হালুয়াঘাট');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (211, 10, 'Muktagachha', 'মুক্তাগাছা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (212, 10, 'Dhobaura', 'ধবারুয়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (213, 10, 'Fulbaria', 'ফুলবাড়িয়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (214, 10, 'Gaffargaon', 'গফরগাঁও');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (215, 10, 'Gauripur', 'গৌরিপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (216, 10, 'Ishwarganj', 'ঈশ্বরগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (217, 10, 'Mymensingh Sadar', 'ময়মনসিং সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (218, 10, 'Nandail', 'নন্দাইল');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (219, 10, 'Phulpur', 'ফুলপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (220, 11, 'Araihazar Upazila', 'আড়াইহাজার');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (221, 11, 'Sonargaon Upazila', 'সোনারগাঁও');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (222, 11, 'Bandar', 'বান্দার');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (223, 11, 'Naryanganj Sadar Upazila', 'নারায়ানগঞ্জ সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (224, 11, 'Rupganj Upazila', 'রূপগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (225, 11, 'Siddirgonj Upazila', 'সিদ্ধিরগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (226, 12, 'Belabo Upazila', 'বেলাবো');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (227, 12, 'Monohardi Upazila', 'মনোহরদি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (228, 12, 'Narsingdi Sadar Upazila', 'নরসিংদী সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (229, 12, 'Palash Upazila', 'পলাশ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (230, 12, 'Raipura Upazila, Narsingdi', 'রায়পুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (231, 12, 'Shibpur Upazila', 'শিবপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (232, 13, 'Kendua Upazilla', 'কেন্দুয়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (233, 13, 'Atpara Upazilla', 'আটপাড়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (234, 13, 'Barhatta Upazilla', 'বরহাট্টা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (235, 13, 'Durgapur Upazilla', 'দুর্গাপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (236, 13, 'Kalmakanda Upazilla', 'কলমাকান্দা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (237, 13, 'Madan Upazilla', 'মদন');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (238, 13, 'Mohanganj Upazilla', 'মোহনগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (239, 13, 'Netrakona-S Upazilla', 'নেত্রকোনা সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (240, 13, 'Purbadhala Upazilla', 'পূর্বধলা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (241, 13, 'Khaliajuri Upazilla', 'খালিয়াজুরি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (242, 14, 'Baliakandi Upazila', 'বালিয়াকান্দি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (243, 14, 'Goalandaghat Upazila', 'গোয়ালন্দ ঘাট');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (244, 14, 'Pangsha Upazila', 'পাংশা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (245, 14, 'Kalukhali Upazila', 'কালুখালি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (246, 14, 'Rajbari Sadar Upazila', 'রাজবাড়ি সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (247, 15, 'Shariatpur Sadar -Palong', 'শরীয়তপুর সদর ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (248, 15, 'Damudya Upazila', 'দামুদিয়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (249, 15, 'Naria Upazila', 'নড়িয়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (250, 15, 'Jajira Upazila', 'জাজিরা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (251, 15, 'Bhedarganj Upazila', 'ভেদারগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (252, 15, 'Gosairhat Upazila', 'গোসাইর হাট ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (253, 16, 'Jhenaigati Upazila', 'ঝিনাইগাতি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (254, 16, 'Nakla Upazila', 'নাকলা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (255, 16, 'Nalitabari Upazila', 'নালিতাবাড়ি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (256, 16, 'Sherpur Sadar Upazila', 'শেরপুর সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (257, 16, 'Sreebardi Upazila', 'শ্রীবরদি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (258, 17, 'Tangail Sadar Upazila', 'টাঙ্গাইল সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (259, 17, 'Sakhipur Upazila', 'সখিপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (260, 17, 'Basail Upazila', 'বসাইল');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (261, 17, 'Madhupur Upazila', 'মধুপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (262, 17, 'Ghatail Upazila', 'ঘাটাইল');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (263, 17, 'Kalihati Upazila', 'কালিহাতি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (264, 17, 'Nagarpur Upazila', 'নগরপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (265, 17, 'Mirzapur Upazila', 'মির্জাপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (266, 17, 'Gopalpur Upazila', 'গোপালপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (267, 17, 'Delduar Upazila', 'দেলদুয়ার');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (268, 17, 'Bhuapur Upazila', 'ভুয়াপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (269, 17, 'Dhanbari Upazila', 'ধানবাড়ি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (270, 55, 'Bagerhat Sadar Upazila', 'বাগেরহাট সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (271, 55, 'Chitalmari Upazila', 'চিতলমাড়ি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (272, 55, 'Fakirhat Upazila', 'ফকিরহাট');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (273, 55, 'Kachua Upazila', 'কচুয়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (274, 55, 'Mollahat Upazila', 'মোল্লাহাট ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (275, 55, 'Mongla Upazila', 'মংলা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (276, 55, 'Morrelganj Upazila', 'মরেলগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (277, 55, 'Rampal Upazila', 'রামপাল');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (278, 55, 'Sarankhola Upazila', 'স্মরণখোলা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (279, 56, 'Damurhuda Upazila', 'দামুরহুদা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (280, 56, 'Chuadanga-S Upazila', 'চুয়াডাঙ্গা সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (281, 56, 'Jibannagar Upazila', 'জীবন নগর ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (282, 56, 'Alamdanga Upazila', 'আলমডাঙ্গা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (283, 57, 'Abhaynagar Upazila', 'অভয়নগর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (284, 57, 'Keshabpur Upazila', 'কেশবপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (285, 57, 'Bagherpara Upazila', 'বাঘের পাড়া ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (286, 57, 'Jessore Sadar Upazila', 'যশোর সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (287, 57, 'Chaugachha Upazila', 'চৌগাছা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (288, 57, 'Manirampur Upazila', 'মনিরামপুর ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (289, 57, 'Jhikargachha Upazila', 'ঝিকরগাছা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (290, 57, 'Sharsha Upazila', 'সারশা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (291, 58, 'Jhenaidah Sadar Upazila', 'ঝিনাইদহ সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (292, 58, 'Maheshpur Upazila', 'মহেশপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (293, 58, 'Kaliganj Upazila', 'কালীগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (294, 58, 'Kotchandpur Upazila', 'কোট চাঁদপুর ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (295, 58, 'Shailkupa Upazila', 'শৈলকুপা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (296, 58, 'Harinakunda Upazila', 'হাড়িনাকুন্দা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (297, 59, 'Terokhada Upazila', 'তেরোখাদা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (298, 59, 'Batiaghata Upazila', 'বাটিয়াঘাটা ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (299, 59, 'Dacope Upazila', 'ডাকপে');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (300, 59, 'Dumuria Upazila', 'ডুমুরিয়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (301, 59, 'Dighalia Upazila', 'দিঘলিয়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (302, 59, 'Koyra Upazila', 'কয়ড়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (303, 59, 'Paikgachha Upazila', 'পাইকগাছা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (304, 59, 'Phultala Upazila', 'ফুলতলা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (305, 59, 'Rupsa Upazila', 'রূপসা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (306, 60, 'Kushtia Sadar', 'কুষ্টিয়া সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (307, 60, 'Kumarkhali', 'কুমারখালি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (308, 60, 'Daulatpur', 'দৌলতপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (309, 60, 'Mirpur', 'মিরপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (310, 60, 'Bheramara', 'ভেরামারা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (311, 60, 'Khoksa', 'খোকসা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (312, 61, 'Magura Sadar Upazila', 'মাগুরা সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (313, 61, 'Mohammadpur Upazila', 'মোহাম্মাদপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (314, 61, 'Shalikha Upazila', 'শালিখা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (315, 61, 'Sreepur Upazila', 'শ্রীপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (316, 62, 'angni Upazila', 'আংনি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (317, 62, 'Mujib Nagar Upazila', 'মুজিব নগর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (318, 62, 'Meherpur-S Upazila', 'মেহেরপুর সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (319, 63, 'Narail-S Upazilla', 'নড়াইল সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (320, 63, 'Lohagara Upazilla', 'লোহাগাড়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (321, 63, 'Kalia Upazilla', 'কালিয়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (322, 64, 'Satkhira Sadar Upazila', 'সাতক্ষীরা সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (323, 64, 'Assasuni Upazila', 'আসসাশুনি ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (324, 64, 'Debhata Upazila', 'দেভাটা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (325, 64, 'Tala Upazila', 'তালা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (326, 64, 'Kalaroa Upazila', 'কলরোয়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (327, 64, 'Kaliganj Upazila', 'কালীগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (328, 64, 'Shyamnagar Upazila', 'শ্যামনগর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (329, 18, 'Adamdighi', 'আদমদিঘী');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (330, 18, 'Bogra Sadar', 'বগুড়া সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (331, 18, 'Sherpur', 'শেরপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (332, 18, 'Dhunat', 'ধুনট');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (333, 18, 'Dhupchanchia', 'দুপচাচিয়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (334, 18, 'Gabtali', 'গাবতলি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (335, 18, 'Kahaloo', 'কাহালু');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (336, 18, 'Nandigram', 'নন্দিগ্রাম');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (337, 18, 'Sahajanpur', 'শাহজাহানপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (338, 18, 'Sariakandi', 'সারিয়াকান্দি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (339, 18, 'Shibganj', 'শিবগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (340, 18, 'Sonatala', 'সোনাতলা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (341, 19, 'Joypurhat S', 'জয়পুরহাট সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (342, 19, 'Akkelpur', 'আক্কেলপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (343, 19, 'Kalai', 'কালাই');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (344, 19, 'Khetlal', 'খেতলাল');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (345, 19, 'Panchbibi', 'পাঁচবিবি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (346, 20, 'Naogaon Sadar Upazila', 'নওগাঁ সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (347, 20, 'Mohadevpur Upazila', 'মহাদেবপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (348, 20, 'Manda Upazila', 'মান্দা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (349, 20, 'Niamatpur Upazila', 'নিয়ামতপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (350, 20, 'Atrai Upazila', 'আত্রাই');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (351, 20, 'Raninagar Upazila', 'রাণীনগর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (352, 20, 'Patnitala Upazila', 'পত্নীতলা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (353, 20, 'Dhamoirhat Upazila', 'ধামইরহাট ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (354, 20, 'Sapahar Upazila', 'সাপাহার');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (355, 20, 'Porsha Upazila', 'পোরশা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (356, 20, 'Badalgachhi Upazila', 'বদলগাছি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (357, 21, 'Natore Sadar Upazila', 'নাটোর সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (358, 21, 'Baraigram Upazila', 'বড়াইগ্রাম');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (359, 21, 'Bagatipara Upazila', 'বাগাতিপাড়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (360, 21, 'Lalpur Upazila', 'লালপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (361, 21, 'Natore Sadar Upazila', 'নাটোর সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (362, 21, 'Baraigram Upazila', 'বড়াই গ্রাম');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (363, 22, 'Bholahat Upazila', 'ভোলাহাট');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (364, 22, 'Gomastapur Upazila', 'গোমস্তাপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (365, 22, 'Nachole Upazila', 'নাচোল');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (366, 22, 'Nawabganj Sadar Upazila', 'নবাবগঞ্জ সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (367, 22, 'Shibganj Upazila', 'শিবগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (368, 23, 'Atgharia Upazila', 'আটঘরিয়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (369, 23, 'Bera Upazila', 'বেড়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (370, 23, 'Bhangura Upazila', 'ভাঙ্গুরা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (371, 23, 'Chatmohar Upazila', 'চাটমোহর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (372, 23, 'Faridpur Upazila', 'ফরিদপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (373, 23, 'Ishwardi Upazila', 'ঈশ্বরদী');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (374, 23, 'Pabna Sadar Upazila', 'পাবনা সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (375, 23, 'Santhia Upazila', 'সাথিয়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (376, 23, 'Sujanagar Upazila', 'সুজানগর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (377, 24, 'Bagha', 'বাঘা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (378, 24, 'Bagmara', 'বাগমারা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (379, 24, 'Charghat', 'চারঘাট');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (380, 24, 'Durgapur', 'দুর্গাপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (381, 24, 'Godagari', 'গোদাগারি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (382, 24, 'Mohanpur', 'মোহনপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (383, 24, 'Paba', 'পবা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (384, 24, 'Puthia', 'পুঠিয়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (385, 24, 'Tanore', 'তানোর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (386, 25, 'Sirajganj Sadar Upazila', 'সিরাজগঞ্জ সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (387, 25, 'Belkuchi Upazila', 'বেলকুচি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (388, 25, 'Chauhali Upazila', 'চৌহালি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (389, 25, 'Kamarkhanda Upazila', 'কামারখান্দা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (390, 25, 'Kazipur Upazila', 'কাজীপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (391, 25, 'Raiganj Upazila', 'রায়গঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (392, 25, 'Shahjadpur Upazila', 'শাহজাদপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (393, 25, 'Tarash Upazila', 'তারাশ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (394, 25, 'Ullahpara Upazila', 'উল্লাপাড়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (395, 26, 'Birampur Upazila', 'বিরামপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (396, 26, 'Birganj', 'বীরগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (397, 26, 'Biral Upazila', 'বিড়াল');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (398, 26, 'Bochaganj Upazila', 'বোচাগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (399, 26, 'Chirirbandar Upazila', 'চিরিরবন্দর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (400, 26, 'Phulbari Upazila', 'ফুলবাড়ি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (401, 26, 'Ghoraghat Upazila', 'ঘোড়াঘাট');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (402, 26, 'Hakimpur Upazila', 'হাকিমপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (403, 26, 'Kaharole Upazila', 'কাহারোল');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (404, 26, 'Khansama Upazila', 'খানসামা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (405, 26, 'Dinajpur Sadar Upazila', 'দিনাজপুর সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (406, 26, 'Nawabganj', 'নবাবগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (407, 26, 'Parbatipur Upazila', 'পার্বতীপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (408, 27, 'Fulchhari', 'ফুলছড়ি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (409, 27, 'Gaibandha sadar', 'গাইবান্ধা সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (410, 27, 'Gobindaganj', 'গোবিন্দগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (411, 27, 'Palashbari', 'পলাশবাড়ী');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (412, 27, 'Sadullapur', 'সাদুল্যাপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (413, 27, 'Saghata', 'সাঘাটা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (414, 27, 'Sundarganj', 'সুন্দরগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (415, 28, 'Kurigram Sadar', 'কুড়িগ্রাম সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (416, 28, 'Nageshwari', 'নাগেশ্বরী');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (417, 28, 'Bhurungamari', 'ভুরুঙ্গামারি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (418, 28, 'Phulbari', 'ফুলবাড়ি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (419, 28, 'Rajarhat', 'রাজারহাট');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (420, 28, 'Ulipur', 'উলিপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (421, 28, 'Chilmari', 'চিলমারি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (422, 28, 'Rowmari', 'রউমারি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (423, 28, 'Char Rajibpur', 'চর রাজিবপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (424, 29, 'Lalmanirhat Sadar', 'লালমনিরহাট সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (425, 29, 'Aditmari', 'আদিতমারি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (426, 29, 'Kaliganj', 'কালীগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (427, 29, 'Hatibandha', 'হাতিবান্ধা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (428, 29, 'Patgram', 'পাটগ্রাম');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (429, 30, 'Nilphamari Sadar', 'নীলফামারী সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (430, 30, 'Saidpur', 'সৈয়দপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (431, 30, 'Jaldhaka', 'জলঢাকা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (432, 30, 'Kishoreganj', 'কিশোরগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (433, 30, 'Domar', 'ডোমার');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (434, 30, 'Dimla', 'ডিমলা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (435, 31, 'Panchagarh Sadar', 'পঞ্চগড় সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (436, 31, 'Debiganj', 'দেবীগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (437, 31, 'Boda', 'বোদা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (438, 31, 'Atwari', 'আটোয়ারি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (439, 31, 'Tetulia', 'তেতুলিয়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (440, 32, 'Badarganj', 'বদরগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (441, 32, 'Mithapukur', 'মিঠাপুকুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (442, 32, 'Gangachara', 'গঙ্গাচরা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (443, 32, 'Kaunia', 'কাউনিয়া');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (444, 32, 'Rangpur Sadar', 'রংপুর সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (445, 32, 'Pirgachha', 'পীরগাছা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (446, 32, 'Pirganj', 'পীরগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (447, 32, 'Taraganj', 'তারাগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (448, 33, 'Thakurgaon Sadar Upazila', 'ঠাকুরগাঁও সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (449, 33, 'Pirganj Upazila', 'পীরগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (450, 33, 'Baliadangi Upazila', 'বালিয়াডাঙ্গি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (451, 33, 'Haripur Upazila', 'হরিপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (452, 33, 'Ranisankail Upazila', 'রাণীসংকইল');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (453, 51, 'Ajmiriganj', 'আজমিরিগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (454, 51, 'Baniachang', 'বানিয়াচং');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (455, 51, 'Bahubal', 'বাহুবল');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (456, 51, 'Chunarughat', 'চুনারুঘাট');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (457, 51, 'Habiganj Sadar', 'হবিগঞ্জ সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (458, 51, 'Lakhai', 'লাক্ষাই');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (459, 51, 'Madhabpur', 'মাধবপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (460, 51, 'Nabiganj', 'নবীগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (461, 51, 'Shaistagonj Upazila', 'শায়েস্তাগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (462, 52, 'Moulvibazar Sadar', 'মৌলভীবাজার');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (463, 52, 'Barlekha', 'বড়লেখা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (464, 52, 'Juri', 'জুড়ি');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (465, 52, 'Kamalganj', 'কামালগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (466, 52, 'Kulaura', 'কুলাউরা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (467, 52, 'Rajnagar', 'রাজনগর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (468, 52, 'Sreemangal', 'শ্রীমঙ্গল');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (469, 53, 'Bishwamvarpur', 'বিসশম্ভারপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (470, 53, 'Chhatak', 'ছাতক');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (471, 53, 'Derai', 'দেড়াই');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (472, 53, 'Dharampasha', 'ধরমপাশা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (473, 53, 'Dowarabazar', 'দোয়ারাবাজার');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (474, 53, 'Jagannathpur', 'জগন্নাথপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (475, 53, 'Jamalganj', 'জামালগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (476, 53, 'Sulla', 'সুল্লা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (477, 53, 'Sunamganj Sadar', 'সুনামগঞ্জ সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (478, 53, 'Shanthiganj', 'শান্তিগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (479, 53, 'Tahirpur', 'তাহিরপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (480, 54, 'Sylhet Sadar', 'সিলেট সদর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (481, 54, 'Beanibazar', 'বেয়ানিবাজার');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (482, 54, 'Bishwanath', 'বিশ্বনাথ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (483, 54, 'Dakshin Surma Upazila', 'দক্ষিণ সুরমা');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (484, 54, 'Balaganj', 'বালাগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (485, 54, 'Companiganj', 'কোম্পানিগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (486, 54, 'Fenchuganj', 'ফেঞ্চুগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (487, 54, 'Golapganj', 'গোলাপগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (488, 54, 'Gowainghat', 'গোয়াইনঘাট');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (489, 54, 'Jaintiapur', 'জয়ন্তপুর');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (490, 54, 'Kanaighat', 'কানাইঘাট');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (491, 54, 'Zakiganj', 'জাকিগঞ্জ');
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES (492, 54, 'Nobigonj', 'নবীগঞ্জ');


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

INSERT INTO `users` (`id`, `username`, `email`, `country`, `password`, `gender`, `address`, `designation`, `website`, `user_type`, `is_active`, `messege`, `login_time`, `post_time`) VALUES (1, 'Admin', 'admin@gmail.com', 13, 'e10adc3949ba59abbe56e057f20f883e', 'Male', '', 'Web Developer', '', 1, 1, '', '2019-11-18 17:25:44', '2018-08-07 12:49:55');
INSERT INTO `users` (`id`, `username`, `email`, `country`, `password`, `gender`, `address`, `designation`, `website`, `user_type`, `is_active`, `messege`, `login_time`, `post_time`) VALUES (2, 'user', 'user@gmail.com', 18, 'e10adc3949ba59abbe56e057f20f883e', 'Male', '', '', '', 0, 1, '', '2019-03-14 12:02:42', '2018-08-07 12:57:13');
INSERT INTO `users` (`id`, `username`, `email`, `country`, `password`, `gender`, `address`, `designation`, `website`, `user_type`, `is_active`, `messege`, `login_time`, `post_time`) VALUES (3, 'Demo1', 'demo1@gmail.com', 2, 'e10adc3949ba59abbe56e057f20f883e', 'Male', '', '', '', 0, 0, '', '2018-08-14 15:30:37', '2018-08-14 15:30:37');


