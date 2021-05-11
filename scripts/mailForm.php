<?php
session_start();
    mb_internal_encoding("utf-8");
    $vypis = "";
    $spamCheck = isset($_POST['spam-checked'])? htmlspecialchars($_POST['spam-checked']):"";
    $email = isset($_POST['contact-email'])? htmlspecialchars($_POST['contact-email']):"";
    $zprava = isset($_POST['contact-content'])? htmlspecialchars($_POST['contact-content']):"";
    $email = (!filter_var($email, FILTER_VALIDATE_EMAIL))?"":$email;
    if($_POST){
        if($email && $zprava && $spamCheck)
            {
                $vypis = "ok";
                $hlavicka = 'From:' . $_POST['contact-email'];
                $hlavicka .= "\nMIME-Version: 1.0\n";
                $hlavicka .= "Content-Type: text/html; charset=\"utf-8\"\n";
                $adresa = "lukaskrbec@lukaskrbec.com";
                $predmet = "Nova zprava z lukaskrbec.com";
                $odeslano = mb_send_mail($adresa, $predmet, $_POST['contact-content'], $hlavicka);
                if($odeslano){
                    $vypis = ($_POST["contact-language"]=="cz")?"odesláno":"send";
                    $_SESSION["odeslano"] = True;
                    $_SESSION["contact-language"] = $_POST["contact-language"];
                    $_SESSION["vypis"] = $vypis;
                    header('Location: ../index.php');
                    exit;
                }
            }
    }
    $vypis = ($_POST["contact-language"]=="cz")?"neodesláno":"not send";
    $_SESSION["odeslano"] = false;
    $_SESSION["contact-language"] = $_POST["contact-language"];
    $_SESSION["vypis"] = $vypis;
    header('Location: ../index.php');
    exit;

?>