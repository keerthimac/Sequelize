CREATE DATABASE codegig;
--@block
USE codegig;
--@block
CREATE TABLE gigs(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR (200),
    technologies VARCHAR(200),
    description TEXT,
    budget VARCHAR(20),
    contact_email VARCHAR(50),
    created_at DATE,
    updated_at DATE
);
--@BLOCK
ALTER TABLE gigs DROP COLUMN techknowlogies;
--@BLOCK
ALTER TABLE gigs
ADD COLUMN technologies VARCHAR(20);
--@BLOCK
ALTER TABLE gigs DROP COLUMN discription;
--@BLOCK
ALTER TABLE gigs
ADD COLUMN description TEXT;