<?php
// Sanitizes and validates user login data.
session_start();

require_once 'Classes/Dao.php';
require_once 'Classes/KLogger.php';

$dao = new Dao();
$log = new KLogger("tmp/log.txt", KLogger::DEBUG);

// Sanitize input data
$_SESSION['userName'] = htmlentities($_POST['userName']);
$_SESSION['userEmail'] = htmlentities($_POST['userEmail']);
$_SESSION['userPassword'] = htmlentities($_POST['userPassword']);
// $_SESSION['userAccess'] = htmlentities($_POST['userAccess']);    // TODO:  Add when 'admin' interface added ...


// if loginState != LOGGED_OUT, proceed, else redirect to index.php
if($_SESSION['loginState'] != $_SESSION['LOGGED_OUT']) {
    if($dao->addUser($_SESSION['userName'], $_SESSION['userPassword'], $_SESSION['userEmail'])) {
        $_SESSION['loginState'] = $_SESSION['SUCCESS'];
    } else {
        $log->LogDebug("addUser: New user add failed.");
        $_SESSION['loginState'] = $_SESSION['ADD_FAILED'];
    }
    $log->LogDebug("------------------");

    header("Location:JoinForm.php");
} else {
    header("Location:index.php");
}
exit;





