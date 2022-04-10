<?php

require('../Headers.php');

get_post();
echo json_encode([
    'post'=> get_post(),
]);

function get_post() {
    $sql="SELECT * FROM `post`";
    try {
        require('../connectSQL.php');
        $commande = $pdo->prepare($sql);
        $commande->execute();
        $posts = array();

        while ($row = $commande->fetch(PDO::FETCH_ASSOC)) {
            array_push($posts, $row);
        };
        return $posts;
    } catch (\Exception $e) {
        echo utf8_encode("Echec de select : " . $e->getMessage() . "\n");
        die();
    } 
}


?>