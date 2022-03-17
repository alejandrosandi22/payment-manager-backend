CREATE DATABASE clients

CREATE TABLE clients(
  id INT PRIMARY KEY UNIQUE,
  name VARCHAR(255) NOT NULL,
  payment INT
  date Date
);