-- MySQL dump 10.13  Distrib 5.7.12, for osx10.11 (x86_64)
--
-- Host: localhost    Database: glurps
-- ------------------------------------------------------
-- Server version	5.7.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `glu_group`
--

DROP TABLE IF EXISTS `glu_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `glu_group` (
  `name` varchar(255) NOT NULL,
  `group_id` int(11) NOT NULL AUTO_INCREMENT,
  `create_date` datetime NOT NULL,
  `update_date` datetime NOT NULL,
  `active` tinyint(1) DEFAULT '1',
  `fav` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`group_id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `glu_group`
--

LOCK TABLES `glu_group` WRITE;
/*!40000 ALTER TABLE `glu_group` DISABLE KEYS */;
INSERT INTO `glu_group` VALUES ('test',1,'2018-05-18 21:20:20','2018-05-18 21:20:20',1,0),('test',2,'2018-05-18 21:20:31','2018-05-18 21:20:31',1,0),('test',3,'2018-05-18 21:21:12','2018-05-18 21:21:12',1,0),('test',4,'2018-05-22 21:49:50','2018-05-22 21:49:50',1,0),('test',5,'2018-05-23 20:39:48','2018-05-23 20:39:48',1,0),('test',6,'2018-05-23 20:39:51','2018-05-23 20:39:51',1,0),('test',7,'2018-05-23 22:17:12','2018-05-23 22:17:12',1,0),('test',8,'2018-05-23 22:22:14','2018-05-23 22:22:14',1,0),('test (rand)',9,'2018-05-23 22:28:25','2018-05-23 22:28:25',1,0),('test (rand)',10,'2018-05-23 22:28:25','2018-05-23 22:28:25',1,0),('test (rand)',11,'2018-05-23 22:28:25','2018-05-23 22:28:25',1,0),('test (rand)',12,'2018-05-23 22:28:26','2018-05-23 22:28:26',1,0),('test (rand)',13,'2018-05-23 22:28:26','2018-05-23 22:28:26',1,0),('test (rand)',14,'2018-05-23 22:28:26','2018-05-23 22:28:26',1,0),('test0.6363203211918508',15,'2018-05-23 23:00:05','2018-05-23 23:00:05',1,0),('test0.2514664954053405',16,'2018-05-23 23:15:04','2018-05-23 23:15:04',1,0),('test0.13353488089538956',17,'2018-05-23 23:24:36','2018-05-23 23:24:36',1,0),('test0.5390593110657576',18,'2018-05-24 00:13:32','2018-05-24 00:13:32',1,0),('test0.779768365477535',19,'2018-05-24 00:14:12','2018-05-24 00:14:12',1,0),('test0.23875780844848726',20,'2018-05-24 00:14:46','2018-05-24 00:14:46',1,0),('test0.8510977653372389',21,'2018-05-24 00:15:38','2018-05-24 00:15:38',1,0),('test0.386174569107272',22,'2018-05-24 22:43:37','2018-05-24 22:43:37',1,0);
/*!40000 ALTER TABLE `glu_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `glu_user`
--

DROP TABLE IF EXISTS `glu_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `glu_user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `create_date` datetime NOT NULL,
  `update_date` datetime NOT NULL,
  `active` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `glu_user`
--

LOCK TABLES `glu_user` WRITE;
/*!40000 ALTER TABLE `glu_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `glu_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-05-24 23:52:08
