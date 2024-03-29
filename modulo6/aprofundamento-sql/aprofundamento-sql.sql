USE `hooks-4313505-natasha-reis`;
SET SQL_SAFE_UPDATES = 0;


CREATE TABLE Projetos (
 id VARCHAR(10) PRIMARY KEY,
 nome VARCHAR(255) NOT NULL,
 title VARCHAR(255) NOT NULL,
 date DATE NOT NULL 
);

INSERT INTO Projetos (id, nome, title, date )
VALUES ('001', 'LabeSky','LSy', '2023/10/05'),
 ('002', 'Labefy','LFy', '2024/01/06'),
 ('003', 'AstroZoom','AZm','2022/12/20');
 
 ALTER TABLE Projetos DROP COLUMN title;
 DESCRIBE Projetos;

ALTER TABLE Projetos CHANGE date dueDate DATE NOT NULL;
DESCRIBE Projetos;

ALTER TABLE Projetos ADD description VARCHAR(255);
DESCRIBE Projetos;

UPDATE Projetos SET description = "Projeto de sistema em nuvem da Labenu." WHERE id = '001';

UPDATE Projetos SET description = "Projeto de sistema de gerenciamento de músicas da Labenu." WHERE id = '002';

UPDATE Projetos SET description = "Projeto de rede de comunicação da Labenu." WHERE id = '003';

SELECT * FROM Projetos ORDER BY dueDate DESC;

SELECT nome, dueDate FROM Projetos ORDER BY dueDate ASC LIMIT 0,2;



