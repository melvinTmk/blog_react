<?php

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Origin, Content-Type , authorization');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');


$username = isset($_POST['username']) ? $_POST['username'] : NULL;
$password = isset($_POST['password']) ? $_POST['password'] : NULL;

if ( $username!= NULL AND $password!= NULL ) {
    if(!verif_exist($username, $password)) {
        //Creer un Utilisateur
        $add_response = add_user($username,$password);
        echo json_encode([
            'username'=> $add_response['username'], 
            'passwords'=> $add_response['passwords'], 
            'token'=> $add_response['token']
        ]);
        return true;
    } else {
        echo json_encode([
            'error'=> 'utilisateur déjà enregistré'
        ]);
        return false;
    }
} else {
    echo json_encode([
        'error'=> 'Infos manquantes dans POST'
    ]);
    return false;
}

function add_user($user,$pass){
    $token = bin2hex(random_bytes(20));
    $sql = "	INSERT INTO `utilisateur` (`id`, `username`, `password`, `token`) 
                VALUES (NULL, :username, :passwords, :token)
            ";
    
    require('../connectSQL.php');
    $enregistre = $pdo->prepare($sql);
    $enregistre->bindParam(":username", $user);
    $enregistre->bindParam(":passwords", $pass);
    $enregistre->bindParam(":token", $token);
    $enregistre->execute();

    return ['username'=> $user, 'passwords'=> $pass, 'token'=> $token];
}
function verif_exist($user, $pass) {
    $sql="SELECT * FROM `utilisateur` WHERE username=:username AND password=:passwords";
    try {
        require('../connectSQL.php');
        $commande = $pdo->prepare($sql);
        $commande->bindParam(':username', $user);
        $commande->bindParam(':passwords', $pass);
        $bool = $commande->execute();
        if ($bool) {
            $resultat = $commande->fetchAll(PDO::FETCH_ASSOC); 
        }
    }
    catch (PDOException $e) {
        echo utf8_encode("Echec de select : " . $e->getMessage() . "\n");
        die();
    }		

    if(count($resultat) == 0) {
        return false;
    } else {
        return true;
    } 
}


?>