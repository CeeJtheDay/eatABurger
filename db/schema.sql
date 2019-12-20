CREATE database burgers_DB;

USE burgers_DB;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  devoured BOOLEAN  NOT NULL default 0,
  PRIMARY KEY (id)
);



