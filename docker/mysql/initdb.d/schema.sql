-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema tyoto_todo
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema tyoto_todo
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `tyoto_todo` DEFAULT CHARACTER SET utf8 ;
SHOW WARNINGS;
USE `tyoto_todo` ;

-- -----------------------------------------------------
-- Table `tyoto_todo`.`timestamps`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tyoto_todo`.`timestamps` (
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL);

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `tyoto_todo`.`todos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tyoto_todo`.`todos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` TEXT NULL,
  `detail` TEXT NULL,
  `create_timestamp` TIMESTAMP NULL,
  `update_timestamp` TIMESTAMP NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SHOW WARNINGS;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
