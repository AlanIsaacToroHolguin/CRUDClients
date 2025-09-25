CREATE DATABASE clientes;

USE clientes;

CREATE TABLE clientes (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    telefono VARCHAR(15),
    direccion TEXT,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO clientes (nombre, email, telefono, direccion) VALUES
('Juan Pérez', 'juanperez@example.com', '3001234567', 'Calle 123 #45-67'),
('María Gómez', 'mariagomez@example.com', '3019876543', 'Carrera 10 #20-30'),
('Carlos López', 'carloslopez@example.com', '3024567890', 'Avenida 15 #50-40');
