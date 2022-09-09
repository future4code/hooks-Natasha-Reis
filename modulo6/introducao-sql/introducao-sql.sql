USE `hooks-4313505-natasha-reis`; 
SET SQL_SAFE_UPDATES = 0;

CREATE TABLE Funcionarios (
 id VARCHAR(10) PRIMARY KEY,
 nome VARCHAR(255) NOT NULL,
 email VARCHAR(255) NOT NULL UNIQUE
);

INSERT INTO Funcionarios (id, nome, email)
VALUES ('001', 'Luana','lua@lbn.com'),
 ('002', 'Vinicius','vini@lbn.com'),
 ('003', 'Laura','lau@lbn.com');
 
 SELECT * from Funcionarios;
 
 SELECT id AS identifier, nome from Funcionarios;
 
 SELECT * from Funcionarios WHERE id = '003';
 
 SELECT * from Funcionarios WHERE nome LIKE '%a%';
 
SELECT * from Funcionarios WHERE nome NOT LIKE '%r%' AND email LIKE '%u%';

INSERT INTO Funcionarios (id, nome, email)
VALUES ('004', 'Yuzo','yuzo@lbn.com');
  
DELETE FROM Funcionarios WHERE id = '004';