-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: checkpoint4
-- ------------------------------------------------------
-- Server version	8.0.29-0ubuntu0.21.10.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `author`
--

DROP TABLE IF EXISTS `author`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `author` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `author`
--

LOCK TABLES `author` WRITE;
/*!40000 ALTER TABLE `author` DISABLE KEYS */;
INSERT INTO `author` VALUES (1,'Eiichirō','Oda'),(2,'Akira','Toriyama'),(3,'Takao','Koyama'),(4,'Hiro','Mashima'),(5,'Kōhei','Horikoshi'),(6,'Tite','Kubo'),(7,'Gege','Akutami'),(8,'Yoshihiro','Togashi'),(9,'Hiromu','Arakawa'),(10,'Yūki','Tabata'),(11,'Hajime','Isayama'),(12,'Masashi','Kishimoto'),(13,'Koyoharu','Gotōge'),(14,'Aya','Yajima'),(15,'Naoya','Matsumoto'),(16,'Ukyō','Kodachi'),(17,'Kaneshiro','Muneyuki'),(18,'Tatsuki','Fujimoto'),(19,'Nakaba','Suzuki'),(20,'Kentarō','Miura'),(21,'Tsuyoshi','Takaki'),(22,'Atsushi','Ōkubo'),(23,'Riichirō','Inagaki'),(24,'Haruichi','Furudate'),(25,'Yūji','Kaku'),(26,'Kafka','Asagiri');
/*!40000 ALTER TABLE `author` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorie`
--

DROP TABLE IF EXISTS `categorie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorie` (
  `id` int NOT NULL AUTO_INCREMENT,
  `categorie_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorie`
--

LOCK TABLES `categorie` WRITE;
/*!40000 ALTER TABLE `categorie` DISABLE KEYS */;
INSERT INTO `categorie` VALUES (1,'Anime'),(2,'Manga'),(3,'Film'),(4,'VOSTFR'),(5,'VF');
/*!40000 ALTER TABLE `categorie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorite`
--

DROP TABLE IF EXISTS `favorite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorite` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `manga_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_favorite_user` (`user_id`),
  KEY `fk_favorite_manga` (`manga_id`),
  CONSTRAINT `fk_favorite_manga` FOREIGN KEY (`manga_id`) REFERENCES `manga` (`id`),
  CONSTRAINT `fk_favorite_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorite`
--

LOCK TABLES `favorite` WRITE;
/*!40000 ALTER TABLE `favorite` DISABLE KEYS */;
/*!40000 ALTER TABLE `favorite` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genre`
--

DROP TABLE IF EXISTS `genre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genre` (
  `id` int NOT NULL AUTO_INCREMENT,
  `genre_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genre`
--

LOCK TABLES `genre` WRITE;
/*!40000 ALTER TABLE `genre` DISABLE KEYS */;
INSERT INTO `genre` VALUES (1,'Action'),(2,'Fantaisie'),(3,'Romance'),(4,'Yaoi'),(5,'Aventure'),(6,'Horreur'),(7,'Seinen'),(8,'Yuri'),(9,'Combats'),(10,'Isekai'),(11,'Shônen'),(12,'Comédie'),(13,'Jôsei'),(14,'Shôjo'),(15,'Drame'),(16,'Mystère'),(17,'Sport'),(18,'Ecchi'),(19,'Psychologique'),(20,'Surnaturel'),(21,'Ecole'),(22,'Quotidien'),(23,'Tournois');
/*!40000 ALTER TABLE `genre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manga`
--

DROP TABLE IF EXISTS `manga`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manga` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(255) DEFAULT NULL,
  `manga_name` varchar(100) NOT NULL,
  `rating` float(3,2) DEFAULT NULL,
  `day` int DEFAULT NULL,
  `month` varchar(100) DEFAULT NULL,
  `year` int NOT NULL,
  `synopsis` mediumtext,
  `categorie_id` int NOT NULL,
  `author_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_categorie_manga` (`categorie_id`),
  KEY `fk_author_manga` (`author_id`),
  CONSTRAINT `fk_author_manga` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`),
  CONSTRAINT `fk_categorie_manga` FOREIGN KEY (`categorie_id`) REFERENCES `categorie` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manga`
--

LOCK TABLES `manga` WRITE;
/*!40000 ALTER TABLE `manga` DISABLE KEYS */;
INSERT INTO `manga` VALUES (1,'one-piece.jpg','One piece',4.42,20,'Octobre',1999,' Gloire, fortune, pouvoir... le roi des pirates, Gol D. Roger possédait toutes ces choses. Lors de son exécution il déclara : Mon trésor ? Je vous le laisse si vous voulez, trouvez-le, je l\'ai laisser quelque part dans ce monde... Ce fut le début de l\'âge d\'or de la piraterie ! 22 ans plus tard, un jeune homme du nom de Monkey D. Luffy prend la mer bien décidé à trouver le légendaire One Piece et devenir le Roi des pirates. ',1,1),(2,'dragon-ball-z.jpg','Dragon Ball Z',4.26,26,'Avril',1989,'Quelques années après la défaite de Piccolo au tournoi des arts martiaux face à Goku, une nouvelle menace se profile. En effet une mystérieuse capsule spatiale fonce droit vers la Terre et les intentions de son occupant sont maléfiques. Goku devra s\'allier à son ennemi d\'hier pour pouvoir triompher d\'un ennemi plus fort que jamais.',1,2),(3,'fairy-tail.jpg','Fairy Tail',4.10,2,'Août',2006,'Lucy est une magicienne qui rêve de rejoindre la célèbre guilde Fairy Tail. Elle arrive dans une ville pour acheter des clés de portail mais en sortant de la boutique elle tombe sur un magicien du nom de Salamander. Natsu quant à lui, en recherchant un dragon va tomber sur ce magicien et rencontrer Lucy.',1,4),(4,'Mha.webp','My Hero Academia',4.38,7,'Juillet',2014,'Dans un futur proche suite à une mutation génétique, 80% de la population mondiale possède des super-pouvoirs appelés Alters. Les super-héros protègent la population mondiale face aux super-vilains qui utilisent leur Alter à des fins maléfiques. Le plus célèbre des super-héro se nomme All Might. Izuku Midoriya en est fan, et rêve d\'intégrer la filière super-héroïque du lycée Yuei pour suivre les traces de son idole ainsi devenir le plus grand des super-héros. Malheureusement, Izuku ne possède pas de pouvoir. ',1,5),(5,'Bleach.png','Bleach',4.05,7,'Août',2001,'Ichigo Kurosaki, modeste lycéen qui a la particularité de voir les esprits, va voir sa vie basculer lorsqu\'il rencontre une Shinagami (dieu de la mort) : Rukia. Pour protéger ses proches, cette dernière va lui confier ses pouvoirs. À partir de cet instant, Ichigo devient un Shinigami et devra remplir le travail de Rukia jusqu\'à qu\'elle récupère ses pouvoirs. Il s\'attaque donc aux Hollows pour purifier l\'âme qu\'ils contiennent mais la tâche qui l\'attend s\'avère beaucoup plus ardue que prévue... ',1,6),(6,'jujutsu-kaisen.webp','Jujutsu Kaisen',4.05,28,'Avril',2017,'Plus de 10 000 morts et disparus sont recensés chaque année au Japon. Les sentiments négatifs que relâchent les êtres humains sont en cause. Souffrance, regrets, humiliation : leur concentration dans un même endroit engendre des malédictions souvent mortelles... C\'est ce que va découvrir Yuji Itadori, lycéen et membre du club d\'occultisme. Il ne croit pas aux fantômes, mais il est doté d\'une force physique hors norme qui représente un véritable atout pour les missions du groupe... jusqu\'à ce que l\'une d\'elles prenne une mauvaise tournure. La relique qu\'ils dénichent, le doigt découpé d\'un démon millénaire, attire les monstres ! Sans réfléchir : le jeune homme avale la relique pour briser la malédiction ! Maintenant, il se trouve possédé par Ryômen Sukuna, le célèbre démon à deux visages. Cependant, contre toute attente, Yuji est toujours capable de garder le contrôle de son corps. Mais en dépit de cela, il est condamné à mort par l\'organisation des exorcistes... Une décision qui ne pourra être repoussée qu\'à une seule condition : trouver tous les doigts de Sukuna afin d\'écarter la menace une bonne fois pour toutes ! ',1,6),(7,'hunter.webp','Hunter X Hunter',4.60,16,'Mars',1998,'Réadaptation du célèbre manga Hunter x Hunter en une nouvelle série. Le jeune Gon vit sur une petite île avec sa tante. Abandonné par son père qui est un Hunter, à la fois un aventurier et un chasseur de primes, Gon décide à l\'âge de 12 ans de partir pour devenir un Hunter. Cela ne sera pas chose aisée, il devra passer une suite de tests et examens en compagnie de milliers d\'autres prétendants au titre de Hunter. Il sera aidé par de nouvelles connaissances qui aspirent au même but que lui tel que Kurapika, Leolio et Kirua.  ',1,8),(8,'fullmetal.webp','FullMetal Alchemist',4.21,12,'Juillet',2001,'L\'alchimie réside à la transformation de la matière. Le principe d\'équivalence consiste en le fait qu\'il n\'est pas possible de créer quelque chose à partir de rien, pour obtenir quelque chose, il faut impérativement sacrifier quelque chose de même valeur... L\'histoire suit les aventures de deux frères, Edward et Alphonse Elric. Après le décès de leur mère, ceux-ci décident d\'apprendre l\'alchimie dans le but de la ressusciter, en dépit qu\'il s\'agisse de l\'interdit ultime en alchimie. Leur expérience se solde par un échec et voit même pour Alphonse, la perte de son corp, et pour Edward la perte de sa jambe gauche. Néanmoins, Edward réussie à installer l\'esprit d\'Alphonse dans une vieille armure. Dans leurs but de retrouver leurs corps respectifs, les deux frères se retrouvent à se mettre à la recherche de la pierre philosophale, pierre aux pouvoirs immense et qui devrait leurs permettre de récupérer leurs corps. Dans le but d\'avoir d\'avantage d\'accès pour leurs recherches, Edward se laisse enrôler dans l’armée en tant que alchimie d\'état, alchimistes au service de l\'armée. Celui-ci se voit attribuer un titre personnel, comme tout alchimiste d\'état, celui de Full Metal Alchemist.',1,9),(9,'black-clover.jpeg','Black Clover',3.82,16,'Février',2015,'Asta et Yuno ont tout les deux été abandonnés à la même église, depuis, ils sont inséparables. Étant enfants, ils se sont promis de devenir le prochain Empereur Mage. Cependant en grandissant, un grand fossé s\'est creusé entre eux. Alors que Yuno est un magicien de génie, Asta semble ne pas pouvoir utiliser la magie, il décide donc de s\'entraîner physiquement. Quand ils ont reçu leur grimoire à l\'âge de 15 ans, Yuno reçoit un grimoire avec un trèfle à quatre feuille (la plupart en reçoivent un avec un trèfle à 3 feuille), tandis que Asta ne reçoit rien du tout. Toutefois, lorsque Yuno se retrouve menacé, le vrai pouvoir de Asta se réveille et celui-ci reçoit un grimoire avec un trèfle à 5 feuilles. Yuno et Asta vont commencer à prendre des chemins différents, cependant leur but reste le même : devenir le prochain Empereur Mage !',1,10),(10,'snk.jpg','Shingeki No Kyojin',4.31,9,'Septembre',2009,'Dans un monde ravagé par des titans mangeurs d’homme depuis plus d’un siècle, les rares survivants de l’Humanité n’ont d’autre choix pour survivre que de se barricader dans une cité-forteresse. Le jeune Eren, témoin de la mort de sa mère dévorée par un titan, n’a qu’un rêve : entrer dans le corps d’élite chargé de découvrir l’origine des titans, et les annihiler jusqu’au dernier…',1,11),(11,'Naruto.jpg','Naruto',4.07,21,'Septembre',1999,'Uzumaki Naruto, jeune apprenti ninja de Konoha, ne rêve que d\'une chose, devenir Hokage. Pour cela il doit faire ses preuves à l\'académie ninja puis dans l\'équipe sous les ordres de Kakashi Hatake. Mais notre jeune ami cache un terrible secret et certains seront prêt à tout pour s\'en emparer...',1,12),(12,'Demon-Slayer.webp','Demon Slayer',4.15,15,'Février',2016,'Depuis les temps anciens, il existe des rumeurs concernant des démons mangeurs d\'hommes qui se cachent dans les bois. Pour cette raison, les citadins locaux ne s\'y aventurent jamais la nuit. La légende raconte aussi qu\'un tueur de démons déambule la nuit, chassant ces démons assoiffés de sang. Pour le jeune Tanjirô, ces rumeurs vont bientôt devenir sa dure réalité ... Depuis la mort de son père, Tanjirô a pris sur lui pour subvenir aux besoins de sa famille. Malgré cette tragédie, ils réussissent à trouver un peu de bonheur au quotidien. Cependant, ce peu de bonheur se retrouve détruit le jour où Tanjirô découvre que sa famille s\'est fait massacrer et que la seule survivante, sa sœur Nezuko, est devenue un démon. À sa grande surprise, Nezuko montre encore des signes d\'émotion et de pensées humaines. Ainsi, commence la dure tâche de Tanjirô, celle de combatstre les démons et de faire redevenir sa sœur humaine.',1,13),(13,'spy.jpe','Spy X Family',4.40,2,'Juillet',2021,'Sauvez le monde avec l\'élite des agents (très) spéciaux : la famille Forger ! Une comédie d\'espionnage pétillante ! Twilight, le plus grand espion du monde, doit pour sa nouvelle mission créer une famille de toutes pièces afin de pouvoir s\'introduire dans la plus prestigieuse école de l\'aristocratie. Totalement dépourvu d\'expérience familiale, il va adopter une petite fille en ignorant qu\'elle est télépathe, et s\'associer à une jeune femme timide, sans se douter qu\'elle est une redoutable tueuse à gages. Ce trio atypique va devoir composer pour passer inaperçu, tout en découvrant les vraies valeurs d\'une famille unie et aimante. ',1,14),(14,'kaiju.jpg','Kaiju n°8',4.37,3,'Juillet',2020,'Les kaiju sont d\'effroyables monstres géants qui surgissent de nulle part pour attaquer la population. Au Japon, ces apparitions font désormais partie du quotidien. Enfant, Kafka Hibino rêvait d\'intégrer les Forces de Défense pour combatstre ces terribles ennemis, mais après de nombreux échecs à l\'examen d\'entrée, ce trentenaire travaille à nettoyer les rues de leurs encombrants cadavres. Jusqu\'au jour où une mystérieuse créature s\'introduit dans son organisme et le métamorphose en une entité surpuissante mi-humaine, mi-kaiju. Son nouveau nom de code : Kaiju n° 8 !',2,15),(15,'boruto.jpg','Boruto',4.07,9,'Mai',2016,'Depuis que son père occupe la plus haute fonction du village de Konoha, Boruto Uzumaki, le fils de Nanadaime Hokage et Hinata Hyuga, vit dans l\'ombre de son père. Cherchant toujours à attirer l\'attention de ce dernier, Boruto a pris la ferme résolution de surpasser son paternel. Mais la vie que mènent les ninjas de haute-volée est rythmée par les missions complexes et les entraînements rigoureux, notre jeune héros va d\'ailleurs, apprendre à ses dépens que devenir le meilleur ninja, n\'est point une tâche aisée. En compagnie de Sarada, l\'enfant de Sasuke Uchiha et Sakura Haruno, Boruto va dès lors découvrir le monde des shinobis, ainsi que ses fondements...',2,16),(16,'Blue-Lock.jpg','Blue Lock',4.27,1,'Août',2018,'Coupe du monde 2018, l\'équipe de football du Japon est éliminée en huitièmes de finale... Ce nouvel échec incite l\'Union japonaise de football à fonder le \'Blue Lock\' : un centre de formation révolutionnaire rassemblant les 300 meilleurs attaquants lycéens du pays. L\'objectif du coach du Blue Lock, Jinpachi Ego, est clair : détecter l\'unique attaquant qui écrasera tous ses rivaux par son talent et son hyper-individualisme ! Pour Yoichi Isagi, joueur bouillonnant encore inconnu, il n\'y a pas d\'alternative... S\'il veut survivre au programme hautement sélectif qui l\'attend, il devra abandonner le jeu collectif et se transcender pour devenir l\'attaquant ultime !',2,17),(17,'chainsaw.jpg','Chainsaw Man',4.30,3,'Décembre',2018,'Pour rembourser ses dettes, Denji, jeune homme dans la dèche la plus totale, est exploité en tant que Devil Hunter avec son chien-démon-tronçonneuse, \'Pochita\'. Mais suite à une cruelle trahison, il voit enfin une possibilité de se tirer des bas-fonds où il croupit ! Devenu surpuissant après sa fusion avec Pochita, Denji est recruté par une organisation et part à la chasse aux démons...!',2,18),(18,'eden.webp','Eden\'s Zero',4.06,27,'Juin',2018,'L\'histoire d\'Eden\'s Zero prend place dans un monde fictif mais futuriste où les aventuriers et les explorateurs naviguent à travers le cosmos pour effectuer diverses missions. Shiki Grandbell est un étrange jeune homme qui a fait la rencontre de Rebecca et de son chat Happy sur sa planète natale, Grandbell. Ensemble, ils voyagent à travers le cosmos afin de rencontrer Mother et ainsi devenir les premiers aventuriers à accomplir cet exploit.',2,4),(19,'mha1.jpg','My Hero Academia',4.76,7,'Juillet',2014,'Dans un futur proche suite à une mutation génétique, 80% de la population mondiale possède des super-pouvoirs appelés Alters. Les super-héros protègent la population mondiale face aux super-vilains qui utilisent leur Alter à des fins maléfiques. Le plus célèbre des super-héro se nomme All Might. Izuku Midoriya en est fan, et rêve d\'intégrer la filière super-héroïque du lycée Yuei pour suivre les traces de son idole ainsi devenir le plus grand des super-héros. Malheureusement, Izuku ne possède pas de pouvoir.',2,5),(20,'nanatsu.jpg','Nanatsu No Tazai',4.04,10,'Octobre',2012,'Les Seven Deadly Sins sont un groupe de chevaliers qui ont conspiré pour renverser le royaume de Britannia. Ils ont été éradiqués par les Chevaliers Sacrés, cependant certaines rumeurs laissent prétendre qu\'ils sont toujours en vie. Dix ans plus tard, les Chevaliers Sacrés ont fait un coup d\'état, emprisonnant le Roi pour devenir les nouveaux dirigeants tyranniques du Royaume. Elizabeth, la troisième fille du Roi, passe ses journées à la recherche des Seven Deadly Sins, les seules personnes capables de récupérer le Royaume des mains de ces tyrans. Durant ses recherches, elle perd conscience dans la taverne de Meliodas, un jeune garçon parcourant le monde en compagnie de son cochon. Rapidement, Elizabeth va se rendre compte que Meliodas n\'est pas qu\'un simple propriétaire de taverne, mais une personne à la puissance démesurée.',2,19),(21,'berserk.jpg','Berserk',4.13,1,'Octobre',1989,'Guts/Gatsu (personnage principal) est un jeune mercenaire à la vie massacrée avant de l\'avoir commencée. Il sera recueuilli par les membres de la Troupe du Faucon : Judo, Rickert, Pippin, Casca (la seule fille de l\'équipe) et surtout, Griffith, un personnage fascinant et extrêmement ambigu. Possesseur d\'un pendentif appelé la Béhélit ou l\'Œuf du Conquérant, Griffith est animé d\'une ambition surnaturelle. La série animée (reprenant les 13 premiers volumes du manga) débute par un flash-back qui durera tout au long des 25 épisodes : il s\'agit de l\'histoire de la rencontre de Guts, héros tourmenté, et de Griffith, chef de la Brigade des Faucons, une bande de mercenaires à la solde de l\'Empire de Midland. De cette rencontre naîtra une amitié ambiguë, mais néanmoins efficiente : la présence de Guts, guerrier à l\'épée démesurée, se révélera vite indispensable à l\'ambition du jeune Griffith, bretteur et tacticien hors-pair. On découvre au fur et à mesure de l\'anime, la relation entre Guts et Griffith, particulièrement complexe, entre relation d\'intérêt (Griffith utilise la force de Guts), respect mutuel (les deux se considèrent mutuellement en tant que soldats), et affection profonde (chacun a besoin de la présence de l\'autre de façon inexplicable). Particulièrement crue, la série animée l\'est pourtant moins que le manga qui se montre sans concession dans sa façon de présenter les choses : la pédophilie, l\'homosexualité, l\'infanticide, l\'inceste, le viol et les nombreux massacres renvoient une image particulièrement sombre de l\'âme humaine. En filigrane apparaît donc une réflexion sur l\'homme, partagée entre sa monstruosité (Les monstres étant une représentation physique de la part d\'ombre qui sommeil en chaque homme), sa violence (le monde de berserk est un monde ravagé par plusieurs guerres), son ambition (illustré à merveille par le rêve de Griffith), ses désirs (notamment sexuels), et la volonté inhérente à tous de rechercher à faire le bien, et ce parfois au détriment des autres.',2,20),(22,'blacktorch.jpg','Black Torch',3.83,9,'Avril',2017,'En tant que descendant des shinobi, Jirou Azuma a passé sa vie à apprendre des techniques ninja. Mais en plus il a le don de parler aux animaux. Un jour, il sauve un étrange chat appelé Ragou, il lui apprend que le monde est rempli d\'esprits qui peuvent prendre la forme d\'un humain ou d\'un animal : les Mononoke. Cependant, leur rencontre est interrompue quand ils sont attaqués par un Mononoke hostile qui en a après Ragou et ses pouvoirs.',2,21),(23,'fireforce.webp','Fire Force',4.23,23,'Septembre',2015,'Le monde est horrifié par le phénomène de combustion humaine où l\'humanité peut s\'enflammer à tout moment. Des brigades spéciales Fire Force ont donc été créées avec pour mission d\'éclaircir le mystère de ce phénomène. On suit ainsi le jeune Shinra Kusakabe, surnommé le Démon, qui vient d\'intégrer la 8e brigade dans le seul but de devenir un héros et de connaitre la vérité sur l\'incendie qui a coûté la vie de sa famille il y a douze ans !',2,22),(24,'drstone.png','Dr Stone',4.46,6,'Mars',2017,'Un jour, une lumière brillante apparaît subitement dans le ciel pétrifiant en une fraction de seconde l\'humanité entière. Des millénaires plus tard, Taiju parvient à briser son enveloppe de pierre et découvre un monde où le genre humain a disparu de la surface de la terre. Avec son ami Senku, ils décident de récréer la civilisation à partir de zéro !',2,23),(25,'haikyu.jpg','Haikyu',4.16,20,'Février',2012,'Shôyô Hinata, surnommé Shô, aime plus que tout jouer au volley-ball et ce, malgré sa petite taille. Malheureusement, suite à une sévère défaite, son club de collège a été dissous, tous les membres étant partis. Mais Shôyo est bien décidé à jouer de nouveau et choisit son futur lycée en fonction de son ambition. Il intègre donc le lycée Karasuno, où a joué son idole, le Petit Géant, tout en espérant faire aussi bien que lui.',2,24),(26,'hells.jpg','Hell\'s Paradise',4.46,22,'Janvier',2018,'Gabimaru, « Le Vide », le plus célèbre et puissant des ninjas-assassins a été capturé et croupit en prison. Affirmant n\'avoir plus aucune raison de vivre, il attend désespérément qu\'un bourreau parvienne à lui ôter la vie car son entraînement surhumain lui permet de résister aux pires des châtiments. C\'est alors qu\'il reçoit la visite d\'un exécuteur pas comme les autres : une puissante manieuse de sabre et trancheuse de tête. Après un âpre combats dont il réchappe de peu, celle-ci le pousse dans ses retranchements. En échange de la vie sauve, elle lui propose un marché : il devra se rendre sur une île mystérieuse afin de récupérer un élixir d\'immortalité. Seul problème : tous ceux qui se sont rendus sur cette île sont revenus découpés en morceaux...',2,25),(27,'bungou.jpg','Bungou Stray Dog',4.09,4,'Décembre',2012,'Atsushi Nakajima vient d\'être exclu de son orphelinat, maintenant il n\'a aucun endroit où aller et aucune nourriture. Tandis qu\'il se tient près d\'une rivière, étant sur le point de mourir de faim, il sauve un homme faisant une tentative de suicide. Cet homme est Osamu Dazai, lui et son partenaire Kunikida sont les membres d\'une agence policière très spéciale. Ils possèdent des pouvoirs surnaturels et traitent les cas d\'affaires qui sont trop dangereux pour la police ou l\'armée.',2,26);
/*!40000 ALTER TABLE `manga` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mangaGenre`
--

DROP TABLE IF EXISTS `mangaGenre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mangaGenre` (
  `id` int NOT NULL AUTO_INCREMENT,
  `manga_id` int NOT NULL,
  `genre_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_mangaGenre_manga` (`manga_id`),
  KEY `fk_mangaGenre_genre` (`genre_id`),
  CONSTRAINT `fk_mangaGenre_genre` FOREIGN KEY (`genre_id`) REFERENCES `genre` (`id`),
  CONSTRAINT `fk_mangaGenre_manga` FOREIGN KEY (`manga_id`) REFERENCES `manga` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mangaGenre`
--

LOCK TABLES `mangaGenre` WRITE;
/*!40000 ALTER TABLE `mangaGenre` DISABLE KEYS */;
/*!40000 ALTER TABLE `mangaGenre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'admin'),(2,'user');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `hashedPassword` varchar(255) NOT NULL,
  `role_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `fk_user_role` (`role_id`),
  CONSTRAINT `fk_user_role` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Testeuse','testeuseweb2@free.com','$argon2id$v=19$m=65536,t=5,p=1$lJqiER/cEgIEb2ZtMuFjvA$pF+rbhjcnsXsx88Mifvq2auuDKUgee6dcevl3AN7KyA',1),(2,'Cassandra','cassandra@free.com','$argon2id$v=19$m=65536,t=5,p=1$m6mIGgxArJRgNctY+bkc6Q$mJh5fRBSy/uGKvLkpHjlYNEnzTYPgtiraKngFimMl5o',2);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-21  9:02:50
