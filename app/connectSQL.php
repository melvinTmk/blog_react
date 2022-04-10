<?php
	try {
		$pdo = new PDO("mysql:host=db;dbname=data", "root", "password");
		return $pdo;
	} catch (Exception $e) {
		die('Erreur : '.$e->getMessage());
		return "error";
	}
?>	