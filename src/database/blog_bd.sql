-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: localhost    Database: blog_db
-- ------------------------------------------------------
-- Server version	8.0.46

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `banner` varchar(255) DEFAULT NULL,
  `author_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_article_author` (`author_id`),
  CONSTRAINT `fk_article_author` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (1,'Como comecei no desenvolvimento web','Neste artigo conto um pouco sobre minha jornada aprendendo desenvolvimento web.',NULL,1,'2026-07-22 02:00:33','2026-07-22 02:00:33'),(2,'Boas práticas com Git','Veja algumas dicas para manter um histórico de commits organizado.',NULL,2,'2026-07-22 02:01:28','2026-07-22 02:01:28'),(3,'Introdução ao Node.js','Neste artigo apresento os conceitos básicos do Node.js e Express.',NULL,3,'2026-07-22 02:02:02','2026-07-22 02:02:02'),(4,'5 boas práticas para desenvolver APIs mais organizadas','Neste artigo vamos explorar os principais conceitos para criação de uma API REST utilizando Node.js, Express e MySQL. Vamos abordar organização de projetos, separação de responsabilidades, integração com banco de dados e boas práticas de desenvolvimento.','1784688474266.jpg',5,'2026-07-22 02:47:54','2026-07-22 02:47:54'),(5,'Artigo protegido','Teste de autenticação',NULL,1,'2026-07-22 11:54:30','2026-07-22 11:54:30'),(6,'Artigo protegido 2','Teste de autenticação',NULL,5,'2026-07-22 12:25:17','2026-07-22 12:25:17'),(8,'Test Create Article','Teste de autenticação',NULL,6,'2026-07-22 12:52:08','2026-07-22 12:52:08');
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'João','joao@email.com','$2b$10$DPw5P5uNG.pepq8XNOIqIuQ0Ph1JHNhOXl.xkm/V5jtZBGTBZCtyu'),(2,'Sthefany Souza','sthefanysouza@email.com','$2b$10$03SNf5rhgfor1GFF2yL09O51QHyzMkOW4MYohqlegFrnyPb6tc3G.'),(3,'Ana Beatriz','anabia03@email.com','$2b$10$aNkgCXne1SR/bBi9GKqWSuua8/HefO7.ZQZiQlJsDF3TOMnLw29/2'),(4,'Giovana Matos','giovanarmatos@email.com','$2b$10$B7EDA7pF/4XGJrnUjBSZ9OeTSUypy97tTiTkZZhQS63dVd.xkJtDe'),(5,'Cauã Silva','cauazinhosilva@email.com','$2b$10$ypz9zE33uBPPALU4q.QhcOTtL2lgVIKMBHnun4hhk4KLYlqsH0dIe'),(6,'Felippe Barbosa','felippebarbosaofc@email.com','$2b$10$XV845VjDjIlwW7.s/clHcePL1/Bu5uW0xzPl/q5wty4lA4bp62y8K');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-07-22 22:25:44
