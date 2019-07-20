DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE BAMAZON_DB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL NOT NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Patron", "Liquor", 50, 28);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sam Adams", "Beer", 5.50, 170);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Harshey", "Chocolate", 3.25, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dirol", "Grocery", 1.25, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Smirnoff", "Liquor", 42, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Godiva", "Chocolate", 9, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ketel One", "Liquor", 35, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jameson", "Liquor", 28.25, 75);