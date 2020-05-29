-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-05-2020 a las 12:36:09
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prueba_laravel_react`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf16_spanish2_ci NOT NULL,
  `referencia` varchar(100) COLLATE utf16_spanish2_ci NOT NULL,
  `precio` int(11) NOT NULL,
  `peso` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `fecha_creacion` varchar(100) COLLATE utf16_spanish2_ci NOT NULL,
  `fecha_actualizacion` varchar(100) COLLATE utf16_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish2_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `nombre`, `referencia`, `precio`, `peso`, `stock`, `fecha_creacion`, `fecha_actualizacion`) VALUES
(2, 'Carros', 'crt-22', 2000000, 1000, 243, '0000-00-00', '0000-00-00 00:00:00'),
(6, 'camino', 'a', 1, 1, 1, '2020-05-28', '2020-05-28  06:43:12'),
(7, 'Zapatos', 'Convers', 90000, 21, 50000, '2020-05-28', '2020-05-28  06:46:31'),
(8, 'Camisas', 'Lacost', 70000, 24, 20, '2020-05-28', '2020-05-28  06:47:54'),
(9, 'Tenis nike', 'jaje', 1221, 21, 1212, '2020-05-28', '2020-05-28  06:48:30'),
(11, 'data', 'data', 22, 22, 22, '2020-05-29', '2020-05-29  04:11:01');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
