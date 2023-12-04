-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-12-2023 a las 21:36:17
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sexto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `computadoras`
--

CREATE TABLE `computadoras` (
  `id_compu` int(11) NOT NULL,
  `marca` varchar(200) NOT NULL,
  `procesador` varchar(200) NOT NULL,
  `espacio` varchar(200) NOT NULL,
  `ram` varchar(100) NOT NULL,
  `grafica` varchar(100) NOT NULL,
  `precio` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `computadoras`
--

INSERT INTO `computadoras` (`id_compu`, `marca`, `procesador`, `espacio`, `ram`, `grafica`, `precio`) VALUES
(1, 'lenovo', 'ryzen 3000', '500 gb ssd', '16 ram ddr4', 'no posee', 255),
(22, 'Dell', 'Intel', '25 gb', '25gb', 'ninguna', 600),
(26, 'HP', 'Intel i7', '500gb', '16 gb', '1060', 600),
(28, 'lenovo', 'i9 10000k', '2tb', '32gb', '4090 ti', 1124);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `UsuarioId` int(11) NOT NULL,
  `Cedula` varchar(17) NOT NULL,
  `Nombres` varchar(100) NOT NULL,
  `Apellidos` varchar(100) NOT NULL,
  `Telefono` varchar(17) NOT NULL,
  `Correo` varchar(150) NOT NULL,
  `Contrasenia` text NOT NULL,
  `Rol` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`UsuarioId`, `Cedula`, `Nombres`, `Apellidos`, `Telefono`, `Correo`, `Contrasenia`, `Rol`) VALUES
(1, '1721664090', 'Cristian', 'Defaz', '0995583271', 'cristiandefaz191@gmail.com', '1234', 'Administrador'),
(2, '1715395479', 'Bairon', 'Defaz', '0983064678', 'crisferk.2004@gmail.com', '1234', 'Vendedor'),
(6, '1720713112', 'Elena', 'Santana', '0983064678', 'crisferd.2004@gmail.com', '1234', 'Gerente');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `computadoras`
--
ALTER TABLE `computadoras`
  ADD PRIMARY KEY (`id_compu`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`UsuarioId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `computadoras`
--
ALTER TABLE `computadoras`
  MODIFY `id_compu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `UsuarioId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
