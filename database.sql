/*
SQLyog Ultimate v8.71 
MySQL - 5.1.37-community : Database - book_store
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`book_store` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_bin */;

USE `book_store`;

/*Table structure for table `bookdetails` */

DROP TABLE IF EXISTS `bookdetails`;

CREATE TABLE `bookdetails` (
  `BookName` varchar(100) DEFAULT NULL,
  `author` varchar(100) DEFAULT NULL,
  `releaseDate` varchar(10) DEFAULT NULL,
  `publication` varchar(100) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `discount` float DEFAULT NULL,
  `isbn` varchar(15) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `category` varchar(100) DEFAULT NULL,
  `time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `edition` varchar(50) DEFAULT NULL,
  `vendor_name` varchar(100) DEFAULT NULL,
  `quantity` int(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `bookdetails` */

insert  into `bookdetails`(`BookName`,`author`,`releaseDate`,`publication`,`price`,`discount`,`isbn`,`image`,`category`,`time`,`edition`,`vendor_name`,`quantity`) values ('Now, Discover Your Strengths','robin sharma','2009','Think & Grow Rich Publication',522,55,'2365874125','d.jpg','Careers And Success ','2013-04-02 21:48:23','third','Ashok book depot',2),('Kiss That Frog','robin sharma','2009','Think & Grow Rich Publication',145,66,'54125478663','e.jpg','Careers And Success ','2013-04-02 21:48:32','second','Ashok book depot',2),('Smart Trust','robin sharma','1991','Think & Grow Rich Publication',635,59,'2154862548','f.jpg','Careers And Success ','2013-04-02 21:48:42','third','Ashok book depot',2),('Get To The Top ','robin sharma','1992','Think & Grow Rich Publication',325,58,'3215987642','g.jpg','Careers And Success ','2013-04-02 21:49:27','second','Ashok book depot',2),('roam','robin sharma','1993','Think & Grow Rich Publication',265,54,'3214569875','h.jpg','Careers And Success ','2013-04-02 21:52:57','second','Ashok book depot',2),('The Bourne Dominion','robin sharma','1999','Think & Grow Rich Publication',245,56,'2548613795','i.jpg','Business And Economics','2013-04-02 21:54:08','second','Navneet book depot',2),('Last Man Standing','robin sharma','2010','Think & Grow Rich Publication',325,15,'3254698712','j.jpg','Business And Economics','2013-04-02 21:54:14','third','Ashok book depot',2),('Adventures of Feluda ','robin sharma','1996','Think & Grow Rich Publication',263,10,'258031265','k.jpg','Business And Economics','2013-04-02 21:54:22','second','sanjay book depot',2),('Ac - Dumb Witness','robin sharma','1935','Think & Grow Rich Publication',222,11,'0251654786','l.jpg','Business And Economics','2013-04-02 21:54:33','second','sanjay book depot',2),('Compilers : Principles, Techniques and Tools 2nd Edition','Alfred V. Aho, Monica S. Lam, Ravi Sethi, Jeffrey D. Ulman ','2011','TOP public. ltd.',136,87,'3258625415','n.jpg','Business And Economics','2013-04-02 22:00:30','new release','sanjay book depot',2),('SAP ABAP/4 Covers Sap Ecc 6.0 Black Book',' Kogent Learning Solutions Inc. ','2008','TOP public. ltd.',132,66,'8545236521','p.jpg','Home Appliances','2013-04-02 22:01:04','second','sanjay book depot',3),('Beginning Android 4 Application Development ',' Wei-Meng Lee ','2006','TOP public. ltd.',130,55,'2154693258','q.jpg','Business And Economics','2013-04-02 22:01:21','fifth','sanjay book depot',2),('QTP Descriptive Programming Unplugged: Master Object Identification Techniques ','Tarun Lalwani, Anshoo Arora ','2003','TOP public. ltd.',150,44,'321445666985','i.jpg','Home Appliances','2013-04-02 22:01:42','second','sanjay book depot',2),('Peeling Design Patterns for Beginners and Interviews 1st Edition ',' Narasimha Karumanchi, Meda Sreenivasa Rao ','2004','TOP public. ltd.',250,88,'3352547856','s.jpg','Economics','2013-04-02 22:02:02','first','sanjay book depot',2),('OCA Oracle Database SQL Certified Expert Exam Guide',' Steve O\'Hearn ','2005','TOP public. ltd.',264,69,'32564215863','t.jpg','Economics','2013-04-02 22:02:52','second','sanjay book depot',2),('SCJP Sun Certified Programmer for Java 6 Study Exam','Katherine Sierra, Bert Bates ','2009','TOP public. ltd.',350,54,'3698521475','u.jpg','Economics','2013-04-02 22:05:40','sixth','sanjay book depot',2),('Data Structures and Algorithms Made Easy',' Narasimha Karumanchi ','2007','TOP public. ltd.',253,20,'1234567896','v.jpg','Economics','2013-04-02 22:06:04','seventh','sanjay book depot',2),('Let Us C 12th Edition',' Yashavant Kanetkar ','2003','TOP public. ltd.',320,21,'7539684120','w.jpg','Economics','2013-04-02 22:06:26','second','sanjay book depot',2),('Java : The Complete Reference 7th Edition ','Herbert Schildt ','2005','TOP public. ltd.',312,23,'3214569875','x.jpg','Economics','2013-04-02 22:06:53','fifth','sanjay book depot',2),('Data Structures And Algorithms Made Easy In Java 2nd Edition ','Narasimha Karumanchi ','2005','TOP public. ltd.',100,55,'15662354785','y.jpg','Economics','2013-04-02 22:07:20','second','sanjay book depot',2),('The Algorithm Design Manual','Narasimha Karumanchi ','2006','TOP public. ltd.',105,54,'2301254698','z.jpg','Economics','2013-04-02 22:07:26','fifth','sanjay book depot',2),('Head First PMP 2nd Edition ','Andrew Stellman ','2002','TOP public. ltd.',259,100,'23012546985','a1.jpg','History','2013-04-02 22:07:58','fifth','Navneet book depot',2),('the heart','Yashavant Kanetkar ','2003','TOP public. ltd.',358,99,'23012546982','b1.jpg','History','0000-00-00 00:00:00','second','sanjay book depot',2),('robinson','Narasimha Karumanchi ','1996','TOP public. ltd.',536,89,'589647895123','c1.jpg','History','0000-00-00 00:00:00','fifth','sanjay book depot',10),('pirates off','Yashavant Kanetkar ','1993','TOP public. ltd.',563,65,'456985412256','c2.jpg','History','0000-00-00 00:00:00','fifth','Navneet book depot',8),('end of earth','Narasimha Karumanchi ','2005','TOP public. ltd.',452,55,'458753654123','c3.jpg','History','0000-00-00 00:00:00','third','Navneet book depot',10),('bey of bengal','Narasimha Karumanchi ','2005','Dhanpat Rai Publication',125,23,'2001250026900','c4.jpg','History','0000-00-00 00:00:00','fifth','Navneet book depot',10),('deamon','Yashavant Kanetkar ','2005','Dhanpat Rai Publication',632,58,'8700258963202','k.jpg','Home Appliances','0000-00-00 00:00:00','third','Navneet book depot',10),('orevio','Yashavant Kanetkar ','2005','Dhanpat Rai Publication',251,108,'7893215004802','j.jpg','Home Appliances','0000-00-00 00:00:00','third','Navneet book depot',10),('heavy boy','heavy','2012','Dhanpat Rai Publication',348,22,'741852963','b1.jpg','Home Appliances','2013-04-07 12:47:36','SECOND','Navneet book depot',2),('javaEE','abc','2012','Dhanpat Rai Publication',22,11,'9780007460434','c8.jpeg','Careers And Success','2013-04-07 20:01:32','SECOND','Navneet book depo',1),('cpp','abc','22','aaaaaa',22,22,'brock','f1 (10).jpg','Careers And Success','2013-04-08 13:57:53','SECOND','Navneet book depot',2),('java2','abc','22','dasd',222,22,'aaaa','d1 (1).jpeg','aaaaaa','2013-04-08 14:36:12','1','Navneet book depot',2);

/*Table structure for table `buy_table` */

DROP TABLE IF EXISTS `buy_table`;

CREATE TABLE `buy_table` (
  `ISBN` varchar(100) DEFAULT NULL,
  `book_name` varchar(100) DEFAULT NULL,
  `vendor_name` varchar(100) DEFAULT NULL,
  `customer_name` varchar(100) DEFAULT NULL,
  `shipping_address` varchar(100) DEFAULT NULL,
  `quantity` int(100) DEFAULT NULL,
  `total_cost` float DEFAULT NULL,
  `status` enum('pending','delivered') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `buy_table` */

insert  into `buy_table`(`ISBN`,`book_name`,`vendor_name`,`customer_name`,`shipping_address`,`quantity`,`total_cost`,`status`) values ('7895462135','The Greatness Guide 2','Navneet book depot','Alan wake','madhav nagar ,Amravati.',1,250,'pending'),('456985412256','pirates off','Navneet book depot','Robert Pattrick','ABC',2,500,'pending'),('8545236521','SAP ABAP/4 Covers Sap Ecc 6.0 Black Book','sanjay book depot','Ameya chandekar','madhav nagar ,Amravati.',2,264,'pending'),('6325487962','Think Grow Rich','Navneet book depot','Sunita dhawan','madhav nagar ,Amravati.',2,730,'pending'),('8545236521','SAP ABAP/4 Covers Sap Ecc 6.0 Black Book','sanjay book depot','rachit','madhav nagar ,Amravati.',1,132,'pending');

/*Table structure for table `usertable` */

DROP TABLE IF EXISTS `usertable`;

CREATE TABLE `usertable` (
  `name` varchar(50) DEFAULT NULL,
  `email_id` varchar(50) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `mobile_no` varchar(15) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  `state` varchar(20) DEFAULT NULL,
  `country` varchar(10) DEFAULT NULL,
  `zip` int(10) DEFAULT NULL,
  `type` int(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `usertable` */

insert  into `usertable`(`name`,`email_id`,`password`,`mobile_no`,`address`,`city`,`state`,`country`,`zip`,`type`) values ('navn','navneet@in.com','123456','2147483647','amravati','amravati','maharashtra','india',444604,1),('Asok book depot','asok@in.com','123456','9405883962','madhav nagar','amravati','maharashtra','india',444605,1),('sanjay book depot','sanjay@in.com','123456','2147483647','ravi nagar','amravati','maharashtra','india',444605,2),('Navneet book depot','navneet@gmail.com','qqqqqq','9405883962','Rukhmini Nagar','Amravati','Maharashtra','India',444606,2),('pradyut','dev@in.com','aaaaaa','9860357415','sameer','Amravati','Maharashtra','India',444606,1),('rachit','rdx@gmail.com','aaaaaa','8149691898','abc','pqr','xyz','india',444805,1);

/*Table structure for table `wishlist` */

DROP TABLE IF EXISTS `wishlist`;

CREATE TABLE `wishlist` (
  `bookname` varchar(100) DEFAULT NULL,
  `author` varchar(110) DEFAULT NULL,
  `customer` varchar(100) DEFAULT NULL,
  `mobile_no` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `wishlist` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
